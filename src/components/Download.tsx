export const Download = ({ document }) => {
  return (
    <a className="download-item" target="_blank" rel="noopener noreferrer" href={document.document}>
      <img alt="" src="/images/pdf-icon.png" />
      <p>{document.title}</p>
      <img alt="" src="/images/download-icon.png" />
    </a>
  )
}
