import { Button, Grid, TextField, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#f0f4c3",
        width: "50%",
        padding: theme.spacing(2),
    },
  }));

const SharePage = () => {
    const classes = useStyles();
    const {userName} = useParams();

    return (
        <div style={{display:"flex", alingItems:"center", justifyContent: "center", paddingTop:"5%"}}>
        <Paper elevation={5} className={classes.root}>
            <Paper elevation={9} style={{padding:"10%"}}>
                <Grid container direction="row" spacing={1}>
                    <Grid item xs={12} sm={8}>
                        <Typography gutterBottom variant="h5" component="h2">This Page is for {userName}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Button color="primary" variant="contained">Share</Button>
                    </Grid>
                </Grid>            
            </Paper>
        </Paper>
    </div>
    )
}

export default SharePage
