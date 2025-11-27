import { useMemo } from 'react'

export default function useScrollAnimation() {
  const variants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 24 },
      show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
    }),
    []
  )

  return { variants }
}
