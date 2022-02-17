import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
const fetch  = require('node-fetch')

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

function success() {
  return {
    type: 'FETCH_DATA_SUCCESS'
  }
}

function fetchData () {
  return dispatch => {
    return fetch('/users.json') 
      .then(() => dispatch(success()))
  };
}

it('should execute fetch data', () => {
  const store = mockStore({})

  return store.dispatch(fetchData())
    .then(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual(success())
    })
})


