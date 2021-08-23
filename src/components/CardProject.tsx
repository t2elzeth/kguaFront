import { memo } from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core'

const CardProject = ({ data }) => {
  return (
    <Card className="CardProject">
      <CardActionArea>
        <CardMedia
          component="img"
          alt={data.name}
          width={395}
          height={316}
          image={data.img}
          title={data.name}
        />
        <CardContent>
          <Typography className="title" variant="p">
            {data.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default memo(CardProject)
