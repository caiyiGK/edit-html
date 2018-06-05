"use strict";
// 模版组件引入
import LayoutMenuPage from './menu';
import LayoutPage from './default';

// 模版组件数组
const components = [LayoutPage, LayoutMenuPage];

// 版本号
const version = '1.0.0.0'

// 组件重命名
const install = (Vue) => {
    components.map(component => {
        Vue.component(component.name, component);
    })
};

// 抛出接口
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
};

// 导出对象
export {
    install,
    version,
    LayoutPage,
    LayoutMenuPage
}
