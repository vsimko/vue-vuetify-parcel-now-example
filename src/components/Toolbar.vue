<template>
  <v-app-bar color="blue-grey darken-1" app dark>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>{{ message }}</v-toolbar-title>

    <div class="flex-grow-1"></div>

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script>
export default {
  data() {
    return {
      message: "Using Parcel In A Vue.js App"
    };
  }
};
</script>