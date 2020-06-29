<template>
  <div id="app">
    <router-link to="/">
      <h1 id="logo">Compa.</h1>
    </router-link>
    <router-view />
    <heart-card></heart-card>
  </div>
</template>

<script>
import HeartCard from "@/components/HeartCard.vue";

export default {
  components: {
    HeartCard
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#logo {
  color: #db93b0;
  font-weight: 900;
  font-size: 40px;
}

#app {
  font-family: "Barlow", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 40px 32px 0 32px;
}

a {
  text-decoration: none;
}
</style>
