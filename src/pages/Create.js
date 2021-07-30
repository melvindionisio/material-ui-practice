import { Typography, Button, Container, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({});

export default function Create() {
  const classes = useStyles();

  return (
    <Container>
      <Typography variant="h6" component="h2" color="secondary" gutterBottom>
        Create New Notes
      </Typography>

      <Button
        type="submit"
        variant="contained"
        color="secondary"
        endIcon={<SendIcon />}
      >
        Submit
      </Button>
    </Container>
  );
}
