<template>
  <div>
   <h1> About Component </h1>
     <button @click="setData()"> Set Localstorage </button>
     <button @click="delData()"> Delete Localstorage </button>
     <hr/>
     <Counter />
  </div>
</template>

<script>
import Counter from './Counter.vue'
export default {
  name:"About",
  components:{
    Counter
  },
  beforeRouteLeave (to, from, next) {
                const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
                if (answer) {
                  next()
                } else {
                  next(false)
                }
              },
  methods:{
     setData(){
       localStorage.setItem('uid','joshisummi@gmail.com');
       alert("Data Set");
     },
     delData(){
         if(confirm("Do u want to delete ?"))
         {
           localStorage.removeItem('uid');
           alert("Remove Data");
         }
     }
  }
}
</script>

<style>

</style>