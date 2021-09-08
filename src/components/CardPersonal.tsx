import { Avatar, Card, CardContent } from '@material-ui/core'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import { memo } from 'react'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: '#F1F4F9',
    },
    content: {
      display: 'flex',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      },
    },
    avatar: {
      width: 187,
      height: 187,
      margin: theme.spacing(3),
      [theme.breakpoints.down('md')]: {
        width: 100,
        height: 100,
        margin: 0,
      },
    },
  })
)

const CardPersonal = ({ image, full_name, position, contacts }: any) => {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Avatar alt="Remy Sharp" src={image} className={classes.avatar} />
        <div>
          <h3 style={{ marginBottom: 0 }}>{full_name}</h3>
          <p style={{ marginBottom: 40 }}>{position}</p>
          <h6>{contacts?.phone}</h6>
          <h6>{contacts?.email?.corporate}</h6>
          <h6>{contacts?.email?.personal}</h6>
        </div>
      </CardContent>
    </Card>
  )
}

export default memo(CardPersonal)
