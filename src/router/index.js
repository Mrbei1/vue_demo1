import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../views/home'
import TwoPage from '../views/two'
import ThreePage from '../views/three'
import FourPage from '../views/four'
import FourPage1 from '../views/four1'

Vue.use(Router)

export default new Router({
    routes: [              //配置路由，这里是个数组
        { path: '/', redirect: '/home'}, //路由重定向
        {                    //每一个链接都是一个对象
            path: '/home',         //链接路径
            name: 'HomePage',     //路由名称，
            component: HomePage   //对应的组件模板
        },{
            path:'/two',
            name:'TwoPage',
            component:TwoPage
        },{
            path:'/three',
            name:'ThreePage',
            component:ThreePage
        },{
            path:'/four',
            name:'FourPage',
            component:FourPage,
            children:[
                {path:'/four',name:'FourPage',component:FourPage},
                {path:'/four1',name:'FourPage1',component:FourPage1},
                ]
        }
    ]
})
