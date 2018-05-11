const initialState = {
  data : {},
  list : [],
  loading: false,
  error: false
}
const reducers = (state = {...initialState} , action) => {
  switch(action.type) {
    case 'SHOW_DATA':
      return ({...state,
              data:action.payload,
              loading:false})
    case 'SHOW_LIST':
      return ({...state,
              list:action.payload,
              loading:false})
    case 'SHOW_DATA_LOADING':
      return ({...state,loading:true})
    case 'SHOW_DATA_ERROR':
      return ({...state,error:false})
    default:
      return state
  }
}

export default reducers
