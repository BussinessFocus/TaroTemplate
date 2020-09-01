import * as indexApi from './service';
 
export default {
  namespace: 'index',
  state: {
 
  },
 
  effects: {
    * effectsDemo({ payload }, { call, put }) {
      const { status, data } = yield call(indexApi.demo, payload);
      if (status === 'ok') {
        yield put({ type: 'save',
          payload: {
            topData: data,
          } });
      }
    },
  },
 
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
 
};
