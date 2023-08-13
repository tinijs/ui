# Tini UI 

The UI system of the TiniJS Framework.

It is a collection of UI components, themes and icons packages that are used to build UIs for TiniJS applications.

All the components and icons components are standard web custom elements, which can be used with any web frameworks or in plain HTML.

Homepage: <https://ui.tinijs.dev>

## Install and Usage

There are 2 main ways of using Tini UI:

1. Use the [@tinijs/cli](https://github.com/tinijs/cli) to create TiniJS applications and manage themes.
2. Install the specific pre-built packages.

**Quick note**: A `THEME` is a combination of a `soul` and a `skin`. You can have one or more themes both at the build time and the run time. For more detail, please visit the [TiniJS UI homepage](https://ui.tinijs.dev).

### 1. Use the official CLI

The CLI is the **recommended** way of using Tini UI. It helps you to create new TiniJS projects quickly and manage themes easily by providing the `tini ui use` command.

Github repo: <https://github.com/tinijs/cli>

#### Create a new TiniJS project

To create a new TiniJS app, run:

```bash
npx @tinijs/cli new my-app --latest
```

The skeleton app comes with a default theme (`bootstrap/light`).

To change themes of the app, run:

```bash
npx tini ui use bootstrap/dark
```

#### Add Tini UI to an existing project

Install the CLI as a dev dependency:

```bash
npm i -D @tinijs/cli
```

Then run `tini ui use <list of soul/skins>`:

```bash
npx tini ui use bootstrap/light,dark
```

### 2. Use the pre-built packages

Pre-built packages are available on NPM. You can install them directly to your project.

```bash
npm i @tinijs/ui-<id>

# For example:
npm i @tinijs/ui-bootstrap
```

Include skins (and skin utils) in a global CSS file, for example:

```css
@import '../node_modules/@tinijs/ui-bootstrap/styles/skins/light.css';
@import '../node_modules/@tinijs/ui-bootstrap/skin-utils.css';
```

Then import use the components, for example:

```js
import {TiniButtonComponent} from '@tinijs/ui-bootstrap/components/button.js';
```

```html
<tini-button color="primary">A button</tini-button>
```

Please see the list of [official packages](#packages) below.

## Packages

### Bootstrap

Install: `npm i @tinijs/ui-bootstrap`

Official skins:
  - `light`
  - `dark`

### And more

// TODO

## Contributing

### Development

- Create a home for TiniJS: `mkdir TiniJS && cd TiniJS`
- Fork the repo: `git clone https://github.com/tinijs/ui.git`
- Install dependencies: `cd ui && npm i`
- Make changes & preview locally: `npm run dev`
- Push changes & create a PR 👌

### Build & Publish

- Step 1: Check for the latest version of `npm i -D @tinijs/cli@latest`
- Step 2: Bump a version `npm version <number>`
- Step 3: Build packages `npm run build`
- Step 4: Publish packages (individually) `npm run publish:<id>:<name>`

## License

**@tinijs/ui** and its sibling packages are released under the [MIT](https://github.com/tinijs/ui/blob/master/LICENSE) license.
