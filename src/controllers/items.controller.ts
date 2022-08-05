import { Request, Response } from 'express'
import { database } from '../../prisma'
import {
  createItemValidations,
  updateItemsValidations
} from '../utils/validations'

export async function getAllItems(req: Request, res: Response) {
  const items = await database.item.findMany()
  res.json(items)
}

export async function getSingleItem(req: Request, res: Response) {
  const { id } = req.params

  const singleItem = await database.item.findUnique({
    where: {
      id: Number(id)
    }
  })

  // SELECT FROM items WHERE items.id === id
  res.json(singleItem)
}

export async function deleteItem(req: Request, res: Response) {
  const { id } = req.params

  const deleteItem = await database.item.delete({
    where: {
      id: Number(id)
    }
  })

  res.json(deleteItem)
}

export async function addItem(req: Request, res: Response) {
  const { name, value } = req.body

  try {
    await createItemValidations({ name, value })

    const addItem = await database.item.create({
      data: {
        name,
        value
      }
    })

    res.status(201).json(addItem)
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
}

export async function updateItem(req: Request, res: Response) {
  const { id } = req.params
  const { name, value } = req.body

  try {
    await updateItemsValidations({ name, value })


    const updateItem = await database.item.update({
      where: {
        id: Number(id)
      },
      data: {
        name,
        value
      }
    })

    res.json(updateItem)
    
  } catch (error) {

    return res.status(400).json({ error: error.message })
  }

}
