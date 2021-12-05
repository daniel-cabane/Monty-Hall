<template>
  <v-app>
    <v-app-bar app color="primary" class="headline" dark>
      <span>
        Monty Hall
      </span>
      <v-spacer></v-spacer>
      <v-btn fab dark small color='primary' @click='showTutorial = true' style='margin-top:-5px'>
        <v-icon>mdi-help</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <mainDeck :showTutorial='showTutorial'/>
    </v-main>
  </v-app>
</template>

<script>
import mainDeck from './components/mainDeck';

export default {
  name: 'App',

  components: {
    mainDeck,
  },

  data: () => ({
    showTutorial: true
  }),
  mounted() {
    this.eventBus.$on('toggleTutorial', val => this.showTutorial = val);
  }
};
</script>
