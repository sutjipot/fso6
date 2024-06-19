import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer'
import anecdoteReducer from './reducers/anecdoteReducer'


const store = configureStore({
    reducer: {
        anecdotes: anecdoteReducer,
        filters: filterReducer,
        notifications: notificationReducer
    },
})

store.subscribe(() => {console.log(store.getState())})

export default store