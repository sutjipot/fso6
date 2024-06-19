import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'


const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    addVote(state, action) {
      const id = action.payload
      const anecdoteToChange = state.find(n => n.id === id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
      console.log(JSON.parse(JSON.stringify(state)))
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : changedAnecdote
      )
    },
    
    appendAnecdote(state, action) {
      state.push(action.payload)
    },

    setAnecdote(state, action) {
      return action.payload
    }
    
},})

export const { addVote, appendAnecdote, setAnecdote } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdote(anecdotes))
  }
}
export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const voteAnecdote = (id) => {
  return async dispatch => {
    const chosen = await anecdoteService.vote(id)
    dispatch(addVote(chosen.id))
  }
}
export default anecdoteSlice.reducer