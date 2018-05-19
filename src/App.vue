<template lang="pug">
  v-app
    v-toolbar(app tabs flat dark color="primary")
      v-avatar.ml2(size="32" tile)
        img(src="https://parceljs.org/assets/parcel-front.png")
      v-toolbar-title Parcel/Vuetify Error writing to cache Bug
    v-content
      v-container(fluid)
        p This happen when parcel serve/build/watch a project.
        h2 Step 1
        | Rebuild the app, there should be no errors:
        p
          code rm -fr .cache; node_modules/.bin/parcel build --log-level 3 src/index.full.html  | tee
        h2 Step 2
        | Now, rebuild the app and check for 🚨  Error writing to cache messages in the console
        p
          code rm -fr .cache; node_modules/.bin/parcel build --log-level 3 src/index.a-la-carte.html  | tee
</template>
