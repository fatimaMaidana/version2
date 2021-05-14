import React from 'react';
import {Button, TextField, makeStyles, Grid} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));


const Contacto = () => {
    const classes = useStyles();

    const [state, setState] = React.useState();

    const handleForm = (event) => {
        setState({ ...state, [event.target.id]: event.target.value });
    };

    return (
        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
        >
    
        <Grid item xs={9} xm={6}>
            <h2>Contacta con Nosotros</h2>
            <form className={classes.root}>
                <div>
                    <TextField style={{margin:10}} id="nombre" label="Nombre" />
                    <TextField id="apellido" label="Apellido" variant="filled" />
                </div>
                
                <TextField id="email" label="Email" variant="outlined" />
                <TextField id="telefono" label="Telefono" variant="outlined" />
    
                <div>
                    <Button variant="contained" color="primary">
                        Enviar
                    </Button>
                </div>
                
            </form>
        </Grid>   
    
        </Grid> 
    );


}

export default Contacto;