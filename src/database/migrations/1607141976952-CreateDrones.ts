import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export default class CreateDrones1607141976952 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'drones',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid'
          },
          {
            name: 'customer_image',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'customer_name',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'customer_address',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'battery',
            type: 'int',
            isNullable: false
          },
          {
            name: 'max_speed',
            type: 'decimal',
            precision: 3,
            scale: 1,
            isNullable: false
          },
          {
            name: 'average_speed',
            type: 'decimal',
            precision: 3,
            scale: 1,
            isNullable: false
          },
          {
            name: 'status',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'current_fly',
            type: 'int',
            isNullable: false
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('drones')
  }
}
