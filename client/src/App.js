import { useEffect } from 'react';

function App() {

  async function getRequest() {
    const data = await fetch('/types');
    const readable = await data.json();
    console.log(readable);
  }

  useEffect(() => {
    console.log('This is run once');
    getRequest()
  }, []);

  return (
    <>Hello World</>
  );
}

export default App;
