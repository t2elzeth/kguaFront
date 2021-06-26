import { Header, Footer, News } from '@Components'
import Head from 'next/head'

export type StructurePageProps = {
  pageName: string,
}

const StructurePage: React.FC<StructurePageProps> = ({ pageName, children, }) => {
  return (
    <div className="structure-page">
      <Head >
        <title>{pageName}</title>
      </Head>
      <Header />
      <div className="main">
        {children}
      </div>
      <News />
      <Footer />
    </div>
  )
}

export default StructurePage
