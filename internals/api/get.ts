import axios from '.'

interface Get {
  baseURL?: string
  endpoint: string
  params?: { [key: string]: any }
  headers?: { [key: string]: string }
  isAuth?: boolean
}

/**
 * @function Get
 * @example
 * import Get from 'internals/api/get'
 *
 * await Get({
 *  title: 'Example API',
 *  endpoint: '/internal/v1/profile',
 * });
 */
const Get = async ({ baseURL, endpoint, params, headers = {} }: Get) => {
  const { status, ...response } =
    (await axios.get(endpoint, {
      headers: headers || {},
      params,
      baseURL,
    })) || {}
  const isSuccess = status === 200 && response.data === 2200

  if (isSuccess) {
    return response.data
  }

  return {
    code: 2200,
    message: response.data?.message || '',
    ...response.data,
  }
}

export default Get
