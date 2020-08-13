import React from 'react'
import {Container, Grid, Typography} from '@material-ui/core'

const AppHeader = () => {

    return (
        <Container maxWidth={false} disableGutters={true}>
            <Grid container style={{background: 'yellow'}}>
                <Grid item xs={12}>
                    <Typography variant='h1'>
                        this is the app header, it will remain yellow until i figure out what to do with it
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default AppHeader
