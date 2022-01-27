import Vue from 'vue';
import Vuex from 'vuex';

import auth from './auth'
import error from './error'

Vue.use(Vuex);

// 種類ごとにモジュールとしてストアを分ける。（認証のデータストア、写真データのデータストア）など
const store = new Vuex.Store({
  modules: {
    auth,
    error
  }
})

export default store