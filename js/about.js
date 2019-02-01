import React from 'react'

class About extends React.Component {

  render() {
    let about = this.props.about;
    let modalClass = this.props.open ? 'modal--open' : 'modal--closed';


    return (
      <section className={"background--cloud " + modalClass}>

          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">And...</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.hideModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6 col-sm-12 col-xs-12">
                    <div className="column-item">
                      <img className="about-image" src={ about.about } />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12 col-xs-12">
                    <div className="column-item">
                      <h5>..the noteworthy...</h5>
                      <p>I'm a UCLA graduate, live in So Cal., speak German and Spanish, and drink beer.  In a previous life I worked in the financial services industry and business; primarily in analytical and managerial roles. I have no regrets on giving that up. I do this because I want to not because I have to.</p>
                    </div>

                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.props.hideModal}>Close</button>
              </div>
            </div>
          </div>

      </section>
    )
  }
}

export default About;
