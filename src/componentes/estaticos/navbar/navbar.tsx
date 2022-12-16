import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import './navbar.css'
import useLocalStorage from 'react-use-localstorage';
import { toast } from 'react-toastify';


function Navbar() {

    const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();
    
    function goLogout(){
        setToken('')
        toast.info('Usuário deslogado!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        navigate('/login')

    }


    return (
        <>
            <AppBar position="static" className='gradiente central' >
                <Toolbar variant="dense">

                    <Box display="flex" justifyContent="start">
                    <Link to="/home" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    home
                                </Typography>
                            </Box>
                        </Link>

                        <Link to="/posts" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    postagens
                                </Typography>
                            </Box>
                        </Link>

                        <Link to="/temas" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                temas
                            </Typography>
                        </Box>
                        </Link>

                        <Link to="/formularioTema" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                cadastrar tema
                            </Typography>
                        </Box>
                        </Link>

                        <Grid className='central ml sizeIcon'>
                        <Box mx={1} className='cursor'>

                            <Link to='/login' className='text-decorator-none cursor'>
                                <a href="/" rel="noopener noreferrer">
                                    <AccountBoxIcon style={{ fontSize: 30, color: "white" }} />
                                </a>
                            </Link>
                            
                            <Link to='/login' className='text-decorator-none cursor' onClick={goLogout}>
                                <a href="/" rel="noopener noreferrer">
                                    <ExitToAppIcon style={{ fontSize: 30, color: "white" }} />
                                </a>
                            </Link>

                        </Box>
                    </Grid>


                    </Box>


                </Toolbar>
            </AppBar>

        </>
    )
}

export default Navbar;