import React from 'react'

import { Grid, Avatar } from '@material-ui/core'

interface TeacherType {
  image: string
  full_name: string
  phone: string
  corporate: string
  personal: string
}

export const CardHeadDepartment: React.FC<TeacherType> = (teacher) => {
  return (
    <Grid
      className="CardHeadDepartment"
      container
      justifyContent="space-between"
      direction="row"
      alignItems="center"
    >
      <Grid item xs={12} md={3}>
        <Avatar style={{ width: '172px', height: '172px' }} alt="Omurova" src={teacher.image} />
      </Grid>
      <Grid item xs={12} md={9}>
        <h4>Заведующий кафедрой:</h4>
        <span>{teacher.full_name}</span>
        <h4>Контактные данные кафедры:</h4>
        <ul>
          {/* <li>Сайт: {teacher?.url}</li> */}
          {/* <li>Адрес: {teacher?.address}</li> */}
          <li>Телефон: {teacher?.phone}</li>
          <li>Почта: {teacher?.corporate}</li>
          <li>Почта: {teacher?.personal}</li>
        </ul>
      </Grid>
    </Grid>
  )
}
