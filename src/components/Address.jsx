import React, {useState, useEffect} from 'react';

export default function Address(){
  const [user, setUser] = useState(null);

  useEffect(() =>{
    async function fetchIt(){
      const response = await fetch('https://randomuser.me/api');
      const data = await response.json();
      const userData = data.results[0];
      setUser(userData);
    }
    fetchIt();
  }, []);

  return (
    <div>
      {user && <h4>{user.name.first} {user.name.last}</h4>}
      {user && <h6>{user.location.street.name} {user.location.street.number}</h6>}
      {user && <h6>{user.location.postcode} {user.location.city}</h6>}
    </div>
  )
}
