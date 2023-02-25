import merge from 'deepmerge'

const handleHttpErrors = (response: Response) => {
  if (!response.ok) {
    throw Error(`${response.status} - ${response.statusText}`)
  }

  return response
}

const fetchWrapper = async <T>(
  path: string,
  additionalOptions: RequestInit = {},
): Promise<T> => {
  const options = merge<RequestInit>(
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
    additionalOptions,
  )

  return fetch(path, options)
    .then(handleHttpErrors)
    .then((response) => {
      return response.json() as Promise<T>
    })
    .catch((error) => {
      console.error('Encountered an error during fetch request')
      console.error(error)
      throw error
    })
}

export { fetchWrapper }
