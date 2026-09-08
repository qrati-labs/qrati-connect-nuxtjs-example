# Qrati Connect — NuxtJS Example

[![Qrati Connect — embeddable event photo galleries](public/qrati-connect-og.png)](https://qrati.com/connect)

Embed a live event photo gallery in Nuxt with guest uploads, full-screen lightbox, emoji reactions, and photo-contest leaderboards. [Explore Qrati Connect](https://qrati.com/connect) or [view the live NuxtJS example](https://qrati.com/connect/nuxtjs-example).

## What this demonstrates

- Immediate `<qrati-connect>` rendering with no authentication gate.
- Host-controlled light/dark theme synchronization.
- Nuxt base-path deployment at `/connect/nuxtjs-example/`.
- Cookie consent with `vanilla-cookieconsent`.

## Run locally

```bash
pnpm install
pnpm dev
```

Build and preview the production output:

```bash
pnpm build
pnpm preview
```

The widget is registered in `plugins/qrati.client.ts` and rendered by `app/app.vue`. Set `NUXT_PUBLIC_ORGANIZATION_ID` to select the Qrati organization.

## Integration

```vue
<qrati-connect
  :organization-id="organizationId"
  :theme="theme"
  router="hash"
 />
```

Learn more in the [Qrati Connect documentation and examples](https://qrati.com/connect).
