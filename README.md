# Build

```bash
npm i -g yarn
yarn install
```

# Reproduce (no error)
```bash
rm -fr .cache; node_modules/.bin/parcel build --log-level 3 src/index.full.html  | tee
```

# Reproduce (error)
```bash
rm -fr .cache; node_modules/.bin/parcel build --log-level 3 src/index.a-la-carte.html  | tee
```
