import Drone from '../models/Drone'
import DronesRepository from '../repositories/DronesRepository'

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

class DroneService {
  private dronesRepository: DronesRepository

  constructor(dronesRepository: DronesRepository) {
    this.dronesRepository = dronesRepository
  }

  public getAll(): Drone[] {
    const drones = this.dronesRepository.findAll()

    return drones
  }

  public getById(droneId: string): Drone {
    const drone = this.dronesRepository.findById(droneId)

    if (!drone) {
      throw new Error('drone não encontrado')
    }

    return drone
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
    const drone = this.dronesRepository.create({
      customer_name,
      customer_image,
      customer_address,
      battery,
      max_speed,
      average_speed,
      status,
      current_fly
    })

    return drone
  }
}

export default DroneService
