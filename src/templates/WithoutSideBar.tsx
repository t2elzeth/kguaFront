import { Header, Footer, News } from '@Components'
import Head from 'next/head'

export type WithoutSideBarProps = {
  pageName: string
}

const WithoutSideBar: React.FC<WithoutSideBarProps> = ({ pageName, children }) => {
  return (
    <div className="structure-page">
      <Head>
        <title>{pageName}</title>
      </Head>
      <div className="main">{children}</div>
      <News />
    </div>
  )
}

export default WithoutSideBar
