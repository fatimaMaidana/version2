import React from 'react';

import { AppBar, Toolbar, Typography,makeStyles, Container, Slider, FormGroup, FormControlLabel,Checkbox, FormControl, FormLabel  } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
      width: 300,
    },
  });

export default function Filtro() {
    const classes = useStyles();
    const [value, setValue] = React.useState([0, 100000]);

    const [tipos, setTipos] = React.useState({
        checkedAlquiler: true,
        checkedVentas: true,
        checkedCasa: true,
        checkedDpto: true,
    });
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const handleTipos = (event) => {
        setTipos({ ...tipos, [event.target.name]: event.target.checked });
    };

    return (
        <>
            <Container maxWidth="sm">
                <div className={classes.root}>
                    <FormControl>
                        <FormLabel component="legend">Alquiler o venta</FormLabel>
                        <FormGroup row>
                            <FormControlLabel
                                control={
                                <Checkbox 
                                    checked={tipos.checkedAlquiler} 
                                    onChange={handleTipos} 
                                    name="checkedAlquiler" 
                                    color="primary"
                                />}
                                label="Alquiler"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={tipos.checkedVentas}
                                    onChange={handleTipos}
                                    name="checkedVentas"
                                    color="primary"
                                />
                                }
                                label="Venta"
                            />
                        </FormGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel component="legend">Casita o dpto</FormLabel>
                        <FormGroup row>
                            <FormControlLabel
                                control={
                                <Checkbox 
                                    checked={tipos.checkedCasa} 
                                    onChange={handleTipos} 
                                    name="checkedCasa" 
                                    color="primary"
                                />}
                                label="Casa"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={tipos.checkedDpto}
                                    onChange={handleTipos}
                                    name="checkedDpto"
                                    color="primary"
                                />
                                }
                                label="Departamento"
                            />
                        </FormGroup>
                    </FormControl>


                    <Typography id="range-slider" gutterBottom>
                        Precio
                    </Typography>
                    <Slider
                        value={value}
                        max={100000}
                        step={1000}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                        valueLabelFormat={(value)=>{return `${value/1000}K`}}
                    />
                </div>
            </Container>
        </>
    );
}