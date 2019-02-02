import React from 'react';

class Skills extends React.Component {
  render() {
    return (
      <div className="container content">
        <div className="jumbotron text-center" id="skills">
          <h1 className="display-5">Technologies I work with</h1>
            <div className="lead"> <h6>Mostly:</h6>
            Javascript/ReactJS,  Gatsby, Netlify, Graphql, HTML/CSS/Bootstrap, Redux/Saga, NodeJS, DatoCMS, NextJS, Jest/Mocha, Linux/OSX CLI/SSH.
            <hr/>
             <h6>Also:</h6>
             AWS/EC2/S3/Cloudfront/SNS/Cloudwatch/Route53/DynamoDB/Lambda, Python, Mongoose/Postman, MySQL, Apache.
           <hr/>
             <h6>In the past:</h6>
              AWS/VPC/Cloudformation, Ruby/Rails, C++, Java, JQuery.
            </div>
          <hr className="my-4"/>
            <div className="lead mt-5">
              <p>Other stuff I have tinkered with can be found on <a target="_blank" href="https://github.com/MirelesCloud">my Github page</a>.</p>
                <br/>
              <h6>Special Thanks To the People of:</h6>
              <a href="https://www.gatsbyjs.org/" target="-_blank">GatsbyJS, </a><a href="https://www.netlify.com/" target="_blank">Netlify, </a><a href="https://acloud.guru/" target="_blank">A Cloud Guru, </a><a href="https://aws.amazon.com/">AWS et. al.</a>
            </div>
          <hr/>
          <button className="btn btn-primary btn-lg active" type="button" aria-pressed="true" role="button"><a href="mailto:mirelescloud@gmail.com from MirelesCloud.com" style={{color:"#fff"}}>Email Me</a></button>
        </div>
      </div>
    )
  }
}

export default Skills;
