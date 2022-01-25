import Vue from 'vue';
import Vuex from 'vuex';

import auth from './auth'

Vue.use(Vuex);

// 種類ごとにモジュールとしてストアを分ける。（認証のデータストア、写真データのデータストア）など
const store = new Vuex.Store({
  modules: {
    auth
  }
})

export default store