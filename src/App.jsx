import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ChirpForm from './components/Chirps/ChirpForm';
import ChirpTimeLine from './components/Chirps/ChirpTimeLine';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chirps: []
        };
        //this.handleUsernameChange=this.handleUsernameChange.bind(this);
    }

    handleChirpSubmit = chirps => {
        this.setState({
            chirps: [...this.state.chirps, chirps]
        })
    }


    render() {
        return (
            <Container>
                <Row className="mt-2">
                    <Col md={5}>
                        <ChirpForm handleChirpSubmit={this.handleChirpSubmit} /> 
                    </Col>
                    <Col md={7}>
                        <ChirpTimeLine chirps={this.state.chirps} />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default App;