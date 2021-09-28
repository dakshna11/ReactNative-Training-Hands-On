import React from 'react';
import { ChannelContext, UserContext } from './App';

function Component3(props) {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return(
                            <ChannelContext.Consumer>
                                {
                                    channel => {
                                        return(
                                            <div>
                                                User Context {user} Channel Context {channel}
                                            </div>
                                        )
                                    }
                                }
                            </ChannelContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    );
}

export default Component3;