import axios from 'axios'

export const showdatas = () => {
  return dispatch => {
    dispatch(loadHeroLoading())
    axios.get('https://api.instagram.com/v1/users/self/?access_token=1428622866.0df3bdb.99ecb9d31b214991af50ef0b8bd152f7')
    .then ( response => {
      dispatch(showdata(response.data.data))
    })
  }
}

export const showlist = () => {
  return dispatch => {
    dispatch(loadHeroLoading())
    axios.get('https://api.instagram.com/v1/users/1428622866/media/recent/?access_token=1428622866.0df3bdb.99ecb9d31b214991af50ef0b8bd152f7')
    .then ( response => {
      dispatch(showlistdata(response.data.data))
    })
  }
}

const showdata = (payload) => {
  return {
    type: 'SHOW_DATA',
    payload:payload
  }
}

const showlistdata = (payload) => {
  return {
    type: 'SHOW_LIST',
    payload:payload
  }
}

const loadHeroLoading = () => ({
  type: 'SHOW_DATA_LOADING'
})

const loadHeroError= () => ({
  type: 'SHOW_DATA_ERROR'
})
