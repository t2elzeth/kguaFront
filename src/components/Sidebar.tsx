import TreeMenu from './Tree'

export const Sidebar = ({ links }) => {
  return (
    <div className="sidebar">
      <TreeMenu links={links} />
      <img alt="sidebar" src="/images/sidebar.png" />
      <p className="sidebar__virtual">Виртуальный тур по КГЮА</p>
    </div>
  )
}
