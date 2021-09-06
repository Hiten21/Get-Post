import { Toolbar, Typography, AppBar, makeStyles } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom';

const useStyle = makeStyles({
    header: { background: '#111111' },
    tabs: {
        color: '#ffffff',
        textDecoration: 'none',
        marginRight: 20,
        fontSize: 20
    }

})
function Navbar() {
    const classes = useStyle();
    return (

        <AppBar className={classes.header} position="static">

            <Toolbar>
                <NavLink className={classes.tabs} to="/">Navbar</NavLink>
                <NavLink className={classes.tabs} to="/all">All User</NavLink>
                <NavLink className={classes.tabs} to="/add">Add User</NavLink>
            </Toolbar>
        </AppBar>

    )
}

export default Navbar
