// vite.config.ts
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import SvgComponent from 'unplugin-svg-component/vite'
import UnoCSS from 'unocss/vite'
export default defineConfig({
  plugins: [
    vue(),
    // 自动按需导入 API
    // 通过 Vite 的一个插件 unplugin-auto-import 自动生成的。 当你配置了该插件后，它会自动扫描你项目中的 Vue、Vue Router、Pinia、Element Plus 等库，把常用的函数提取出来生成这个文件。
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      dts: 'types/auto/auto-imports.d.ts',
      resolvers: [ElementPlusResolver()]
    }),
    //在src/types/auto里面生成一份全局声明的文件，然后就可以自动按需导入组件
    Components({
      dts: 'types/auto/components.d.ts',
      resolvers: [ElementPlusResolver()]
    }),
    // 自动生成 SvgIcon 组件和 SVG 雪碧图
    SvgComponent({
      iconDir: [resolve(__dirname, 'src/common/assets/icons')],
      preserveColor: resolve(
        __dirname,
        'src/common/assets/icons/preserve-color'
      ),
      dts: true,
      dtsDir: resolve(__dirname, 'types/auto')
    }),
    // 原子化 CSS
    UnoCSS()
  ]
  // ... 配置项
})
