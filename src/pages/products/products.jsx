import { connect } from 'dva';
import ProductList from '../../components/ProductList/ProductList';
import React from 'react';
import {Button} from 'antd';

const Products = ({ dispatch, products }) => {
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  return (
    <div>
      <h2>List of Products -- 哈哈，我是父组件！</h2>
      <ProductList onDelete={handleDelete} products={products} />

      <Button type='primary' size='small'>登录</Button>
    </div>
  );
};

export default connect(({ products }) => ({
  products,
}))(Products);
