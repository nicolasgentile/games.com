import React from 'react';
import ReactLoading from 'react-loading';
 
const Load = ({ spinningBubbles, darkorange }) => (
    <ReactLoading type={spinningBubbles} color={darkorange} height={'20%'} width={'20%'} />
);
 
export default Load;