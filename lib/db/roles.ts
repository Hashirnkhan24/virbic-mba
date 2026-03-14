import prisma from "@/lib/prisma";
import slugify from "slugify";

function generateSlug(name: string) {
	return slugify(name, { lower: true, strict: true });
}

/**
 * Fetch roles for a specialization
 */
export async function getRolesBySpecialization(specialization: string) {
	const roles = await prisma.role.findMany({
		where: {
			specialization: {
				equals: specialization,
				mode: "insensitive",
			},
		},
		orderBy: {
			name: "asc",
		},
		select: {
			id: true,
			name: true,
			slug: true,
			specialization: true,
		},
	});

	return roles.map((role) => ({
		...role,
		// Since we migrated, role.slug should now exist in the DB!
		slug: role.slug ?? generateSlug(role.name),
	}));
}

/**
 * Fetch single role by slug using findUnique
 * This is now the standard way to fetch a single item by an ID/Unique key
 */
export async function getRoleBySlug(slug: string) {
	// Because we added a @unique constraint to the slug field in the DB,
	// findUnique is the most efficient lookup.
	return await prisma.role.findUnique({
		where: {
			slug: slug,
		},
	});
}
