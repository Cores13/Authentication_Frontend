import { useEffect, useState } from 'react'
import './Users.scss'
import Table from '../../components/Table/Table'
import Button from '../../components/Button/Button'

import plusIcon from '../../assets/images/icons/plus.png';

const Users = ({props}: any) => {

  return (
    <div className='page-content'>
        <Table model='users'>
          <Button linkTo={'/users/add'}><img src={plusIcon} alt='plus'/><p>Add user</p></Button>
        </Table>
    </div>
  )
}

export default Users