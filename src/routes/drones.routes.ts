import { Router } from 'express'

import DronesController from '../controllers/DronesController'

const dronesRouter = Router()

const dronesController = new DronesController()

dronesRouter.get('/', dronesController.list)

dronesRouter.get('/:id', dronesController.detail)

dronesRouter.post('/', dronesController.create)

dronesRouter.put('/:id', dronesController.update)

dronesRouter.delete('/:id', dronesController.delete)

export default dronesRouter
