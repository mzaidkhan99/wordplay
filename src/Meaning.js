import React from 'react';
import './App.css';

class Meaning extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            error: ''
        };
    }

    fetchMeaning = (txt) => {
        var proxyurl = "https://cors-anywhere.herokuapp.com/";
        var url = "https://api.datamuse.com/words?md=d&max=5&ml=" + txt;
        fetch(proxyurl + url)
            .then(response => response.json())
            .then(data => {
                console.log("fetching");
                console.log({ data });
                this.setState({ items: data })
            })
            .catch((error) => {
                this.setState({ error: 'opps :( It seems there is some problem fetching information.' })
                console.log('Error: ', error);
            })
    }

    search = () => {
        var txt = document.getElementById('search-txtt').value;
        this.fetchMeaning(txt);
        
        // document.querySelector('result-dev').styles.display='block';
    }

    render() {
        var item = this.state.items;
        return (
            <div className="App">
                <h2 className="heading">Find Meaning</h2>
                <div className="input-field">
                    <input type="text" id="search-txtt" placeholder="find meaning of word" /><br />
                    <button onClick={this.search}>Search</button>
                </div>
                <div className={item ? "result-div" : "result-div-none"}>
                    <p>
                        {this.state.items.map((el) => (
                            <p>
                            <h2 className="h2">{el.word}</h2>
                            {el.defs.map((def, i) => (
                                <li key={i} className="result-list">{def}</li>
                            ))}
                            </p>
                        ))}
                    </p>
                </div>
            </div>
        );
    }
}
export default Meaning;
