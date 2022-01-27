<template>
<div>
   <h1> Home Component </h1>
   <p> Computed : {{getRandomNumber}}</p>
   <p> {{reverseMessage}} </p>
   <p> Method :  {{getRandomNumber1()}}</p>
    <p> Method : {{getRandomNumber1()}}</p>
     <p> Method :  {{getRandomNumber1()}}</p>
      <p>Computed : {{getRandomNumber}}</p>
</div>
</template>

<script>
export default {
  name:"Home",
  computed:{
      reverseMessage:function(){
        return this.message.split('').reverse().join('');
      },
      getRandomNumber(){
        return Math.random();
      }
  },
  data(){
    return {
      message:"Hello"
    }
  },
  methods:{
    getRandomNumber1(){
        return Math.random();
      }
  },
  destroyed(){
    
    console.log("Destroyed call")
  }
}
</script>

<style>

</style>