import React from 'react';
import './App.css';
class Similar extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      items: [],
      error:''
    };
  }

  fetchSimilar = (txt) => {
    var proxyurl = "https://cors-anywhere.herokuapp.com/";
    var url = "http://api.datamuse.com/words?max=50&rel_rhy="+txt;
    fetch(proxyurl + url)
    .then(response => response.json())
    .then(data => {
        console.log("fetching");
        console.log({data});
        this.setState({ items: data })
    })
    .catch((error) => {
        this.setState({ error: 'opps :( It seems there is some problem fetching information.'})
        console.log('Error: ', error);
    })
}

  search = () => {
      var txt = document.getElementById('search-sim').value;
      console.log("search");
      console.log(txt);
      this.fetchSimilar(txt);
    
}

  render (){
      var item = this.state.items;
    return (
      <div className="App">
        <h2 className="heading">Similar Words</h2>
        <header className="App-header">
        <div className="input-field">
                <input type="text" id="search-sim" placeholder="find similar sounding word"/><br/>
                <button onClick={this.search}>Search</button>
            </div>
          <div className={item ? "result-div" : "result-div-none"}>
              {this.state.items.map((el,i)=>(
                    <li key={i} className="result-list">{el.word}</li>                      
              ))}
          </div>
        </header>
      </div>
    );
  }
}
export default Similar;
