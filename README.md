# jest-filter-test

temporary test for jest CLI --filter option
deployed on [replit](https://replit.com/@PabloLION/jest-filter-test)

## How

`yarn && yarn test`

## Why

The [documentation](https://jestjs.io/docs/cli#--filterfile) for `--filter` option for jest CLI was not working for me. I saw that this part of doc was edited in [facebook/jest#12260](https://github.com/facebook/jest/issues/12260). But when I set it up with a minimal working version hosted on [replit](https://repl.it/@PabloLION/jest-filter-test) with GitHub [repo](https://github.com/PabloLION/jest-filter-test), it didn't work. The error says:

```plaintext
  5 files checked.
  testMatch: **/__tests__/**/*.[jt]s?(x), **/?(*.)+(spec|test).[tj]s?(x) - 2 matches
  testPathIgnorePatterns: /node_modules/ - 5 matches
  testRegex:  - 0 matches
```

I also tried to add a `writeFileSync(__dirname + '/testPaths.txt', testPaths.toString());` but it didn't work either.
