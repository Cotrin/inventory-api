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
