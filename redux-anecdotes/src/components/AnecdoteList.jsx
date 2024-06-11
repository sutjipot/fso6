import { useSelector, useDispatch } from 'react-redux';
import { addVote } from '../reducers/anecdoteReducer';

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

  const vote = (id) => {
    dispatch(addVote(id));
  };

  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnecdoteList;
