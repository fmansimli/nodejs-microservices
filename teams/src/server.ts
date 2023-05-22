import http from "http";
import app from "./app";

import { MikroORM } from "@mikro-orm/core";
import { AppDi } from "./ioc/di";

const httpServer = http.createServer(app);

const PORT = process.env.PORT || 4002;

httpServer.listen(PORT, async () => {
  try {
    const orm = await MikroORM.init();
    AppDi.init(orm);

    const migrator = orm.getMigrator();
    await migrator.up();

    //
  } catch (error: any) {
    console.error("$$ =>" + error.message);
  } finally {
    console.log(`http://localhost:${PORT}  (teams)`);
  }
});
