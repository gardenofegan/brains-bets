<template>
  <div class="main-container">
    <div class="bet-spot spot-one">
      <span class="odds">6 - 1</span>
      <span class="odds vertical">SMALLER<br/><small>THAN THE SMALLEST BET</small></span>
    </div>
    <div class="bet-spot spot-two">
      <span class="odds">5 - 1</span>
    </div>
    <div class="bet-spot spot-three">
      <span class="odds">4 - 1</span>
    </div>
    <div class="bet-spot spot-four">
      <span class="odds">3 - 1</span>
    </div>
    <div class="bet-spot spot-five">
      <span class="odds">2 - 1</span>
    </div>
    <div class="bet-spot spot-six">
      <span class="odds">3 - 1</span>
    </div>
    <div class="bet-spot spot-seven">
      <span class="odds">4 - 1</span>
    </div>
    <div class="bet-spot spot-eight">
      <span class="odds">5 - 1</span>
    </div>
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


<style lang="scss">
  .main-container {
    background-color: green;
    height:100vh;
    display:flex;
    display: -webkit-flex;
    flex-direction: row;
    -webkit-flex-direction: row;
    -webkit-align-content: stretch;
    align-content: stretch;

    .bet-spot {
      flex: 1;
      border: 1px solid white;
      border-radius: 10px;
      margin: 10px;

      .odds {
        color: white;
        font-weight: bold;
        font-size: 3rem;
        opacity: 0.3;
        margin: 50px auto;
        line-height: 1;

        &.vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }

        small {
          font-size: 1.5rem;
        }
      }
    }
  }
</style>
