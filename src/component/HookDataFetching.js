import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from "@material-ui/core/Card";


const HookDataFetching = () => {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const[ idFromButtonClick, setIdFromButtonClick] = useState(id)
   // const [postsArray, setPostsArray] = useState([])

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`).then( res => {
           // setPostsArray(res.data)
             setPost(res.data)
            console.log("resp",res)
        }).catch( err => {
            console.log("err",err)
         })
    },[idFromButtonClick])

    return (
        <div>
            <div>
                <input type="text" value={id} onChange={e => setId(e.target.value)}/>
                <button type="button" onClick={handleClick}>Fetch Data</button>
            </div>
            <div>
                <Card style={{
                    width: 650,
                    backgroundColor: "orange",
                    }} >
                    <p>Id:{post.id}</p>
                    <p>Title:{post.title}</p> 
                    </Card> 
            </div>
            {/* <li>{JSON.stringify(post)}</li> */}
            {/* <ul>
                {postsArray.map((postItem) => (
                    <li  key={postItem.id}>{postItem.title}</li>
                ))}
            </ul> */}
        </div>
        
    )

}

export default HookDataFetching