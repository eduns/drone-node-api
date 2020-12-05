import { Router, Request, Response } from 'express'

import DronesRepository from '../repositories/DronesRepository'
import DroneService from '../services/DroneService'

const dronesRouter = Router()
const dronesRepository = new DronesRepository()

dronesRouter.get('/', (request: Request, response: Response) => {
  const droneService = new DroneService(dronesRepository)

  const drones = droneService.getAll()

  return response.json(drones)
})

dronesRouter.get('/:id', (request: Request, response: Response) => {
  const { id } = request.params

  const droneService = new DroneService(dronesRepository)

  const drone = droneService.getById(id)

  return response.json(drone)
})

dronesRouter.post('/', (request: Request, response: Response) => {
  try {
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

    const droneService = new DroneService(dronesRepository)

    const drone = droneService.create({
      customer_name,
      customer_image,
      customer_address,
      battery,
      max_speed,
      average_speed,
      status,
      current_fly
    })

    return response.json(drone)
  } catch (error) {
    return response.status(400).json({ error: error.message })
  }
})

export default dronesRouter
