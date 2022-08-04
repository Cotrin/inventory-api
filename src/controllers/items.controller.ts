import { Request, Response } from 'express'
import { database } from '../../prisma'

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

  res.json(singleItem)
}

export async function deleteItem(req:Request, res:Response) {
  const { id } = req.params

  const deleteItem = await database.item.delete({
    where: {
      id: Number(id)
    }
  })

  res.json(deleteItem)
}

export async function addItem(req:Request, res: Response) {
  const { name, value } = req.body

  const addItem = await database.item.create({
    data: {
      name: String(name),
      value: Number(value)
    }
  })
  
  res.json(addItem)
}

export async function updateItem(req:Request, res:Response){
  const { id } = req.params
  const { name, value } = req.body

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
}
