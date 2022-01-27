<template>
   <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About Us</router-link>
        </li>
       <li class="nav-item">
          <router-link class="nav-link" to="/courses">Courses</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/params/sumit">Sumit</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/params/amit">Amit</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/mycomp">Mycomp</router-link>
        </li>
        <!--
        <li class="nav-item">
          <router-link class="nav-link" to="/courses/react">React</router-link>
        </li>
         <li class="nav-item">
          <router-link class="nav-link" to="/courses/angular">Angular</router-link>
        </li> -->
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" >{{counter}}</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name:"Nav",
   computed :mapState({
       counter:state=> state.count
   })
}
</script>

<style>

</style>