import { getRolesBySpecialization } from "@/lib/db/roles";
import RolesGrid from "@/components/roles/RolesGrid";

interface PageProps {
	// params is a Promise in Next.js 15+
	params: Promise<{ specialization: string }>;
}

export default async function Page({ params }: PageProps) {
	// Await the params to resolve the promise
	const { specialization: rawSpecialization } = await params;
	const specialization = decodeURIComponent(rawSpecialization);

	const roles = await getRolesBySpecialization(specialization);

	return (
		<div className="mx-auto max-w-7xl px-6 py-10">
			<h1 className="text-2xl font-semibold mb-6 capitalize">
				{specialization} Roles
			</h1>

			<RolesGrid roles={roles} />
		</div>
	);
}
