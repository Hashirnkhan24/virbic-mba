"use client";

import {
	Chart as ChartJS,
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend,
} from "chart.js";

ChartJS.register(
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend
);

interface RoleData {
	name: string;
	specialization: string;
	roleLevel: string;
	entryBarrier: number | null;
	brandValue: number | null;
	switchability: number | null;
	stressLevel: string | null;
	averageWorkHoursPerWeek: string | null;
	futureRelevanceScore: number | null;
	whatThisRoleDoes: string;
	whyCompaniesHire?: string | null;
	sector: string | string[] | null;
	responsibilities: string | string[] | null;
	kpis: string | string[] | null;
	top5Companies: string | string[] | null;
	suitsYouIf: string | string[] | null;
	avoidIf: string | string[] | null;
	learningCurveDifficulty: number | null;
	years0_2_Title: string | null;
	years0_2_Salary: string | null;
	years3_5_Title: string | null;
	years3_5_Salary: string | null;
	years6_10_Title: string | null;
	years6_10_Salary: string | null;
	years10_plus_Title: string | null;
	years10_plus_Salary: string | null;
}

const parseData = (data: string | string[] | null | undefined): string[] => {
	if (!data) return [];
	if (Array.isArray(data)) return data;
	if (typeof data === "string") {
		try {
			const parsed = JSON.parse(data);
			return Array.isArray(parsed) ? parsed : [parsed];
		} catch {
			return data
				.split(",")
				.map((item) => item.trim())
				.filter(Boolean);
		}
	}
	return [];
};

interface RibbonStatProps {
	label: string;
	value: string | number | null | undefined;
	color?: string;
}

function RibbonStat({
	label,
	value,
	color = "text-slate-900 dark:text-slate-100",
}: RibbonStatProps) {
	return (
		<div className="p-4 text-center">
			<p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase mb-1 tracking-wider">
				{label}
			</p>
			<p className={`text-sm font-bold truncate ${color}`}>{value ?? "—"}</p>
		</div>
	);
}

interface SectionProps {
	title: string;
	children: React.ReactNode;
}

function Section({ title, children }: SectionProps) {
	return (
		<div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
			<h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-5 flex items-center gap-2 uppercase tracking-wide">
				<span className="w-1 h-4 bg-indigo-500 rounded-full" />
				{title}
			</h3>
			{children}
		</div>
	);
}

interface CareerNodeProps {
	stage: string;
	years: string;
	title: string | null;
	salary: string | null;
	isLast?: boolean;
}

function CareerNode({
	stage,
	years,
	title,
	salary,
	isLast = false,
}: CareerNodeProps) {
	return (
		<div
			className={`space-y-2 ${
				!isLast ? "md:border-r border-slate-200 dark:border-slate-800" : ""
			} pb-6 sm:pb-0 sm:px-4 relative`}
		>
			<div className="flex items-center gap-2 mb-1">
				<div className="w-2 h-2 rounded-full bg-indigo-500" />
				<p className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
					{stage} • {years}Y
				</p>
			</div>
			<p className="text-base font-bold text-slate-800 dark:text-slate-100 leading-tight min-h-10">
				{title || "—"}
			</p>
			<div className="pt-2">
				<p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">
					Est. Compensation
				</p>
				<p className="text-sm text-slate-900 dark:text-slate-300 font-semibold">
					{salary ? `₹${salary}` : "—"}
				</p>
			</div>
		</div>
	);
}

export default function RoleDetails({ role }: { role: RoleData }) {
	const sectors = parseData(role.sector);
	const responsibilities = parseData(role.responsibilities);
	const kpis = parseData(role.kpis);
	const companies = parseData(role.top5Companies);
	const suitsYouIf = parseData(role.suitsYouIf);
	const avoidIf = parseData(role.avoidIf);

	return (
		<div className="mx-auto max-w-6xl px-4 py-8 space-y-8 antialiased text-slate-900 dark:text-slate-100 dark:bg-slate-950 transition-colors duration-300">
			{/* 1. HEADER & TOP DATA RIBBON */}
			<div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden">
				<div className="p-6 border-b border-slate-100 dark:border-slate-800">
					<div className="flex flex-col sm:flex-row justify-between items-start gap-4">
						<div>
							<h1 className="text-3xl font-bold tracking-tight">{role.name}</h1>
							<div className="flex flex-wrap gap-2 mt-2">
								{sectors.map((s, i) => (
									<span
										key={i}
										className="text-xs font-semibold px-2 py-0.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded"
									>
										{s}
									</span>
								))}
							</div>
						</div>
						<div className="sm:text-right">
							<p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
								{role.specialization}
							</p>
							<p className="text-xs text-slate-400 dark:text-slate-500 font-medium">
								{role.roleLevel}
							</p>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 divide-x divide-y sm:divide-y-0 divide-slate-100 dark:divide-slate-800 bg-slate-50/50 dark:bg-slate-950/30">
					<RibbonStat
						label="Entry Barrier"
						value={`${role.entryBarrier ?? "—"}/10`}
						color="text-amber-600 dark:text-amber-500"
					/>
					<RibbonStat
						label="Brand Value"
						value={`${role.brandValue ?? "—"}/10`}
						color="text-emerald-600 dark:text-emerald-500"
					/>
					<RibbonStat
						label="Switchability"
						value={`${role.switchability ?? "—"}/10`}
						color="text-blue-600 dark:text-blue-400"
					/>
					<RibbonStat label="Stress Level" value={role.stressLevel} />
					<RibbonStat label="Work Hours" value={role.averageWorkHoursPerWeek} />
					<RibbonStat
						label="Future Proof"
						value={`${role.futureRelevanceScore ?? "—"}/10`}
					/>
				</div>
			</div>

			{/* 2. CORE CONTENT SPLIT */}
			<div className="grid lg:grid-cols-3 gap-8">
				<div className="lg:col-span-2 space-y-8">
					<Section title="Inside the Role">
						<div className="space-y-4">
							<div>
								<h4 className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase mb-2 tracking-widest">
									The Mission
								</h4>
								<p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
									{role.whatThisRoleDoes}
								</p>
							</div>
							{role.whyCompaniesHire && (
								<div className="pt-4 border-t border-slate-100 dark:border-slate-800">
									<h4 className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase mb-2 tracking-widest">
										Commercial Value
									</h4>
									<p className="text-sm text-slate-600 dark:text-slate-400 italic leading-relaxed">
										&quot;{role.whyCompaniesHire}&quot;
									</p>
								</div>
							)}
						</div>
					</Section>

					<div className="grid md:grid-cols-2 gap-6">
						<Section title="Key Responsibilities">
							<ul className="space-y-3">
								{responsibilities.map((r, i) => (
									<li
										key={i}
										className="text-sm text-slate-600 dark:text-slate-400 flex gap-2"
									>
										<span className="text-indigo-500 font-bold">•</span> {r}
									</li>
								))}
							</ul>
						</Section>

						<Section title="Performance Metrics (KPIs)">
							<ul className="space-y-3">
								{kpis.map((k, i) => (
									<li
										key={i}
										className="text-sm text-slate-600 dark:text-slate-400 flex gap-2"
									>
										<span className="text-emerald-500 font-bold">→</span> {k}
									</li>
								))}
							</ul>
						</Section>
					</div>
				</div>

				<div className="space-y-8">
					<Section title="Suitability Fit">
						<div className="space-y-6">
							<div>
								<h4 className="text-[10px] font-bold text-green-600 dark:text-green-400 uppercase mb-3 tracking-widest">
									Perfect If
								</h4>
								{suitsYouIf.map((item, i) => (
									<div
										key={i}
										className="text-xs bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 p-2.5 rounded-lg border border-green-100 dark:border-green-800/50 mb-2"
									>
										{item}
									</div>
								))}
							</div>

							<div>
								<h4 className="text-[10px] font-bold text-red-600 dark:text-red-400 uppercase mb-3 tracking-widest">
									Avoid If
								</h4>
								{avoidIf.map((item, i) => (
									<div
										key={i}
										className="text-xs bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300 p-2.5 rounded-lg border border-red-100 dark:border-red-800/50 mb-2"
									>
										{item}
									</div>
								))}
							</div>
						</div>
					</Section>

					<Section title="Hiring Giants">
						<div className="flex flex-wrap gap-2">
							{companies.map((c, i) => (
								<span
									key={i}
									className="text-xs font-medium px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full border border-slate-200 dark:border-slate-700"
								>
									{c}
								</span>
							))}
						</div>
					</Section>
				</div>
			</div>

			{/* 3. CAREER PROGRESSION */}
			<div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm transition-colors">
				<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
					<div>
						<h2 className="text-2xl font-bold italic">Career Trajectory</h2>
						<p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
							Growth and compensation roadmap
						</p>
					</div>
					<div className="bg-white dark:bg-slate-950 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800">
						<span className="text-[10px] text-slate-400 uppercase tracking-widest block">
							Difficulty
						</span>
						<span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
							{role.learningCurveDifficulty ?? "—"}/10
						</span>
					</div>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
					<CareerNode
						stage="Entry"
						years="0-2"
						title={role.years0_2_Title}
						salary={role.years0_2_Salary}
					/>
					<CareerNode
						stage="Mid"
						years="3-5"
						title={role.years3_5_Title}
						salary={role.years3_5_Salary}
					/>
					<CareerNode
						stage="Senior"
						years="6-10"
						title={role.years6_10_Title}
						salary={role.years6_10_Salary}
					/>
					<CareerNode
						stage="Lead"
						years="10+"
						title={role.years10_plus_Title}
						salary={role.years10_plus_Salary}
						isLast
					/>
				</div>
			</div>
		</div>
	);
}
