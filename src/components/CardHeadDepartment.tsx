import React from 'react'

export type CardHeadDepartmentItem = {}

import { Grid, Avatar } from '@material-ui/core'

export type CardHeadDepartmentProps = {}

export const CardHeadDepartment: React.FC<CardHeadDepartmentProps> = ({ teacher, ...rest }) => {
  return (
    <Grid
      className="CardHeadDepartment"
      container
      justifyContent="space-between"
      direction="row"
      alignItems="center"
      {...rest}
    >
      <Grid item xs={12} md={3}>
        <Avatar style={{ width: '172px', height: '172px' }} alt="Omurova" src={teacher.image} />
      </Grid>
      <Grid item xs={12} md={9}>
        <h4>Заведующий кафедрой: </h4>
        <span>{teacher.head_teacher}</span>
        <h4>Контактные данные кафедры:</h4>
        <ul>
          <li>Сайт: {teacher?.url}</li>
          <li>Адрес: {teacher?.address}</li>
          <li>Телефон: {teacher?.contacts}</li>
          <li>Почта: {teacher?.email}</li>
        </ul>
      </Grid>
    </Grid>
  )
}
