# Development

This project uses `Yarn Workspaces`. The following sections will guide us
on how to develop this package while seing its behavior before commiting
your code.

## Packages x Playground

_These are the main places we'll use to develop this tool._

**Packages** folder holds the source code.

**Playground** folder is where we'll simulte tool's usage with our local code changes, so we don't have to commit, push and publish our changes to see them in action.

## Packages

This project has only one project for now. It's called `beer`. It's a CLI tool that helps us to create a new project with a pre-defined structure.

To start the development of it, we need to:

1. Access the root folder of the project. it contains a `package.json` file:

```shell
{
  "private": true,
  "workspaces": [
    "packages/*",
    "playground/*"
  ]
}
```

2. Initialize the Yarn Workspace by running:

```shell
yarn

```

3. Access the `beer` package and start the project:

```shell
cd packages/beer
yarn dev
```

## Playground

Now every project placed inside `playground` has access of the most recent version of `beer`

1. Create a project where you'll play with the tool. Inside the `playground` you'll find the `boilerplate` folder. Duplicate it and change the folder's name to your 'project's name:

```shell
cd playground/your-project-name
yarn beer [command]
```

. [Optional] Run `beer` on your project from any folder

```shell
yarn workspace your-project=name beer [command]
```
