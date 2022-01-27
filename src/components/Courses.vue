<template>
  <div>
      <h2> Courses {{cname}} </h2>
        <ul >
             <li class="nav-item">
          <router-link class="nav-link" to="/courses/node">Node</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/courses/react">React</router-link>
        </li>
         <li class="nav-item">
          <router-link class="nav-link" to="/courses/angular">Angular</router-link>
        </li>
        </ul>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:"Courses",

  data(){
      return {
          cname:this.$route.params.id
      }
     },
    created(){
        //   this.cname=this.$route.params.id;
        //   console.log(this.cname)
    }
  
}
</script>

<style>

</style>