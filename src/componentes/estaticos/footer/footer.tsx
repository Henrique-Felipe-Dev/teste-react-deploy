import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Box } from "@mui/material";
import Link from "@material-ui/core/Link";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './footer.css'

export default function Footer() {
    return <footer>
        
        <Box px={{ xs: 3, sm: 10 }}
            py={{ xs: 5, sm: 10 }}
            className="gradient">

            <Container maxWidth="lg" >
                <Grid container spacing={10} className=" textoFooter">
                    <Grid item xs={12} sm={4} >
                        <Box >

                            <Box borderBottom={1} className='textoBold'  > Blog Pessoal </Box>
                            <Box className="textoPadding" >
                                <Link href="/" color="inherit">
                                    Home
                                </Link>
                            </Box>

                            <Box className="textoPadding" >
                                <Link href="/" color="inherit">
                                    Postagens
                                </Link>
                            </Box>

                            <Box className="textoPadding" >
                                <Link href="/" color="inherit">
                                    Temas
                                </Link>
                            </Box>
                            <Box className="textoPadding" >
                                <Link href="/" color="inherit">
                                    Cadastrar Temas
                                </Link>
                            </Box>
                            <Box className="textoPadding" >
                                <Link href="/" color="inherit">
                                    Sair
                                </Link>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={4} >
                        <Box borderBottom={1} className='textoBold' > Minha Conta </Box>
                        <Box className="textoPadding">
                            <Link href="/" color="inherit">
                                Entrar
                            </Link>
                        </Box>

                        <Box className="textoPadding" >
                            <Link href="/" color="inherit">
                                Cadastrar
                            </Link>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={4} >
                        <Box borderBottom={1} className='textoBold' > Atendimento </Box>
                        <Box className="textoPadding" >
                            <Link href="/" color="inherit">
                                  Sobre Mim
                            </Link>
                        </Box>

                        <Box className="textoPadding" >
                            <Link href="/" color="inherit">
                                  (21) 96777-5163
                            </Link>
                        </Box>

                        <Box className="textoPadding" >
                            <Link target='_blank' href="https://www.google.com/search?client=opera-gx&hs=CuX&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALiCzsZ
                            rRGFh254LEmWop6R6G0DumSPYnQ:1669840624349&q=local+de+reciclagem&rflfq=1&num=10&sa=X&ved=2ahUKEwjyrfuJ4db7A
                            hVQq5UCHcxUBa8QjGp6BAgQEAE&biw=1325&bih=637&dpr=1#rlfi=hd:;si:2337052352862236241,a;mv:[[-22.8420302,-
                            w43.2460932],[-22.8913288,-43.284319599999996]]" color="inherit">
                            R. Castro Lopes, nº : 65
                            </Link>
                        </Box>

                        <Box className="textoPadding">
                            <Link href="/" color="inherit">
                                daniel.andrade1615@gmail.com
                            </Link>
                        </Box>
                    </Grid>

                    {/*  <Grid item xs={12} sm={3} >
                            <Box borderBottom={1} className='textoBold' > Redes Sociais </Box>
                            <Box className="textoPadding">
                                <Link target='_blank' href="/" color="inherit">
                                    Instagram
                                </Link>
                            </Box>
                            
                            <Box className="textoPadding">
                                <Link target='_blank' href="" color="inherit">
                                    Facebook
                                </Link>
                            </Box>
                            
                            <Box className="textoPadding">
                                <Link target='_blank' href="/" color="inherit">
                                    Linkedin
                                </Link>
                            </Box>
                        </Grid> */}
                </Grid>


                <Box display="flex" alignItems="center" justifyContent="center" pt={'2rem'}>
                            <a href="https://www.facebook.com/generationbrasil" target="_blank" rel="noopener noreferrer">
                                <FacebookIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                            <a href="https://www.instagram.com/generationbrasil/" target="_blank" rel="noopener noreferrer">
                                <InstagramIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                            <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                        </Box>
                
                <Box className="textoFooter textoWedoCare" >
                    Redes Sociais
                </Box>

                <Box className="textoFooter textoWedoCare" pt={'3rem'} >
                    Daniel de A. da Silva &reg; {new Date().getFullYear()}
                </Box>

            </Container>
        </Box>
    </footer>
}