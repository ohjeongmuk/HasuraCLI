'use client';
/* 
    Next.js 13에서 도입된 새로운 디렉티브로, 컴포넌트가 클라이언트에서만 렌더링되어야
    한다는 것을 명시한다. 이 디렉티브를 사용하면 해당 파일 내의 모든 컴포넌트가 클라이언트
    측에서만 실행되도록 지정한다.

    기본적으로 Next.js의 새 'app' 디렉토리(서버 컴포넌트)를 사용하는 경우 컴포넌트는 서버에서 
    렌더링된다. 클라이어언트에서만 실행되어야하는 코드 예를 들어, 'useEffect', 'useState'등 
    React의 클라이언트 전용 기능을 사용하는 경우, 해당 컴포넌트를 클라이언트 컴포넌트로 지정해야 한다

    
    'use client'; 를 사용하면 클라이언트 전용 훅을 정상적으로 작동하게 할수있다.
    이 지시어가 없으면 컴포넌트는 서버 컴포넌트로 간주되고, 서버 환경에서만 작동할 수 있는 제한된 기능만
    사용 가능하게 된다.

*/

import { useEffect, useState } from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const GET_TODOS = gql`
  query GetTodos {
    Todo {
      name
      time
    }
  }
`;

const CustomersPage = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const client = new ApolloClient({
        uri: 'http://localhost:8080/v1/graphql', // 본인의 GraphQL Endpoint URL을 넣어주세요
        cache: new InMemoryCache(),
      });

      try {
        const { data } = await client.query({
          query: GET_TODOS,
        });

        setTodos(data.Todo);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    // 클라이언트 사이드에서만 fetchData 함수 호출
    if (typeof window !== 'undefined') {
      fetchData();
    }
  }, []); // []를 넣어 useEffect가 한 번만 실행되도록 설정

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
