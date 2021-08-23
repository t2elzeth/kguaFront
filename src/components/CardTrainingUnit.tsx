import React from 'react'

import { Grid } from '@material-ui/core'

interface UnitType {
  name: string
  img: string
}

export const CardTrainingUnit: React.FC<UnitType> = ({ name, img }) => {
  return (
    <Grid
      container
      className="CardTrainingUnit"
      direction="row"
      style={{ height: '100%', textAlign: 'center' }}
    >
      <Grid item xs={12} md={12}>
        <img alt="img-faculty" src={img} width={157} height={165} />
      </Grid>
      <Grid item xs={12} md={12}>
        <h4 className="CardTrainingUnitName">{name}</h4>
      </Grid>
    </Grid>
  )
}
