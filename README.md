## News Summary Exemplar

A component-based implementation in JS with no external libraries apart from Jasmine. Built for discussion with software development students.

### Quick Start

```sh
$ git clone git@github.com:dearshrewdwit/demo-news-summary.git && cd demo-news-summary
$ open index.html
```

### Tests
NB: component tests aren't isolated. Tests stub `fetch` appropriately.

```sh
$ open test/specRunner.html
```

### API

When loading in the browser locally however, be careful not to send frequent requests to the API in order to avoid exceeding the request rate limit.
