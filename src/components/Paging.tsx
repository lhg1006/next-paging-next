import React from 'react';

interface PagingParamsType {
    totalPages: number,
    begin: number,
    end: number,
    number: number
}

interface PagingProps {
    pagingParams: PagingParamsType;
    onPageChange: (page: number) => void;
}

const Paging: React.FC<PagingProps> = ({ pagingParams, onPageChange }) => {
    const range = (begin: number, end: number) => {
        return Array.from({ length: end - begin + 1 }, (_, i) => begin + i);
    };

    const movePage = (event: React.MouseEvent<HTMLAnchorElement>, no: number) => {
        event.preventDefault();
        if (no > 0 && no <= pagingParams.totalPages) {
            onPageChange(no);
        } else {
            console.log('동작 하지 않음');
        }
    };

    return (
        <>
            <div className="text-center">
                {pagingParams.number > 0 && (
                    <>
                        <div>{pagingParams.number}</div>
                        <ul className="pagination" style={{margin: '5px 0'}}>
                            {pagingParams.number === 1 && (
                                <>
                                    <li className="disabled">
                                        <a href="" onClick={(event) => movePage(event, 0)}>&lt;&lt;</a>
                                    </li>
                                    <li className="disabled">
                                        <a href="" onClick={(event) => movePage(event, 0)}>&lt;</a>
                                    </li>
                                </>
                            )}
                            {pagingParams.number !== 1 && (
                                <>
                                    <li>
                                        <a href="" onClick={(event) => movePage(event, 1)}>&lt;&lt;</a>
                                    </li>
                                    <li>
                                        <a href=""
                                           onClick={(event) => movePage(event, pagingParams.number - 1)}>&lt;</a>
                                    </li>
                                </>
                            )}
                            {range(pagingParams.begin, pagingParams.end).map((i) => (
                                <li key={i} className={i === pagingParams.number ? 'active' : ''}>
                                    <a href="" onClick={(event) => movePage(event, i)}>{i}</a>
                                </li>
                            ))}
                            {pagingParams.number === pagingParams.totalPages && (
                                <>
                                    <li className="disabled">
                                        <a href="" onClick={(event) => movePage(event, 0)}>&gt;</a>
                                    </li>
                                    <li className="disabled">
                                        <a href="" onClick={(event) => movePage(event, 0)}>&gt;&gt;</a>
                                    </li>
                                </>
                            )}
                            {pagingParams.number !== pagingParams.totalPages && (
                                <>
                                    <li>
                                        <a href=""
                                           onClick={(event) => movePage(event, pagingParams.number + 1)}>&gt;</a>
                                    </li>
                                    <li>
                                        <a href=""
                                           onClick={(event) => movePage(event, pagingParams.totalPages)}>&gt;&gt;</a>
                                    </li>
                                </>
                            )}
                        </ul>
                    </>
                )}
            </div>
        </>
    );
};

export default Paging;