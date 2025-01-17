import React from 'react'
import { Typography, Paper, Avatar, Button } from '@material-ui/core'
import VerifiedUserOutlined from '@material-ui/icons/VerifiedUserOutlined'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link } from 'react-router-dom'
import firebase from '../firebase'

const styles = theme => ({
	main: {
		width: 'auto',
		display: 'block', 
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
			width: 400,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	paper: {
		marginTop: theme.spacing.unit * 8,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
	},
	avatar: {
		margin: theme.spacing.unit,
		backgroundColor: theme.palette.primary.main,
	},
	submit: {
		marginTop: theme.spacing.unit * 3,
	},
})

function HomePage(props) {
	const { classes } = props
	const yo = {

	}
	return (
		<main className={classes.main}>
			<Paper className={classes.paper}>
				<Avatar className={classes.avatar}>
					<VerifiedUserOutlined />
				</Avatar>
				<Typography component="h1" variant="h5">
					Hello User!
				</Typography>
				<Typography component="h1" variant="h5">
					Welcome to MindTalk WebApp
					<br></br>
				</Typography>
				 {!firebase.isAuthenticated() ?
				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="primary"
					component={Link}
					to="/register"
					className={classes.submit}>
					Register
				  </Button> 
				  :
				  <br></br>
				   }  
				   { !firebase.isAuthenticated() ?
				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="primary"
					component={Link}
					to="/login"
					className={classes.submit}>
					Login
				  </Button>
                 :
				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="primary"
					component={Link}
					to="/dashboard"
					className={classes.submit}>
					Dashboard
          		</Button>
				  }
			</Paper>
		</main>
	)
}

export default withStyles(styles)(HomePage)
