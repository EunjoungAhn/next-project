import { Row, Col } from 'antd';
import Link from 'next/link';
import { CodeOutlined } from '@ant-design/icons';

export default function BlogHeadline(){
  return (
    <Row
      align='middle'
      style={{
        height:400,
        textAlign: 'center',
      }}
    >
      <Col span={24}>
            <h1
              style={{
              fontSize: 70,
              fontWeight: 'bold',
              }}
            >
              Next.js를 활용한 블로그 만들기
            </h1>
            <p
              style={{
                fontSize: 24,
                }}
            >
              Next.js 기술을 체험하기 위해 제작한 공부용 블로그 입니다.
            </p>
      </Col>
    </Row>
  )
}