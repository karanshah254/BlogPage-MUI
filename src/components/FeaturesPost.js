import { Button, Card, CardActionArea, CardContent, Typography } from '@mui/material'
import React from 'react'

const FeaturesPost = () => {
    return (
        <Card sx={{
            backgroundPosition: 'center',
            backgroundImage: 'url(https://images.unsplash.com/photo-1483982258113-b72862e6cff6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJlZSUyMGJhY2tncm91bmQlMjBkYXJrfGVufDB8fDB8fHww)',
            padding: '35px 25px'
        }}>
            <CardContent sx={{
                color: 'white',
            }}>
                <Typography sx={{
                    fontSize: 40,
                    fontFamily: 'Montserrat',
                }} gutterBottom>
                    Title of a longer featured blog post
                </Typography>
                <Typography variant='h5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores laudantium commodi temporibus. Quis illo rerum corporis? Cumque, non! Blanditiis quam, laudantium ullam sequi sit illo ducimus perspiciatis expedita magnam aliquam!
                </Typography>
            </CardContent>
            <CardActionArea>
                <Button variant='text' sx={{
                    color: "#90caf9", 
                    fontWeight: 700
                }}>
                    Read More
                </Button>
            </CardActionArea>
        </Card>
    )
}

export default FeaturesPost
