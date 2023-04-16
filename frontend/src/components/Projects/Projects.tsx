import {
    Button,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Container,
    Divider,
    Grid,
    Typography,
} from '@mui/material';
import React from 'react';
import { projects } from '../../common/common';


export const Projects: React.FC = () => {
    document.title = '| Projects';

    return (
        <Container maxWidth="lg" sx={{ pt: 10, pb: 10 }}>
            <Typography variant="h1" color="text.primary">Projects</Typography>

            <Divider sx={{ mb: 8 }}/>

            <Grid container spacing={2}>
                {projects.map((project: any) => {
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
        </Container>
    )
}
