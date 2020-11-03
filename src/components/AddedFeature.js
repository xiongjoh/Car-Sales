import React from 'react';
import { useDispatch } from 'react-redux'
import actions from '../actions/carActions'

const AddedFeature = props => {

  const dispatch = useDispatch()

  const removeFeature = (e) => {
    e.preventDefault()
    console.log(props.feature.id)
    dispatch(actions.removeFeature(props.feature.id))
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={removeFeature} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
