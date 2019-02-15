import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function WrappedLink(props) {
    return (
        <Link className={props.className} to={props.to}>
            <Button variant={props.variant} >{props.text}</Button>    
        </Link>
    )
}
export default WrappedLink;