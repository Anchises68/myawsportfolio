import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Slide from 'react-reveal/Slide';
import About from './about.js';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       'show': false,
      };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({ 'show': true });
  };

  hideModal() {
    this.setState({ 'show': false });
  };

  render () {
    let about = this.props.about;
    return (
      <section id="about">
          <div className="container content" >
            <div className="jumbotron mt-5"  >
              <div className="row">
                <div className="col-md-6 col-sm-12 col-xs-12">
                  <div className="column-item">
                    <Slide right>
                      <h1 className="display-5" >Hello, Hola, Hallo!</h1>
                    </Slide>
                    <Slide left>
                      <p className="lead">Thank you for visiting my porftolio site.</p>
                    </Slide>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12">
                  <div className="column-item">
                    <img src={ about.me } className="me" />
                  </div>
                </div>
              </div>
              <hr className="my-4"/>
              <p>I work on building blazing fast web apps.  Right now I mostly use React/Graphql/Gatsby/Netlify and NodeJs.  I always like to learn something new.  I am also an AWS Certified Developer Associate and a big fan of serverless cloud computing.</p>
              <p className="lead">
                <button className="btn btn-primary btn-lg active" role="button" aria-pressed="true" onClick={ this.showModal }>About me</button>
              </p>
            </div>
          </div>
          <About about={this.props.about} open={this.state.show} hideModal={this.hideModal}/>
      </section>
    )
  }
}

export default Home
