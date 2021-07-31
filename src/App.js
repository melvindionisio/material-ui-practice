import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import Layout from './components/Layout';
import { createTheme, ThemeProvider } from "@material-ui/core";
import { amber, indigo, red} from "@material-ui/core/colors"

const theme = createTheme({
  palette: {
    primary: {
      main: indigo[600]
    },
    secondary: {
      main: amber[600]
    }, 
    delikado: {
      main: red[600]
    }
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
  spacing: 8,
});
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Notes />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
