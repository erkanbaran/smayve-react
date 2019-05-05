import React from 'react';
import {Link} from 'react-router-dom'

const Profile=(props)=>{
    return(
        <div>
            <h1>Profile</h1>

            <Link to={{
                 pathname:`${props.match.url}/posts`,
                 hash:'#barry',
                 search:'?profile=true'
             }}>Take me church</Link>
        </div>
    )
}

export default Profile;