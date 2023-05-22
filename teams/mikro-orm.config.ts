import { MikroORM } from "@mikro-orm/core";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";
import { TSMigrationGenerator } from "@mikro-orm/migrations";

const config: Parameters<typeof MikroORM.init>[0] = {
  type: "postgresql",
  entities: ["./dist/src/models/*.js"],
  entitiesTs: ["./src/models/*.ts"],
  driver: PostgreSqlDriver,
  dbName: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  allowGlobalContext: true,
  debug: process.env.NODE_ENV === "development",
  migrations: {
    tableName: "mikro_orm_migrations",
    pathTs: "./migrations",
    path: "./dist/migrations",
    transactional: true,
    disableForeignKeys: true,
    snapshot: true,
    allOrNothing: true,
    dropTables: true,
    safe: true,
    generator: TSMigrationGenerator,
  },
};

export default config;
