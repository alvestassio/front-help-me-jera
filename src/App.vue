<template>
  <div>
    <Header></Header>
    <div class="container" id="app">
      <router-view />
    </div>
  </div>
</template>

<script>
  import Header from "./components/Header";

  export default {
    name: 'App',
    components: {
      Header
    }
}
</script>

