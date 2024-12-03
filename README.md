# biffud.com

## Development

### Quick start

```
$ yarn install // installs all dependencies
$ yarn start   // starts local server
```

When started successfully, you may access the local server at http://localhost:8000/

### Troubleshooting

Some issues can be resolved by clearing the cache and rebuilding files. The first command is less destructive, while the second resets your local environment from scratch.

```
$ yarn clear // clears local cache, builds (excludes node_modules)
```

or

```
$ yarn clean // clears local cache, builds, node_modules, yarn trash
```

## Deployment

```
$ yarn build // creates site bundle
```
