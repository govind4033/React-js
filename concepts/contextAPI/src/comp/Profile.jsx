import React, {useContext} from 'react'
import  UserContext from '../context/UserContext';

function Profile() {
    const { user } = useContext(UserContext);

    if(!user) return <div className='text-center text-gray-500'>User not logged in</div>

    return (
        <div>
            <h2 className='text-2xl font-bold text-center text-indigo-600 mb-6'>Profile</h2>
            <p className='text-2xl font-bold text-center text-indigo-600 mb-6'>Welcome : {user.username}</p>
            <p className='text-2xl font-bold text-center text-indigo-600 mb-6'>Your Password is : {user.password}</p>
        </div>
    );
}

export default Profile