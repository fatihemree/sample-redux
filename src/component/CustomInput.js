import { Button, Col, Input, Row } from 'antd'
import React from 'react'


export default function CustomInput() {
  return (
    <Row justify='center'>
      <Col span={12}>
        <Input.Group compact>
          <Input className='add-todo-input' defaultValue="Todo" />
          <Button className='add-todo-button'  type="primary">Ekle</Button>
        </Input.Group>
      </Col>
    </Row>
  )
}
