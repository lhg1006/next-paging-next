'use client'

import {useState} from "react";
import Paging from "@/components/Paging";

interface PagingParamsType {
    totalPages: number,
    begin: number,
    end: number,
    number: number
}

const PagingPage = () =>{
    const [testNo, setTestNo] = useState<number>(1);

    const testParams : PagingParamsType = {
        begin: 1,
        totalPages: 10,
        end: 10,
        number: testNo
    }


    const fetchData = (no:number) => {
        setTestNo(no)
    }

    return(
        <>
            <h1>Paging Test Page</h1>

            <Paging pagingParams={testParams} onPageChange={fetchData}/>
        </>
    )
}

export default PagingPage;