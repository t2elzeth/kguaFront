import classnames from 'classnames'

export type LinkBoxProps = {
  title?: string
  description?: string
  link?: string
}

const LinkBox: React.FC<LinkBoxProps> = ({ title, description, link }) => (
  <div className={classnames('link-box', !title && 'empty')}>
    <a href={link} className="link">
      {title}
    </a>
    <p>{description}</p>
  </div>
)

export default LinkBox
