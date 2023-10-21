import express from 'express'
import { config } from 'dotenv'
config()

import routes from './src/routes'

const app = express()

app.use(express.json())
app.use(routes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log('SERVER ON!!'))
