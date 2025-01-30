import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:3000'

export type BoundingBox = {
  minLon: number
  minLat: number
  maxLon: number
  maxLat: number
}

export const fetchCafeList = async (boundingBox: BoundingBox): Promise<object> => {
  try {
    const response = await axios.post(`${BASE_URL}/cafe/find-list`, boundingBox)
    return response.data // 서버에서 받은 데이터를 반환
  } catch (error) {
    console.error('Failed to fetch cafe list:', error)
    throw error
  }
}