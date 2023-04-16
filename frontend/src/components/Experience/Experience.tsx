import { 
    Container,
    Divider,
    Typography 
} from '@mui/material';
import resume from '../../assets/img/resume.png'


export const Experience: React.FC = () => {
    document.title = '| Experience';

    return (
        <Container maxWidth="lg" sx={{ pt: 10 , pb: 10 }}>
            <Typography variant="h1" color="text.primary">Resume</Typography>

            <Divider sx={{ mb: 8 }}/>

            <img alt='resume' src={resume} style={{ width: "inherit", }}/>
        </Container>
    )
}
