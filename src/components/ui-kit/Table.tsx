import React from 'react'
import classnames from 'classnames'

export type RowProps = {
  onClick?: ([any]: any) => void
  data: string[]
  link?: string
}

export type TableProps = {
  className?: string
  headRows: string[]
  clickableRows?: RowProps[]
  rows?: string[][]
  plainTable?: boolean
  isDateExists?: boolean
  showCopy?: boolean
}

export const Table: React.FC<TableProps> = ({ className, headRows, clickableRows, rows }) => {
  return (
    <table className={classnames('table', className)}>
      <thead>
        <tr>
          {headRows.map((headRow, index) => (
            <th key={index}>{headRow}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {clickableRows
          ? clickableRows.length > 0 &&
            clickableRows.map(({ data, link }, index) => (
              <tr key={index}>
                {data.map((tableData, index) => (
                  <td key={index}>
                    <a href={link}>{tableData}</a>
                  </td>
                ))}
              </tr>
            ))
          : rows &&
            rows.length > 0 &&
            rows.map((tableRow, index) => (
              <tr key={index}>
                {tableRow.map((tableData, index) => (
                  <td key={index} id={tableData}>
                    {tableData}
                  </td>
                ))}
              </tr>
            ))}
      </tbody>
    </table>
  )
}
