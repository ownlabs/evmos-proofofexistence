<template>
  <div class="dapp">
    <h2 class="title is-size-4">Drag file to notarize</h2>


    <h2 class="title is-size-4">Drag file to verify</h2>
  </div>
</template>

<script>
import Web3 from "web3";
export default {
  props: ["account"],
  data() {
    return {
      web3: new Web3,
    };
  },
}
</script>