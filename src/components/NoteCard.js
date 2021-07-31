import { Card, CardHeader, CardContent, IconButton, Typography } from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors"

const useStyles = makeStyles((theme)=>({
	action: {
		borderRadius: "50%",
		"&:hover" :{
			color: red[500]
		}
	}
}));

const NoteCard = ({ note, handleDelete }) => {
	const classes = useStyles();
	return (
		<Card elevation={1} variant="outlined">
			<CardHeader 
				title={note.title}
				subheader={note.category.toUpperCase()}
				action={
					<IconButton className={classes.action} onClick={()=>handleDelete(note.id)}>
						<DeleteOutlined />
					</IconButton>
				}/>
			<CardContent>
				<Typography variant="body2" color="textSecondary">{note.details}</Typography>
			</CardContent>
		</Card>
	)
}

export default NoteCard