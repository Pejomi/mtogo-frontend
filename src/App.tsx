import AppRouter from './routes/AppRouter';
import NavigationBar from './components/NavigationBar';
import { useEffect, useState } from 'react';

function App() {

  const [user, setUser] = useState<User | null>(
    (localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')!) : null);
  const [cart, setCart] = useState<Cart | null>(
    (localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')!) : null);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [setUser, user]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [setCart, cart]);

  return (
    <>
      <NavigationBar user={user} cart={cart} />
      <AppRouter user={user} setUser={setUser} cart={cart} setCart={setCart} />
    </>
  );
}

export default App;
