import express, { Request, Response, NextFunction } from 'express'
import { ValidationError } from 'joi'
import cors from 'cors'
import 'reflect-metadata'
import 'express-async-errors'

import './database'

import routes from './routes'
import AppError from './errors/AppError'

const app = express()
const port = 3333

app.use(express.json())
app.use(cors())
app.use(routes)

app.use(
  (error: Error, request: Request, response: Response, _: NextFunction) => {
    if (error instanceof AppError) {
      return response
        .status(error.statusCode)
        .json({ status: 'error', message: error.message })
    }

    if (error instanceof ValidationError) {
      return response.status(400).json({
        error: 'validation error',
        message: `${error.details[0].path[0]} ${error.message}`
      })
    }

    console.log(error)

    return response
      .status(500)
      .json({ status: 'error', message: 'Internal Server Error' })
  }
)

app.listen(port, () => {
  console.log(`Servidor executando na porta ${port}`)
})
