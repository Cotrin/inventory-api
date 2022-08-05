import { database } from '../../prisma'

type ValidationInputs = {
  name?: string
  value?: number
}

async function generalValidations({ name, value }: ValidationInputs) {
  if (name) {
    if (typeof name !== 'string') {
      throw new Error('Tipos de dados inválidos')
    }
  }

  if (value) {
    if (typeof value !== 'number') {
      throw new Error('Tipos de dados inválidos')
    }
  }

  const itemAlreadyExists = await database.item.findFirst({
    where: {
      name
    }
  })

  if (itemAlreadyExists) {
    throw new Error('Item já está no inventário')
  }
}

export async function createItemValidations({ name, value }: ValidationInputs) {
  if (!name || !value) {
    throw new Error('Faltam informações para adicionar o item ao inventário')
  }

  await generalValidations({ name, value })
}

export async function updateItemsValidations({
  name,
  value
}: ValidationInputs) {
  if (!name && !value) {
    throw new Error('Faltam informações para atualizar o item do inventário')
  }

  await generalValidations({ name, value })
}
