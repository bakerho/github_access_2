//dd253ee63059d345b0aa21a05338d2807c86bc36
import React, { Component } from 'react';
import axios from 'axios';
import Form from './components/Form.jsx';
import SortedList from './components/SortedList.jsx';
import Profile from './components/Profile.jsx';
import Repos from './components/Repos.jsx';
import Graph from './components/Graph.jsx';
import Plot from 'react-plotly.js';
//import logo from './components/Github_icon.png'; // with import

//dd253ee63059d345b0aa21a05338d2807c86bc36
//process.env.REACT_APP_GITHUB_TOKEN
//`token ${process.env.REACT_APP_GITHUB_TOKEN}`
import LanguageList from './components/LanguageList.jsx';
import lda from './lda';
class App extends Component {
  constructor() {
    super();
    this.state = {

      gitun: 'No username',
       infoclean : '',
      repos : '',
      info: '',
       formData: {
         username: '',
 },
 repitems: null,
 staritems: null,
 replanguagecount: {},
 keywords: null
      }
    this.handleUserFormSubmit = this.handleUserFormSubmit.bind(this);
    this.handleFormChange= this.handleFormChange.bind(this);

  }handleUserFormSubmit(event) {


    event.preventDefault();
        const token = "";
    	this.setState({infoclean : ' '});this.setState({repos : ' '});
    	axios.get('https://api.github.com/users/'+this.state.formData.username+'/repos?access_token=dd253ee63059d345b0aa21a05338d2807c86bc36'+token,{}).then(response => this.setState({
            repos : response.data,
        })).catch((err) => { console.log(err); });


           axios.get('https://api.github.com/users/'+this.state.formData.username+'?access_token=dd253ee63059d345b0aa21a05338d2807c86bc36'+token).then(response => this.setState({
          gitun: response.data.login,
          infoclean: ' ',
          infoclean: response.data,
        })).catch((err) => { console.log(err); });


        axios.get('https://api.github.com/users/'+this.state.formData.username+'/repos?access_token=dd253ee63059d345b0aa21a05338d2807c86bc36'+token,{})
        .then(response => {var itemsWithFalseForks = response.data.filter(item => item.fork === false);
          var sortedItems = itemsWithFalseForks.sort((b,a) => {
            if((a.watchers_count +  a.forks_count) < (b.forks_count + b.watchers_count)){
              return -1
            }else if ((a.watchers_count +  a.forks_count) > (b.forks_count + b.watchers_count)){
              return 1
            }else {
              return 0
            }
          })
          let dictrlc = Object.assign({}, this.state.replanguagecount);
          for (var i = 0; i < itemsWithFalseForks.length; i++) {
              dictrlc[itemsWithFalseForks[i]['language']] = -~ dictrlc[itemsWithFalseForks[i]['language']]
          }this.setState({
            repitems: sortedItems.slice(0,10),
            replanguagecount: dictrlc,
          })
        }).catch((err) => { console.log(err); });

        axios.get('https://api.github.com/users/'+this.state.formData.username+'/starred?access_token=dd253ee63059d345b0aa21a05338d2807c86bc36'+token,{})
        .then(response => {var itemsWithFalseForks = response.data.filter(item => item.fork === false);
          var sortedItems = itemsWithFalseForks.sort((b,a) => {
            if((a.watchers_count +  a.forks_count) < (b.forks_count + b.watchers_count)){
              return -1
            }else if ((a.watchers_count +  a.forks_count) > (b.forks_count + b.watchers_count)){
              return 1
            }else {
              return 0
            }
          });
          var documents = []
          for (var i = 0; i < response.data.length; i++) {
              var descr = response.data[i]['description']
              if (descr != null) {
                var newtext = descr.match(/[^.!?]+[.!?]+/g)
                if (newtext != null) {
                  documents = documents.concat(newtext)
                }
              }
          }
          var result = lda(documents, 3, 3);
          var keywords = new Set()
          for (var k = 0; k < 3; k++) {
            for (var j = 0; j < 3; j++) {
              keywords = keywords.add(result[k][j]['term']);
            }
          }this.setState({
            staritems: sortedItems.slice(0,10),
            keywords: Array.from(keywords).join(', ')
          })}).catch((err) => { console.log(err); })};

          handleFormChange(event) {
        const obj = this.state.formData;
        obj[event.target.name] = event.target.value;
        this.setState(obj);

  };render() {
    return (

        <div className="App">
    	  <main role="main">


    		<br></br><br></br><br></br>

            <div class="row justify-content-left text-dark"> 
            <div class="col-md-12 text-center">
          
    		<Form
          formData={this.state.formData}
        handleUserFormSubmit={this.handleUserFormSubmit}
        handleFormChange={this.handleFormChange}
            />
    		</div></div><br></br><br></br>

        <div id="accordion" class = "myaccordin">
          <div class="card">
            <div class="card-header" id="headingOne">
              <h5 class="mb-0">
                <button class="btn btn-dark btn-lg btn-block collapsed active" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                
                  Profile
                </button>
              </h5>
            </div>

            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
              <div class="card-body">
                   <Profile infoclean={this.state.infoclean}/>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingTwo">
              <h5 class="mb-0">
                <button class="btn btn-dark btn-lg btn-block collapsed active" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Language's
                </button>
              </h5>
            </div>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
              <div class="card-body">
                    <LanguageList langslist={this.state.replanguagecount}/>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingThree">
              <h5 class="mb-0">
                <button class="btn btn-dark btn-lg btn-block collapsed active" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Repositories
                </button>
              </h5>
            </div>
            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
              <div class="card-body">
                <div>
                     <p>
                         <a class="position-absolute mid-right" class="btn btn-outline-warning" data-toggle="collapse" href="#b3" role="button" aria-expanded="false" aria-controls="collapseExample">
                           List
                         </a>
                       </p>
                       <div class="collapse" id="b3">
                         <div class="card card-body">
                            <SortedList repitems={this.state.repitems}/>
                         </div>
                       </div>

                </div>
                    <Repos repos={this.state.repos}/>
              </div>
            </div>
          </div>
        </div>
    	</main>
    	</div>


    );
  }
}
export default App;
