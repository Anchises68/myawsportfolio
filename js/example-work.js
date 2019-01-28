import React from 'react';
import ExampleWorkModal from './example-work-modal';

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
        <div className="container">
          <div className="card-columns">

            { this.props.work.map( (example, idx) => {
              return (
                <ExampleWorkBubble example={example} key={idx}
                  openModal={this.openModal} />
              )
            })
            }
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
        <h3 className="card-header">Example</h3>
        <div className="card-body">
          <h5 className="card-title">{ example.title }</h5>
          <h6 className="card-subtitle text-muted">Support card subtitle</h6>
        </div>
        <img  className="section__exampleImage" style={{height: "200px", width: "100%", display: "block"}} src={ example.image.src} alt={ example.image.desc }/>
          <div className="card-body">
            <p className="card-text">{ example.desc }</p>
          </div>
          <div className="card-body">
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
          </div>
          <div className="card-footer text-muted">
            2 days ago
          </div>
      </div>

    )
  }
}



export default ExampleWork;
export { ExampleWorkBubble };
