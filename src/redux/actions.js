export const ACTION_ADDTRIP = "ACTION_ADDTRIP";

export const createAddTrip = (date, country, region, activity) => async(dispatch) => {
  dispatch({
    type: ACTION_ADDTRIP,
    payload: {
      date,
      country,
      region,
      activity

    }

  })
  
}


