import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Component } from 'react';
import { 
    Button,
    Figure,
    Container,
    Row,
    Col 
} from 'react-bootstrap';

export default class Quote extends Component {
    render () {
        return (
            <Container id="quote-box">
                <Row>
                    <Col className="text-center">
                        <Figure id="quote-text">
                            <blockquote className="blockquote">
                                <FontAwesomeIcon icon={['fas','quote-left']}/>
                                <span id="text" className="ms-2 me-2">{this.props.text}</span>
                                <FontAwesomeIcon icon={['fas','quote-right']}/>
                            </blockquote>
                            <Figure.Caption>
                                <div id="author" className="text-end">-- {this.props.author}</div>
                            </Figure.Caption>
                        </Figure>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col className="buttons">
                        <Button 
                            href={this.props.tweetLink}
                            target="_top"
                            id="tweet-quote"
                            variant="outline-info"
                            size="sm"
                            className="ms-2"
                        >
                            <FontAwesomeIcon icon={['fab','twitter']}/>
                        </Button>
                        <Button 
                            href={this.props.tumblrLink}
                            target="_blank"
                            id="tumblr-quote"
                            variant="outline-dark"
                            size="sm"
                            className="ms-2"
                        >
                            <FontAwesomeIcon icon={['fab','tumblr']}/>
                        </Button>
                    </Col>
                    <Col className="text-end">
                        <Button 
                            id="new-quote"
                            variant="outline-primary"
                            size="sm"
                            onClick={this.props.clickHandler}
                        >
                            New Quote
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}
