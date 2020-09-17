import React from 'react';
import { Input, Row, Col } from 'antd';
import ReactJson from 'react-json-view';

const { TextArea } = Input;

interface Props {
  val?: string
}

export default class JsonUtil extends React.Component<any, any> {
  constructor (props: Props) {
    super(props)
    this.state = {
      val: props.val || '',
      jsonObj: {}
    }
    this.resetJsonVal = this.resetJsonVal.bind(this)
  }

  resetJsonVal (e: React.ChangeEvent<HTMLTextAreaElement>) {
    let value = e.target.value
    try {
      let obj = JSON.parse(value)
      this.setState({ 
        val: JSON.stringify(obj, null, 4),
        jsonObj: obj
      })
    } catch (e) {
      console.error(e)
      this.setState({ val: value })
    }
  }

  render () {
    return (
      <div className="json-util-wrapper">
        <Row gutter={16}>
          <Col md={12} className="json-util-left">
            <TextArea value={this.state.val} onChange={this.resetJsonVal} rows={30}/>
          </Col>
          <Col md={12} className="json-util-right">
            <ReactJson src={this.state.jsonObj} />
          </Col>
        </Row>
      </div>
    )
  }
}
