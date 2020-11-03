import React from 'react';
import { useDispatch } from 'react-redux'
import actions from '../actions/carActions'

const AdditionalFeature = props => {

  const dispatch = useDispatch()

  const addFeature = (e) => {
    e.preventDefault()
    console.log(props.feature.id)
    dispatch(actions.addFeature(props.feature.id))
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={addFeature} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
