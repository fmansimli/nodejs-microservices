import http from "http";
import app from "./app";

import { MikroORM } from "@mikro-orm/core";

const httpServer = http.createServer(app);

const PORT = process.env.PORT || 4002;

httpServer.listen(PORT, async () => {
  try {
    const orm = await MikroORM.init();
    const migrator = orm.getMigrator();

    await migrator.up();

    app.locals.orm = orm;
  } catch (error: any) {
    console.error("$$ =>" + error.message);
  } finally {
    console.log(`http://localhost:${PORT}  (teams)`);
  }
});
