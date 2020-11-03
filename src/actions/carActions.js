export const ADD_FEATURE = 'ADD_FEATURE'

const addFeature = (featureId) => {
    return {type:ADD_FEATURE, payload:featureId}
}

export default {
    addFeature:addFeature,
}