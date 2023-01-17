
import { config } from 'dotenv'

config()

export const secret = process.env.AUHT_SECRET
export const expires = process.env.AUHT_EXPIRES
export const round = process.env.AUHT_ROUND



