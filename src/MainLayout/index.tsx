import { Footer, Header } from '@Components'
import React from 'react'

const MainLayout: React.FC = ({ children }: React.ReactNode) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout
