import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work.js';
console.log("loaded react-dom");

const myWork = [
  {
    'title': "Century Custom Coach",
    'href': "https://affectionate-clarke-d24e93.netlify.com/",
    'desc': "Auto Mechanic, Paint and Body Shop",
    'spec': "ReactJS project built on Gatsby, uses markdown document files for content.",
    'image': {
      'desc': "Century Custom Coach",
      'src': "images/centurycustomcoach.png"
    }
  },
  {
    'title': "Vapeplace CBD",
    'href': "https://www.vapeplacecbd.com/",
    'desc': "E-Cigarettes and CBD",
    'spec': "ReactJS project built on Gatsby.  Deployed via Netlify",
    'image': {
      'desc': "Vapeplace CBD",
      'src': "images/vapeplacecbd.png"
    }
  },
  {
    'title': "Conscious Wellness",
    'href': "https://compassionate-shirley-4e7e09.netlify.com/",
    'desc': "Health Education and Allergy Treatment",
    'spec': "ReactJS project built on Gatsby.  Under Construction",
    'image': {
      'desc': "Conscious Wellness",
      'src': "images/consciouswellness.png"
    }
  },
  {
    'title': "The Yellow Smoke Shop",
    'href': "https://www.theyellowsmokeshop.com/",
    'desc': "Head Shop",
    'spec': "CMS site using ReactJS/Gatsby.",
    'image': {
      'desc': "The Yellow Smoke Shop",
      'src': "images/theyellowsmokeshop.png"
    }
  },
  {
    'title': "Class of '68",
    'href': "http://gemstateclassof68.com.s3-website-us-east-1.amazonaws.com/",
    'desc': "Class Reunion",
    'spec': "Build on ReactJS and deployed in the AWS cloud like my portfolio website.  The original is password protected and distributed through Cloudfront.",
    'image': {
      'desc': "Class of '68 Screenshot'",
      'src': "images/work3.png"
    }
  },
  {
    'title': "Ruby on Rails Portfolio",
    'href': "https://sleepy-mountain-30199.herokuapp.com/welcome",
    'desc': "Ruby on Rails Selection",
    'spec': "This is my original portfolio that I have built in 2017.  Built on a Ruby on Rails framework and deployed on Heroku, the site includes links of other projects.",
    'image': {
      'desc': "Königsee, Germany",
      'src': "images/P1000946.png"
    }
  },
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
