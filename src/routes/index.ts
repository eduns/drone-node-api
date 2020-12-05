import { Router } from 'express'

import dronesRouter from '../routes/drones.routes'

const routes = Router()

routes.use('/drones', dronesRouter)

export default routes
