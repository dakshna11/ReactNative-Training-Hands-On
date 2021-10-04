import React, {useState} from 'react';
import { connect } from 'react-redux';
import { buyCake } from './CakeActions';

function CakeContainer(props) {
    const [number,setNumber] = useState(1)
    return (
        <div>
            <h2>Number of Cakes - {props.numOfCakes} (without hooks)</h2>
            <input type='text' value= {number} onChange={ e=> setNumber(e.target.value)}/>
            <button onClick={()=> props.buyCake(number)}>Buy Cake</button>
        </div>
    );
}
const mapStateToProps = state =>{
    return{
        numOfCakes: state.numOfCakes
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        buyCake : (number)=>{dispatch(buyCake(number))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer);