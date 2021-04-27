import { useRouter } from 'next/router'
import { Sidebar, Logo, LogoSize } from "@Components";

const StickySidebar: React.FC<any> = ({ sidebarItems, logoText }: any) => {
  const router = useRouter()

  return(
  <div className="sticky-sidebar">
    <Logo
      size={LogoSize.NONE}
      text={logoText}
      className="doc-header-logo"
      onLogoClick={() => router.push('/')}
    />
    <Sidebar
      items={sidebarItems}
      className="sidebar-custom"
      withIcon={false}
      activeButtonClassName='sidebar__active-item'
    />
  </div>
  )
};

export default StickySidebar
