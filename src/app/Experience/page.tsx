import { 
    Container,
    Divider,
    Typography 
} from '@mui/material'
import React from 'react'
import Image from 'next/image'


export default function Experience () {
    return (
        <Container maxWidth="lg" sx={{ pt: 10 , pb: 10 }}>
            <Typography variant="h1" color="text.primary">Resume</Typography>
            <Divider sx={{ mb: 8 }}/>
            <Image alt='resume' src={'/resume.png'} style={{ width: "inherit", }} width={1000} height={1000}/>
        </Container>
    )
}
