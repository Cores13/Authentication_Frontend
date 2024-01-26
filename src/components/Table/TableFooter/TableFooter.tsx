import { useEffect } from "react";
import './TableFooter.scss';

const TableFooter = ({ range, setPage, page, slice}: any) => {

    useEffect(() => {
    }, [slice, page, setPage])

    return (
        <div className="table-footer">
            {range.length && range.map((el: any, index: any) => (
                <button
                    key={index}
                    className={`${'table-button'} ${
                        page === el ? 'active' : ''
                      }`}
                    onClick={() => setPage(el)}
                >{el}</button>
            ))}
        </div>
    )
}

export default TableFooter;