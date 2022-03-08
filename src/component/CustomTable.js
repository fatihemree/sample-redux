import React from 'react'
import { Table, Space, Button, Row, Col } from 'antd';
import { CheckCircleFilled, CloseCircleFilled } from '@ant-design/icons';

export default function CustomTable() {


  const columns = [
    {
      title: 'statu',
      dataIndex: 'statu',
      render: (statu, record) => statu ? <CheckCircleFilled className='green-text icon-size' /> : <CloseCircleFilled className='red-text icon-size' />,
    },
    {
      title: 'task',
      dataIndex: 'task',
      render: (text, { statu }) => <p className={statu ? 'green-text' : 'red-text'}>{text}</p>,
    },
    {

      title: 'Action',
      width: 150,
      render: (text, record) => (
        <Row justify='end'>
          <Col>
            <Space align='center' size="middle">
              {record.statu ? <Button type='primary'>Tamamla</Button> : <Button type='ghost'>Undo</Button>}
              <Button type="primary" danger>Sil</Button>
              <Button type="text" text>Düzenle</Button>
            </Space>
          </Col>
        </Row>
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
