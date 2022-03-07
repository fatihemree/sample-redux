import React from 'react'
import { Table, Space, Button } from 'antd';
import { CheckCircleFilled, CloseCircleFilled, LeftOutlined, } from '@ant-design/icons';

export default function CustomTable() {


  const columns = [
    {
      title: 'statu',
      dataIndex: 'statu',
      render: (statu, record) => statu ? <CheckCircleFilled className='green-text' /> : <CloseCircleFilled className='red-text' />,
    },
    {
      title: 'task',
      dataIndex: 'task',
      render: (text, { statu }) => <p className={statu ? 'green-text' : 'red-text'}>{text}</p>,
    },
    {

      title: 'Action',
      render: (text, record) => (
        <Space align='center' size="middle">
          {record.statu ? <Button type='primary'>Tamamla</Button> : <Button type='ghost'>Undo</Button>}
          <Button type="primary" danger>Sil</Button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      task: 'lorem ipsum yapılmadı',
      statu: true,
    },
    {
      key: '2',
      task: 'lorem ipsum yapılacak',
      statu: false
    },
    {
      key: '3',
      task: 'lorem ipsum',
      statu: true,
    },

  ];
  return (
    <Table
      columns={columns} 
      dataSource={data?.length ? data : null}
      
    // onRow={(record, rowIndex) => {
    // return {
    //   onClick: event => {console.log(record)}, // click row
    //   onDoubleClick: event => {}, // double click row
    //   onContextMenu: event => {}, // right button click row
    //   onMouseEnter: event => {}, // mouse enter row
    //   onMouseLeave: event => {}, // mouse leave row
    // };
    // }}
    />
  )
}
