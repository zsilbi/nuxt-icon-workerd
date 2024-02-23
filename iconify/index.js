import { loadIcon } from "@iconify/core/lib/api/icons";

export default {
  async fetch(request, env, ctx) {
    await loadIcon("mdi:home");

    return new Response("Hello world!");
  },
};
