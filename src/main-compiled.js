'use strict';

var _index = require('element-ui/lib/theme-default/index.css');

var _index2 = _interopRequireDefault(_index);

var _lib = require('element-ui/lib');

var _lib2 = _interopRequireDefault(_lib);

require('normalize.css');

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vuex = require('vuex');

var _vuex2 = _interopRequireDefault(_vuex);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _App = require('./App.vue');

var _App2 = _interopRequireDefault(_App);

var _store = require('./store/store');

var _store2 = _interopRequireDefault(_store);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_lib2.default);
_vue2.default.use(_vueRouter2.default);
_vue2.default.use(_vuex2.default);


var router = new _vueRouter2.default({
  routes: _routes2.default
});

new _vue2.default({
  el: '#app',
  render: function render(h) {
    return h(_App2.default);
  },
  router: router,
  store: _store2.default
});

//# sourceMappingURL=main-compiled.js.map