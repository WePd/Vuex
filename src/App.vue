<template>
  <div>
    <span>{{ message }}</span>
    <span>{{ tip }}</span>
  </div>
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      message: "",
      tip: process.env,
    }
  },
  mounted() {
    axios.post("/api/login").then((res) => {
      this.message = res.data.data.string
    })
  },
}
</script>