import React from 'react';

const PostItem=(props)=>{
    return(
        <div>
            <h1>Post Item</h1>
            <h3>{props.match.params.id}</h3>
        </div>
    )
}

export default PostItem;