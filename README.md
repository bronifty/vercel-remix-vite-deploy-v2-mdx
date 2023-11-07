# Remix-Vite on Vercel

- Make sure to set the custom build output directory (the frontend) to "public/build"; the vercel.json config file is set to intercept all requests to the frontend and redirect them to the api folder's serverless function, which then redirects requests to the custom server build functions produced by remix team via their vite plugin

## Secret Sauce (2 Things):

1. vercel.json intercepting all requests and routing to api folder's serverless function

```json
{
  "rewrites": [
    {
      "source": "/((?!assets/).*)",
      "destination": "/api/server.mjs"
    }
  ]
}
```

2. api folder's serverless function's default export which is a headless express (catchall application router with route handlers)

# templates/unstable-vite-express

⚠️ Remix support for Vite is unstable and not recommended for production.

📖 See the [Remix Vite docs][remix-vite-docs] for details on supported features.

## Setup

```shellscript
npx create-remix@latest --template remix-run/remix/templates/unstable-vite-express
```

## Run

Spin up the Express server as a dev server:

```shellscript
npm run dev
```

Or build your app for production and run it:

```shellscript
npm run build
npm run start
```

## Customize

Remix exposes APIs for integrating Vite with a custom server:

```ts
import {
  unstable_createViteServer,
  unstable_loadViteServerBuild,
} from "@remix-run/dev";
```

In this template, we'll use Express but remember that these APIs can be used with _any_ Node-compatible server setup that supports standard middleware.

[remix-vite-docs]: https://remix.run/docs/en/main/future/vite
