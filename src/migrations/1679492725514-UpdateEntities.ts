import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateEntities1679492725514 implements MigrationInterface {
    name = 'UpdateEntities1679492725514'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "second_email" character varying`);
        await queryRunner.query(`ALTER TABLE "users" ADD "second_phone_number" character varying`);
        await queryRunner.query(`ALTER TABLE "users" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "second_email" character varying`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "second_phone_number" character varying`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "FK_30ef77942fc8c05fcb829dcc61d" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "FK_30ef77942fc8c05fcb829dcc61d"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "second_phone_number"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "second_email"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "second_phone_number"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "second_email"`);
    }

}
