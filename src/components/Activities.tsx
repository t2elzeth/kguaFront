import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 150,
  },
})

export function Activities({ data, onClick }: any) {
  const classes = useStyles()
  const { t } = useTranslation('common')

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          onClick={onClick}
          className={classes.media}
          image={data?.images[0]?.image}
          title={data?.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" noWrap>
            {data?.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={onClick}>
          {t('learn_more')}
        </Button>
      </CardActions>
    </Card>
  )
}
