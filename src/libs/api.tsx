import { create } from 'apisauce'

const BASE_URL = 'https://dashboard.legasilaw.com/'

// define the api
export const api = create({
  baseURL: BASE_URL,
  headers: { Accept: 'application/vnd.github.v3+json' },
})
