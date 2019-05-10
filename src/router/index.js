import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../views/home'
import TwoPage from '../views/two'

Vue.use(Router)

export default new Router({
    routes: [              //配置路由，这里是个数组
        {                    //每一个链接都是一个对象
            path: 'home',         //链接路径
            name: 'HomePage',     //路由名称，
            component: HomePage   //对应的组件模板
        },{
            path:'two',
            name:'TwoPage',
            component:TwoPage,
            /*children:[        //子路由,嵌套路由 （此处偷个懒，免得单独再列一点）
                {path:'/',component:Hi},
                {path:'hi1',component:Hi1},
                {path:'hi2',component:Hi2},
            ]*/
        }
    ]
})
