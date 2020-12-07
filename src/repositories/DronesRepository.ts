import { EntityRepository, Repository } from 'typeorm'

import Drone from '../models/Drone'

@EntityRepository(Drone)
class DronesRepository extends Repository<Drone> {
  public async findDroneById(droneId: number): Promise<Drone | null> {
    const droneFound = await this.findOne({
      where: { id: droneId }
    })

    return droneFound || null
  }

  public async paginateDrones(page: number, limit: number): Promise<Drone[]> {
    const [paginatedDrones] = await this.findAndCount({
      take: limit,
      skip: page
    })

    return paginatedDrones
  }

  public async sortDrones(sort: string, order: string): Promise<Drone[]> {
    const drones = await this.find({
      order: {
        [sort]: order
      }
    })

    return drones
  }
}

export default DronesRepository
