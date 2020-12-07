import { Request, Response } from 'express'

import DroneService from '../services/DroneService'

export default class DronesController {
  public async list(request: Request, response: Response): Promise<Response> {
    const { _page, _limit, _sort, _order } = request.query

    const droneService = new DroneService()

    if (_page && _limit) {
      const page = String(_page)
      const limit = String(_limit)

      const drones = await droneService.getAllPaginated(page, limit)

      return response.json(drones)
    } else if (_sort && _order) {
      const sort = String(_sort).toLowerCase()
      const order = String(_order).toUpperCase()

      const drones = await droneService.getAllSorted(sort, order)

      return response.json(drones)
    } else {
      const drones = await droneService.getAll()
      return response.json(drones)
    }
  }

  public async detail(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const droneService = new DroneService()

    const drone = await droneService.getDroneById(id)

    return response.json(drone)
  }

  public async create(
    request: Request,
    response: Response
  ): Promise<void | Response> {
    const {
      customer_name,
      customer_image,
      customer_address,
      battery,
      max_speed,
      average_speed,
      status,
      current_fly
    } = request.body

    const droneService = new DroneService()

    await droneService.create({
      customer_name,
      customer_image,
      customer_address,
      battery,
      max_speed,
      average_speed,
      status,
      current_fly
    })

    return response.status(200).end()
  }

  public async update(
    request: Request,
    response: Response
  ): Promise<void | Response> {
    const { id } = request.params

    const {
      customer_name,
      customer_image,
      customer_address,
      battery,
      max_speed,
      average_speed,
      status,
      current_fly
    } = request.body

    const droneService = new DroneService()

    await droneService.update(id, {
      customer_name,
      customer_image,
      customer_address,
      battery,
      max_speed,
      average_speed,
      status,
      current_fly
    })

    return response.status(200).end()
  }

  public async delete(
    request: Request,
    response: Response
  ): Promise<void | Response> {
    const { id } = request.params

    const droneService = new DroneService()

    await droneService.delete(id)

    return response.status(200).end()
  }
}
