import RoleCard from "./RoleCard";

interface Role {
	id: number;
	name: string;
	slug: string | null;
}

interface Props {
	roles: Role[];
	specialization: string;
}

export default function RolesGrid({ roles, specialization }: Props) {
	if (roles.length === 0) {
		return <p className="text-slate-500 text-center py-20">No roles found.</p>;
	}

	return (
		<div className="space-y-6">
			{/* HEADING */}
			<h2 className="text-2xl md:text-3xl text-green-600 font-bold capitalize align-middle text-center mb-4 md:mb-8">
				Roles in {specialization}
			</h2>

			{/* GRID */}
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-slate-200 dark:bg-slate-800 border border-slate-200 dark:border-slate-800">
				{roles.map((role) => (
					<div
						key={role.id}
						className="bg-white dark:bg-slate-900 p-6 transition-all duration-300 hover:z-10 hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:scale-[1.02] cursor-pointer"
					>
						<RoleCard role={role} />
					</div>
				))}
			</div>
		</div>
	);
}
