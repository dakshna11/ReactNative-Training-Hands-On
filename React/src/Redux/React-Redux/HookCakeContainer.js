import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from './CakeActions';

function HookCakeContainer() {
    const cakes = useSelector(state => state.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of Cakes - {cakes} (with hooks)</h2>
            <button onClick={()=> dispatch(buyCake())}>Buy Cake</button>
        </div>
    );
}

export default HookCakeContainer;