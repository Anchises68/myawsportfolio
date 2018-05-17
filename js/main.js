import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work.js';
console.log("loaded react-dom");

const myWork = [
  {
    'title': "Ruby on Rails Portfolio",
    'href': "https://sleepy-mountain-30199.herokuapp.com/welcome",
    'desc': "This is my original portfolio that I have built in 2017.  Built on a Ruby on Rails framework and deployed on Heroku, the site includes links of other projects.",
    'image': {
      'desc': "Königsee, Germany",
      'src': "images/P1000946.png",
      'comment': ""
    }
  },
  {
    'title': "Molly's Portfolio",
    'href': "https://mollymireles.com",
    'desc': "This is my wife's portfolio built and deployed in the AWS cloud.  It is also built with ReactJS and is still in development.",
    'image': {
      'desc': "Molly Mireles screenshot",
      'src': "images/work2.png",
      'comment': ""
    }
  },
  {
    'title': "Class of '68",
    'href': "http://gemstateclassof68.com.s3-website-us-east-1.amazonaws.com/",
    'desc': "This is my first commissioned project.  Again, built on ReactJS and deployed in the AWS cloud.  The original is password protected and distributed through Cloudfront.",
    'image': {
      'desc': "Class of '68 Screenshot'",
      'src': "images/work3.png",
      'comment': ""
    }

  },
]
ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
