import { Typography, Container } from "@material-ui/core";

export default function Notes() {
  return (
    <Container>
      <Typography
        variant="h5"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Notes
      </Typography>
    </Container>
  );
}
