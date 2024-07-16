'use client';

import { QueryRef, useQuery, useQueryRefHandlers, useReadQuery } from '@apollo/client';
import React from 'react';
import { INVOICES_QUERY } from '@/lib/queries';



type Props = {
    //queryRef: QueryRef<any>; // QueryRef 타입이 정확히 무엇인지 확인이 필요합니다.
    queryRef: QueryRef<any, any>;
};

export default function Page({ queryRef }: Props) {
    console.log("fda")
    const { data, loading, error, refetch } = useQuery(INVOICES_QUERY, {
       variables: {
           // 필요한 경우 변수 추가
       },
    });


    // Jason's Codes
    //const { refetch } = useQueryRefHandlers(queryRef);
    //const { data, error } = useReadQuery(queryRef);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            {/* 데이터 표시 부분 수정 */}
            {data && (
                <ul>
                    {data.Todo.map((item: any) => (
                        <li key={item.name}>
                            {item.name} - {item.time}
                        </li>
                    ))}
                </ul>
            )}

            {/* 데이터 다시 불러오기 버튼 예제 */}
            <button onClick={() => refetch()}>Refetch Data</button>
        </div>
    );
}
