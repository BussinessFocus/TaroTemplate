import * as page1Api from './service';
 
export default {
  namespace: 'page1',
  state: {
 
  },
  subscriptions: {
    startApp(){

    }
  },
  effects: {
    * effectsDemo({ payload }, { call, put }) {
      const { code, data, } = yield call(page1Api.demo, payload);
      if (code === 200) {
        yield put({ type: 'save',
          payload: {
            topData: data,
          }
        });
      }
    },
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
