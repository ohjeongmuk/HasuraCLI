// app/dashboard/customers/page.tsx
'use client';

import { useEffect, useState } from 'react';

const CustomersPage = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/todos');
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Customers Page</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.name} - {todo.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomersPage;
