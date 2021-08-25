import {
  Button,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  makeStyles,
  Typography,
  Collapse,
  IconButton,
} from '@material-ui/core'
import { memo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'

const useStyles = makeStyles((theme: any) => ({
  root: {
    margin: theme.spacing(2),
    maxWidth: 365,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#0054A6',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', //
  },
}))

const CircleCard = ({ img, title, desc }: any) => {
  const classes = useStyles()
  const { t } = useTranslation()
  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} title="Paella dish" image={img} />
      <CardContent>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={handleExpandClick} style={{ background: '#ED1A3B', color: 'white' }}>
          <ArrowRightAltIcon />
        </IconButton>
        <Button onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
          {t('learn_more')}
        </Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{desc}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default memo(CircleCard)
