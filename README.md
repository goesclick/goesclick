# goesclick
Like the sound Legos make when a child is building a dream from their imagination.

## Spin up

### Dependencies

* #### [yarn](https://classic.yarnpkg.com/en/docs/install)
* #### [create-react-app](https://create-react-app.dev/docs/setting-up-your-editor)
* #### [Styleguidist](https://react-styleguidist.js.org/docs/getting-started.html)
* #### [Storybook](https://storybook.js.org/docs/guides/guide-react/)
* #### [TypeScript](https://www.typescriptlang.org/play/index.html?jsx=2&esModuleInterop=true&e=196#example/typescript-with-react)
* #### [prismjs](https://prismjs.com/)
* #### [react-docgen-typescript](https://github.com/styleguidist/react-docgen-typescript)

## Code Base

### Development

```shell
  cd goes.click/
```

- `yarn start`: Starts the development server.  Open http://localhost:3000 to view it in the browser.
- `yarn build`: Bundles the app into static files for production.

- `yarn test`: Starts the test runner.
- `yarn eject`: Removes this tool and copies build dependencies, configuration
  files and scripts into the app directory. If you do this, you can’t go back!

#### HTTPS in Development

```shell
  HTTPS=true npm start
```

To avoid having to set the environment variable each time, you can either
include in the npm start script like so:

```json
{
  "start": "HTTPS=true react-scripts start"
}
```

#### Updating Dependencies

> To update an existing project to a new version of react-scripts, open the changelog, find the version you’re currently on (check package.json in this folder if you’re not sure), and apply the migration instructions for the newer versions.
>
> In most cases bumping the react-scripts version in package.json and running npm install (or yarn install) in this folder should be enough, but it’s good to consult the changelog for potential breaking changes.
>
>We commit to keeping the breaking changes minimal so you can upgrade
>react-scripts painlessly.

--  _https://create-react-app.dev/docs/updating-to-new-releases_

#### Setting up VS Code

> If you're using TypeScript and Visual Studio Code, the ESLint Visual Studio
> Code extension currently doesn't have TypeScript support enabled by default.
> To enable TypeScript support in the ESLint extension, add the following to
> your project's Visual Studio Code settings file, located at
> .vscode/settings.json (you can create this file if it doesn't already exist):

```json
  {
    "eslint.validate": [
      "javascript",
      "javascriptreact",
      { "language": "typescript", "autoFix": true },
      { "language": "typescriptreact", "autoFix": true }
    ]
  }
```

#### Run React Storybook

Run the following command inside your app’s directory:

```shell
  npx -p @storybook/cli sb init
```

#### Styleguidist

> Styleguidist combines a style guide, where all your components are presented
> on a single page with their props documentation and usage examples, with an
> environment for developing components in isolation, similar to Storybook. In
> Styleguidist you write examples in Markdown, where each code snippet is
> rendered as a live editable playground.


```shell
  yarn add react-styleguidist
```

### Testing the build

You may serve it with a static server after running `yarn build`

```shell
  yarn global add serve
  serve -s build
```

### Dependencies

#### Front-end

- prismjs [https://prismjs.com/](https://prismjs.com/)



#### Back-end

## Appendix

### Handy Commands

#### Storybook

```shell
cd ./goes.click/
yarn storybook
```

#### Styleguidist

```shell
cd ./goes.click/
npm run styleguide
```

`npx styleguidist server`: Start a style guide dev server.
`npx styleguidist build`: Build a production HTML version.

#### Bundle Analysis

Then to analyze the bundle run the production build then run the analyze script.

```shell
  npm run build
  npm run analyze
```
