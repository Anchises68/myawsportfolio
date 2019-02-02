import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work.js';
import Home from './home.js';
import Skills from  './tech';

console.log("loaded react-dom");

const moreResource = {
  'background': "/background.jpg",
  'me': "images/Alex.png",
  'about': "images/me-dtla.jpg"
}

const myWork = [
  {
    'project': "Current Project",
    'title': "Century Custom Coach",
    'sub': "In Development",
    'date': "December 2018",
    'href': "https://affectionate-clarke-d24e93.netlify.com/",
    'desc': "Auto Mechanic, Paint and Body Shop",
    'spec': "ReactJS project built on Gatsby, using markdown document files for content.  Eventually, I would like to make this a custom CMS template.",
    'image': {
      'desc': "Century Custom Coach",
      'src': "images/centurycustomcoach.png"
    }
  },
  {
    'project': "Current Project",
    'title': "Vapeplace CBD",
    'sub': "In Development",
    'date': "November 2018",
    'href': "https://www.vapeplacecbd.com/",
    'desc': "Natural Vaping Oils and CBD",
    'spec': "React/Gatsby project, still  needs content.  Deployed via Netlify",
    'image': {
      'desc': "Vapeplace CBD",
      'src': "images/vapeplacecbd.png"
    }
  },
  {
    'project': "Current Project",
    'title': "Conscious Wellness",
    'sub': "In Development",
    'date': "January 2019",
    'href': "https://compassionate-shirley-4e7e09.netlify.com/",
    'desc': "Health Education and Allergy Treatment",
    'spec': "React/Gatsby Project.  Just started, has npm effects.",
    'image': {
      'desc': "Conscious Wellness",
      'src': "images/consciouswellness.png"
    }
  },
  {
    'project': "Completed Project",
    'title': "The Yellow Smoke Shop",
    'sub': "Completed",
    'date': "July 2018",
    'href': "https://www.theyellowsmokeshop.com/",
    'desc': "Head Shop",
    'spec': "DatoCMS site using ReactJS/Gatsby.",
    'image': {
      'desc': "The Yellow Smoke Shop CMS",
      'src': "images/theyellowsmokeshop.png"
    }
  },
  {
    'project': "Completed Project",
    'title': "Class of '68",
    'sub': "Completed",
    'date': "May 2018",
    'href': "http://gemstateclassof68.com.s3-website-us-east-1.amazonaws.com/",
    'desc': "Class Reunion",
    'spec': "Build with ReactJS and deployed in the AWS cloud like my portfolio website.  The original is password protected and uses Cloudfront CDN.",
    'image': {
      'desc': "Class of '68 Screenshot'",
      'src': "images/work3.png"
    }
  },
  {
    'project': "Completed Project",
    'title': "Ruby on Rails Portfolio",
    'sub': "Completed",
    'date': "2016/17",
    'href': "https://sleepy-mountain-30199.herokuapp.com/welcome",
    'desc': "Ruby on Rails Projects",
    'spec': "This is an older portfolio built on a Ruby on Rails framework and deployed on Heroku, the site includes links of other Rupy and Python projects I have done in the past.",
    'image': {
      'desc': "Königsee, Germany",
      'src': "images/P1000946.png"
    }
  },
]

const Layout = () => (
  <section>
    <Home about={moreResource}/>
    <ExampleWork work={myWork}/>
    <Skills/>

  </section>
)

export default Layout

ReactDOM.render(<Layout/>, document.getElementById('example-work'));
