import React from 'react'

const SearchBox = (props) => {
    return (
        <div className='pa2'>
            <input onChange={props.search} className='pa3 ba b--green bg-lightest-blue' type="search" placeholder='Search Robtos'/>
        </div>
    )
}

export default SearchBox
