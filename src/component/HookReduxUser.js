import React, { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { fetchUsers } from '../redux/user/userActions'
import { connect } from 'react-redux'

// const HookReduxUser = ({userData, fetchUsers}) => {

//     useEffect(() => {
//         fetchUsers()
//     }, [])
    
//     return userData.loading ? (
//         <h2>Loading</h2>  
//     ) : userData.error ? (
//         <h2>{userData.error}</h2>
//     ) : (
//         <div>
//             <h2>User List</h2>
//             <div>
//                 {userData && userData.users && 
//                 userData.users.map(user =><p> {user.name}</p> )}
//             </div>
//         </div>
        
        
//     )
// }
// const mapStateToProps = state => ({
//         userData: state.user 
// })

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchUsers: () => dispatch(fetchUsers())
//     }
// }

const HookReduxUser = () => {
    const userList =   useSelector(state => state.user.users)
    const dispatch = useDispatch() 
    // useEffect(() => {
    //     dispatch(fetchUsers())

    // })

    return  (
        <div>
            <h2>{userList.map(user => <p key={user.id}>{user.name}</p>)}</h2>
            <button onClick={() => dispatch(fetchUsers())}>click me</button>
        </div> 
    )
}

// export default connect(mapStateToProps, mapDispatchToProps) (HookReduxUser)
export default HookReduxUser