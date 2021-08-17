import React from 'react'

export type CardTrainingUnitItem = {}

import { Grid } from '@material-ui/core'

export type CardTrainingUnitProps = {}

export const CardTrainingUnit: React.FC<CardTrainingUnitProps> = ({ unit, ...rest }) => {
  return (
    <Grid
      container
      className="CardTrainingUnit"
      direction="row"
      {...rest}
      style={{ height: '100%', textAlign: 'center' }}
    >
      <Grid item xs={12} md={12}>
        <img alt="img-faculty" src={unit.img} width={157} height={165} />
      </Grid>
      <Grid item xs={12} md={12}>
        <h4 className="CardTrainingUnitName">{unit.name}</h4>
      </Grid>
    </Grid>
  )
}
