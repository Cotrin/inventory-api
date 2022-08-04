// Config
import { Router } from 'express'

import { addItem, deleteItem, getAllItems, getSingleItem, updateItem } from './controllers/items.controller'

const routes = Router()

// Creating first Routes
routes.get('/', getAllItems)

routes.get('/items/:id', getSingleItem)

routes.post('/items', addItem)

routes.put('/items/:id', updateItem)

routes.delete('/items/:id', deleteItem)

// Exporting routes to server.ts
export { routes }
