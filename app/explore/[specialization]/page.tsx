// app/[specialization]/page.tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getRolesBySpecialization } from "@/lib/db/roles";
import { getSpecializationByName } from "@/lib/specializations";
import RolesGrid from "@/components/roles/RolesGrid";
import SpecializationDetails from "@/components/specializations/SpecializationDetails";

interface PageProps {
	params: Promise<{ specialization: string }>;
}

export default async function SpecializationPage({ params }: PageProps) {
	const { specialization: rawSpecialization } = await params;
	const specialization = decodeURIComponent(rawSpecialization);

	const [roles, specializationData] = await Promise.all([
		getRolesBySpecialization(specialization),
		getSpecializationByName(specialization),
	]);

	if (!specializationData) {
		return (
			<div className="mx-auto max-w-7xl px-4 py-16 text-center">
				<h1 className="text-2xl md:text-3xl font-bold">
					Specialization not found
				</h1>
				<p className="mt-4 text-muted-foreground">
					Please check the URL or browse our available specializations.
				</p>
			</div>
		);
	}

	return (
		<div className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
			{/* Page Title */}
			<div className="mb-6 md:mb-8">
				<h1 className="text-2xl sm:text-3xl md:text-4xl font-bold capitalize">
					{specializationData.shortName}
				</h1>
			</div>

			<Tabs defaultValue="overview" className="space-y-6">
				{/* Responsive Tabs */}
				<div className="sticky top-4 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
					{/* Mobile → horizontal scroll */}
					<TabsList className="flex w-full gap-2 overflow-x-auto px-1 pl-8 sm:pl-1 sm:grid sm:grid-cols-4 lg:w-[520px] no-scrollbar">
						<TabsTrigger
							value="overview"
							className="flex-shrink-0 whitespace-nowrap"
						>
							Overview
						</TabsTrigger>

						<TabsTrigger
							value="career"
							className="flex-shrink-0 whitespace-nowrap"
						>
							Career & Salary
						</TabsTrigger>

						<TabsTrigger
							value="market"
							className="flex-shrink-0 whitespace-nowrap"
						>
							Market Intel
						</TabsTrigger>

						<TabsTrigger
							value="roles"
							className="flex-shrink-0 whitespace-nowrap"
						>
							Roles
						</TabsTrigger>
					</TabsList>
				</div>

				{/* Overview */}
				<TabsContent value="overview" className="mt-6">
					<SpecializationDetails data={specializationData} view="overview" />
				</TabsContent>

				{/* Career */}
				<TabsContent value="career" className="mt-6">
					<SpecializationDetails data={specializationData} view="career" />
				</TabsContent>

				{/* Market */}
				<TabsContent value="market" className="mt-6">
					<SpecializationDetails data={specializationData} view="market" />
				</TabsContent>

				{/* Roles */}
				<TabsContent value="roles" className="mt-6">
					<RolesGrid roles={roles} specialization={specialization} />
				</TabsContent>
			</Tabs>
		</div>
	);
}
