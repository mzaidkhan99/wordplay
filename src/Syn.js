import React from 'react';
import './App.css';
class Syn extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      items: [],
      error:''
    };
  }

  fetchSynonym = (txt) => {
    var proxyurl = "https://cors-anywhere.herokuapp.com/";
    var url = "https://api.datamuse.com/words?max=50&&rel_syn="+txt;
    fetch(proxyurl + url)
    .then(response => response.json())
    .then(data => {
        // console.log("fetching");
        // console.log({data});
        this.setState({ items: data })
    })
    .catch((error) => {
        this.setState({ error: 'opps :( It seems there is some problem fetching information.'})
        console.log('Error: ', error);
    })
}

  search = () => {
      var txt = document.getElementById('search-syn').value;
      console.log("search");
      // console.log(txt);
      this.fetchSynonym(txt);
    
}

  render (){
    var item = this.state.items;
    return (
      <div className="App">
        <h2 className="heading">Find Synonyms</h2>
        <div className="input-field">
                <input type="text" id="search-syn" placeholder="find Synonyms of word"/><br/>
                <button onClick={this.search}>Search</button>
            </div>
          
          <div className={item ? "result-div" : "result-div-none"}>
              {this.state.items.map((el,i)=>(
                    <li key={i} className="result-list">{el.word}</li>                      
              ))}
          </div>
        
      </div>
    );
  }
}
export default Syn;
