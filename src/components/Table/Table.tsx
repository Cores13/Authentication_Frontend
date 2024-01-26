import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Table.scss';

import useTable from '../../hooks/useTable';
import userService from '../../services/userService';

import arrowDown from '../../assets/images/icons/arrow-down.png';
import arrowUp from '../../assets/images/icons/arrow-up.png';

import TableFooter from './TableFooter/TableFooter';
import Dropdown from '../Dropdown/Dropdown';
import Search from '../Search/Search';
import Button from '../Button/Button';

import { RoleEnums, TableDataStatusEnums } from '../../enums/Enums';
import { UserStatusEnum } from '../../api';


const Table = ({ model, props, children }: any) => {

    const [data, setData] = useState<any>([]);
    const [page, setPage] = useState<number>(1);
    const [pages, setPages] = useState<any>([]);
    const [pageSize, setPageSize] = useState<number>(7)
    const [orderByKey, setOrderByKey] = useState<string>('createdOn');
    const [isDescending, setIsDescending] = useState<boolean>(true);
    const [filter, setFilter] = useState<any>({ status: null });
    const [rowsPerPage, setRowsPerPage] = useState<any>(5);
    const [tableHeaderRows, setTableHeaderRows] = useState<any>([]);
    const { slice } = useTable(data, page, rowsPerPage, filter);
    const navigate = useNavigate();
    const [isFilteringData, setIsFilteringData] = useState<boolean>(false);
    const [trigger, setTrigger] = useState<boolean>(false);


    const tableDataGetter: { [K: string]: Function } = {
        users: () => userService.getAll({ page, orderByKey, isDescending, pageSize, filter: JSON.stringify(filter) }).then((res) => setDataToTable(res)).catch(() => { return }),
        contacts: () => { },
        media: () => { },
        surveys: () => { },
        statistics: () => { },
        campaigns: () => { }
    };

    const tableFiltersGetter: { [F: string]: Function } = {
        users: () => [{ key: 'status', values: { 'Active': 1, 'Inactive': 2 } }, { key: 'role', values: { 'Super Administrator': 1, 'Administrator': 2 } }]
    };


    const setDataToTable = (response: any) => {
        if (!tableHeaderRows.length) setTableHeader(response.results[0]);
        setData(response.results);
        setRowsPerPage(response.totalResults);
        let pages = [];
        const totalPages = response.totalPages ?? 0;
        for (let i = 1; i <= totalPages; i++) pages.push(i);
        setPages(pages);
    }



    const setTableHeader = (dataset: Object) => {
        let tableHeader: any = [];
        let ignoreKeys: any = ['EMAILVERIFIEDAT', 'ID', 'SENDERNAME', 'PHONENUMBER'];
        (Object.keys(dataset) as (keyof typeof dataset)[]).forEach((key, index) => {
            if (!ignoreKeys.includes(key.toUpperCase())) { tableHeader[index] = key; }
        });
        setTableHeaderRows(tableHeader);
    }



    const formatDate = (dateString: string) => {
        const dateObj = Date.parse(dateString);
        const formattedDate = new Date(dateObj);
        return formattedDate.toLocaleDateString().replaceAll('/', '.');
    }



    const formatTableData = (tableData: any, columnName: string) => {
        if (columnName === 'createdOn') return formatDate(tableData);
        if (columnName === 'status') return UserStatusEnum[tableData];
        if (columnName === 'role') return RoleEnums[tableData];
        return tableData;
    }



    const bindClassesToTableData = (tableData: any, columnName: string) => {
        let baseClass = 'table-cell';
        if (columnName === 'status') {
            // since using enum value to access another enum value, typeof key casting was required to avoid <any> tserr
            var state: TableDataStatusEnums = TableDataStatusEnums[UserStatusEnum[tableData] as keyof typeof TableDataStatusEnums];
            baseClass = `${baseClass} ${state}`;
        }
        return baseClass;
    }



    const toggleOrderByColumn = (column: string) => {
        setIsDescending(!isDescending);
        setOrderByKey(column);
    }



    const availableFilterOptions = () => {
        if (tableFiltersGetter[model]) return tableFiltersGetter[model]();
    }



    const setFilters = (filterKey: string, filterValue: any) => {
        let currentAppliedFilters: Record<string, any> = { ...filter };
        currentAppliedFilters[filterKey] = filterValue;
        setFilter(currentAppliedFilters);
    }


    
    const resetFilters = () => {
        setFilter({ status: null });
        setTrigger(!trigger);
    }



    useEffect(() => {
        if (tableDataGetter[model]) tableDataGetter[model]();
        
        if(filter && Object.keys(filter).length === 1 && Object.keys(filter)[0] === 'status' && filter.status === null){
            setIsFilteringData(false)
        } else {
            setIsFilteringData(true);
        }
    
    }, [page, orderByKey, isDescending, rowsPerPage, filter])

    return (
        <>
            <div className='table-head-filters'>
                {availableFilterOptions() && availableFilterOptions().map((option: any, key: any) => (
                    <Dropdown options={option} key={key} dropdownChanged={setFilters} resetSelection={trigger}/>
                ))}
                <Search onSearch={setFilters} resetSelection={trigger} />
                {isFilteringData && (<Button onClick={resetFilters}><p>Clear filters</p></Button>)}
                {children}
            </div>

            <table className='table'>
                <thead className='table-row-header'>
                    <tr>{tableHeaderRows.map((el: any) => (
                        <th className='table-header' key={el} onClick={() => toggleOrderByColumn(el)}>
                            {el}<img src={(isDescending ? arrowDown : arrowUp)} className='orderByArrow' alt='sort' />
                        </th>
                    ))}</tr>
                </thead>

                {!slice.length ? (
                    <tbody><tr className='table-row-items no-hover'>
                        <td colSpan={tableHeaderRows.length} className='table-cell'>No results to display</td>
                    </tr></tbody>
                ) : (
                    <>
                        <tbody>
                            {slice.map((el: any) => (
                                <tr className='table-row-items' key={el.id} onClick={() => navigate(`/users/${el.id}`)}>{tableHeaderRows.map((dataKey: any, key: any) => (
                                    <td className={bindClassesToTableData(el[dataKey], dataKey)} key={key}>
                                        {formatTableData(el[dataKey], dataKey)}
                                    </td>
                                ))}</tr>
                            ))}
                        </tbody>
                    </>)}
            </table>

            {(slice.length > 0) && (
                <TableFooter range={pages} slice={slice} setPage={setPage} page={page} />
            )}


        </>
    )
}

export default Table;