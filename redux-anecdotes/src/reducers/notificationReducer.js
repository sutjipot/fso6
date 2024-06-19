import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
    name: 'notifications',
    initialState: {message: '', time: null},
    reducers: {
        createNotification(state, action) {
            return {message: action.payload.message, time: action.payload.time}
        },
        clearNotification(state) {
            return {message: '', time: null}
        }
    }
})

export const { createNotification, clearNotification } = notificationSlice.actions

export const setNotification = (message, time) => {
    return async dispatch => {
        dispatch(createNotification({message, time}))
        setTimeout(() => {
            dispatch(clearNotification())
        }, time * 1000)
    }
}

export default notificationSlice.reducer