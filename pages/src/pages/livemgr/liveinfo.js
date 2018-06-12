import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  Button,
  Modal,
  Popconfirm,
  message,
  Form,
  Input,
  Row,
  Col,
  Icon
} from 'antd';
const FormItem = Form.Item;

class LivePlay extends React.Component {

  render() {

    return(
        <video style={{
          height : '100%',
          width : '100%',
        }} poster={poster} autoPlay={false}  src="http://common.qupai.me/player/qupai.mp4" controls="controls" >
        </video> 
    )
  }
}

export default class Liveinfo extends Component {

  render() {
    return (
      <div>
        <div style={{
          paddingBottom : "10px"
        }
        }>
         <LivePlay></LivePlay>
        </div> 
      </div>
    )
  }


  
  componentDidMount(){

  }

  static contextTypes = {
    store: PropTypes.object
  }; //指定子context的对象结构

  //构建子组件用到的context
  static childContextTypes = {
    router: PropTypes.object,
    store: PropTypes.object
  };

  getChildContext() {
    const {history, location, match, staticContext} = this.props;
    const {store} = this.context;
    return {
      router: {
        history: history,
        route: {
          location: location,
          match: match,
          staticContext: staticContext
        }
      },
      store: store
    }
  }
}
