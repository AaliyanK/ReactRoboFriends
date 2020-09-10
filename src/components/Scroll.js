import React from 'react';

const Scroll = (props) => {
    return (
        // Add style with double curly brackets
        // props.children is basically the CardList Child
        <div style={{ overflowY: 'scroll', border: '5px solid black', height:'800px' }}>
            {props.children}
        </div>
    );
};

export default Scroll