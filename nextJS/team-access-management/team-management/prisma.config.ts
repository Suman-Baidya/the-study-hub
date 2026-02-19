import { defineConfig } from '@prisma/config';
import 'dotenv/config';

export default defineConfig({
  datasource: {
    // Prisma 7 uses this for migrations and CLI
    url: process.env.DATABASE_URL,
  },
});