import { Button, Grid, TextField } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#f0f4c3",
        width: "50%",
        padding: theme.spacing(6),
    },
    LinkButton:{
        backgroundColor: theme.palette.warning.light
    }
  }));



const Panel = () => {
    const classes = useStyles();
    const [name, setName] = useState("")
    const [user, setUsers] = useState([])
    const [error, setError] = useState(false)
    const history = useHistory();

    const handleInputChange = (e) => {
        setName(e.target.value)  
    }
    const saveLink = () => {
        axios.post(`/links/${name}`).then(res => {
            if(res.data.message){
                console.log("entre")
                setError(true)
            }
            else{
                setName("")
                getAllLinks()
                setError(false)
            }
        })
    }

    const getAllLinks = () => { axios.get('/links').then(res => setUsers(res.data))}

    const redirectSharePage = (userName) => {
        history.push(`/share/${userName}`)
    }

    useEffect(() => {
        getAllLinks()
    },[])

    return (
        <div style={{display:"flex", alingItems:"center", justifyContent: "center", paddingTop:"5%"}}>
            <Paper elevation={5} className={classes.root}>
                <Paper elevation={3} style={{paddingLeft:"5%"}}>
                    <Grid  container spacing={4} direction="row">
                        <Grid item xs={12} sm={8}>
                            <TextField
                                error={error}
                                id="name"
                                label="Name"
                                name="name"
                                value={name}
                                onChange={handleInputChange}
                                type="text"
                                helperText={"Domain already exist"}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Button color="primary" variant="contained" onClick={saveLink}>Add Link</Button>
                        </Grid>
                    </Grid>
                </Paper>
                <br></br>
                <Paper elevation={9} style={{padding:"5%"}}>
                <Grid container style={{height:"auto"}}spacing={4} justify="space-between">
                    {user && user.map(item => {
                        return (<Grid key={item._id} item xs={12} sm={6} md={4} lg={3}>
                                    <Button className={classes.LinkButton} onClick={() => redirectSharePage(item.name)} variant="contained">{item.name}</Button>
                                </Grid>)
                    })}
                </Grid>
                </Paper>
            </Paper>
        </div>
    )
}

export default Panel
