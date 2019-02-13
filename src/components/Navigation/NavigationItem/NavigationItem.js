import React from 'react';

const navigationItem = (props) => (
    <li>
        <a 
            href={`/${props.href}`}
            className={props.active ? 'active' : null}>
                {props.children}
        </a>
    </li>
);

export default navigationItem;