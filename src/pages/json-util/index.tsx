import React from 'react';
import ReactDom from 'react-dom'
import { Input, Row, Col } from 'antd';
import ReactJson from 'react-json-view';
import BrowserWraper from '../../components/browser-wrap'
import './index.scss';

const { TextArea } = Input;

interface Props {
  val?: string
}

export default class JsonUtil extends React.Component<any, any> {
  constructor (props: Props) {
    super(props)
    this.state = {
      val: '',
      jsonObj: {},
      textAreaHeight: null
    }
    this.resetJsonVal = this.resetJsonVal.bind(this)
  }

  resetJsonVal (e: React.ChangeEvent<HTMLTextAreaElement>) {
    let value = e.target.value
    this.doSetJson(value)
  }

  doSetJson (value: string) {
    try {
      let obj = JSON.parse(value)
      this.setState({ 
        val: JSON.stringify(obj, null, 4),
        jsonObj: obj
      })
      localStorage.setItem('___JSNO_RECORD', value)
    } catch (e) {
      console.error('format error...')
      this.setState({ val: value })
    }
  }

  componentDidMount () {
    let dom = ReactDom.findDOMNode(this.refs.textArea) as HTMLTextAreaElement;
    this.setState({
      textAreaHeight: dom.offsetHeight
    })
    
    let ___JSNO_RECORD = localStorage.getItem('___JSNO_RECORD')
    if (___JSNO_RECORD) {
      this.doSetJson(___JSNO_RECORD)
    }
  }

  render () {
    return (
      <BrowserWraper>
        <Row gutter={32} className="json-util-wrapper">
          <Col md={12} className="json-util-left">
            <TextArea 
              value={this.state.val}
              onChange={this.resetJsonVal} 
              rows={30}
              ref="textArea"
            />
          </Col>
          <Col md={12} className="json-util-right" >
            <div 
              className="content" 
              style={{
                'maxHeight': this.state.textAreaHeight + 'px',
                'minHeight': this.state.textAreaHeight + 'px'
              }}
            >
              <ReactJson 
                src={this.state.jsonObj}
                iconStyle="square"
                displayObjectSize={false}
                displayDataTypes={false}
                theme="monokai"
                indentWidth={2}
                name={false}
              />
            </div>
          </Col>
        </Row>
      </BrowserWraper>
    )
  }
}
