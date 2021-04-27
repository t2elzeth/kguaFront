function Error({ statusCode }: any) {
  console.log('statusCode', statusCode)
  return <div>Error page</div>
}

Error.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
