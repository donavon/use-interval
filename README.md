# @use-it/interval

A custom React Hook that provides a declarative `setInterval` called `useInterval`.

> New version 1.0 has been completely rewritten in TypeScript!

[![npm version](https://badge.fury.io/js/%40use-it%2Finterval.svg)](https://badge.fury.io/js/%40use-it%2Finterval)
[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors)

This hook is an implementation of [Dan Abramov](https://github.com/gaearon)'s blog post
["Making setInterval Declarative with React Hooks"](https://overreacted.io/making-setinterval-declarative-with-react-hooks/).

## Installation

```bash
$ npm i @use-it/interval
```

or

```bash
$ yarn add @use-it/interval
```

## Usage

Here is a basic setup.

```js
useInterval(callback, delay);
```

### Parameters

Here are the parameters that you can use.

| Parameter  | Description                                                                      |
| :--------- | :------------------------------------------------------------------------------- |
| `callback` | A function that will be called every `delay` milliseconds.                       |
| `delay`    | A number representing the delay in msecs. Set to `null` to "pause" the interval. |

### Return

This hook returns nothing.

## Example

Let's look at some sample code. Here is a `Counter` component that counts up every second.

```js
import React, { useState } from 'react';
import useInterval from '@use-it/interval';

const Counter = ({ delay = 1000 }) => {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount((currentCount) => currentCount + 1);
  }, delay);

  return <h1>{count}</h1>;
};

export default Counter;
```

## Live demo

You can view/edit the sample code above on CodeSandbox.

[![Edit demo app on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/2n542qnzr)

## License

**[MIT](LICENSE)** Licensed

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://donavon.com"><img src="https://avatars3.githubusercontent.com/u/887639?v=4" width="100px;" alt=""/><br /><sub><b>Donavon West</b></sub></a><br /><a href="https://github.com/donavon/use-interval/commits?author=donavon" title="Code">💻</a> <a href="#infra-donavon" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/donavon/use-interval/commits?author=donavon" title="Tests">⚠️</a> <a href="#example-donavon" title="Examples">💡</a> <a href="#maintenance-donavon" title="Maintenance">🚧</a> <a href="https://github.com/donavon/use-interval/pulls?q=is%3Apr+reviewed-by%3Adonavon" title="Reviewed Pull Requests">👀</a> <a href="#tool-donavon" title="Tools">🔧</a></td>
    <td align="center"><a href="http://twitter.com/dan_abramov"><img src="https://avatars0.githubusercontent.com/u/810438?v=4" width="100px;" alt=""/><br /><sub><b>Dan Abramov</b></sub></a><br /><a href="https://github.com/donavon/use-interval/commits?author=gaearon" title="Code">💻</a> <a href="#blog-gaearon" title="Blogposts">📝</a> <a href="#ideas-gaearon" title="Ideas, Planning, & Feedback">🤔</a> <a href="#tutorial-gaearon" title="Tutorials">✅</a></td>
    <td align="center"><a href="http://michaelsync.net"><img src="https://avatars1.githubusercontent.com/u/192911?v=4" width="100px;" alt=""/><br /><sub><b>Michael Sync</b></sub></a><br /><a href="https://github.com/donavon/use-interval/issues?q=author%3Amichaelsync" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://onetwo.ren"><img src="https://avatars1.githubusercontent.com/u/3746270?v=4" width="100px;" alt=""/><br /><sub><b>lin onetwo</b></sub></a><br /><a href="https://github.com/donavon/use-interval/commits?author=linonetwo" title="Code">💻</a> <a href="https://github.com/donavon/use-interval/issues?q=author%3Alinonetwo" title="Bug reports">🐛</a></td>
    <td align="center"><a href="http://daniel-lauzon.com/"><img src="https://avatars0.githubusercontent.com/u/326183?v=4" width="100px;" alt=""/><br /><sub><b>Daniel Lauzon</b></sub></a><br /><a href="https://github.com/donavon/use-interval/commits?author=daneroo" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
