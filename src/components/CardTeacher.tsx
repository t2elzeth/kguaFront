import React from 'react'

export type CardTeacherItem = {}

import { Grid, Avatar } from '@material-ui/core'

export type CardTeacherProps = {}

export const CardTeacher: React.FC<CardTeacherProps> = ({ teacher, ...rest }) => {
  return (
    <Grid
      className="CardTeacher"
      container
      justifyContent="space-between"
      direction="row"
      alignItems="center"
      {...rest}
    >
      <Grid item xs={12} md={2} style={{ display: 'flex', justifyContent: 'center' }}>
        <Avatar style={{ width: '77px', height: '77px' }} alt="Omurova" src={teacher.image} />
      </Grid>
      <Grid item xs={12} md={10}>
        <h5 className="CardTeacherName">{teacher.name}</h5>
        <p>{teacher.position}</p>
      </Grid>
    </Grid>
  )
}
