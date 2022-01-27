<template>
    <div>
        <p> {{count}} </p>
        <button v-on:click="addCounter()"> Add </button>
        <button v-on:click="subCounter()"> Sub </button>
    </div>
</template>

<script>
import store from '../store/store';
import * as type from '../store/types';
import {mapState} from 'vuex';
export default {
   computed :mapState({
       count:state=> state.count
   }),
   methods:{
       addCounter(){
           store.dispatch({
               type:type.Increment,
               amount:5
           })
       },
        subCounter(){
           store.dispatch({
               type:type.Decrement,
               amount:2
           })
       }
   }
}
</script>

<style>

</style>