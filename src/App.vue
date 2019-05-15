<template>
    <div id="app">
        <el-container>
            <el-header>
                <div v-model="isCollapse" style="display: inline-block;">
                    <span @click="CollapseChange" style="display:inline-block;width:60px;height:60px;cursor: pointer;">{{showMsg}}</span>
                </div>
                Header
            </el-header>
            <el-container>
                <el-aside v-bind:style="{width:widthChange}">
                    <div class="menu-box">
                        <el-menu :default-active="defaultActive" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
                            <el-submenu index="first-level1">
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span slot="title">导航一</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="home">
                                        <router-link class="routerPointer" to="/home">选项1</router-link>
                                    </el-menu-item>
                                </el-menu-item-group>
                                <el-menu-item-group>
                                    <el-menu-item index="two">
                                        <router-link class="routerPointer" to="/two">选项2</router-link>
                                    </el-menu-item>
                                </el-menu-item-group>
                                <el-menu-item-group>
                                    <el-menu-item index="three">
                                        <router-link class="routerPointer" to="/three">选项3</router-link>
                                    </el-menu-item>
                                </el-menu-item-group>
                                <el-submenu index="first-level1">
                                    <span slot="title">选项4</span>
                                    <el-menu-item index="four">
                                        <router-link class="routerPointer2" to="/four">选项4-1</router-link>
                                    </el-menu-item>
                                    <el-menu-item index="four1">
                                        <router-link class="routerPointer2" to="/four1">选项4-2</router-link>
                                    </el-menu-item>
                                </el-submenu>
                            </el-submenu>

                            <el-submenu index="first-level2">
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span slot="title">导航二</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="home2">
                                        <router-link class="routerPointer" to="/home">选项1</router-link>
                                    </el-menu-item>
                                </el-menu-item-group>
                                <el-menu-item-group>
                                    <el-menu-item index="two2">
                                        <router-link class="routerPointer" to="/two">选项2</router-link>
                                    </el-menu-item>
                                </el-menu-item-group>
                                <el-menu-item-group>
                                    <el-menu-item index="three2">
                                        <router-link class="routerPointer" to="/three">选项3</router-link>
                                    </el-menu-item>
                                </el-menu-item-group>
                                <el-submenu index="second-level2">
                                    <span slot="title">选项4</span>
                                    <el-menu-item index="four2">
                                        <router-link class="routerPointer2" to="/four">选项4-1</router-link>
                                    </el-menu-item>
                                    <el-menu-item index="four12">
                                        <router-link class="routerPointer2" to="/four1">选项4-2</router-link>
                                    </el-menu-item>
                                </el-submenu>
                            </el-submenu>
                        </el-menu>
                    </div>
                </el-aside>
                <el-container>
                    <!--<el-header>Header</el-header>-->
                    <el-main>
                        <transition name="fade">
                            <router-view></router-view>
                        </transition>
                    </el-main>
                    <!--<el-footer>Footer</el-footer>-->
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script>

// import HomePage from './views/home'
// import TwoPage from './views/two'

import  './assets/css/reset.css'

export default {
    name: 'app',
    components: {
        // HomePage,
        // TwoPage
    },
    data() {
        return {
            isCollapse: false,
            showMsg:'收起',
            widthChange:'160px'
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        CollapseChange:function(){
            if(this.isCollapse){
                this.isCollapse = false;
                this.showMsg = '收起';
                this.widthChange = '160px'
            }else{
                this.isCollapse = true;
                this.showMsg = '展开';
                this.widthChange = 'auto'
            }
        }
    },
    computed: {
        defaultActive() {
            return this.$route.path.split('/').reverse()[0];
        }
    }
}
</script>

<style>
    #app{
        width:100%;
        height:100%;
        overflow: hidden;
    }
    .el-container{
        height:100%;
    }
    .el-container.is-vertical{
        height:100%;
    }
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        height: 45px !important;
        line-height: 45px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
    }

    .el-main {
        text-align: center;
    }
    .Main-content{
        width:100%;
        height:100%;
        color: #333;
        background-color: #A8EDF3;
    }
    .el-menu-item-group__title{
        padding:0;
    }
    .el-menu--vertical>ul{
        background: #f3f4f7;
    }
    .el-menu-item.is-active a{
        color:#409EFF;
    }
    .menu-box .el-menu.el-menu--inline{
        background: #f3f4f7;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 100%;
        min-height: 400px;
        background-color: #D3DCE6;
        color: #333;
    }
    .menu-box{
        text-align: left;
    }
    .menu-box>ul{
        background: #d2dce6;
        border:none;
    }
    .routerPointer,.routerPointer2{
        cursor: pointer;
        display: inline-block;
        width: 100%;
        height: 100%;
        margin-left: -40px;
        padding-left: 40px;
    }
    .routerPointer2{
        margin-left: -60px;
        padding-left: 60px;
    }
</style>
