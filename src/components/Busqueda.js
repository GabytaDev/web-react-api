import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

const Busqueda = ({actualizarInput,clickBoton})=>{
    return(
       <Stack spacing={2} direction="row">
            <Box>
                <TextField 
                onChange={actualizarInput}
                label="Search" variant="standard" size="small"
                />
                <Button onClick={clickBoton} variant="outlined">
                 Search
                </Button>
            </Box>
        </Stack>
    )
}

export default Busqueda;