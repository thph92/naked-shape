import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSvgr } from '@rsbuild/plugin-svgr';
import { pluginTypeCheck } from '@rsbuild/plugin-type-check';
import { pluginStyledComponents } from '@rsbuild/plugin-styled-components';
import { RsdoctorRspackPlugin } from '@rsdoctor/rspack-plugin';
import { pluginSass } from '@rsbuild/plugin-sass';

export default defineConfig({
  source: {
    decorators: {
      version: 'legacy',
    },
    define: {},
  },
  server: {
    base: '/mw',
  },
  html: {
    template: './public/index.html',
  },
  output: {
    distPath: {
      root: 'build',
    },
  },
  dev: {
    lazyCompilation: false,
  },
  plugins: [pluginTypeCheck(), pluginReact(), pluginStyledComponents(), pluginSvgr(), pluginSass()],
  tools: {
    swc: {
      jsc: {
        parser: {
          syntax: 'typescript',
          tsx: true,
        },
        transform: {
          react: {
            runtime: 'automatic',
          },
        },
      },
    },
    rspack(config, { appendPlugins }) {
      if (process.env.RSDOCTOR) {
        appendPlugins(new RsdoctorRspackPlugin({}));
      }
    },
  },
});
