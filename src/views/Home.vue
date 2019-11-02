<template>
  <div class="home">
    <h1>Enter your room code</h1>
    <input type="text" name="name">
    <button @click="submitCode">Join Game</button>

    <p>
      <button @click="createNewGame">Create New Game</button>
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    // HelloWorld,
  },
};
</script>
