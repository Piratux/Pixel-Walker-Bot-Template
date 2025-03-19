# Pixel-Walker-Bot-Template

This is a template project, to kickstart bot development for [PixelWalker](https://pixelwalker.net)

This relies on Doomester's [pw-js-api](https://www.npmjs.com/package/pw-js-api) and [pw-js-world](https://www.npmjs.com/package/pw-js-world) libraries.

This template is based on [Pixel-Walker-Copy-Bot](https://github.com/Piratux/Pixel-Walker-Copy-Bot). So you can check it for advanced usages.

## Technology stack
Typescript, Vite, Vue.

## Requirements to run project

Node.js >= 22.12.0

If you're using Windows, I highly recommend to use [nvm](https://github.com/coreybutler/nvm-windows) to download and manage Node.js versions

## Local development

At the root of project run:

```
npm run dev
```

Then open up this:\
http://localhost:3000/Pixel-Walker-Bot-Template/

Vite supports HMR (Hot Module Replacement) out of box, which means you can make code changes, and changes will be
reflected live.

When `package.json` changes, you need to run dev command again.

### Linting errors

This project automatically shows linting and typescript errors in the browser.

If you want to list the errors in console, such that you can more easily navigate to source location you can run:

```
npm run lint
```

### Local env files

To have custom config only when running locally:

- Create `.env.local` file at the root of the project as a copy of `.env`
- Modify the values in `.env.local` to your needs

NOTE: All env file entries must start with `VITE_`, otherwise value will be undefined in code.

## Test production build (optional)

At the root of project run:

```
npm run build
npm run preview
```

Then open up this:\
http://localhost:4173/Pixel-Walker-Bot-Template/

Vite's HMR won't work for production build, so you need to run build and preview commands when you make code changes.

## Changing project name
To change the name of project once you fork it, search for `Pixel-Walker-Bot-Template` occurences in project and replace them with your desired name.

## Publishing your bot
Once you have your project ready, it's trivial to deploy it to github pages. This allows others to see and use what you made without worrying about deployment. 

I won't list information here as it will get old quickly. So check it out here:

https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Useful links

- [Packet information](https://github.com/PixelWalkerGame/Protocol) - contains info what packets are sent and received by server
