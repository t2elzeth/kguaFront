import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Loader() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <CircularProgress />
    </div>
  )
}
