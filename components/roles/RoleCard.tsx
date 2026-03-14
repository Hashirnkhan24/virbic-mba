"use client";

import Link from "next/link";

interface Role {
	id: number;
	name: string;
	slug: string | null;
}

interface Props {
	role: Role;
}

export default function RoleCard({ role }: Props) {
	return (
		<Link
			href={`/roles/${role.slug || ""}`}
			className="block  bg-white dark:bg-slate-900 px-5 py-4 transition-all duration-200  active:scale-95"
		>
			<h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
				{role.name}
			</h3>
		</Link>
	);
}
