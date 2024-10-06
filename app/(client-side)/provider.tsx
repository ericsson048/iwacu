"use client"
import { SessionProvider } from "next-auth/react"
import { PropsWithChildren } from "react"

// Corrected typing for Children and added session definition
function Provider({ children }: PropsWithChildren) {

  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  )
}

export default Provider

