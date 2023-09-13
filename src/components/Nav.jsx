// import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../util/constants';
import SearchBar from './SearchBar';

const Nav = () => (
    <Stack direction="row" alignItems= "center" p = {2} sx ={{position: 'sticky',
     background: '#fff', top: 0, justifyContent: 'space-between', boxShadow: 1}}>
        <Link to="/" style={{display: 'flex', alignItems: 'center', marginLeft: 0}}>
            <img src={logo} alt='logo' height={45}/>
        </Link>

        <SearchBar sx = {{ alignSelf: 'center' }}/>

    </Stack>
  )

export default Nav