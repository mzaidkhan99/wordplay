import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import Syn from './Syn';
import Similar from './Similar';
import Meaning from './Meaning';
import Content from './Content';

class Home extends React.Component{

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

// apiCallDatmuse = (txt) => {
//     fetch('https://api.datamuse.com/words?md=d&max=12&ml='+txt)
//     .then(response => response.json())
//     .then(data => {
//         console.log({data});
//         this.setState({ items: data })
//     })
//     .catch((error) => {
//         this.setState({ error: 'opps :( It seems there is some problem fetching information.'})
//         console.log('Error: ', error);
//     })
// }

// apiCallWikiSearch = (txt) => {
//     const proxyurl = "https://cors-anywhere.herokuapp.com/";
//     var url = 'https://en.wikipedia.org/w/api.php?format=json&action=opensearch&search='+txt;
//     fetch(proxyurl + url)
//     .then(response => response.json())
//     .then(data => {

//         this.setState({wikiSimilarTitles:data[1], wikiLink:data[3]});

//     })
    
//     .catch((error) => {
//         this.setState({ error: 'opps :( It seems there is some problem fetching information.'})
//         console.error('Error:', error);
//     });
// }

// fetchContent = (txt) => {
//     const proxyurl = "https://cors-anywhere.herokuapp.com/";
//     var url = 'https://en.wikipedia.org/w/api.php?action=query&prop=extracts&explaintext&format=json&titles='+txt;
//     fetch(proxyurl + url)
//     .then(response => response.json())
//     .then(data => {
//         var pagesId = Object.keys(data.query.pages)[0];  
//         console.log(pagesId);
//         var content = data.query.pages[pagesId].extract;
//         var str = content.split('\n\n\n');
//         this.setState({wikiContent: str[0]})
//         // console.log(str[0]);
//     })
//     .catch((error) => {
//         this.setState({ contentError: "opps :( It seems there is some problem fetching information."})
//         // console.error('Error:', error);
//       });
// }

// search = () => {
//     var txt = document.getElementById('search-txt').value;
//     console.log("search");
//     this.setState({contentError: ''});
//     // this.apiCallDatmuse(txt);
//     this.apiCallWikiSearch(txt);
//     this.fetchContent(txt);
//     // console.log(txt);
// }

  render (){

    //   var wikiContentResult;
    //   if (this.state.contentError === '' && this.state.wikiContent.length !==0){
    //     wikiContentResult = this.state.wikiContent;
    // } else{
    //     wikiContentResult = this.state.contentError;
    // }

    return (
    <div className="container">
        <div className="header">
            <div className="logo">WordPlay</div>
            <div className="tag">gives you information you needs the most</div>
        </div>

        <div className="body">


            {/* <div className="input-field">
                <input type="text" id="search-txt" placeholder="type a word"/><br/>
                <button onClick={this.search}>Search</button>
            </div> */}
            
        <BrowserRouter>
            <Route exact path="/synonym" component={Syn} />
            <Route exact path="/similar-words" component={Similar} />
            <Route exact path="/meaning" component={Meaning} />
            <Route exact path="/" component={Content} />
        </BrowserRouter>

            {/* <div className="wiki-content">
                <h2>Content</h2>
                <p>{wikiContentResult}</p>
            </div> */}

            {/* <div className="similar-results">
                <h2>Similar search titles you may be interested in-</h2>
                <p>
                    {this.state.wikiSimilarTitles.map((title,i)=>
                        <li key={i}>{title}</li>
                    )}
                </p>
            </div> */}
        </div> 

        <div className="footer">
            <div className="link-footer">
                <a href="/">Find Content</a><br/>
                <a href="/synonym">Find sinonyms</a><br/>
                <a href="/similar-words">Similar sounding words</a><br/>
                <a href="/meaning">Meaning of words</a><br/>
            </div>
            <div className="social-media-footer">
                <span><a href="www.instagram.com"><i className="sc-icons fa fa-instagram" aria-hidden="true"></i></a></span>
                <span><a href="www.facebook.com"><i className="sc-icons fa fa-facebook" aria-hidden="true"></i></a></span>
                <span><a href="www.twiiter.com"><i className="sc-icons fa fa-twitter" aria-hidden="true"></i></a></span>
            </div>
            <div className="copyright-footer">
                <p>WordPlay</p>
                <p>2020 </p>
            </div>
        </div>
    </div>
    );
  }
}
export default Home;
