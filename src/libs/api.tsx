import { create } from 'apisauce'

// TODO: Move to env
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

// define the api
export const api = create({
  baseURL: BASE_URL,
   headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})