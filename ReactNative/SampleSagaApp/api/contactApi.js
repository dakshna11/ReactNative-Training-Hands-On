import axios from "./apiDeclaration";

export const getAllUsers = async ()=> {
   const users = await axios.get('users?_limit=10')
    return users.data
}

export const getDetailsOfUser = async payload => {
    const user = await axios.get('users/' + payload.id)
    console.log(user)
    return user.data
}