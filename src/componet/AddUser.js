import { FormControl, FormGroup, Input, InputLabel, Button, makeStyles, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { addUser } from '../Service/api'
import { useHistory } from 'react-router-dom'

const useStyle = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        // background: '#b8b8ea',
        '& > * ': {
            marginTop: '20px'
        }
    }
})
const initialValues = {
    name: '',
    address: '',
    email: '',
    contact: ''
}

function AddUser() {
    const [user, setUser] = useState(initialValues);
    const { name, address, email, contact } = user;

    const classes = useStyle();
    const history = useHistory();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value });
        // console.log(user);
    }
    const addUserDetails = async () => {
        await addUser(user);
        history.push('/all')
    }
    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} />
            </FormControl>
            <FormControl>
                <InputLabel>Address</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='address' value={address} />
            </FormControl>
            <FormControl>
                <InputLabel>Contact</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='contact' value={contact} />
            </FormControl>
            <Button variant="contained" onClick={() => addUserDetails()} color="primary">Add User</Button>
        </FormGroup>
    )
}

export default AddUser
