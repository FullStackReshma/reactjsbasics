import React from 'react'
import { useParams, useSearchParams} from 'react-router-dom'

const UserDetails = () => {
    const { userId } = useParams()
    const [searchParams, setSearchParams] = useSearchParams()
    const showActiveUsers = searchParams.get('filter') === 'active'
    return (
       <>
        <div>
            Details about User {userId}
        </div>
        <div>
        <button onClick={() => setSearchParams({filter:'active'})}>Active Users</button>
        <button onClick={() => setSearchParams({})}>Reset Filter</button>
        {showActiveUsers ?
        <h2>Showing active users</h2> :
        <h2>Showing all users</h2>}
    </div>
       </>
    )
}

 export default UserDetails