import * as page2Api from './service';
 
export default {
  namespace: 'page2',
  state: {
 
  },
 
  effects: {
    * effectsDemo({ payload }, { call, put }) {
      const { code, data } = yield call(page2Api.demo, payload);
      if (code === 200) {
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
