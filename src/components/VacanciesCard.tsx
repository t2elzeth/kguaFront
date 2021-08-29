import { Card, CardContent, makeStyles, Typography, Avatar, Collapse } from '@material-ui/core'
import { memo, useState } from 'react'

const useStyles = makeStyles((theme: any) => ({
  root: {
    display: 'flex',
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    backgroundColor: '#F1F4F9',
    background: '#F1F4F9',
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.1)',
    borderRadius: 10,
    cursor: 'pointer',
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
    marginBottom: '0 !important',
  },
}))

const VacanciesCard = ({ img, title, desc }: any) => {
  const classes = useStyles()

  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card className={classes.root} onClick={handleExpandClick}>
      <Avatar className={classes.img} src={img}></Avatar>
      <CardContent>
        <Typography className={classes.title}>{title}</Typography>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography style={{ paddingBottom: 0, marginBottom: 0 }}>{desc}</Typography>
          </CardContent>
        </Collapse>
      </CardContent>
    </Card>
  )
}

export default memo(VacanciesCard)
