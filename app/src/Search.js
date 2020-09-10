import React, { Component } from 'react'

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
          version: '2019-11-22',
          authenticator: new IamAuthenticator({
            apikey: process.env.REACT_APP_DISCOVERY_API_KEY,
          }),
          serviceUrl: process.env.REACT_APP_DISCOVERY_URL,
        });
        
       console.log("APIKEY :" + process.env.REACT_APP_DISCOVERY_API_KEY)


       const createEnvironmentParams = {
        name: 'my_environment',
        description: 'My environment',
        size: 'LT',
      };
      
      discovery.createEnvironment(createEnvironmentParams)
        .then(environment => {
          console.log(JSON.stringify(environment, null, 2));
        })
        .catch(err => {
          console.log('error:', err);
        });


       const queryParams = {
        environmentId: '{environment_id}',
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
                SearchBar
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange ={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Search