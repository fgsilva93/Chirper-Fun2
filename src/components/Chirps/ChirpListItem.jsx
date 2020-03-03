import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';

const ChirpListItem = props => {
    return (
        <ListGroup.Item
            className="d-flex justify-content-between align-items-center">
            <b>
                <FaUserAlt size="2rem" className="border rounded-circle border-dark" />{props.chrips.username}:
            </b>
            <span>{props.chrips.message}</span>
        </ListGroup.Item>
    )
}

export default ChirpListItem; 
