import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work.js';

const myWork = [
  {
    'title': "Work Example",
    'href': "http://mirelescommunications.com",
    'desc': "This is my original portfolio that I have built in 2017.  It is built on a Ruby on Rails framework.  The site includes links of other projects that I have workd on.",
    'image': {
      'desc': "example screenshot of a project involving code",
      'src': "images/example1.png",
      'comment': ""
    }
  },
  {
    'title': "Work Example",
    'href': "https://example.com",
    'desc': "Lorem ipsum",
    'image': {
      'desc': "example screenshot of a project involving chemistry",
      'src': "images/example2.png",
      'comment': ""
    }
  },
  {
    'title': "Work Example",
    'href': "https://example.com",
    'desc': "Lorem ipsum",
    'image': {
      'desc': "example screenshot of a project involving cats",
      'src': "images/example3.png",
      'comment': `Bengal cat” by roberto shabs is licensed under CC BY 2.0
                  https://www.flickr.com/photos/37287295@N00/2540855181`
    }
  },
]
ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
