import React, { Component } from 'react'

import { exportClassComponent, runGQL } from '../utils'
import { listGyms } from '../graphql/queries'
import PropTypes from 'prop-types'
import {
  Card,
  CardContent,
  Typography,
  makeStyles,
  CardHeader,
  CardMedia,
  Avatar,
  IconButton,
  CardActions,
  Container,
} from '@material-ui/core'
import {
  MoreVert as MoreVertIcon,
  Favorite as FavoriteIcon,
  Share as ShareIcon,
} from '@material-ui/icons'
import { red } from '@material-ui/core/colors'

const gymCardStyles = makeStyles(theme => ({
  root: {
    width: 375,
    height: 420,
    margin: theme.spacing(3),
    float: 'left',
    textAlign: 'left',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}))

const GymCard = ({ gym }) => {
  const classes = gymCardStyles()

  const { name, website, address1, address2, city, state, zip, picture } = gym

  return (
    <Card className={classes.root}>
      <CardHeader
        title={name}
        subheader={website}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {name ? name.replace(/[^A-Z]/g, '') : ''}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardMedia
        className={classes.media}
        image={picture}
        title={`${name} picture`}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {address1}
        </Typography>
        {address2 && (
          <Typography variant="body2" color="textSecondary" component="p">
            {address2}
          </Typography>
        )}
        <Typography variant="body2" color="textSecondary" component="p">
          {city}, {state} {zip}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

GymCard.propTypes = {
  gym: PropTypes.object,
}

const gymsStyles = theme => ({
  root: {},
})

class GymsPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      gyms: null,
    }
    this.classes = this.props.classes
  }

  componentDidMount = async () => {
    let gyms
    try {
      const result = await runGQL(listGyms)
      gyms = result.data.listGyms.items
    } catch (e) {
      console.log(e)
      this.props.openSnack('Error getting gyms.', 'error')
    }

    this.setState({ isLoading: false, gyms })
  }

  render = () => {
    const { isLoading, gyms } = this.state

    return (
      !isLoading && (
        <Container maxWidth component="div" className={this.classes.root}>
          {gyms.map(gym => (
            <GymCard key={gym.key} gym={gym} />
          ))}
        </Container>
      )
    )
  }
}

GymsPage.propTypes = {
  classes: PropTypes.object,
  openSnack: PropTypes.func,
}

export default exportClassComponent(GymsPage, gymsStyles)
