import React from 'react'
import './Header.css';
import MovieFilterOutlinedIcon from '@material-ui/icons/MovieFilterOutlined';

const Header = () => {
    return (
        <span className="header">
             Movie Hub
             <MovieFilterOutlinedIcon fontSize="large" />
             </span>
    )
}

export default Header
