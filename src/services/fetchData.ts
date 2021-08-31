import { URLS } from '@src/common/constants'
import { api } from '@src/services/api'

/**
 *
 * @param {String} url
 * @param {Object} params
 */
export default async function fetchData(url, params = {}, id = '') {
  try {
    const apiURL = id ? `${URLS[url.toUpperCase()]}${id}/` : URLS[url.toUpperCase()]
    const { data } = await api.get(apiURL, { params })
    return data
  } catch (e) {
    console.log(e)
    return Promise.reject(e)
  }
}
