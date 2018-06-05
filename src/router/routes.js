"use strict";
export default [

    {
        path: '/',
        name: 'Home',
        meta: {title: '首页'},
        components: {
            Default: (resolve) => require(['@/pages/Home/index.vue'], resolve)
        }
    }
];
