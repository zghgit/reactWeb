
export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
    initialState: {
      products: [
        { name: 'dva-我是数据，需要传递-app', id: 1 },
        { name: 'antd-哈哈！ 我也是数据-app', id: 2 },
      ],
    },
  },
};
