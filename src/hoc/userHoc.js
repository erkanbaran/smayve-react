import React from 'react';

const UserHoc = (WrappedComponenet, arg1) => {
    return (props) => {
        <div>
            {arg1}
            <WrappedComponenet {...props}></WrappedComponenet>
        </div>
    }
}

export default UserHoc;