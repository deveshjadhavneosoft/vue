<template>
  <div>
      <h2> Params {{myparam}} </h2>
  </div>
</template>

<script>
export default {
  name:"Params",
  data(){
      return {myparam:'xyz'}
  },
  beforeRouteUpdate (to, from, next) {
  // just use `this`
  console.log(to.params.name)
  this.myparam = to.params.name
  next()
}
}
</script>

<style>

</style>