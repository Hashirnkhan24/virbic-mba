// components/specializations/SpecializationDetails.tsx
"use client";

import { Specialization } from "@/lib/specializations";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Briefcase,
	TrendingUp,
	Users,
	BarChart3,
	Award,
	AlertTriangle,
	Lightbulb,
	Target,
	Clock,
	FileText,
	Building,
	BriefcaseBusiness,
	Globe,
	Sparkles,
} from "lucide-react";

interface Props {
	data: Specialization;
	view: "overview" | "career" | "market";
}

export default function SpecializationDetails({ data, view }: Props) {
	const formatWorkNature = (value: string) => {
		const map: Record<string, string> = {
			HIGH: "Very High",
			Medium: "Moderate",
			Low: "Low",
		};
		return map[value] || value;
	};

	const formatLabel = (key: string) =>
		key.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase());

	if (view === "overview") {
		return (
			<div className="space-y-10 md:space-y-14">
				{/* Description & Focus Statement */}
				<section className="prose prose-slate dark:prose-invert max-w-none">
					<h2 className="text-2xl md:text-3xl text-blue-600 font-bold capitalize align-middle text-center mb-4 md:mb-8">
						{data.name} Overview
					</h2>
					<p className="text-base md:text-lg leading-relaxed text-muted-foreground text-justify">
						{data.overview.description}
					</p>
					<p className="mt-5 font-medium italic text-blue-600/90 dark:text-blue-400/90 text-lg text-center">
						{data.overview.focusStatement}
					</p>
				</section>

				{/* Key Highlights */}
				<section>
					<h3 className="text-xl md:text-2xl font-semibold mb-5">
						Key Highlights
					</h3>
					<div className="grid gap-4 sm:grid-cols-2">
						{data.overview.keyPoints.map((point, i) => (
							<div
								key={i}
								className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-slate-50 to-white dark:from-slate-900/50 dark:to-slate-900/30 border border-slate-200/70 dark:border-slate-700/50 hover:shadow-md transition-all duration-300"
							>
								<span className="text-indigo-500 dark:text-indigo-400 text-xl mt-0.5">
									•
								</span>
								<span className="text-sm md:text-base text-justify">
									{point}
								</span>
							</div>
						))}
					</div>
				</section>

				{/* Core Focus Areas */}
				<section>
					<h3 className="text-xl md:text-2xl font-semibold mb-5">
						Core Focus Areas
					</h3>
					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{data.coreFocusAreas.map((area, i) => (
							<Card
								key={i}
								className="border-slate-200 dark:border-slate-700 hover:shadow-md hover:scale-[1.01] transition-all duration-300"
							>
								<CardContent className="pt-5 pb-5 text-sm md:text-base text-center">
									{area}
								</CardContent>
							</Card>
						))}
					</div>
				</section>

				{/* Best Suited For */}
				<section>
					<h3 className="text-xl md:text-2xl font-semibold mb-5 flex items-center gap-3">
						<Users className="h-6 w-6 text-indigo-500" /> Best Suited For
					</h3>
					<div className="grid gap-4 sm:grid-cols-2">
						{data.bestSuitedFor.map((trait, i) => (
							<div
								key={i}
								className="p-5 rounded-xl bg-gradient-to-br from-slate-50 to-white dark:from-slate-900/40 dark:to-slate-900/20 border border-slate-200/70 dark:border-slate-700/50 hover:shadow-sm transition-shadow text-sm md:text-base text-justify"
							>
								{trait}
							</div>
						))}
					</div>
				</section>

				{/* Work Nature */}
				<section>
					<h3 className="text-xl md:text-2xl font-semibold mb-6 flex items-center gap-3">
						<BarChart3 className="h-6 w-6 text-purple-500" /> Work Nature
					</h3>

					<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
						{Object.entries(data.workNature)
							.filter(([key]) => key !== "workHours")
							.map(([key, value]) => (
								<div
									key={key}
									className="flex flex-col justify-center items-center text-center p-5 rounded-xl bg-gradient-to-br from-slate-50 to-white dark:from-slate-900/50 dark:to-slate-900/30 border border-slate-200/70 dark:border-slate-700/50 hover:shadow-md transition-all min-h-[110px]"
								>
									<div className="text-xs text-muted-foreground mb-2 tracking-wide uppercase">
										{formatLabel(key)}
									</div>
									<div className="font-semibold text-base md:text-lg">
										{formatWorkNature(value)}
									</div>
								</div>
							))}

						{/* Typical Hours */}
						<div className="flex flex-col justify-center items-center text-center p-5 rounded-xl bg-gradient-to-br from-indigo-50/60 to-purple-50/40 dark:from-indigo-950/30 dark:to-purple-950/20 border border-indigo-200/60 dark:border-indigo-800/40 hover:shadow-md transition-all min-h-[110px]">
							<div className="text-xs text-muted-foreground mb-2 tracking-wide uppercase">
								Typical Hours
							</div>
							<div className="font-semibold text-base md:text-lg">
								{data.workNature.workHours}
							</div>
						</div>
					</div>
				</section>

				{/* Typical Work Style */}
				<section className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-indigo-50/50 to-purple-50/30 dark:from-indigo-950/30 dark:to-purple-950/20 border border-indigo-100/50 dark:border-indigo-900/30">
					<h3 className="text-xl md:text-2xl font-semibold mb-4">
						Typical Work Style
					</h3>
					<p className="text-muted-foreground leading-relaxed text-sm md:text-base text-justify">
						{data.typicalWorkStyle}
					</p>
				</section>
			</div>
		);
	}

	if (view === "career") {
		return (
			<div className="space-y-10 md:space-y-14">
				{/* Salary Progression */}
				<section>
					<h2 className="text-2xl md:text-3xl text-teal-600 font-bold capitalize align-middle text-center mb-4 md:mb-8">
						<TrendingUp className="h-7 w-7" /> Salary Progression (India)
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
						<Card className="border-emerald-200 dark:border-emerald-800/50 hover:shadow-lg transition-shadow">
							<CardHeader className="pb-2">
								<CardTitle className="text-lg">Entry Level</CardTitle>
							</CardHeader>
							<CardContent className="space-y-2 text-sm md:text-base text-center">
								<div>
									<span className="font-medium text-emerald-700 dark:text-emerald-300">
										Tier 2/3:
									</span>
									<br />
									{data.salary.entryLevel.tier2_3}
								</div>
								<div>
									<span className="font-medium text-emerald-700 dark:text-emerald-300">
										Top Campuses:
									</span>
									<br />
									{data.salary.entryLevel.topCampuses}
								</div>
							</CardContent>
						</Card>

						{["midLevel", "seniorLevel", "executiveLevel"].map((level) => (
							<Card key={level} className="hover:shadow-lg transition-shadow">
								<CardHeader className="pb-2">
									<CardTitle className="text-lg capitalize">
										{level.replace("Level", " Level")}
									</CardTitle>
								</CardHeader>
								<CardContent className="text-center">
									<p className="font-semibold text-base md:text-lg">
										{data.salary[level as keyof typeof data.salary] as string}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</section>

				{/* Career Progression */}
				<section>
					<h3 className="text-xl md:text-2xl font-semibold mb-6 flex items-center gap-3">
						<Briefcase className="h-6 w-6 text-indigo-500" /> Career Progression
						Path
					</h3>
					<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
						{Object.entries(data.careerProgression).map(([stage, title]) => (
							<div
								key={stage}
								className="p-4 rounded-xl bg-gradient-to-br from-indigo-50/50 to-purple-50/30 dark:from-indigo-950/30 dark:to-purple-950/20 border border-indigo-100/50 dark:border-indigo-900/30 hover:shadow-md transition-all"
							>
								<div className="text-xs uppercase text-muted-foreground mb-2">
									{stage}
								</div>
								<div className="font-medium text-sm md:text-base">{title}</div>
							</div>
						))}
					</div>
				</section>

				{/* Typical Responsibilities */}
				<section>
					<h3 className="text-xl md:text-2xl font-semibold mb-6 flex items-center gap-3">
						<Target className="h-6 w-6 text-purple-500" /> Typical
						Responsibilities
					</h3>
					<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
						{data.typicalResponsibilities.map((resp, i) => (
							<div
								key={i}
								className="group p-5 rounded-xl bg-gradient-to-br from-slate-50 to-white dark:from-slate-900/40 dark:to-slate-900/20 border border-slate-200/70 dark:border-slate-700/50 hover:shadow-md hover:scale-[1.015] transition-all duration-300 flex items-start gap-4"
							>
								<div className="flex-shrink-0 mt-1">
									<FileText className="h-5 w-5 text-indigo-500 dark:text-indigo-400" />
								</div>
								<p className="text-sm md:text-base leading-relaxed text-justify">
									{resp}
								</p>
							</div>
						))}
					</div>
				</section>

				{/* Certifications */}
				{data.certifications.length > 0 && (
					<section>
						<h3 className="text-xl md:text-2xl font-semibold mb-6 flex items-center gap-3">
							<Award className="h-6 w-6 text-amber-500" /> Valuable
							Certifications
						</h3>
						<div className="flex flex-wrap gap-3 justify-center">
							{data.certifications.map((cert) => (
								<Badge
									key={cert}
									variant="outline"
									className="text-sm md:text-base py-1.5 px-4 border-indigo-200 dark:border-indigo-800/50 bg-indigo-50/30 dark:bg-indigo-950/30 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-colors"
								>
									{cert}
								</Badge>
							))}
						</div>
					</section>
				)}
			</div>
		);
	}

	// MARKET VIEW
	return (
		<div className="space-y-10 md:space-y-14">
			{/* Market Outlook */}
			<section>
				<h2 className="text-2xl md:text-3xl text-indigo-600 font-bold capitalize align-middle text-center mb-4 md:mb-8">
					<BarChart3 className="h-7 w-7" /> Market Outlook
				</h2>

				<div className="grid gap-5 sm:grid-cols-3">
					{Object.entries(data.marketOutlook).map(([key, value]) => (
						<Card
							key={key}
							className="hover:shadow-lg transition-shadow border-blue-200 dark:border-blue-800/50"
						>
							<CardHeader className="pb-2">
								<CardTitle className="text-base md:text-lg capitalize text-center">
									{key.replace(/([A-Z])/g, " $1")}
								</CardTitle>
							</CardHeader>
							<CardContent className="text-center">
								<p className="text-lg md:text-xl font-semibold">{value}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</section>

			{/* Industries */}
			<section>
				<h3 className="text-xl md:text-2xl font-semibold mb-5 flex items-center gap-3">
					<Building className="h-6 w-6 text-teal-500" /> Key Industries
				</h3>
				<div className="flex flex-wrap gap-2.5 justify-center">
					{data.industries.map((ind) => (
						<Badge
							key={ind}
							variant="outline"
							className="text-xs md:text-sm py-1.5 px-3 border-teal-200 dark:border-teal-800/50 bg-teal-50/30 dark:bg-teal-950/30 hover:bg-teal-100 dark:hover:bg-teal-900/40 transition-colors"
						>
							{ind}
						</Badge>
					))}
				</div>
			</section>

			{/* Top Recruiters */}
			<section>
				<h3 className="text-xl md:text-2xl font-semibold mb-5 flex items-center gap-3">
					<BriefcaseBusiness className="h-6 w-6 text-indigo-500" /> Top
					Recruiters
				</h3>
				<div className="flex flex-wrap gap-2.5 justify-center">
					{data.recruiters.slice(0, 20).map((rec) => (
						<Badge
							key={rec}
							variant="secondary"
							className="text-xs md:text-sm py-1 px-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
						>
							{rec}
						</Badge>
					))}
					{data.recruiters.length > 20 && (
						<Badge variant="outline" className="text-xs md:text-sm py-1 px-3">
							+{data.recruiters.length - 20} more
						</Badge>
					)}
				</div>
			</section>

			{/* Industry Trends */}
			<section>
				<h3 className="text-xl md:text-2xl font-semibold mb-5 flex items-center gap-3">
					<Sparkles className="h-6 w-6 text-amber-500" /> Industry Trends
				</h3>
				<div className="grid gap-4 sm:grid-cols-2">
					{data.industryTrends.map((trend, i) => (
						<div
							key={i}
							className="p-4 rounded-xl bg-gradient-to-r from-amber-50/70 to-yellow-50/40 dark:from-amber-950/30 dark:to-yellow-950/20 border border-amber-200/50 dark:border-amber-800/30 text-sm md:text-base text-justify"
						>
							{trend}
						</div>
					))}
				</div>
			</section>

			{/* Challenges & Opportunities */}
			<div className="grid md:grid-cols-2 gap-8">
				<section>
					<h3 className="text-xl md:text-2xl font-semibold mb-5 flex items-center gap-3">
						<AlertTriangle className="h-6 w-6 text-red-500" /> Key Challenges
					</h3>
					<div className="space-y-4">
						{data.challenges.map((ch, i) => (
							<div
								key={i}
								className="p-4 rounded-xl bg-gradient-to-r from-red-50/70 to-rose-50/40 dark:from-red-950/30 dark:to-rose-950/20 border border-red-200/50 dark:border-red-800/30 text-sm md:text-base text-justify"
							>
								{ch}
							</div>
						))}
					</div>
				</section>

				<section>
					<h3 className="text-xl md:text-2xl font-semibold mb-5 flex items-center gap-3">
						<Lightbulb className="h-6 w-6 text-green-500" /> Opportunities
					</h3>
					<div className="space-y-4">
						{data.opportunities.map((opp, i) => (
							<div
								key={i}
								className="p-4 rounded-xl bg-gradient-to-r from-green-50/70 to-emerald-50/40 dark:from-green-950/30 dark:to-emerald-950/20 border border-green-200/50 dark:border-green-800/30 text-sm md:text-base text-justify"
							>
								{opp}
							</div>
						))}
					</div>
				</section>
			</div>
		</div>
	);
}
