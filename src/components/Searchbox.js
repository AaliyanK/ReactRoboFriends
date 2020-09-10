import React from 'react';

const Searchbox = ({ searchfield, searchChange }) => {
    return(
        // Div - tackyon
        // className is how we make everything look cool
        <div className='pa2'>
            <input
            className='pa3 ba b--green bg-lightest-blue' 
            type='search' 
            placeholder='search robots'
            onChange = {searchChange}
            />
        </div>
    )   
}

export default Searchbox