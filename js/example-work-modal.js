import React from 'react';

class ExampleWorkModal extends React.Component {

  render () {
    let example = this.props.example;
    let modalClass = this.props.open ? 'modal--open' : 'modal--closed';

    return (
      <div className={"background--skyBlue " + modalClass}>
        <span className="color--cloud modal__closeButton"
          onClick={this.props.closeModal}>
          <i class="far fa-times-circle"></i>
        </span>
        <img className="modal__image" alt={ example.image.desc } src={ example.image.src }/>
        <div className="color--cloud modal__text">
          <h1 className="modal__title">
            { example.title }
          </h1>
          <a className="color--skyBlue modal__link"
            href={ example.href } target="_blank">
            Check it out
          </a>
          <p className="modal__description">
            { example.desc }
          </p>
        </div>
      </div>
    )
  };
};

export default ExampleWorkModal;
