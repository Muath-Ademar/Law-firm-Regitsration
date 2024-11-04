'use client'
import { Button, FormControl, Grid, Input, InputLabel, OutlinedInput, Paper, Typography } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/navigation';

import React, { use, useState } from 'react'


const UserForm = ({ onSubmitProp,intialName = "", intialLocation = "", intialEmail="" ,intialPhone = "", intialDescription = "", intialRating = ""}) => {
    const [name, setName] = useState(intialName)
    const [location, setLocation] = useState(intialLocation)
    const [phone, setPhone] = useState(intialPhone)
    const [email, setEmail] = useState(intialEmail)
    const [description, setDescription] = useState(intialDescription)
    const [rating, setRating] = useState(intialRating)
    const router = useRouter()
    const Continue = (e) => {
        e.preventDefault()
        if(!name || !location || !email || !phone || !description || !rating){
            alert("please complete the form before proceeding")
            return;
        }
        axios.post('http://127.0.0.1:5000/get-email', {email}, {
            headers: {
                'Content-Type': "application/json"
            }
        })
        .then(res => {
            
            const user_id = res.data.userId
            if(user_id){
                router.push(`/users/${user_id}`)
            }
            else{
                alert("email not found, please register")
            }
            
        })
        .catch(err => {
                console.log("Error:" , err)
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitProp({name,
            location,
            email,
            phone,
            description,
            rating})
            setName('');
            setLocation('');
            setEmail('');
            setDescription('');
            setPhone('')
            setRating('');
    }
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh'}}>

        <Paper elevation={3} style={{ padding: '35px', margin: '20px', maxWidth: '600px', width : '%100' , borderRadius: "20px"}}>
            <Typography sx={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '25px' , fontSize: "30px"}}> Register </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth >
                            <InputLabel >Name</InputLabel>
                            <OutlinedInput
                            label='name'
                            type='text'
                            value={name}
                            name='name'
                            onChange={(e) => setName(e.target.value)}
                            required />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>

                        <FormControl  fullWidth>
                            <InputLabel>Location</InputLabel>
                            <OutlinedInput 
                            label='location'
                            type='text'
                            name='location'
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm= {6}>

                        <FormControl fullWidth>
                            <InputLabel> phone number (don't include spaces)</InputLabel>
                            <OutlinedInput 
                            label=' Phone Number dont include spaces ' 
                            type='text'
                            name='phone'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>

                        <FormControl fullWidth>
                            <InputLabel>Email</InputLabel>
                            <OutlinedInput
                            label='Email' 
                            type='email'
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>

                        <FormControl fullWidth>
                            <InputLabel>Description</InputLabel>
                            <OutlinedInput 
                            label='Description' 
                            type='text' 
                            name='description' 
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)}
                            required />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm = {6}>
                        <FormControl  fullWidth>
                            <InputLabel>Rating</InputLabel>
                            <OutlinedInput label="rating" 
                            value={rating}
                            type='number' 
                            name='rating'
                            inputProps={{
                                min: '1',
                                max : '5',
                                step: '0.1',
                            }}
                            onChange={(e) => setRating(e.target.value)}
                            required />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Button type='submit' color='primary' variant='contained' fullWidth> Register </Button>
                    </Grid>
                    <Grid item xs={12} sm ={6}>
                        <Button onClick={Continue} color='secondary' variant='contained' fullWidth> Continue </Button>
                    </Grid>
                </Grid>
            </form>

        </Paper>
        </div>
    );
}


export default UserForm;
