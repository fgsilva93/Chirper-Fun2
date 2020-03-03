import React from 'react';
// import ChirpListItem from './ChirpListItem';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaFeather } from 'react-icons/fa';

class ChirpForm extends React.Component {

    state = {
        username: '',
        message: ''
    }

    handleUsernameChange = e => this.setState({ username: e.target.value })
    handleMessaageChange = e => this.setState({ message: e.target.value })

    handleSubmit = e => {
        e.preventDefault();
        const chirp = {
            username: this.state.username,
            message: this.state.message
        };
        this.props.handleChirpSubmit(chirp)
        this.setState({
            username: '',
            message:''
        })
    }

    render() {
        return (
            <Form action="" className="form-group p-3 shadow-sm">
                <Form.Label>Username</Form.Label>
                <Form.Control value={this.state.username} onChange={this.handleUsernameChange} type="text" />
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" value={this.state.message} onChange={this.handleMessaageChange} row={7}></Form.Control>
                <Button
                    variant="primary"
                    block 
                    onClick={this.handleSubmit}
                    className="mt-3 d-flex align-items-center justify-content-center">
                    <FaFeather className="mx-1" /><span className="mx1">Chirp It!</span>
                </Button>
            </Form>
        );
    }
}

export default ChirpForm;