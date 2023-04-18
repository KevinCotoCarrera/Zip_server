import {MigrationInterface, QueryRunner} from "typeorm";

export class addFiles1681519379783 implements MigrationInterface {
    name = 'addFiles1681519379783'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "public"."file" ("id" SERIAL NOT NULL, "title" character varying(32), "data" bytea NOT NULL, "createdate" TIMESTAMP NOT NULL DEFAULT now(), "updateddate" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_bf2f5ba5aa6e3453b04cb4e4720" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "public"."user" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "password" text NOT NULL, "createdate" TIMESTAMP NOT NULL DEFAULT now(), "updateddate" TIMESTAMP NOT NULL DEFAULT now(), "last_login" TIMESTAMP, "hach_refresh_token" character varying, CONSTRAINT "UQ_b67337b7f8aa8406e936c2ff754" UNIQUE ("username"), CONSTRAINT "PK_03b91d2b8321aa7ba32257dc321" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_b67337b7f8aa8406e936c2ff75" ON "public"."user" ("username") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_b67337b7f8aa8406e936c2ff75"`);
        await queryRunner.query(`DROP TABLE "public"."user"`);
        await queryRunner.query(`DROP TABLE "public"."file"`);
    }

}
