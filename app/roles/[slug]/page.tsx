import { notFound } from "next/navigation";
import { getRoleBySlug } from "@/lib/db/roles";
import RoleDetails from "@/components/roles/RoleDetails";

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
	sectors: string | string[] | null;
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
interface PageProps {
	params: Promise<{
		slug: string;
	}>;
}

export default async function RolePage({ params }: PageProps) {
	const { slug } = await params;
	const decodedSlug = decodeURIComponent(slug);
	const dbRole = await getRoleBySlug(decodedSlug);

	if (!dbRole) {
		notFound();
	}

	// Map the database model to the RoleData interface
	// This fixes the naming mismatch (sector -> sectors) and type casting
	const roleProps: RoleData = {
		...dbRole,
		// Map the database field 'sector' to 'sectors'
		sectors: dbRole.sector,
		// Ensure other potential nulls match the interface
		whatThisRoleDoes: dbRole.whatThisRoleDoes ?? "",
		// If your DB returns nulls that TS complains about,
		// you can use the nullish coalescing operator ?? here
	} as RoleData;

	return (
		<main className="mx-auto max-w-7xl px-6 py-10">
			<RoleDetails role={roleProps} />
		</main>
	);
}
