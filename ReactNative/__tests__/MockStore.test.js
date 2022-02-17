import configureStore from 'redux-mock-store' 

const middlewares = []
const mockStore = configureStore(middlewares)


const addTodo = () => ({ type: 'ADD_TODO' })

it('should dispatch action', () => {
  const initialState = {}
  const store = mockStore(initialState)
  store.dispatch(addTodo())

  const actions = store.getActions()
  const expectedPayload = { type: 'ADD_TODO' }
  expect(actions).toEqual([expectedPayload])
})