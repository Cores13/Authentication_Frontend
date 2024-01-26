import React from 'react'
import './Contacts.scss'
import Table from '../../components/Table/Table'

type Props = {}

const Contacts = (props: Props) => {
  return (
    <div className='page-content'>
      <Table model='contacts' />
    </div>
  )
}

export default Contacts