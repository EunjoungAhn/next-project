import { Card, Row, Col } from 'antd';
import Link from 'next/link';
import dayjs from 'dayjs';

export default function BlogMainPost({slug, thumbnail, title, subtitle, author, createdAt}){
  return (
    <Row
      align='middle'
      style={{
        height:400,
        textAlign: 'center',
      }}
    >
      <Col span={24}>
          <Link href={`/post/${slug}`}>
            <a>
              <Card
                //cover={<img alt={thumbnail.alt} src={thumbnail.imageUrl} />}
                style={{
                  height:400,
                  textAlign: 'center',
                }}
              >
                <h1>{title}</h1>
                <h3>{subtitle}</h3>
                <h4>{author}.{dayjs(createdAt).format("MMMM D")}</h4>
              </Card>
            </a>
          </Link>
      </Col>
    </Row>
  )
}