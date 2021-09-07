import { Footer, HeaderTwo } from '@Components'
import React from 'react'

const MainLayout: React.FC = ({ children }: any) => {
  return (
    <div>
      {/* <Header /> */}
      <HeaderTwo />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout
