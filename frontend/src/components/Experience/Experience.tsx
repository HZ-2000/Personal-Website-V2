import { 
    Container,
    Divider,
    Typography 
} from '@mui/material';


export const Experience: React.FC = () => {
    document.title = '| Experience';

    return (
        <Container maxWidth="lg" sx={{ mt: 8 }}>
            <Typography variant="h1" color="text.primary">Resume</Typography>

            <Divider/>
        </Container>
    )
}
