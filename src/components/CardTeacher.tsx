import React from 'react'

import { Grid, Avatar } from '@material-ui/core'

interface TeacherType {
  image: string
  full_name: string
  position: string
}

export const CardTeacher: React.FC<TeacherType> = (teacher) => {
  return (
    <Grid
      className="CardTeacher"
      container
      justifyContent="space-between"
      direction="row"
      alignItems="center"
    >
      <Grid item xs={12} md={2} style={{ display: 'flex', justifyContent: 'center' }}>
        <Avatar
          style={{ width: '77px', height: '77px', margin: '0 !important', padding: '0 !important' }}
          alt="Omurova"
          src={teacher.image}
        />
      </Grid>
      <Grid item xs={12} md={10}>
        <h5 className="CardTeacherName">{teacher.full_name}</h5>
        <p>{teacher.position}</p>
      </Grid>
    </Grid>
  )
}
