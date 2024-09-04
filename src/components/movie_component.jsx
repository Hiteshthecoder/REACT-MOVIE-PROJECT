import React from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'

const MovieComponent = () => {
    // useLocation

    let location = useLocation();

    return (
        <div>
            <h1>{location.state.title}</h1>
            <NavLink to={"/"}>Go to movie page</NavLink><br />
            <Outlet />
            <Link to={"rating"} >Home Page</Link>


        </div>
    )
}

export { MovieComponent }
