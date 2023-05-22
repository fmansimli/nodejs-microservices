import http from "http";
import app from "./app";

import { MikroORM } from "@mikro-orm/core";
import { AppDi } from "./ioc/di";

const httpServer = http.createServer(app);

const PORT = process.env.PORT || 4002;

const bootstrap = async () => {
  try {
    const orm = await MikroORM.init();
    AppDi.init(orm);

    const migrator = orm.getMigrator();
    await migrator.up();

    httpServer.listen(PORT, () => {
      console.log(`http://localhost:${PORT}  (teams)`);
    });
  } catch (error: any) {
    console.error("$$ =>" + error.message);
  }
};

bootstrap();
