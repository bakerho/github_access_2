import React from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import Plot from 'react-plotly.js';
import Graph from './Graph.jsx';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
const Repos = (props) => {
const elements =[];
if(props.repos){
  var i = 0;
//const repoNumber = Number(props.infoclean.public_repos);console.log(repoNumber);
//stores repo names in array
var ultimateColors = [
['rgb(33, 75, 99)', 'rgb(79, 129, 102)', 'rgb(151, 179, 100)', 'rgb(175, 49, 35)', 'rgb(36, 73, 147)','rgb(177, 127, 38)', 'rgb(205, 152, 36)', 'rgb(99, 79, 37)', 'rgb(129, 180, 179)', 'rgb(124, 103, 37)','rgb(56, 75, 126)', 'rgb(18, 36, 37)', 'rgb(34, 53, 101)', 'rgb(36, 55, 57)', 'rgb(6, 4, 4)']];
var commits= [];
for(i = 0; i < props.repos.length; i++){
elements.push(props.repos[i].name);
axios.get('https://api.github.com/repos/bakerho/'+props.repos[i].name+'/commits').then(response =>{
commits.push(response.data.length);
}).catch((err) => { console.log(err); });
}

const repoSize =[];const repoNames=[];
    for( i = 0; i < props.repos.length; i++){
        repoSize.push(props.repos[i].size);
        repoNames.push(props.repos[i].name);
    }

return (


<div>
     <p>
         <a class="position-absolute mid-right" class="btn btn-outline-warning" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
           BarChart
         </a>
       </p>
       <div class="collapse" id="collapseExample">
         <div class="card card-body">
         
           <Plot data={[
      {
        
        
        values: repoSize,
  labels: repoNames,
  type: 'pie',
  marker: {
  colors: ultimateColors[0]
}
      }
    ]}
    layout={ {width: 700, height: 400} }
  />
         </div>
       </div>

</div>

)
}else{return null;}
};
export default Repos;
