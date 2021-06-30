export const Download = ({ document }) => {
  return (
    <a className="download-item">
      <img src="/images/pdf-icon.png" />
      <p>{document.title}</p>
      <img src="/images/download-icon.png" />
    </a>
  )
}