import { useDispatch } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const create = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(createAnecdote(content))

        dispatch(setNotification(`you created '${content}'`, 5))
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
