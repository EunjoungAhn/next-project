import { Row, Col } from 'antd';
import BlockContent from '@sanity/block-content-to-react';
import Link from 'next/link';
import dayjs from 'dayjs';

// const serializers = {
//   types: {
//     code: ({node}) => {
//       return <P>code</P>;
//     },
//   },
// };

export default function BlogMainPost({blocks}){
  return (
    <Row>
      <Col span={24}>
          <BlockContent
            block={blocks}
            projectId="xen9ujpt"
            dataset='production'
            //serializers={serializers}
          />
      </Col>
    </Row>
  )
}