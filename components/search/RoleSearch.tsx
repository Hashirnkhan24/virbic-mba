"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import {
	CommandDialog,
	CommandInput,
	CommandList,
	CommandEmpty,
	CommandGroup,
	CommandItem,
} from "@/components/ui/command";

interface Role {
	name: string;
	slug: string;
	specialization: string;
}

export default function RoleSearch() {
	const [open, setOpen] = useState(false);
	const [roles, setRoles] = useState<Role[]>([]);
	const router = useRouter();

	useEffect(() => {
		fetch("/api/roles/search")
			.then((res) => res.json())
			.then(setRoles);
	}, []);

	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if ((e.ctrlKey || e.metaKey) && e.key === "k") {
				e.preventDefault();
				setOpen((o) => !o);
			}
		};
		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, []);

	return (
		<>
			{/* Responsive Trigger: Icon on mobile, Search bar on desktop */}
			<button
				onClick={() => setOpen(true)}
				className="group flex items-center justify-center sm:justify-start gap-2 h-10 w-10 sm:w-full sm:max-w-sm px-0 sm:px-4 py-2 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/50 hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-all duration-300 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300"
			>
				<Search size={18} />
				<span className="hidden sm:inline text-sm">Search roles...</span>
				<kbd className="ml-auto pointer-events-none hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-1.5 font-mono text-[10px] font-medium text-slate-500">
					<span className="text-xs">⌘</span>K
				</kbd>
			</button>

			<CommandDialog open={open} onOpenChange={setOpen}>
				<CommandInput placeholder="Search MBA roles..." />
				<CommandList>
					<CommandEmpty className="py-6 text-center text-sm text-slate-500">
						No roles found.
					</CommandEmpty>
					<CommandGroup heading="MBA Career Roles">
						{roles.map((role) => (
							<CommandItem
								key={role.slug}
								value={`${role.name} ${role.specialization}`}
								onSelect={() => {
									router.push(`/role/${role.slug}`);
									setOpen(false);
								}}
								className="cursor-pointer aria-selected:bg-indigo-50 dark:aria-selected:bg-indigo-900/20"
							>
								<div className="flex flex-col py-1">
									<span className="font-medium text-slate-900 dark:text-slate-100">
										{role.name}
									</span>
									<span className="text-[11px] font-semibold uppercase tracking-wider text-indigo-500 dark:text-indigo-400">
										{role.specialization}
									</span>
								</div>
							</CommandItem>
						))}
					</CommandGroup>
				</CommandList>
			</CommandDialog>
		</>
	);
}
