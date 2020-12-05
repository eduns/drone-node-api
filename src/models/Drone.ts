import { v4 as uuid } from 'uuid'

class Drone {
  id: string
  customer_name: string
  customer_image: string
  customer_address: string
  battery: number
  max_speed: number
  average_speed: number
  status: string
  current_fly: number

  constructor(
    customer_name: string,
    customer_image: string,
    customer_address: string,
    battery: number,
    max_speed: number,
    average_speed: number,
    status: string,
    current_fly: number
  ) {
    this.id = uuid()
    this.customer_name = customer_name
    this.customer_image = customer_image
    this.customer_address = customer_address
    this.battery = battery
    this.max_speed = max_speed
    this.average_speed = average_speed
    this.status = status
    this.current_fly = current_fly
  }
}

export default Drone
