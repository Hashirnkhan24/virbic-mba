"use client";

import Link from "next/link";
import {
	Megaphone,
	DollarSign,
	Cog,
	Handshake,
	Users,
	Laptop,
	ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import clsx from "clsx";

const specializations = [
	{
		name: "Marketing",
		icon: Megaphone,
		slug: "marketing",
		color:
			"hover:bg-pink-50 hover:text-pink-600 dark:hover:bg-pink-900/20 dark:hover:text-pink-300 dark:hover:border-pink-500/30",
	},
	{
		name: "Finance",
		icon: DollarSign,
		slug: "finance",
		color:
			"hover:bg-emerald-50 hover:text-emerald-600 dark:hover:bg-emerald-900/20 dark:hover:text-emerald-300 dark:hover:border-emerald-500/30",
	},
	{
		name: "Operations",
		icon: Cog,
		slug: "operations",
		color:
			"hover:bg-amber-50 hover:text-amber-700 dark:hover:bg-amber-900/20 dark:hover:text-amber-300 dark:hover:border-amber-500/30",
	},
	{
		name: "Sales",
		icon: Handshake,
		slug: "sales",
		color:
			"hover:bg-purple-50 hover:text-purple-600 dark:hover:bg-purple-900/20 dark:hover:text-purple-300 dark:hover:border-purple-500/30",
	},
	{
		name: "HR",
		icon: Users,
		slug: "hr",
		color:
			"hover:bg-sky-50 hover:text-sky-600 dark:hover:bg-sky-900/20 dark:hover:text-sky-300 dark:hover:border-sky-500/30",
	},
	{
		name: "Systems",
		icon: Laptop,
		slug: "systems",
		color:
			"hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-900/20 dark:hover:text-indigo-300 dark:hover:border-indigo-500/30",
	},
];

export default function HeroSection() {
	return (
		<section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden transition-colors duration-300 bg-white dark:bg-slate-950">
			{/* Background Decorative Elements - Matching Navbar Gradients */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-indigo-500/5 blur-[120px] dark:bg-indigo-500/10" />
				<div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-purple-500/5 blur-[120px] dark:bg-purple-600/10" />
			</div>

			<div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-32">
				<div className="mx-auto max-w-4xl text-center">
					{/* Badge */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className="inline-flex items-center gap-2 rounded-full border border-indigo-100 dark:border-indigo-500/20 bg-indigo-50/50 dark:bg-indigo-500/5 px-4 py-1.5 mb-8"
					>
						<span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
						<span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
							The MBA Career Playground
						</span>
					</motion.div>

					{/* Main Heading */}
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 }}
						className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white lg:leading-[1.1]"
					>
						Master Your MBA Path <br className="hidden sm:block" />
						<span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500  bg-clip-text text-transparent">
							Through Intelligent Exploration
						</span>
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="mt-8 text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
					>
						Stop guessing your future. Virbic decodes 290+ MBA roles with
						real-world insights on salary growth, stress levels, and automation
						risks.
					</motion.p>
				</div>

				{/* Specialization Grid */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3 }}
					className="mt-12"
				>
					<p className="text-center text-sm font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-8">
						Select a specialization to begin
					</p>

					<div className="flex flex-wrap justify-center gap-4">
						{specializations.map((spec, index) => {
							const Icon = spec.icon;
							return (
								<Link
									key={spec.slug}
									href={`/explore/${spec.slug}`}
									className={clsx(
										"group flex items-center gap-3 rounded-2xl border px-6 py-4 text-sm font-semibold transition-all duration-300",
										"bg-white dark:bg-slate-900/50 border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300",
										"hover:scale-[1.05] hover:shadow-xl active:scale-95",
										spec.color
									)}
								>
									<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 dark:bg-slate-800 group-hover:bg-transparent transition-colors">
										<Icon
											size={20}
											className="transition-transform group-hover:rotate-12"
										/>
									</div>
									{spec.name}
									<ArrowRight
										size={16}
										className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all"
									/>
								</Link>
							);
						})}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
