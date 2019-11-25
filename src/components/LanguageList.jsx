
import React from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import Plot from 'react-plotly.js';
import Graph from './Graph.jsx';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

const LanguageList = (props) => {

  if (props.langslist) {

    return (
        <ul>
          {console.log(props.langslist)}
          {Object.entries(props.langslist).map(([key,value]) =>
            <li key={key}><mark>
              {key} </mark> --------> <kbd>{value} </kbd>

            </li>
          )}


        </ul>


    )
  } else { return null;}
  };export default LanguageList;
