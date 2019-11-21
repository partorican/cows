import React from 'react';

// database POST req adds a new cow to the herd (child)

class Cow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li onClick={ handleClick }>{this.props.cow.cowname}</li>
    );
  };
}

export default Cow;