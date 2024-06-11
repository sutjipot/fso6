import { useSelector, useDispatch } from 'react-redux';
import { addVote } from '../reducers/anecdoteReducer';
import { clearNotification, setNotification } from '../reducers/notificationReducer';

const AnecdoteList = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector(state => {
    if (state.filters === '') {
      return [...state.anecdotes].sort((a, b) => b.votes - a.votes);
    } else {
      return [...state.anecdotes]
        .filter(a => a.content.toLowerCase().includes(state.filters.toLowerCase()))
        .sort((a, b) => b.votes - a.votes);
    }
  });

  const vote = (id, content) => {
    dispatch(addVote(id))
    dispatch(setNotification(`you voted for '${content}'!`))
    setTimeout(() => {
      dispatch(clearNotification())
    }, 5000);

  }

  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnecdoteList;
