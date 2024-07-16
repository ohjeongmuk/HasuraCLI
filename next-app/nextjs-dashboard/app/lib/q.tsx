// lib/queries.js

import { gql } from "@apollo/client";

export const INVOICES_QUERY = gql`
  query GetTodos {
    Todo {
      name
      time
    }
  }
`;
