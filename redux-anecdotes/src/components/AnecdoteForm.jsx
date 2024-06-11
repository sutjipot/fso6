import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, clearNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const create = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        dispatch(createAnecdote(content))
        event.target.anecdote.value = ''

        dispatch(setNotification(`you created '${content}'!`))
        setTimeout(() => {
            dispatch(clearNotification())
        }, 5000);
    };

    return (
        <div>
            <h2>create new</h2>

            <form onSubmit={create}>
                <input name='anecdote'/>
                <button type='submit'>create</button>
            </form>
        </div>
    );
};

export default AnecdoteForm;
