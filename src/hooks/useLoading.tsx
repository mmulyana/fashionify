import { useEffect, useState } from 'react'

export function useLoading() {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true)
    }, 800)
  }, [])

  return { isLoading }
}
