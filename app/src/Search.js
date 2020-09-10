import React, { Component } from 'react'
import { env } from 'process';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }


      componentDidMount() {  
        const DiscoveryV1 = require('ibm-watson/discovery/v1');
        const { IamAuthenticator } = require('ibm-watson/auth');
                
        const discovery = new DiscoveryV1({  
          serviceUrl: process.env.REACT_APP_DISCOVERY_URL,
          version: '2020-09-10',
          authenticator: new IamAuthenticator({
            apikey: process.env.REACT_APP_DISCOVERY_API_KEY
          }),
        });
        
       console.log("APIKEY :" + process.env.REACT_APP_DISCOVERY_API_KEY)



       const queryParams = {
        environmentId: 'system',
        collectionId: 'news-en',
      };
      
      discovery.query(queryParams)
        .then(queryResponse => {
          console.log(JSON.stringify(queryResponse, null, 2));
        })
        .catch(err => {
          console.log('error:', err);
        });

     }


      handleChange(event) {    this.setState({value: event.target.value});  }
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }

    render() {
        return (
            <div>
                Watson Discovery News
                <form onSubmit={this.handleSubmit}>
                    <label>

                        <input type="text" value={this.state.value} onChange ={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Search