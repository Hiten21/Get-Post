import React from 'react'
import notFound from '../Assets/Images/NotFound.jpg'
function NotFound() {
    return (
        <img src={notFound} style={{width:'30%', margin: '50px 0px 0px 35%'}}></img>
        // <p>Page not found</p>
    )
}

export default NotFound
