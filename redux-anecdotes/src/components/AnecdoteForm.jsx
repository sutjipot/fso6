import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()
    const [anecdote, setAnecdote] = useState('')

    const create = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        dispatch(createAnecdote(content))
        setAnecdote('') // Clear the input field after submitting
    };

    return (
        <div>
            <h2>create new</h2>

            <form onSubmit={create}>
                <input
                    name='anecdote'
                    value={anecdote}
                    onChange={(event) => setAnecdote(event.target.value)}
                />
                <button type='submit'>create</button>
            </form>
        </div>
    );
};

export default AnecdoteForm;
