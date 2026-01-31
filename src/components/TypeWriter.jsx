import { useEffect, useReducer } from 'react';

const initialState = (words) => ({
  text: '',
  wordIndex: 0,
  isDeleting: false,
  words,
});

function reducer(state, action) {
  const { words } = action;
  const currentWord = words[state.wordIndex];

  switch (action.type) {
    case 'wordTyping':
      return {
        ...state,
        text: currentWord.slice(
          0,
          state.text.length + 1
        ),
      };
    case 'wordDeleting':
      return {
        ...state,
        text: currentWord.slice(
          0,
          state.text.length - 1
        ),
      };
    case 'startDeleting':
      return {
        ...state,
        isDeleting: true,
      };
    case 'nextWord':
      return {
        // text: '',
        ...state,
        isDeleting: false,
        wordIndex:
          (state.wordIndex + 1) % words.length,
      };
    default:
      return state;
  }
}

function TypeWriter({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDelay = 1500,
  className = '',
}) {
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );
  const { text, isDeleting, wordIndex } = state;
  const currentWord = words[wordIndex];

  useEffect(
    function () {
      let timeout;

      if (!isDeleting && text === currentWord) {
        timeout = setTimeout(
          () =>
            dispatch({ type: 'startDeleting' }),
          pauseDelay
        );
        return () => clearTimeout(timeout);
      }

      if (isDeleting && text === '') {
        dispatch({ type: 'nextWord', words });
        return;
      }

      timeout = setTimeout(
        () => {
          dispatch({
            type: isDeleting
              ? 'wordDeleting'
              : 'wordTyping',
            words,
          });
        },
        isDeleting ? deletingSpeed : typingSpeed
      );
      return () => clearTimeout(timeout);
    },
    [
      text,
      isDeleting,
      pauseDelay,
      currentWord,
      words,
      typingSpeed,
      deletingSpeed,
    ]
  );

  return (
    <span className={`text-off-red ${className}`}>
      {text}
      <span className="blinking-cursor" />
    </span>
  );
}

export default TypeWriter;
