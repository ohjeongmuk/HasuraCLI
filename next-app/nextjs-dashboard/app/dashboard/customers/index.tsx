// pages/dashboard/customers/index.tsx

import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { GetServerSideProps } from 'next';

const GET_TODOS = gql`
  query GetTodos {
    Todo {
      name
      time
    }
  }
`;

interface Props {
  todos: { name: string; time: number }[];
}

const CustomersPage = ({ todos }: Props) => {
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

export const getServerSideProps: GetServerSideProps = async () => {
  const client = new ApolloClient({
    uri: 'http://localhost:8080/v1/graphql', // 본인의 GraphQL Endpoint URL을 넣어주세요
    cache: new InMemoryCache(),
  });

  try {
    const { data } = await client.query({
      query: GET_TODOS,
    });

    return {
      props: {
        todos: data.Todo,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return {
      props: {
        todos: [],
      },
    };
  }
};

export default CustomersPage;
