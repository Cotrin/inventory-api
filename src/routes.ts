// Config
import { Router } from 'express'

import { todoSetupRequest } from './controllers'
import { getAllItems, getSingleItem } from './controllers/items.controller'

const routes = Router()

// Creating first Routes
routes.get('/', getAllItems)

routes.get('/items/:id', getSingleItem)

routes.post('/items', todoSetupRequest)

routes.put('/items/:id', todoSetupRequest)

routes.delete('items:id', todoSetupRequest)

// Exporting routes to server.ts
export { routes }
