import { Typography, Button, Container, TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Fade } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { useStyles } from './styles/Create';
import { useState } from 'react';
import { useGlobalStyles } from '../GlobalStyles';
import { useHistory } from "react-router-dom";


export default function Create() {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState('todos');
  const history = useHistory();

  const gclasses = useGlobalStyles();

  const handleSubmit = (e) => {
    setTitleError(false);
    setDetailsError(false);

    e.preventDefault();
    if (title == '') {
      setTitleError(true);
    }
    if (details == '') {
      setDetailsError(true);
    }

    if (title && details) {
      fetch('http://192.168.254.200:3001/notes', {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({ title, category, details})
      })
      .then(()=> history.push('/'))
    }
  }

  return (
    <Fade in={true}>
    <Container className={gclasses.container}>
      <Typography variant="h6" component="h2" color="textSecondary" gutterBottom>
        Create New Notes
      </Typography>
      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <TextField value={title} onChange={(e)=>setTitle(e.target.value)} label="Note Title" variant="outlined" color="secondary" fullWidth required className={classes.field} error={titleError}/>
        <TextField value={details} onChange={(e)=>setDetails(e.target.value)} label="Details" variant="outlined" color="secondary" fullWidth required multiline rows={4} className={classes.field} error={detailsError} />

        <FormControl className={classes.field} color="textSecondary">
          <FormLabel>Note Category</FormLabel>
          <RadioGroup  value={category} onChange={(e)=>setCategory(e.target.value)}>
            <FormControlLabel value="money" control={<Radio color="primary" />} label="Money"/>
            <FormControlLabel value="todos" control={<Radio color="primary" />} label="Todos"/>
            <FormControlLabel value="reminder" control={<Radio color="primary" />} label="Reminder"/>
            <FormControlLabel value="work" control={<Radio color="primary" />} label="Work"/>
          </RadioGroup>
        </FormControl>
        <Button
        type="submit"
        variant="contained"
        color="secondary"
        endIcon={<KeyboardArrowRightIcon />}
      >
        Submit
      </Button>
      </form>
    </Container>
    </Fade>
  );
} 
