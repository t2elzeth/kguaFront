import { Sidebar, MobileMenu } from '@Components'
import Head from 'next/head'

export type TrainingUnitsProps = {
  pageName?: string
  pageTitle?: string
  image?: string
  links: any
}

const TrainingUnits: React.FC<TrainingUnitsProps> = ({
  pageName,
  pageTitle,
  children,
  links,
  image,
}) => {
  return (
    <div className="about-page">
      <Head>
        <title>{pageName}</title>
      </Head>
      <MobileMenu links={links} />
      <div className="main">
        <h2>{pageTitle}</h2>
        <img className="mainImage" src={image} alt="" />
        <div className="body">
          <Sidebar links={links} />
          <div className="content"> {children}</div>
        </div>
      </div>
      {/* <News /> */}
    </div>
  )
}

export default TrainingUnits
