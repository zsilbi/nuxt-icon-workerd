# nuxt-icon-workerd (error reproduction)

## Testing nuxt-icon

Issue: https://github.com/nuxt-modules/icon/issues/142

1. Install dependencies:

```bash
pnpm i
```

2. Run build:

```
NITRO_PRESET=cloudflare_module pnpm run build
```

3. Open these pages first:

   - http://localhost:8787/test/1
   - http://localhost:8787/test/2
   - http://localhost:8787/test/3
   - http://localhost:8787/test/4
   - http://localhost:8787/test/5
   - ... or as many as needed

4. Start Wrangler:

```bash
npx wrangler dev .output/server/index.mjs --site .output/public
```

5. Select all opened tabs in Chrome by holding the Shift key
6. Refresh all tabs at the same time and check console for errors. The errored tabs will also contain an error message: `Error: The script will never generate a response.`
7. Repeat steps 3-6 if no error is visible in console
8. Remove `<Icon>` from `app.vue` and check again

## Testing @iconify/core `loadIcon()`

1. Change to the the `iconify` directory

```
cd iconify
```

2. Install dependencies:

```bash
pnpm i
```

3. Start Wrangler:

```bash
npx wrangler dev index.js
```

4. Open page

- http://localhost:8787

5. Check console and the open tab

### Errors that should appear in the console:

`✘ [ERROR] Uncaught (in response) Error: The script will never generate a response.`

`✘ [ERROR] A hanging Promise was canceled. This happens when the worker runtime is waiting for a Promise from JavaScript to resolve, but has detected that the Promise cannot possibly ever resolve because all code and events related to the Promise's I/O context have already finished.`
