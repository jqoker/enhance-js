# enhance-js

简单增强工具集

## API

### 1. combine(...funcs, [initialValue = 1])

```
  example:

    f(x) = x + 1
    g(x) = 2 * x + 3

    h(x) = f(x) * g(x) = combine([f(x), g(x)]);

```


### 2. pipe(...funcs, [initialValue = 1])

```
  example:

    f(x) = x + 1
    g(x) = 2 * x + 3

    h(x) = g(f(x)) = pipe([f(x), g(x)]);
```
