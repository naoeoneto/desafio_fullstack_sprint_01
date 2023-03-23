import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateEntities1679497413310 implements MigrationInterface {
    name = 'UpdateEntities1679497413310'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "full_name"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phone_number"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "second_email"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "second_phone_number"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "full_name"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "phone_number"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "second_email"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "second_phone_number"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "fullName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "secondEmail" character varying`);
        await queryRunner.query(`ALTER TABLE "users" ADD "phoneNumber" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "secondPhoneNumber" character varying`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "fullName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "secondEmail" character varying`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "phoneNumber" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "secondPhoneNumber" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "secondPhoneNumber"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "phoneNumber"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "secondEmail"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "fullName"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "secondPhoneNumber"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phoneNumber"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "secondEmail"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "fullName"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "second_phone_number" character varying`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "second_email" character varying`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "phone_number" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "full_name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "second_phone_number" character varying`);
        await queryRunner.query(`ALTER TABLE "users" ADD "second_email" character varying`);
        await queryRunner.query(`ALTER TABLE "users" ADD "phone_number" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "full_name" character varying NOT NULL`);
    }

}
