<template>
  <v-app>
    <Toolbar></Toolbar>
    <v-content>
      <v-container>
        <Demo2></Demo2>
        <Demo1></Demo1>
      </v-container>
    </v-content>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Toolbar from "./Toolbar";
import Footer from "./Footer";
import Demo1 from "./Demo1";
import Demo2 from "./Demo2";

export default {
  name: "App",
  components: { Toolbar, Footer, Demo1, Demo2 },
};
</script>
