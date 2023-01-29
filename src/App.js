import React from 'react'
import './index.scss'
import { Success } from './components/Success'
import { Users } from './components/Users/index'
import { useState, useEffect } from 'react'


function App() {
  const [users, setUsers] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(json => {
      setUsers(json.data)
    }).catch(err => {
      console.warn(err)
      alert('Oops, there is an error')
    })
    .finally(() => setLoading(false))
  }, [])

  return (
    <div className="app">
      <Users items={users} isLoading={isLoading}/>
    </div>
  );
}

export default App;
