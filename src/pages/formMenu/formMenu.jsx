import { connect } from 'dva';
import React from 'react';
import { Modal, Button } from 'antd';

class Apps extends React.Component {
  state = { visible: false}

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    })
  }
}

const HomePage = ({ dispatch, homePage }) => {
  function handleDelete(id) {
    dispatch({
      type: 'homePage',
      payload: id,
    });
  }
  return (
    <div>
      <h2>List of homePage 首页</h2>

      <Button type='primary' size='small'>登录</Button>
      <div>{homePage}</div>
      {/*<Button type='primary' size='small' onClick={this.showModal}>登录</Button>*/}
      {/*<Modal*/}
      {/*title='登录用户名'*/}
      {/*visible={this.state.visible}*/}
      {/*onOK={this.handleOk} onCancel={this.handleCancel}>*/}
      {/*<p>我是一个登录弹框！</p>*/}
      {/*</Modal>*/}
    </div>
  );
};

export default connect(({ homePage }) => ({
  homePage,
}))(HomePage);
