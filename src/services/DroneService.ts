import { getCustomRepository } from 'typeorm'
import Drone from '../models/Drone'
import DronesRepository from '../repositories/DronesRepository'
import DroneSchema from '../validators/drones.schema'
import AppError from '../errors/AppError'

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
  /**
   * listar todos os drones
   */
  public async getAll(): Promise<Drone[]> {
    const dronesRepository = getCustomRepository(DronesRepository)

    const drones = await dronesRepository.find()

    return drones
  }

  /**
   * listar drones com paginação
   * @param _page página de início
   * @param _limit limite de registros
   */

  public async getAllPaginated(
    _page: string,
    _limit: string
  ): Promise<Drone[]> {
    const page = parseInt(_page)
    const limit = parseInt(_limit)

    if (page < 0) throw new AppError('parâmetro _page inválido')

    if (limit < 0) throw new AppError('parâmetro _limit inválido')

    const dronesRepository = getCustomRepository(DronesRepository)

    const drones = await dronesRepository.paginateDrones(page, limit)

    return drones
  }

  /**
   * listar os drones ordenados
   * @param sort campo critério para ordenação
   * @param order tipo da ordenação
   */
  public async getAllSorted(sort: string, order: string): Promise<Drone[]> {
    const validFields = [
      'id',
      'customer_name',
      'customer_image',
      'customer_address',
      'battery',
      'max_speed',
      'average_speed',
      'status',
      'current_fly'
    ]

    const validOrders = ['ASC', 'DESC']

    if (!validFields.includes(sort)) {
      throw new AppError(`campo ${sort} inválido`)
    }

    if (!validOrders.includes(order)) {
      throw new AppError(`ordem ${order} inválida`)
    }

    const dronesRepository = getCustomRepository(DronesRepository)

    const drones = await dronesRepository.sortDrones(sort, order)

    return drones
  }

  /**
   * listar detalhes de um drone
   * @param droneId id do drone
   */
  public async getDroneById(id: string): Promise<Drone> {
    const dronesRepository = getCustomRepository(DronesRepository)

    const droneId = parseInt(id)

    if (isNaN(droneId)) {
      throw new AppError('id inválido')
    }

    const drone = await dronesRepository.findDroneById(droneId)

    if (!drone) {
      throw new AppError('drone não encontrado', 404)
    }

    return drone
  }

  /**
   * criar um drone
   * @param data dados do drone
   */
  public async create(data: DroneDTO): Promise<void> {
    const dronesRepository = getCustomRepository(DronesRepository)

    await DroneSchema.validateAsync(data)

    const drone = dronesRepository.create(data)

    await dronesRepository.save(drone)
  }

  /**
   * atualizar dados de um drone
   * @param id id do drone
   * @param data dados a serem atualizados
   */
  public async update(id: string, data: DroneDTO): Promise<void> {
    const droneId = parseInt(id)

    const dronesRepository = getCustomRepository(DronesRepository)

    const droneFound = await dronesRepository.findDroneById(droneId)

    if (!droneFound) {
      throw new AppError('drone não encontrado', 404)
    }

    if (data.customer_name) droneFound.customer_name = data.customer_name

    if (data.customer_image) droneFound.customer_image = data.customer_image

    if (data.customer_address)
      droneFound.customer_address = data.customer_address

    if (data.battery) droneFound.battery = data.battery

    if (data.max_speed) droneFound.max_speed = data.max_speed

    if (data.average_speed) droneFound.average_speed = data.average_speed

    if (data.status) droneFound.status = data.status

    if (data.current_fly) droneFound.current_fly = data.current_fly

    await dronesRepository.update(droneId, droneFound)
  }

  /**
   * deletar um drone
   * @param id id do drone
   */
  public async delete(id: string): Promise<void> {
    const droneId = parseInt(id)

    const dronesRepository = getCustomRepository(DronesRepository)

    const droneFound = await dronesRepository.findDroneById(droneId)

    if (!droneFound) {
      throw new AppError('drone não encontrado', 404)
    }

    await dronesRepository.delete({ id: droneId })
  }
}

export default DroneService
