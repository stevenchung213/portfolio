import React from 'react';

const TechStack = () => {

  const urls = [
    'https://s3-us-west-1.amazonaws.com/my.portfolio/javascript.png',
    'https://s3-us-west-1.amazonaws.com/my.portfolio/html5.png',
    'https://s3-us-west-1.amazonaws.com/my.portfolio/css.png',
    'https://s3-us-west-1.amazonaws.com/my.portfolio/react.png',
    'https://s3-us-west-1.amazonaws.com/my.portfolio/redux.png',
    'https://s3-us-west-1.amazonaws.com/my.portfolio/bootstrap.png',
    'https://s3-us-west-1.amazonaws.com/my.portfolio/jquery.png',
    'https://s3-us-west-1.amazonaws.com/my.portfolio/node.png',
    'https://s3-us-west-1.amazonaws.com/my.portfolio/express.jpg',
    'https://s3-us-west-1.amazonaws.com/my.portfolio/mongo.png',
    'https://s3-us-west-1.amazonaws.com/my.portfolio/mongoose.png',
    'https://s3-us-west-1.amazonaws.com/my.portfolio/postgresql.png',
    'https://s3-us-west-1.amazonaws.com/my.portfolio/mysql.png',
    'https://s3-us-west-1.amazonaws.com/my.portfolio/cassandra.png',
    'https://s3-us-west-1.amazonaws.com/my.portfolio/restful.png',
    'https://s3-us-west-1.amazonaws.com/my.portfolio/aws.png',
    'https://s3-us-west-1.amazonaws.com/my.portfolio/jest.png',
    'https://s3-us-west-1.amazonaws.com/my.portfolio/enzyme.png',
    'https://s3-us-west-1.amazonaws.com/my.portfolio/mocha.png',
    'https://s3-us-west-1.amazonaws.com/my.portfolio/chai.png',
    'https://s3-us-west-1.amazonaws.com/my.portfolio/git.png',
    'https://s3-us-west-1.amazonaws.com/my.portfolio/github.png',
    'https://s3-us-west-1.amazonaws.com/my.portfolio/npm.png',
    'https://s3-us-west-1.amazonaws.com/my.portfolio/webpack.png',
    'https://s3-us-west-1.amazonaws.com/my.portfolio/babel.png',
    'https://s3-us-west-1.amazonaws.com/my.portfolio/windows.png',
    'https://s3-us-west-1.amazonaws.com/my.portfolio/linux.png',
    'https://s3-us-west-1.amazonaws.com/my.portfolio/mac.png'
  ];

  const list = {
    listStyle: 'none',
    margin: '2% auto',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 'auto'
  };

  const img = {
    width: '7em',
    padding: '10px 10px'
  };

  return (
    <div>
      <ul style={list}>
        {
          urls.map((imgUrl, i) => {
            let a = imgUrl.split('/');
            let b = a[a.length - 1].split('.');
            let c = b[0];
            return (
              <li style={{display: 'inline-block'}} key={i}>
                <img src={imgUrl} alt={c} style={img}/>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};

export default TechStack;