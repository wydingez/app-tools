import React from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

interface Props {
  val?: string
}

export default class JsonUtil extends React.Component<any, any> {
  constructor (props: Props) {
    super(props)
    this.state = {
      val: props.val || ''
    }
    this.resetJsonVal = this.resetJsonVal.bind(this)
  }

  resetJsonVal (e: React.ChangeEvent<HTMLTextAreaElement>) {
    let value = e.target.value
    try {
      let obj = JSON.parse(value)
      this.setState({ val: JSON.stringify(obj, null, 4) })
    } catch (e) {
      console.error(e)
      this.setState({ val: value })
    }
  }

  render () {
    return (
      <div className="json-util-wrapper">
        <div className="json-util-left">
          <TextArea value={this.state.val} onChange={this.resetJsonVal} autoSize/>
        </div>
        <div className="json-util-right">right</div>
      </div>
    )
  }
}
