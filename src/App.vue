<template>
  
  <div id="app">
    <!-- <h2> {{title}} </h2>
    <p ref="ele"> {{counter}} </p> -->
    <Nav />
    <section class="container">
        <router-view></router-view>
        <router-view name="a"></router-view>
        <router-view name="b"></router-view>
    </section>
  </div>
</template>

<script>

import Nav from './components/Nav.vue'
export default {
  name: 'App',
  components :{
    Nav
  },
  data(){
    return {title:"xyz",counter:0}
  },
  // beforeCreate(){
  //   alert('Before create call '+this.title);
  // }
  created(){
     setInterval(()=>{
         this.counter++
     },5000)
  },
  // beforeMount(){
  //   alert("Before Mount")
  // }
  mounted(){
    this.title="SUmit Joshi";
    console.log(this.counter)
  },
  updated(){
     console.log("Updated is called")
     //console.log(this.counter)
  },
  destroyed(){
    this.$destroy();
    console.log(this)
  }
}
</script>

<style>

</style>
