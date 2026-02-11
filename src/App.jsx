import { useState } from 'react';
import AppLayout from './ui/AppLayout';
import Loading from './ui/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <Loading onComplete={() => setIsLoading(false)} />;
  }

  return <AppLayout />;
}

export default App;
