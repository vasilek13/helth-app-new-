import React from 'react';
import './blokSearch.scss';
import Profile from '../../UI/profile/profile';
import InputSearch from '../../UI/inputSearch/input';
import avatar from '../../../img/client.svg';

const Search = () => {
    return (
        <div className='search'>
            <div className='search__input'>
                <InputSearch />
            </div>
            <div>
                <Profile img={avatar} count='1'/>
            </div>
        </div>
    );
};

export default Search;