import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


const SearchBar = () => {
  const [searchTerm, setSearchTerm ] = useState('');

  const navigate = useNavigate();
  // this is a react-router-dom stuff to navigate to another url without loading or so
  // e.preventdefault prevents default loading of react app
  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  };

  return (
    <Paper
    component='form'
    onSubmit={handleSubmit}
    sx={{
      borderRadius: 20,
      border: '1px solid #e3e3e3',
      pl: 2,
      boxShadow: 'none',
      mr: { sm: 5 },
    }}
  >
    <input
      className='search-bar'
      placeholder='Search...'
      value = {searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
      <SearchIcon />
    </IconButton>
  </Paper> 
  )
}

export default SearchBar