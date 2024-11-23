import './App.css';
import { Component } from 'react';
import Quote from './Components/Quote.js';

class App extends Component {
    constructor (props) {
        super(props);

        this.urlTweet = this.props.env.urlTweet;
        this.urlTumblr = this.props.env.urlTumblr;

        this.state = {
            quote: 'This is a great App',
            author: 'Saul',
            tweetLink : this.urlTweet + encodeURIComponent('"' + this.quote + '" ' + this.author),
            tumblrLink : this.urlTumblr + encodeURIComponent(this.author) + '&content='
                        + encodeURIComponent(this.quote) + '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'

        };

        this.clickNewQuote = this.onNewQuote.bind(this);
    }

    onNewQuote () {
        this.#getNewQuote()
            .then(({ quote, author }) => {
                this.setState({ 
                    quote: quote,
                    author: author,
                    tweetLink: this.urlTweet + encodeURIComponent('"' + quote + '" ' + author),
                    tumblrLink: this.urlTumblr + encodeURIComponent(author) + '&content='
                        + encodeURIComponent(quote) + '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'
                });
            }).then(() => { return true })
            .catch(err => {
                console.error(err);
                return true;
            });
    }

    #getNewQuote() {
        let { urlQuotes } = this.props.env;

        return fetch(urlQuotes)
                .then(res => res.json())
                .then((data) => {
                    let index = Math.floor( Math.random() * data.quotes.length );

                    return data.quotes[index];
                });
    }

    componentDidMount () {
        this.onNewQuote();
    }

    render() {
        return (
            <div id="wrapper">
                <Quote
                    author={this.state.author}
                    text={this.state.quote}
                    tweetLink={this.state.tweetLink}
                    tumblrLink={this.state.tumblrLink}
                    clickHandler={this.clickNewQuote}
                />
            </div>
        );
    }
}

export default App;
