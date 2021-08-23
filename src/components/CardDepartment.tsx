import React from 'react'

export type CardDepartmentItem = {}

import { Grid } from '@material-ui/core'
import Link from 'next/link'

export type CardDepartmentProps = {
  items: CardDepartmentItem[]
}

export const CardDepartment: React.FC<CardDepartmentProps> = ({ items }) => {
  return (
    <Grid container justifyContent="space-between" direction="row">
      {items.map((item) => (
        <Link key={item.title} href={item.route}>
          <Grid item xs={12} md={5} className="block">
            <a style={{ cursor: 'pointer' }}>
              <h4 className="title">{item.title}</h4>
              <p>Заведующий кафедрой: </p>
              <span>{item.name}</span>
              <p>Контактные данные: </p>
              <span>{item.contacts}</span>
            </a>
          </Grid>
        </Link>
      ))}
    </Grid>
  )
}
