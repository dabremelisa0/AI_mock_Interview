import React from 'react'
import { ReactNode } from 'react'
import { Toaster } from 'sonner'
import { isAuthenticated } from '@/lib/actions/auth.action'

const Authlayout = async ({children}:{children:ReactNode}) => {
  const isUserAuthenticated = await isAuthenticated();
  return (
    <div className='auth-layout'>
      {children}
      <Toaster/>
      
      
      </div>
  )
}

export default Authlayout