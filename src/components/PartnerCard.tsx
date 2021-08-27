import { Card, CardContent, makeStyles, Typography, Avatar } from '@material-ui/core'
import { memo } from 'react'

const useStyles = makeStyles((theme: any) => ({
  root: {
    display: 'flex',
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    background: '#F1F4F9',
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.1)',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
    color: '#464646',
    marginBottom: '0px !important',
    paddingBottom: '0px !important',
  },
  img: {
    height: 73,
    width: 73,
  },
}))

const PartnerCard = ({ img, title }: any) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <Avatar className={classes.img} src={img}></Avatar>
      <CardContent>
        <Typography className={classes.title}>{title}</Typography>
      </CardContent>
    </Card>
  )
}

export default memo(PartnerCard)
