/* eslint-ignore no-undefined */
import React from 'react'

import {
  exportClassComponent,
  runGQLMutation,
  baseClassComponentPropTypes,
} from '../utils'
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
  Grid,
} from '@material-ui/core'
import {
  MoreVert as MoreVertIcon,
  Favorite as FavoriteIcon,
  Share as ShareIcon,
} from '@material-ui/icons'
import { red } from '@material-ui/core/colors'
import { useHistory } from 'react-router-dom'
import { RouteLinks } from '../Routes'
import Page from '../Page'

const gymCardStyles = makeStyles(theme => ({
  root: {
    width: 375,
    height: 420,
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
  const history = useHistory()

  const {
    id,
    name,
    website,
    address1,
    address2,
    city,
    state,
    zip,
    picture,
  } = gym

  const handleClick = async event => {
    event.preventDefault()
    history.push(`${RouteLinks.GYMS}/${id}`)
  }

  return (
    <Grid item>
      <Card className={classes.root} onClick={handleClick}>
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
          component={picture ? undefined : 'div'}
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
    </Grid>
  )
}

GymCard.propTypes = {
  gym: PropTypes.object,
}

const gymsStyles = () => ({
  root: {},
})

class GymsPage extends Page {
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
      const result = await runGQLMutation(listGyms, { limit: 36 })
      console.error('GymsPage -> componentDidMount -> result', result)
      gyms = result.data.listGyms.items
    } catch (e) {
      console.error('GymsPage -> componentDidMount -> e', e)
      this.props.openSnack('Error getting gyms.', 'error')
    }

    this.setState({ isLoading: false, gyms })
    this.doneLoading()
  }

  render = () => {
    const { isLoading, gyms } = this.state

    return (
      !isLoading && (
        <Grid
          className={this.classes.root}
          container
          justify="center"
          spacing={3}>
          {gyms && gyms.map(gym => <GymCard key={gym.key} gym={gym} />)}
        </Grid>
      )
    )
  }
}

GymsPage.propTypes = {
  ...baseClassComponentPropTypes,
}

export default exportClassComponent(GymsPage, gymsStyles)
