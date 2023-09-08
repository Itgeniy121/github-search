import { useEffect, useState } from "react";

export function useSearch(value: string, delay = 300) {
  const[serched, setSearched] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => setSearched(value), delay)
    return () => clearTimeout(timer)
  }, [value, delay])
  return serched
}

