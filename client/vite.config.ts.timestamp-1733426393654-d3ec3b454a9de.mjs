// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///C:/Users/jpf99/OneDrive/Desktop/github/CPS493Class2/CPS493Class/client/node_modules/.pnpm/vite@5.4.8_@types+node@20.16.9/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/jpf99/OneDrive/Desktop/github/CPS493Class2/CPS493Class/client/node_modules/.pnpm/@vitejs+plugin-vue@5.1.4_vite@5.4.8_@types+node@20.16.9__vue@3.5.9_typescript@5.4.5_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///C:/Users/jpf99/OneDrive/Desktop/github/CPS493Class2/CPS493Class/client/node_modules/.pnpm/@vitejs+plugin-vue-jsx@4.0.1_vite@5.4.8_@types+node@20.16.9__vue@3.5.9_typescript@5.4.5_/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import vueDevTools from "file:///C:/Users/jpf99/OneDrive/Desktop/github/CPS493Class2/CPS493Class/client/node_modules/.pnpm/vite-plugin-vue-devtools@7.4.6_rollup@4.22.4_vite@5.4.8_@types+node@20.16.9__vue@3.5.9_typescript@5.4.5_/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import VueRouter from "file:///C:/Users/jpf99/OneDrive/Desktop/github/CPS493Class2/CPS493Class/client/node_modules/.pnpm/unplugin-vue-router@0.10.8_rollup@4.22.4_vue-router@4.4.5_vue@3.5.9_typescript@5.4.5___vue@3.5.9_typescript@5.4.5_/node_modules/unplugin-vue-router/dist/vite.js";
var __vite_injected_original_import_meta_url = "file:///C:/Users/jpf99/OneDrive/Desktop/github/CPS493Class2/CPS493Class/client/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    VueRouter({
      /* options */
    }),
    vue(),
    vueJsx(),
    vueDevTools()
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  base: "./",
  build: {
    outDir: "../Server/dist"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxqcGY5OVxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXGdpdGh1YlxcXFxDUFM0OTNDbGFzczJcXFxcQ1BTNDkzQ2xhc3NcXFxcY2xpZW50XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxqcGY5OVxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXGdpdGh1YlxcXFxDUFM0OTNDbGFzczJcXFxcQ1BTNDkzQ2xhc3NcXFxcY2xpZW50XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9qcGY5OS9PbmVEcml2ZS9EZXNrdG9wL2dpdGh1Yi9DUFM0OTNDbGFzczIvQ1BTNDkzQ2xhc3MvY2xpZW50L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXHJcblxyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcclxuaW1wb3J0IHZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4J1xyXG5pbXBvcnQgdnVlRGV2VG9vbHMgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWRldnRvb2xzJ1xyXG5pbXBvcnQgVnVlUm91dGVyIGZyb20gJ3VucGx1Z2luLXZ1ZS1yb3V0ZXIvdml0ZSdcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgVnVlUm91dGVyKHtcclxuICAgICAgLyogb3B0aW9ucyAqL1xyXG4gICAgfSksXHJcbiAgICB2dWUoKSxcclxuICAgIHZ1ZUpzeCgpLFxyXG4gICAgdnVlRGV2VG9vbHMoKVxyXG4gIF0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSlcclxuICAgIH1cclxuICB9LFxyXG4gIGJhc2U6ICcuLycsXHJcbiAgYnVpbGQ6IHtcclxuICAgIG91dERpcjogJy4uL1NlcnZlci9kaXN0J1xyXG4gIH1cclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFzWixTQUFTLGVBQWUsV0FBVztBQUV6YixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8sZUFBZTtBQU4rTyxJQUFNLDJDQUEyQztBQVN0VCxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxVQUFVO0FBQUE7QUFBQSxJQUVWLENBQUM7QUFBQSxJQUNELElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFlBQVk7QUFBQSxFQUNkO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUFBLEVBQ0EsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLEVBQ1Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
