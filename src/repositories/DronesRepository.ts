import Drone from '../models/Drone'

interface DroneDTO {
  customer_name: string
  customer_image: string
  customer_address: string
  battery: number
  max_speed: number
  average_speed: number
  status: string
  current_fly: number
}

class DronesRepository {
  private drones: Drone[]

  constructor() {
    this.drones = []
  }

  public findAll(): Drone[] {
    return this.drones
  }

  public findById(droneId: string): Drone | null {
    const droneFound = this.drones.find(drone => drone.id === droneId)

    return droneFound || null
  }

  public create({
    customer_name,
    customer_image,
    customer_address,
    battery,
    max_speed,
    average_speed,
    status,
    current_fly
  }: DroneDTO): Drone {
    const drone = new Drone(
      customer_name,
      customer_image,
      customer_address,
      battery,
      max_speed,
      average_speed,
      status,
      current_fly
    )

    this.drones.push(drone)

    return drone
  }
}

export default DronesRepository
