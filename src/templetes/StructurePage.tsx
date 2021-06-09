import { Header, Footer, News, Sidebar } from '@Components'
import Head from 'next/head'

export type StructurePageProps = {
  pageName: string,
  pageTitle: string,
  image: string
}

const StructurePage: React.FC<StructurePageProps> = ({ pageName, pageTitle, children, image }) => {
  return (
    <div className="structure-page">
      <Head >
        <title>{pageName}</title>
      </Head>
      <Header />
      <div className="main">
        <h2>{pageTitle}</h2>
        <img className="image" src={image} />
        <div className="body">
          <Sidebar />
          <div className="content"> {children}</div>
        </div>
      </div>
      <News />
      <Footer />
    </div>
  )
}

export default StructurePage
