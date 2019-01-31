import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Slide from 'react-reveal/Slide';
import About from './about'



class Home extends React.Component {
  constructor(props) {
    super(props);

    this.stae = {
      'modalOpen': false,
      'aboutModal': this.props.aboutModal
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(evt, about) {
    this.setState({
      'modalOpen': true,
      'aboutModal': about
    });
  }

  closeModal(evt) {
    this.setState({
      'modalOpen': false
    });
    s
  }
  render () {
    return (
      <section id="about">

          <div className="container content" >

            <div className="jumbotron mt-5"  >

                  <Slide right>
                    <h1 className="display-5" >Hello, Hola, Hallo!</h1>
                  </Slide>
                  <Slide left>
                    <p className="lead">Thank you for visiting my porftolio site.</p>
                  </Slide>
              <hr className="my-4"/>
              <p>I work on building blazing fast web apps.  Right now I mostly use React/Graphql/Gatsby/Netlify and NodeJs.  I am also an AWS Certified Developer Associate and a big fan of cloud computing. </p>
              <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">About me</a>
              </p>
            </div>
          </div>



      </section>

    )
  }

}



export default Home
