<template>
  <v-footer dark color="blue-grey darken-4">
    <v-container>
      <v-row justify="space-around" align="start">
        <v-col cols="12" sm="6" md="auto" class="pt-6">
          Made with <v-icon small color="red lighten-2">mdi-heart</v-icon> by
          <span class="text-no-wrap">Viliam Simko</span>
        </v-col>

        <v-col cols="12" sm="6" md="auto">
          <span id="contact"><!-- anchor --></span>
          <v-container justify="start" class="pa-0">
            <v-row>
              <v-col cols="auto">
                <v-icon>mdi-email</v-icon>
              </v-col>
              <v-col>
                <a href="mailto:sample@email.com">sample@email.com</a>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="auto">
                <v-icon>mdi-phone</v-icon>
              </v-col>
              <v-col>
                <a href="tel:..."> ...</a>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="auto">
                <v-icon>mdi-map-marker</v-icon>
              </v-col>
              <v-col>
                Street, Country
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    currentYear: new Date().getFullYear()
  })
};
</script>
<style scoped>
footer a {
  color: silver;
  text-decoration: none;
}
</style>