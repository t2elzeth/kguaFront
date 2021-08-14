import classNames from 'classnames'
import React from 'react'

export type CardDepartmentItem = {}

import { Grid } from '@material-ui/core'

export type CardDepartmentProps = {
  items: CardDepartmentItem[]
}

export const CardDepartment: React.FC<CardDepartmentProps> = ({ items }) => {
  return (
    <Grid container justifyContent="space-between" direction="row">
      {items.map((item) => (
        <Grid key={item.title} item xs={12} md={5} className="block">
          <h4 className="title">{item.title}</h4>
          <p>Заведующий кафедрой: </p>
          <span>{item.name}</span>
          <p>Контактные данные: </p>
          <span>{item.contacts}</span>
        </Grid>
      ))}
    </Grid>
    // <div className="cardDepartment">
    //   {items.map((item) => (
    // <div key={item.title} className="block">
    //   <h4 className="title">{item.title}</h4>
    //   <p>Заведующий кафедрой: </p>
    //   <span>{item.name}</span>
    //   <p>Контактные данные: </p>
    //   <span>{item.contacts}</span>
    // </div>
    //   ))}
    // </div>
  )
}
