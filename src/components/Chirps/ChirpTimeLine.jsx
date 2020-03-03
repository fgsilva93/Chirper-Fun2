import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ChirpListItem from './ChirpListItem';

const ChirpTimeLine = props => {
    return (
        <ListGroup variant='flush'>
            {props.chirps.map((chirps, i) => (
                <ChirpListItem key={`chip-item=${i}`} chrips={chirps} />
            ))}
        </ListGroup>
    );
}

export default ChirpTimeLine; 