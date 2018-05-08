import React from 'react';
import Autosuggest from 'react-autosuggest';
import axios from 'axios';

import Header from '../components/Header';

let languages = [];

function getSuggestions(value) {
  return axios.get('/api/index')
    .then( (response) => {
      languages = response.data;
    })
    .catch( (error) => {
      console.log(error);
    })
}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function secondApiCall (event) {
  axios.get('/api/index/'+event.target.id)
    .then( (response) => {
      console.log(response.data);
    })
    .catch( (error) => {
      console.log(error);
    });
}

function renderSuggestion(suggestion) {
  return (
    <span id={suggestion.id} onClick={secondApiCall} >{suggestion.name}</span>
  );
}

export default class Home extends React.Component {

  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: []
    };    
    
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };
  
  onSuggestionsFetchRequested = ({ value }) => {
    getSuggestions(value)
      .then( () => {
        this.setState({
          suggestions: languages
        })
      })
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const { location } = this.props;
    const inputProps = {
      placeholder: "Type 'c'",
      value,
      onChange: this.onChange
    };

    return (
        <div>
            <Header location={ location }/>
            <div className="container">
                <div className="page-header">
                    <div className="row">
                        <div class="col-lg-8 col-md-7 col-sm-6">
                            <h1>Shopwiz React Replica</h1>
                            <p class="lead">A Bold Attempt</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Autosuggest 
                        suggestions={suggestions}
                        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                        getSuggestionValue={getSuggestionValue}
                        renderSuggestion={renderSuggestion}
                        inputProps={inputProps} />
                </div>
            </div>
        </div>
    );
  }
}
