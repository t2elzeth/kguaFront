import { BASE_URL } from '@src/common/constants'

// eslint-disable-next-line @typescript-eslint/no-var-requires
export const api = require('axios').create({
  baseURL: BASE_URL,
})
