import { Migration } from '@mikro-orm/migrations';

export class Migration20230519104036 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "teams" ("id" serial primary key, "name" varchar(50) not null, "about" varchar(255) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "deleted_at" timestamptz(0) null);');
  }

  async down(): Promise<void> {
    this.addSql('create table "categories" ("id" serial primary key, "name" varchar not null default null, "description" varchar not null default null, "created_at" timestamptz not null default null, "updated_at" timestamptz not null default null, "deleted_at" timestamptz null default null);');
  }

}
