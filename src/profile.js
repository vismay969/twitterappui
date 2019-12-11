import React from 'react';
import profile from './images/profile.png';

const Profile = (props) => {

    return (
        <div>
            <img src={profile} className="Profile-pic" alt="logo" />
            <h3> @JamieDimon2000 </h3>
        </div>
    );
}

export default Profile;