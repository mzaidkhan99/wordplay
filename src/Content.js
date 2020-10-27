import React from 'react';
import './App.css';

class Content extends React.Component{

  constructor(props){
    super(props);
    this.state ={
        txt: '',
        contentError: '',
        items: [],
        wikiContent: [],
        wikiSimilarTitles: [],
        wikiLink:[]
    };
  }

apiCallWikiSearch = (txt) => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    var url = 'https://en.wikipedia.org/w/api.php?format=json&action=opensearch&search='+txt;
    fetch(proxyurl + url)
    .then(response => response.json())
    .then(data => {

        this.setState({wikiSimilarTitles:data[1], wikiLink:data[3]});

    })
    
    .catch((error) => {
        this.setState({ error: 'opps :( It seems there is some problem fetching information.'})
        console.error('Error:', error);
    });
}

fetchContent = (txt) => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    var url = 'https://en.wikipedia.org/w/api.php?action=query&prop=extracts&explaintext&format=json&titles='+txt;
    fetch(proxyurl + url)
    .then(response => response.json())
    .then(data => {
        var pagesId = Object.keys(data.query.pages)[0];  
        console.log(pagesId);
        var content = data.query.pages[pagesId].extract;
        var str = content.split('\n\n\n');
        this.setState({wikiContent: str[0]})
    })
    .catch((error) => {
        this.setState({ contentError: "opps :( It seems there is some problem fetching information."})
        // console.error('Error:', error);
      });
}

search = () => {
    var txt = document.getElementById('search-txt').value;
    console.log("search");
    this.setState({contentError: ''});
    this.apiCallWikiSearch(txt);
    this.fetchContent(txt);
    // console.log(txt);
}

  render (){

      var wikiContentResult;
      if (this.state.contentError === '' && this.state.wikiContent.length !==0){
        wikiContentResult = this.state.wikiContent;
    } else{
        wikiContentResult = this.state.contentError;
    }

    return (
        <div className="App">
                <h2 className="heading">Find Content</h2>
                <div className="input-field">
                    <input type="text" id="search-txt" placeholder="find meaning of word" /><br />
                    <button onClick={this.search}>Search</button>
                </div>
                <div className={wikiContentResult ? "result-div" : "result-div-none"}>
                    <p>
                        <h3>content</h3>
                        {wikiContentResult}
                    </p>
                    <p>
                        <h3>Similar topics you may be interested in: </h3>
                        {this.state.wikiSimilarTitles.map((el,i)=>(
                            <li key={i}>{el}</li>
                        ))}
                    </p>
                </div>
            </div>
    );
  }
}
export default Content;
