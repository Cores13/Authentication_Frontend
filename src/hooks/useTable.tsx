import { useEffect, useState } from "react";

const useTable = (data: any, page: any, rowsPerPage: any, filter: any) => {

    const [tableRange, setTableRange] = useState<any>([]);
    const [slice, setSlice] = useState<any>([]);

    useEffect(() => {
        setSlice(data);
    }, [data, setTableRange, page, setSlice, filter]);

    return { slice, range: tableRange };
}

export default useTable;