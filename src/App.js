import Navbar from './components/Navbar.js';
import Inicio from './components/Inicio.js';
import Catalogo from './components/Catalogo.js';
import Contacto from './components/Contacto.js';
import {Switch, Route} from 'react-router-dom';
import { ThemeProvider} from '@material-ui/core';
import theme from './ThemeConfig.js';
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar></Navbar>
      </ThemeProvider>
      <Switch>
          <Route path="/catalogo">
            <Catalogo></Catalogo> 
          </Route>
          <Route path="/contacto">
            <Contacto></Contacto>
          </Route>
          <Route path="/">
          <div className="content">
            <Inicio></Inicio>
          </div>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
