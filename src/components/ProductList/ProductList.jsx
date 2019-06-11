import { Table, Popconfirm, Button } from 'antd';

const ProductList = ({ onDelete, products }) => {
  const columns = [
    {
      title: '上海-公共组件',
      dataIndex: 'name',
    },
    {
      title: 'Actions - 北京-公共组件',
      render: (text, record) => {
        return (
          <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
            <Button>Delete - 我是一个公共组件</Button>
          </Popconfirm>
        );
      },
    }
  ];
  return (
    <Table
      rowKey={record => record.id}
      dataSource={products}
      columns={columns}
    />
  );
};

export default ProductList;
