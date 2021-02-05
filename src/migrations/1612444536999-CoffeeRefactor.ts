import { MigrationInterface, QueryRunner } from 'typeorm';

export class CoffeeRefactor1612444536999 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "coffee" RENAME COLUMN "name" TO "title"`,
    );
    // await queryRunner.renameColumn('coffees', 'name', 'title');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "coffee" RENAME COLUMN "title" TO "name"`,
    );
    // await queryRunner.renameColumn('coffees', 'title', 'name');
  }
}
