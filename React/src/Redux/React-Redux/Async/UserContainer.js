import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchusers} from './UserActions'

function UserContainer({users, fetchusers}) {
    useEffect(()=>{
        fetchusers()
    },[])
    return users.loading ? (<h2>Loading</h2>): users.error ? (<h2>{users.error}</h2>) : (
        <div>
            {
                users && users.users && users.users.map(user => <p>{user.name}</p>)
            }
        </div>
    )
}
const mapStateToProps = state =>{
    return{
        users: state.user
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        fetchUsers: ()=> dispatch(fetchusers())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserContainer);