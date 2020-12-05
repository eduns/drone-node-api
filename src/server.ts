import express from 'express'
import cors from 'cors'

import './database'

import routes from './routes'

const app = express()
const port = 3333

app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(port, () => {
  console.log(`Servidor executando na porta ${port}`)
})
