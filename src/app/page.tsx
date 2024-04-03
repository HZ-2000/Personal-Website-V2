import React from 'react'
import sea from '/assets/img/ivan-bandura-2FEE6BR343k-unsplash.jpg'
import mountain from '/assets/img/benjamin-voros-phIFdC6lA4E-unsplash.jpg'
import {
    Box,
    Button,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Container,
    Typography,
    Divider,
    Grid,
    IconButton
} from '@mui/material';
import { Stack } from '@mui/system';
import { projects } from '../common/common';


import GitHubIcon from '@mui/icons-material/GitHub';
import Image from 'next/image';


export default function Home(){
    return (
        <>
            {/* main hero section */}
            <Box
                sx={{
                    width: "100%",
                    height: "80vh",
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${sea})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Typography variant="h1" color="#fff">Hello!</Typography>
            </Box>


            <Container maxWidth="lg">
                <Stack
                    spacing={8}
                    alignItems="center"
                    sx={{ mt: 8 }}
                >

                    <Divider flexItem><Typography color="text.primary">ABOUT</Typography></Divider>

                    <Card sx={{ display: 'flex' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent>
                                <Typography gutterBottom variant="h3" component="div">
                                    Hi, I'm Zach
                                </Typography>
                                <Typography variant="h6" color="text.secondary">
                                    I currently intern at Schweitzer Engineering Labrotories
                                    where I contribute to our internal tooling. Most of what I do is full
                                    stack web apps with React, Typescript, Python, and other technologies that
                                    support our stack. I also attend the University of Idaho pursuing a degree
                                    in Computer Science, graduating this May. Outside of school I love nature
                                    and the activities you do in it, including but not limited too: Mountain
                                    Biking, Hiking, Backpacking, and Skiing.
                                </Typography>

                                <Box 
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    height="50%"
                                >
                                    <IconButton href='https://github.com/HZ-2000'>
                                        <GitHubIcon fontSize='large'/>
                                    </IconButton>
                                </Box>
                            </CardContent>
                        </Box>
                        <CardMedia
                            component="img"
                            alt="roboto"
                            height="500"
                            sx={{ width: 500 }}
                            image={}
                        />
                    </Card>

                    <Divider flexItem><Typography color="text.primary">PROJECTS</Typography></Divider>

                    <Grid container spacing={2}>
                        {projects.slice(0, 2).map((project: any) => {
                            return (
                                <Grid item xs key={project.name}>
                                    <Card>
                                        <CardMedia
                                            component="img"
                                            alt="roboto"
                                            height="500"
                                            image={project.image}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h3" component="div">
                                                {project.name}
                                            </Typography>
                                            <Typography variant="body1" color="text.secondary">
                                                {project.description}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="medium" href={project.link}>Code</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )
                        })}
                    </Grid>

                    {/* spacing at bottom */}

                    <div />
                </Stack>
            </Container>
        </>
    )
}