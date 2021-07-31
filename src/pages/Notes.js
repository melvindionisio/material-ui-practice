import { Typography, Container, Button, Grid, Fade } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import { useGlobalStyles } from '../GlobalStyles';
import { useStyles } from './styles/Notes';
import { useEffect, useState } from 'react';
import NoteCard from '../components/NoteCard';

export default function Notes() {
  const gclasses = useGlobalStyles();
  const classes =  useStyles();
  const [ notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('http://192.168.254.200:3001/notes')
      .then(res=>res.json())
      .then(data=>setNotes(data))
  }, [])

  const handleDelete = async(id) =>{
    await fetch('http://192.168.254.200:3001/notes/'+ id, {method: "DELETE"})
    
    const newNotes = notes.filter(note => note.id != id)
    setNotes(newNotes);
  }
  return (
  <Fade in={true}>
    <Container className={gclasses.container}>
      <Grid container spacing={2} >
        {
          notes.map((note)=>(
            <Grid item  xs={12} sm={6} md={6} lg={4}  key={note.id}>
              <NoteCard note={note} handleDelete={handleDelete}/>
            </Grid>
          ))
        }
      </Grid>
    </Container>
  </Fade>
  );
}
