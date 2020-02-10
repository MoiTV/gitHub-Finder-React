import React from 'react';
import UserItem from './Useritem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types'


const User = ({ loading, users}) =>  {
    if(loading) {
        return <Spinner />
    } else {
        return (
            <div style={userStyle}>
                {users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div> 
        );
    }
}

User.propTypes = {
    loading: PropTypes.bool.isRequired,
    users: PropTypes.array.isRequired,
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}


export default User
