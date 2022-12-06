/// <reference types="vitest" />
import type { UserConfig as VitestUserConfigInterface } from 'vitest/config';
import {defineConfig} from 'vitest/config';

const vitestConfig: VitestUserConfigInterface = {
  test: { 
  }
};

export default defineConfig({
  test: vitestConfig.test,
});