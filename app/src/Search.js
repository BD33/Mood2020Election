import React, { Component } from 'react'
import { env } from 'process'

const DiscoveryV1 = require('ibm-watson/discovery/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const discovery = new DiscoveryV1({  
  serviceUrl: process.env.REACT_APP_DISCOVERY_URL,
  version: '2020-09-22',
  authenticator: new IamAuthenticator({
    apikey: process.env.REACT_APP_DISCOVERY_API_KEY
  }),
});

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '',
        result: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
       
      }

      componentDidMount() {  
       const queryParams = {
        environmentId: 'system',
        collectionId: 'news-en',
        query: 'Trump',
        count: 10,
      };
      
      discovery.query(queryParams)
        .then(queryResponse => {
          this.result = JSON.stringify(queryResponse, null, 2);
          console.log(JSON.stringify(queryResponse, null, 2));
        })
        .catch(err => {
          console.log('error:', err);
        });

     }


      handleChange(event) {  this.setState({value: event.target.value});  }
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        
        const queryParams = {
          environmentId: 'system',
          collectionId: 'news-en',
          query: this.state.value,
          count: 10,
        };
        
        discovery.query(queryParams)
          .then(queryResponse => {
            console.log((queryResponse, null, 2));
            this.setState({result: JSON.stringify(queryResponse, null, 2)});
        
          })
          .catch(err => {
            console.log('error:', err);
          });
      }

      getResults(){
        if(this.state.result.length > 1){
        var jsonRep = JSON.parse(this.state.result)
        if(jsonRep.result.results[0]){
        console.log(jsonRep.result.results[0].title)
        return jsonRep.result.results.map((articles) => <li>{
          articles.title}  <p>
          Score: {articles.enriched_text.sentiment.document.score} 
          </p>
           Label: {articles.enriched_text.sentiment.document.label}
        </li>);
        }  
       return "Did not find any articles"
      }

      }

    render() {
        return (
            <div>
                <h1 class="display-4">Watson Discovery News</h1>
                <p class="text-secondary">Search by topic and see a score</p>
            
                <form onSubmit={this.handleSubmit}>
                <div class="form-group">

                    <label>
                        <input type="text" value={this.state.value} onChange ={this.handleChange} class="form-control" />
                    </label>
                 
                    <input type="submit" value="Submit" class="btn btn-warning ml-3"/>
                    </div>
                </form>
               <h5> { this.getResults() }</h5>
            </div>
        )
    }
}

export default Search