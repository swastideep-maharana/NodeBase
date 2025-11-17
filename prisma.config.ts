// prisma.config.ts

import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    // FIX: Add the non-null assertion operator (!)
    url: process.env.DATABASE_URL!, 
  },
});