import { getAllRoles } from "@/lib/db/roles";
import { NextResponse } from "next/server";

export async function GET() {
	const roles = await getAllRoles();

	return NextResponse.json(roles);
}
