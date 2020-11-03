import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import actions from '../actions/carActions'


const AdditionalFeature = props => {

  const car = useSelector(state => state.car)

  const dispatch = useDispatch()

  const addFeature = (e) => {
    e.preventDefault()
    // console.log(car.features)
    // console.log(car.features.some(feature => feature.id === props.feature.id))
    if (car.features.some(feature => feature.id === props.feature.id)) {
      console.log(`cannot add more of that feature`)
    }
    else {
      dispatch(actions.addFeature(props.feature.id))
    }
    
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
