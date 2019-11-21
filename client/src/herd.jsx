import React from 'react';

const Herd = (props) => (
  <div>
    <h4>The Corral</h4>
    <ol>{props.cows.map((cow) =>
    <li
    key={cow.id}
    onClick={(element) =>
    props.setShowcaseCow(element, cow.cowname, cow.descript)}
    >
    {cow.cowname}
    </li>
    )}
    </ol>
  </div>
)

export default Herd;