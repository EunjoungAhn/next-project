import { Row, Col } from 'antd';

export default function Footer(){
  return (
    <Row
      align='middle'
      style={{
        height:50,
        textAlign: "right",
      }}
    >
      <Col span={24}>
        <p>
          copy rights 2022
        </p>
      </Col>
    </Row>
  )
}