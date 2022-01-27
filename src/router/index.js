import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Courses from '../components/Courses.vue'
import React from '../components/React.vue'
import Node from '../components/Node.vue'
import Angular from '../components/Angular.vue'
import MainCourse from '../components/MainCourse'
import Params from '../components/Params';
import Mycomp from '../components/Mycomp';
function myGaurd(to,from,next){
    let isAutheticated=false;
    if(localStorage.getItem('uid')!=undefined)
    {
        isAutheticated=true;
    }
    else {
        isAutheticated=false;
    }
    if(isAutheticated){
        next();//allow to enter route
    }
    else {
        alert("You are not authorize to view this !");
        next("/");
    }
}
export default new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            name:'Home',
            components:{
                default:Home,
                a:Node,
                b:Angular
            }
        },
        {
            path:'/about',
            name:'About',
            component:About,
            
        },
        {
            path:'/mycomp',
            name:'Mycomp',
            component:Mycomp,
            
        },
        {
            path:'/params/:name',
            name:'Param',
            component:Params,
            
        },
        {
            path:'/courses',
            name:'Courses',
            beforeEnter:myGaurd,
            component:Courses,
            children:[
                {path:'',component:MainCourse},
                {path:'node',component:Node},
                {path:'react',component:React},
                {path:'angular',component:Angular}
            ]
        }
    ]
})