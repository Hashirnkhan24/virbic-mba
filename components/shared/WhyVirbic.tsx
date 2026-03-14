"use client";
import { Search, GitCompare, TrendingUp, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const features = [
	{
		title: "Understand Roles",
		description:
			"Go beyond titles. Decode the day-to-day realities, required skills, and hidden challenges of 290+ MBA roles.",
		icon: Search,
		color:
			"hover:border-pink-500/30 hover:bg-pink-50/50 dark:hover:border-pink-500/30 dark:hover:bg-pink-900/10",
		iconBg: "bg-pink-500",
	},
	{
		title: "Compare Career Paths",
		description:
			"Add multiple roles to your personal sandbox to visualize trade-offs in lifestyle, impact, and long-term trajectory.",
		icon: GitCompare,
		color:
			"hover:border-indigo-500/30 hover:bg-indigo-50/50 dark:hover:border-indigo-500/30 dark:hover:bg-indigo-900/10",
		iconBg: "bg-indigo-500",
	},
	{
		title: "Explore Career Growth",
		description:
			"Map your journey with data-backed salary progression, promotion timelines, and industry-specific benchmarks.",
		icon: TrendingUp,
		color:
			"hover:border-emerald-500/30 hover:bg-emerald-50/50 dark:hover:border-emerald-500/30 dark:hover:bg-emerald-900/10",
		iconBg: "bg-emerald-500",
	},
];

export default function WhyVirbic() {
	return (
		<section className="relative py-24 bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden min-h-[70vh] flex items-center">
			{/* Background Decorative Elements - Identical to HeroSection */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-indigo-500/5 blur-[120px] dark:bg-indigo-500/10" />
				<div className="absolute bottom-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-purple-500/5 blur-[120px] dark:bg-purple-600/10" />
			</div>

			<div className="relative max-w-7xl mx-auto px-6 w-full">
				{/* Section Header */}
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
						Why Virbic
					</h2>
					<p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
						Empowering your career journey with data-driven insights and
						clarity.
					</p>
				</div>

				{/* Features Grid */}
				<div className="grid md:grid-cols-3 gap-6 md:gap-8">
					{features.map((feature, idx) => {
						const Icon = feature.icon;
						return (
							<motion.div
								key={idx}
								whileHover={{ y: -8 }}
								className={`group flex flex-col p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 transition-all duration-300 hover:shadow-xl ${feature.color}`}
							>
								<div
									className={`w-12 h-12 mb-6 rounded-xl ${feature.iconBg} flex items-center justify-center text-white shadow-lg`}
								>
									<Icon size={24} />
								</div>
								<h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
									{feature.title}
								</h3>
								<p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed flex-grow">
									{feature.description}
								</p>
								<div className="flex items-center text-sm font-bold text-slate-900 dark:text-slate-300 group-hover:translate-x-1 transition-transform">
									Explore <ArrowRight size={16} className="ml-2" />
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
