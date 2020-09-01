import * as page1Api from './service';

const globalModel = {
  namespace: 'global',
  state: {

  },
  subscriptions: {
    // setup({ dispatch, history }) {
    //   history.listen(({ pathname }) => {
    //     if (pathname === 'pages/index1/index1') {
    //       console.log(123456);
    //     }
    //   });
    // },
    startApp(){

    }
  },
  effects: {
    * effectsDemo({ payload }, { call, put }) {
      // const { status, data } = yield call(page1Api.demo, {});
      const res = yield call(page1Api.demo, payload);
      // if (status === 'ok') {
      //   yield put({ type: 'save',
      //     payload: {
      //       topData: data,
      //     }
      //   });
      // }
    },
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },

};

export default globalModel;
