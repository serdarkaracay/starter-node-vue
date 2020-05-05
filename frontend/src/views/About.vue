<template>
  <div class="example">
    <button v-on:click="callBackendApi">Call Api Backend</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "example",
  methods: {
    async callBackendApi() {
      debugger;
      const req = await axios.get("/api");
      alert(req.data);
    },
  },
};
</script>
