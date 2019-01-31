import React from 'react';

const Resume = () => {

  const resume = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  };

  return (
    <div>
      <img style={resume} src={"https://s3-us-west-1.amazonaws.com/my.portfolio/resume.png"} alt="resume"/>
    </div>
  );
};

export default Resume;