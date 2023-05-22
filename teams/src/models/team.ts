import { PrimaryKey, Entity, Property } from "@mikro-orm/core";

@Entity({ tableName: "teams" })
export class Team {
  constructor(team: Partial<Team>) {
    Object.assign(this, team);
  }

  @PrimaryKey()
  id: number;

  @Property({ columnType: "varchar(50)" })
  name: string;

  @Property()
  about: string;

  @Property({ type: "timestamptz" })
  createdAt = new Date();

  @Property({ type: "timestamptz", onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property({ type: "timestamptz", nullable: true })
  deletedAt = null;
}
