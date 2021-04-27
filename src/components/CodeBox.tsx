import React from 'react'

export type CodeBoxProps = {
  isInline?: boolean
}

const CodeBox: React.FC<CodeBoxProps> = ({ children, isInline }) => {
  if (isInline) {
    return <span className="inline-code-box">{children}</span>
  }
  return <div className="code-box">{children}</div>
}

/* eslint-disable */
export default CodeBox
