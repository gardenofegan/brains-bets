<template>
  <div class="home">
    <h1>Please enter your name</h1>
    <input type="text" name="name">
    <button @click="submitName">Join Game</button>
  </div>
</template>

<script>
export default {
  name: 'nameEntry',
  components: {},
};
</script>
