const fetchProcess = async () => {
  const result = await fetch('https://sleepy-brook-35791.herokuapp.com/messages').then((response) => response.json());
  return result;
};

export default fetchProcess;
