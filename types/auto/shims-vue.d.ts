/* src/shims-vue.d.ts */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  // 定义 .vue 模块的默认导出类型
  const component: DefineComponent<{}, {}, any>;
  export default component;
}