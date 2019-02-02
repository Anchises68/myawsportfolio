import React from 'react';
import Masonry from 'react-masonry-component';
import ExampleWorkModal from './example-work-modal';
import Zoom from 'react-reveal/Zoom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

class ExampleWork extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'modalOpen': false,
      'selectedExample': this.props.work[0]
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(evt, example) {
    this.setState({
      'modalOpen': true,
      'selectedExample': example
    });
  }

  closeModal(evt) {
    this.setState({
      'modalOpen': false
    });
  }

  render() {
    return (
      <section>

        <div className="jumbotron work-background text-center" style={{textDecoration:"underline"}}>
          <h2 style={{color:"#fff"}}>my work</h2>
          <hr/>
          <div className="container "  >
            <Masonry className="row">
                { this.props.work.map( (example, idx) => {
                  return (
                    <div className="col-sm-6 col-md-4 mb-5" key={idx}>
                      <ExampleWorkBubble example={example} key={idx}
                        openModal={this.openModal} />
                    </div>
                  )
                })}
            </Masonry>
          </div>
        </div>
        <ExampleWorkModal example={this.state.selectedExample}
          open={this.state.modalOpen} closeModal={this.closeModal}/>
      </section>
    )
  }
}

class ExampleWorkBubble extends React.Component {
  render() {
    let example = this.props.example;
    return (

        <div className="card h-100 section__boxShadow"
          onClick={ (evt) => this.props.openModal(evt, example) }>
          <h3 className="card-header">{ example.project }</h3>
          <div className="card-body">
            <h5 className="card-title">{ example.title }</h5>
            <h6 className="card-subtitle text-muted">{ example.sub }</h6>
          </div>
          <Zoom top>
              <img  className="section__exampleImage" src={ example.image.src} alt={ example.image.desc }/>
          </Zoom>

            <div className="card-body">
              <p className="card-text">{ example.desc }</p>
            </div>
            <div className="card-body">
              <a href="#" className="card-link" onClick={ (evt) => this.props.openModal(evt, example) }>Details <FontAwesomeIcon icon={faAngleRight} className="fa-sm"/></a>
            </div>
            <div className="card-footer text-muted">
              { example.date }
            </div>
        </div>
    )
  }
}



export default ExampleWork;
export { ExampleWorkBubble };
