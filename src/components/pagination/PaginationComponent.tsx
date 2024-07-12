import React, {FC} from 'react';
import {useSearchParams} from "react-router-dom";
import {decrementSearchParams, incrementSearchParams, isDisabledDec, isDisabledInc} from "../../service/service.api";
type IProps = {
    pageCount:number,
    typeOfData:string,
    totalNum:number
}
const PaginationComponent:FC<IProps>= ({pageCount,typeOfData,totalNum}) => {
    const [searchParams,setSearchParams] = useSearchParams({page:'1'});
    return (
        <div>
            <button
                disabled={isDisabledDec(pageCount,typeOfData,totalNum)}
                onClick={() =>{setSearchParams({page:decrementSearchParams(searchParams)})}}
            >prev</button>
            <button
                disabled={isDisabledInc(pageCount,typeOfData,totalNum)}
                onClick={() =>{setSearchParams({page:incrementSearchParams(searchParams)})
            }}>next</button>
        </div>
    );
};

export default PaginationComponent;