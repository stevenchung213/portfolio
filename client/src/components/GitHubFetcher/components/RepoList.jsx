import React from 'react';
import moment from 'moment';


const rowHeight = {
  height: '30px',
  overflow: "auto"
};

const RepoList = (props) => {
  return (
    <React.Fragment>
      <tr>
        <td>
          <div style={rowHeight}>
            <img src={props.repos.avatar_url} width={'30px'}/>
          </div>
        </td>
        <td>
          <div style={rowHeight}>
            {props.repos.login}
          </div>
        </td>

        <td>
          <div style={rowHeight}>
            {props.repos.name}
          </div>
        </td>
        <td>
          <div style={rowHeight}>
            {props.repos.description}
          </div>
        </td>
        <td>
          <div style={rowHeight}>
            {props.repos.forks_count}
          </div>
        </td>
        <td>
          <div style={rowHeight}>
            {moment(props.repos.updated_at).fromNow()}
          </div>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default RepoList;