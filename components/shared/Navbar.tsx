"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	Megaphone,
	DollarSign,
	Cog,
	Handshake,
	Users,
	Laptop,
} from "lucide-react";
import clsx from "clsx";
import ThemeToggle from "./ThemeToggle";
import RoleSearch from "../search/RoleSearch";

const specializations = [
	{
		name: "Marketing",
		icon: Megaphone,
		slug: "marketing",
		color:
			"hover:bg-pink-50 hover:text-pink-600 dark:hover:bg-pink-900/20 dark:hover:text-pink-300 dark:hover:border-pink-500/30",
		active: "bg-pink-500 text-white shadow-lg shadow-pink-500/25",
	},
	{
		name: "Finance",
		icon: DollarSign,
		slug: "finance",
		color:
			"hover:bg-emerald-50 hover:text-emerald-600 dark:hover:bg-emerald-900/20 dark:hover:text-emerald-300 dark:hover:border-emerald-500/30",
		active: "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25",
	},
	{
		name: "Operations",
		icon: Cog,
		slug: "operations",
		color:
			"hover:bg-amber-50 hover:text-amber-700 dark:hover:bg-amber-900/20 dark:hover:text-amber-300 dark:hover:border-amber-500/30",
		active: "bg-amber-500 text-white shadow-lg shadow-amber-500/25",
	},
	{
		name: "Sales",
		icon: Handshake,
		slug: "sales",
		color:
			"hover:bg-purple-50 hover:text-purple-600 dark:hover:bg-purple-900/20 dark:hover:text-purple-300 dark:hover:border-purple-500/30",
		active: "bg-purple-500 text-white shadow-lg shadow-purple-500/25",
	},
	{
		name: "HR",
		icon: Users,
		slug: "hr",
		color:
			"hover:bg-sky-50 hover:text-sky-600 dark:hover:bg-sky-900/20 dark:hover:text-sky-300 dark:hover:border-sky-500/30",
		active: "bg-sky-500 text-white shadow-lg shadow-sky-500/25",
	},
	{
		name: "Systems",
		icon: Laptop,
		slug: "systems",
		color:
			"hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-900/20 dark:hover:text-indigo-300 dark:hover:border-indigo-500/30",
		active: "bg-indigo-500 text-white shadow-lg shadow-indigo-500/25",
	},
];

export default function Navbar() {
	const pathname = usePathname();

	return (
		<nav className="sticky top-0 z-50 w-full border-b border-slate-200/60 dark:border-white/5 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md transition-colors duration-300">
			<div className="mx-auto max-w-7xl px-6 py-4">
				<div className="flex items-center justify-between">
					<Link href="/" className="flex items-center gap-3 group">
						<div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-bold shadow-md">
							V
						</div>
						<span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
							Virbic
						</span>
					</Link>

					<div className="flex items-center gap-6">
						<a
							href="https://amplivate.in"
							target="_blank"
							rel="noopener noreferrer"
							className="hidden sm:block text-sm font-medium text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
						>
							Amplivate
						</a>
						<RoleSearch />
						<ThemeToggle />
					</div>
				</div>

				{/* Specialization Pills */}
				<div className="mt-6 px-4 flex gap-2 overflow-x-auto no-scrollbar pb-1">
					{specializations.map((spec) => {
						const Icon = spec.icon;
						const isActive = pathname.includes(spec.slug);

						return (
							<Link
								key={spec.slug}
								href={`/explore/${spec.slug}`}
								className={clsx(
									"flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 hover:scale-105 my-2 hover:shadow-md",
									isActive
										? spec.active
										: "bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400",
									!isActive && spec.color
								)}
							>
								<Icon size={16} />
								{spec.name}
							</Link>
						);
					})}
				</div>
			</div>
		</nav>
	);
}
