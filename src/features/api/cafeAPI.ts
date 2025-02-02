import axios from 'axios'
import { Cafe } from '../../entities/cafe'

const BASE_URL = 'http://127.0.0.1:3000'

export type BoundingBox = {
  minLon: number
  minLat: number
  maxLon: number
  maxLat: number
}

export const fetchCafeList = async (boundingBox: BoundingBox): Promise<Cafe[]> => {
  try {
    const response = await axios.post(`${BASE_URL}/cafe/find-list`, boundingBox)
    return response.data as Cafe[]
  } catch (error) {
    console.error('Failed to fetch cafe list:', error)
    throw error
  }
}