import { useSelector, shallowEqual } from 'react-redux';

const Greeting = () => {
  const { greeting } = useSelector((state) => state.greetingReducer.greeting, shallowEqual);
  const pending = useSelector((state) => state.greetingReducer.pending, shallowEqual);
  const error = useSelector((state) => state.greetingReducer.error, shallowEqual);
  return (
    <>
      {greeting ? <p>{greeting}</p> : ''}
      {pending ? <p>loading...</p> : ''}
      {error ? <p>{error}</p> : ''}
    </>
  );
};

export default Greeting;
