<template>
  <div>
      <h2> Difference between ,method and computed properties </h2>
      <p> {{ fullnameComputed }} </p>
      <button @click="counterComputed++"> Computed </button>
       <p> {{ fullnameMethod() }} </p>
       <button @click="counterMethod++"> Method </button>
       <p> {{textComputed}} </p>
       <p> {{textMethod()}} </p>
  </div>
</template>

<script>
export default {
 name:"Mycomp",
 computed:{
    fullnameComputed(){
        return this.fname+" "+this.lname
    },
    textComputed(){
        console.log("Counter computed call")
        return this.counterComputed;
    }
 },
 data(){
     return {
         fname:"anuj",
         lname:"singh",
         counterComputed:0,
         counterMethod:0
     }
 },
 methods:{
      fullnameMethod(){
        return this.fname+" "+this.lname
    },
    textMethod(){
        console.log("Counter method call")
        return this.counterMethod;
    }
 }
 
}
</script>

<style>

</style>