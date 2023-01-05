import React from 'react';
import robot from '../../assets/img/jason-leung-iDQVmcPFOCI-unsplash.jpg'
import { styled } from '@mui/material/styles';
import {
    Button,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    Grid
} from '@mui/material';
import { Stack } from '@mui/system';


const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});


export const Home: React.FC = () => {
    document.title = 'ZH | Home';

    return (
        <Stack spacing={8} sx={{ mt: 8 }}>

            {/* main hero section */}

            <Grid container direction="row" alignItems="center">
                <Grid item xs sx={{ textAlign: "center" }}>
                    <Typography variant="h1">Hello!</Typography>
                </Grid>
                <Grid item xs>
                    <Img alt="Roboto" src={robot} />
                </Grid>
            </Grid>

            {/* sample projects section */}

            <Grid
                container
                direction="row"
                alignItems="center"
                spacing={2}
                sx={{ textAlign: "center" }}
            >
                <Grid item xs>
                    <Card>
                        <CardMedia
                            component="img"
                            alt="roboto"
                            height="500"
                            image={robot}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h3" component="div">
                                Roboto
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Roboto is a cool guy, I mean look at him, he is made out of
                                legos and he lookin up. And the color pallete is spot on.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="medium">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card>
                        <CardMedia
                            component="img"
                            alt="roboto"
                            height="500"
                            image={robot}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h3" component="div">
                                Roboto
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Roboto is a cool guy, I mean look at him, he is made out of
                                legos and he lookin up. And the color pallete is spot on.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="medium">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>

            {/* spacing at bottom */}
            
            <div />
        </Stack>
    )
}
