import prisma from "@prisma/client";

export const db = new prisma.PrismaClient();

import { db } from "$lib/database";