import { ACTION_ADDTRIP } from "./actions";


const defaultState = {
  tripList: []
}



function addTrip(state = defaultState, action) {
  switch (action.type) {
    case ACTION_ADDTRIP:
      return {
        ...state,

        tripList: [
          ...state.tripList,
        {date: action.payload.date,
        country: action.payload.country,
        region: action.payload.region,
        activity: action.payload.activity
        }]
        
        
      
      };
      default:
        return state;
    };
  }


export default addTrip;
