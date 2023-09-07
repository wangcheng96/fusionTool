import { Card, Col, Row } from 'antd';
import styles from './index.module.less'
import { ScissorOutlined, CameraOutlined, VideoCameraOutlined ,SoundOutlined} from '@ant-design/icons';

const Index = () => {
  return (
    <div className={styles.main}>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="" >
            <div>
              <div>
                截屏
              </div>
              <ScissorOutlined />
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="">
            <div>
              <div>
                录屏
              </div>
              <CameraOutlined />
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="" >
            <div>
              <div>
                录音
              </div>
              <SoundOutlined />
            </div>
          </Card>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="" >
            <div>
              <div>
                录像
              </div>
              <VideoCameraOutlined />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Index