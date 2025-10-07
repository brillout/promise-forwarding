# Promise Forwarding

Playground and issues with forwarding promises.

```
$ node test.js
```

Note how `Unhandled Rejection` is printed three times, but it should be printed only once.

✅ Fixable promise forwarding:
 - Use `.then(resolve, reject)` instead of `.catch(reject); .then(resolve)`.

❌ No solution found for user-land `.finally()` usage.
