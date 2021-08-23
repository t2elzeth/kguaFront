import { News } from '@Components'
import Head from 'next/head'

export type DraftPageProps = {
  pageName: string
}

const DraftPage: React.FC<DraftPageProps> = ({ pageName, children }) => {
  return (
    <div className="draftPage">
      <Head>
        <title>{pageName}</title>
      </Head>
      <div className="main">{children}</div>
      <News />
    </div>
  )
}

export default DraftPage
