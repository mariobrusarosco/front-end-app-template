# Configuring the tool

The tool is configured using a `toml` file. The file should be named `pilsen.toml` and should be placed in the root of the project.

- [Configuration Overview](#configuration-overview)
- [Domains Configuration](#domains-configuration)
- [React Elements Configuration](#react-elements-configuration)
  - [Components Configuration](#components-configuration)
  - [Hooks Configuration](#hooks-configuration)
- [Example](#example)

## Overview

This document explains the TOML configuration provided in the `tool-config.md` file. The configuration is structured to manage domains and React elements (components and hooks) within a project.

## Domains Configuration

- **`[domains]` Section**: Defines settings related to domain management.
  - `pathToDomainsFolder`: Specifies the path to the folder containing domain definitions, set to `"src/domains"`.
  - `includes`: An array that lists the domains to include explicitly. By default, it's empty, meaning all domains are included unless specified in `excludes`.
  - `excludes`: An array for specifying which domains to exclude. It's empty by default.

## React Elements Configuration

This section is divided into two parts, one for components and one for hooks, under the `[react-elements]` parent key.

### Components Configuration

- **`[react-elements.component]` Section**: Contains settings specific to React components.
  - `folder`: The name of the folder where components are stored, `"components"`.
  - `type`: Specifies the type of React element, here it's `"component"`.
  - `testTitle`: A template for generating test titles for components, using placeholders like `:domainName` and `:elementName` for dynamic substitution.
  - `absolutePath`: A template for generating the absolute import path of a component, also supporting placeholders.

### Hooks Configuration

- **`[react-elements.hook]` Section**: Contains settings specific to React hooks.
  - `folder`: The name of the folder where hooks are stored, `"hooks"`.
  - `type`: Specifies the type of React element, in this case, `"hook"`.
  - `testTitle`: A template for generating test titles for hooks, similar to components, with placeholders for dynamic content.
  - `absolutePath`: A template for generating the absolute import path of a hook, supporting placeholders.

This configuration structure allows for a clear and organized way to manage domains, components, and hooks within a React project, ensuring consistency and facilitating ease of use across the development team.

## Example

```toml
[domains]
pathToDomainsFolder = "src/domains"
includes=[]
excludes=[]

[react-elements]

[react-elements.component]
  folder = "components"
  type = "component"
  testTitle = "Domains | :domainName | Components | :elementName"
  absolutePath = "@domains/:domainName/components/:elementName"

[react-elements.hook]
  folder = "hooks"
  type = "hook"
  testTitle = "Domains | :domainName | Hooks | :elementName"
  absolutePath = "@domains/:domainName/hooks/:elementName"
```
