import { Grid, Link, Paper, Typography } from '@mui/material'
import React from 'react'

const SideBar = (
  { title, description, archives, social }
) => {
  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} sx={{
        padding: theme => theme.spacing(2),
      }}>
        <Typography variant='h6' gutterBottom>
          {title}
        </Typography>
        <Typography>
          {description}
        </Typography>
      </Paper>
      <Typography variant="h6" gutterBottom sx={{
        marginTop: theme => theme.spacing(2),
      }}>
        Archives
      </Typography>
      {archives.map((archive) => (
          <Link
            display='block'
            variant='body1'
            href={archive.url}
            key={archive.title}
          ></Link>
        ))}
      <Typography variant="h6" gutterBottom sx={{
        marginTop: theme => theme.spacing(2),
      }}>
        Social
      </Typography>
      {social.map((network) => (
          <Link display="block" variant="body1" href="#" key={network.name}>
            <Grid container direction="row" spacing={1} alignItems="center">
              <Grid item>
                <network.icon />
              </Grid>
              <Grid item>{network.name}</Grid>
            </Grid>
          </Link>
        ))}
    </Grid>
  )
}

export default SideBar
