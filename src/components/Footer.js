import { Container, Link, Typography } from '@mui/material'
import React from 'react'

const Footer = (
    { title, description }
) => {
    return (
        <footer style={{
            backgroundColor: 'grey',
            marginTop: theme => theme.spacing(4),
            padding: theme => theme.spacing(6, 0),
        }}>
            <Container maxWidth='lg' >
                <Typography variant='h6' align='center' gutterBottom>
                    {title}
                </Typography>
                <Typography variant="subtitle1"
                    align="center"
                    color="textSecondary"
                    component="p">
                    {description}
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center">
                    Copyright ©{" "}
                    <Link underline='hover' style={{
                        fontWeight: 'bold',
                    }} color="inherit" href="https://portfolio-react-woad-seven.vercel.app/">
                        SK
                    </Link>{" "}
                    {new Date().getFullYear()}.
                </Typography>
            </Container>
        </footer>
    )
}

export default Footer
