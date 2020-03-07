import React from 'react';

import { Message } from "../../components"

const Home = () => {
    return (
        <div>
            <Message
            avatar="https://lh3.googleusercontent.com/proxy/AzFN9loPSa6A7RWaguMuYtgahe_VA6xEtTgaR7ydKPQi3lwCch6O4draFuIWShDjN_c_GKvoeMrHxO32Efo-HjuFSsEdFVHgkwibOOI8pUasfhpEBw"
            text="azaza raka maka fo fristylo"
            date="Fri Mar 06 2020 18:41:08"
            isMe={false}
            isReaded={true}/>
            <Message
            avatar="https://images.alphacoders.com/711/thumb-350-711581.jpg"
            text="azaza raka maka fo fristylo"
            date="Fri Mar 06 2020 18:41:08"
            isMe={true}
            isReaded={false}/>
        </div>
    );
};

export default Home;