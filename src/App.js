import { useEffect, useState } from 'react';
import Cart from './Components/Cart/Cart';
import Trips from './Components/Trips/Trips';
import axios from 'axios';
// ...existing code...

function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8000/api/users', {
  withCredentials: true
})
  }, []);
  api.get('/users')
  .then(res => console.log(res.data))
  .catch(err => console.error(err));

  const addToCart = (bookingId) => {
    if (user) {
      const newCart = [...cart, { userId: user.id, bookingId }];
      setCart(newCart);
      localStorage.setItem('cart', JSON.stringify(newCart));
    } else {
      console.log('User not logged in');
    }
  };

  return (
    <div className="App">
      <Trips addToCart={addToCart} />
      <Cart cart={cart}  />
      {/* ...existing code... */}

      <h1>User List</h1>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>

    
  );
}

export default App;
