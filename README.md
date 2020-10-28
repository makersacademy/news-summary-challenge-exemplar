## News Summary Exemplar

A component-based implementation in JS with no external libraries apart from Jasmine. Built for discussion with software development students.

### Quick Start

```sh
$ git clone git@github.com:dearshrewdwit/demo-news-summary.git && cd demo-news-summary
$ open index.html
```

### Tests
NB: each component is tested in isolation. Tests stub `fetch` appropriately.

```sh
$ open test/specRunner.html
```

### API

When loading in the browser locally however, be careful not to send frequent requests to the API in order to avoid exceeding the request rate limit.

### Component Spec

Each component extends the `Component` class and therefore has the following interface:
##### `constructor(props)`
 - sets the component props and state
 - creates the component element
 - finally calls a `setupComponent()` function. This function makes any calls necessary and finishes by calling `render()`. Sometimes this might happen more than once.

 ##### `setStateAndRender(obj)`
 - Wraps `setState()` and `render()`. Prefer using this function directly rather than the individual functions.

 ##### `setState(obj)`
 - updates the component `state` object with the arg object property and values.

 ##### `render()`
 - This function is responsible for updating the DOM with the component html.
