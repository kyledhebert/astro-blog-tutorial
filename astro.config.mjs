// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://eclectic-druid-2e79cb.netlify.app",
  integrations: [preact()]
});