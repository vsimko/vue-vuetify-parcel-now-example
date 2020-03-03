<template>
  <v-app-bar color="blue-grey darken-1" app dark>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>{{ message }}</v-toolbar-title>

    <div class="flex-grow-1"></div>

    <v-btn icon href="https://github.com/vsimko/vue-vuetify-parcel-now-example">
      <v-icon>{{icons.mdiGithubCircle}}</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script>
import { mdiGithubCircle } from '@mdi/js'
export default {
  data() {
    return {
      icons:{
        mdiGithubCircle
      },
      message: "Using Parcel In A Vue.js App"
    };
  }
};
</script>