'use client'
import React from 'react'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'


const SharedProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    {children}
      <ProgressBar
        height="4px"
        color="#c5a07a"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  )
}

export default SharedProvider
