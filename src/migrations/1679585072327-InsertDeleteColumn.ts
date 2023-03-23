import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertDeleteColumn1679585072327 implements MigrationInterface {
    name = 'InsertDeleteColumn1679585072327'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD "deletedAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "users" ADD "deletedAt" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "deletedAt"`);
    }

}
