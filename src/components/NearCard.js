import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Place from '@material-ui/icons/Place'
import Avatar from '@material-ui/core/Avatar'
import Chip from '@material-ui/core/Chip'

const styles = theme => ({
	card: {
		display: 'flex'
	},
	details: {
		display: 'flex',
		flexDirection: 'column'
	},
	content: {
		flex: '1 0 auto'
	},
	cover: {
		width: 151,
		height: 151
	},
	controls: {
		display: 'flex',
		alignItems: 'center',
		paddingLeft: theme.spacing.unit,
		paddingBottom: theme.spacing.unit
	},
	playIcon: {
		height: 38,
		width: 38
	}
})

function MediaControlCard(props) {
	const { classes, theme } = props

	return (
		<div>
			<Card className={classes.card}>
				<div className={classes.details}>
					<CardContent className={classes.content}>
						<Typography variant="headline">{props.title}</Typography>
						<Typography variant="subheading" color="textSecondary">
							{props.sub}
						</Typography>
					</CardContent>
					<div className={classes.controls}>
						<Chip
							avatar={
								<Avatar>
									<Place />
								</Avatar>
							}
							label={props.distance}
							component="a"
							href="#openinmaps"
							clickable
						/>
					</div>
				</div>
				<CardMedia
					className={classes.cover}
					image="https://www.w3schools.com/w3css/img_lights.jpg"
					title="Live from space album cover"
				/>
			</Card>
		</div>
	)
}

MediaControlCard.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(MediaControlCard)
