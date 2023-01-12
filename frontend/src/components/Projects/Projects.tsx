import {
    Button,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Container,
    Grid,
    Typography,
} from '@mui/material';
import React from 'react';
import { projects } from '../../common/common';


export const Projects: React.FC = () => {
    document.title = '| Projects';

    return (
        <Container maxWidth="lg" sx={{ pt: 8, pb: 8 }}>
            <Typography variant="h1" color="text.primary">Projects</Typography>

            <Grid container spacing={2}>
                {projects.map((project: any) => {
                    return (
                        <Grid item xs>
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
        </Container>
    )
}
