import data from '../data/products.json'
import type { DataListEnvelope } from './dataEnvelope'
import { rest } from './myFetch'

export async function getAll() {
  return rest<DataListEnvelope<Product>>('http://localhost:3000/api/v1/products')
}

export interface Product {
  thumbnail: string
  id: number
  title: string
  description: string
  category: string
  price: number
  rating: number
  stock: number
  tags: string[]
  brand?: string
  weight: number
  dimensions: {
    width: number
    height: number
    depth: number
  }
  reviews: review[]
}
interface review {
  rating: number
  comment: string
  date: string
  reviewerName: string
  reviewerEmail: string
}
