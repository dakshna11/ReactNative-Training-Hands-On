import React from 'react';
import Component1 from './Component1'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App(props) {
    return (
        <div>
            <UserContext.Provider value={'Dakshna'}>
                <ChannelContext.Provider value={'ReactBasics'}>
                    <Component1/>
                </ChannelContext.Provider>
            </UserContext.Provider>
            
        </div>
    );
}

export default App;