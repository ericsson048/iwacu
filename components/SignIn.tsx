"use client"
import React from 'react'
import { Button } from './ui/button'
import { signIn } from 'next-auth/react'

function SignIn() {
  return (
    <Button onClick={()=> signIn()}>Sign In</Button>
  )
}

export default SignIn