import { makeStyles } from "@material-ui/core";
import { AppBar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Hidden, IconButton, ButtonGroup, Toolbar, Box } from "@material-ui/core";
import { useGlobalStyles } from '../GlobalStyles';
import { SubjectOutlined, AddCircleOutlineOutlined } from "@material-ui/icons";
import { useHistory, useLocation } from "react-router-dom";


const drawerWidth = 240;

const useStyles = makeStyles({
	root: {
		display: 'flex',
		justifyContent: "space-between"
	},
	pages: {
		background: "#f9f9f9",
		width: "100%"
	},
	drawer: {
		width: drawerWidth,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	active: {
		background: "#f4f4f4",
	},
	actions: {
		display: "flex",
		justifyContent: "space-between"
	}
})

const Layout = ({ children }) => {
	const classes = useStyles();
  const gclasses = useGlobalStyles();
  const history = useHistory();
  const location = useLocation();

  const menuItem = [
  	{
  		text: "My Notes",
  		icon: <SubjectOutlined color="secondary"/>,
  		path: "/"
  	},
  	{
  		text: "Create Notes",
  		icon: <AddCircleOutlineOutlined color="secondary"/>,
  		path: "/create"
  	}
  ]

	return (
		<div className={classes.root}>
			{/*<AppBar position="sticky">
				<Typography variant="h5" component="h2" className={gclasses.header}>Notes</Typography>
			</AppBar>*/}
			<Hidden smDown>
				
			<Drawer variant="permanent" anchor="left" classes={{ paper: classes.drawerPaper }} className={classes.drawer}>
				<div>
					<Typography variant="h5" color="textSecondary" className={gclasses.header}>
						Ninja Notes
					</Typography>
				</div>
				<List>
					{menuItem.map((item)=>(
						<ListItem key={item.text} button onClick={()=>history.push(item.path)} className={location.pathname == item.path ? classes.active : null}>
							<ListItemIcon>{item.icon}</ListItemIcon>
							<ListItemText primary={item.text}/>
						</ListItem>
					))}
				</List>
			</Drawer>
			</Hidden>
			<div className={classes.pages}>
			<AppBar position="sticky" >
			<Toolbar className={classes.root}>
				<Typography variant="h5" component="h2" className={gclasses.header}>Notes</Typography>
				<Hidden mdUp>
					<Box>
						{menuItem.map((item)=>(
							<IconButton key={item.text} button onClick={()=>history.push(item.path)} >{item.icon}</IconButton>
						))}
					</Box>
				</Hidden>
			</Toolbar>
			</AppBar>
				{children}
			</div>
		</div>
	)
}

export default Layout;