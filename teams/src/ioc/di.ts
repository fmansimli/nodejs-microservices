import { EntityManager, MikroORM, EntityRepository } from "@mikro-orm/core";
import { Team } from "../models/team";

export const DI = {} as {
  orm: MikroORM;
  em: EntityManager;
  teamRepo: EntityRepository<Team>;
};

export class AppDi {
  static init(orm: MikroORM) {
    DI.em = orm.em;
    DI.orm = orm;
    DI.teamRepo = DI.em.getRepository(Team);
  }
}
