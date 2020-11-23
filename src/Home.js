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


  render (){

    return (
    <div className="container">
        <div className="header">
            <div className="logo">WordPlay</div>
            <div className="tag">gives you information you needs the most</div>
        </div>

        <div className="body">
            
        <BrowserRouter>
            <Route exact path="/synonym" component={Syn} />
            <Route exact path="/similar-words" component={Similar} />
            <Route exact path="/meaning" component={Meaning} />
            <Route exact path="/" component={Content} />
        </BrowserRouter>

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
