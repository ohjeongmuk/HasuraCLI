import { Suspense } from 'react';
import { PreloadQuery } from "../../lib/ApolloClient";
import { INVOICES_QUERY } from '@/lib/queries';
import Page from './pageComponent';
import { QueryRef } from '@apollo/client';

export default function InvoicePage() {
  return (
    <PreloadQuery
      query={INVOICES_QUERY}
      variables={{}}  // 필요한 변수가 있으면 여기에 추가합니다.
    >
      {(queryRef: QueryRef<any, any>) => {
        // queryRef를 직렬화
        const serializedQueryRef = {
          queryKey: queryRef.queryKey,
          variables: queryRef.variables,
        };
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Page queryRef={serializedQueryRef} />
          </Suspense>
        );
      }}
    </PreloadQuery>
  );
}

/*
  Warning: Only plain objects can be passed to Client Components from Server Components. Classes or other objects with methods are not supported.
  <... queryRef={{__transportedQueryRef: true, options: ..., queryKey: ...}}>

  여기서 plain objects 는 JavaScript에서 특정 속성과 메소드를 가지지 않는 단순한 객체를 말한다.
  이러한 객체는 클래스 인스턴스나 프로토타입 체인을 통해 상속받은 메소드가 없으며, 단순히 속성(key)과 value을
  가지고 있는 일반적인 객체다.


    

*/
