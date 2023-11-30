import AppRouter from './routes/AppRouter';
import NavigationBar from './components/NavigationBar';
import { useEffect, useState } from 'react';

function App() {

  const [user, setUser] = useState<User | null>(
    (localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')!) : null);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [setUser, user]);

  return (
    <>
      <NavigationBar user={user} />
      <AppRouter user={user} setUser={setUser} />
    </>
  );
}

export default App;
