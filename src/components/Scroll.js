import React from 'react';

//Card list is a child of scroll in the App file, we need it to render its children
const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', scrollbarWidth: 'none', border: '1px solid black', height: '800px' }}>
            {props.children}
        </div>
    )
}

export default Scroll;