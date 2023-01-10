import React from 'react';
import forrest from '../../assets/img/adam-vradenburg-_gu7E90QChU-unsplash.jpg'
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
    Paper
} from '@mui/material';
import { Stack } from '@mui/system';
import { prandtld_system, personal_website } from '../../common/common';


export const Home: React.FC = () => {
    document.title = '| Home';

    return (
        <React.Fragment>
            {/* main hero section */}
            <Box
                sx={{
                    width: "100%",
                    height: "80vh",
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${forrest})`,
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

                    <Paper
                        elevation={24}
                        sx={{ textAlign: "center" }}
                    >
                        <Grid container>
                            <Grid item xs>
                                <Typography variant="h1" color="text.primary">I'm Zach</Typography>
                                <Typography>Subtext</Typography>
                            </Grid>
                            <Typography>This is a picture</Typography>
                        </Grid>
                    </Paper>

                    <Divider flexItem><Typography color="text.primary">PROJECTS</Typography></Divider>

                    <Stack direction="row" spacing={2}>
                        <Card>
                            <CardMedia
                                component="img"
                                alt="roboto"
                                height="500"
                                image={personal_website.image}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h3" component="div">
                                    {personal_website.name}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    {personal_website.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="medium" href={personal_website.link}>Code</Button>
                            </CardActions>
                        </Card>
                        <Card>
                            <CardMedia
                                component="img"
                                alt="roboto"
                                height="500"
                                image={prandtld_system.image}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h3" component="div">
                                    {prandtld_system.name}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    {prandtld_system.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="medium" href={prandtld_system.link}>Code</Button>
                            </CardActions>
                        </Card>
                    </Stack>

                    {/* spacing at bottom */}

                    <div />
                </Stack>
            </Container>
        </React.Fragment>
    )
}
