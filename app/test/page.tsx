import prisma from "@/lib/prisma";

export default async function Page() {
	const roles = await prisma.role.findMany({
		take: 10,
	});

	return (
		<div>
			<h1>Database Test</h1>

			{roles.map((role) => (
				<div key={role.id}>
					{role.name} — {role.specialization}
				</div>
			))}
		</div>
	);
}
