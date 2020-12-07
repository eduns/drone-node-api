import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('drones')
class Drone {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  customer_name: string

  @Column()
  customer_image: string

  @Column()
  customer_address: string

  @Column('int')
  battery: number

  @Column({
    type: 'decimal',
    precision: 3,
    scale: 1,
    transformer: {
      to: (value: string) => value,
      from: (value: string) => parseFloat(value)
    }
  })
  max_speed: number

  @Column({
    type: 'decimal',
    precision: 3,
    scale: 1,
    transformer: {
      to: (value: string) => value,
      from: (value: string) => parseFloat(value)
    }
  })
  average_speed: number

  @Column()
  status: string

  @Column('int')
  current_fly: number
}

export default Drone
