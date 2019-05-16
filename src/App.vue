<template>
    <div id="app">
        <el-container>
            <el-header>
                <el-row>
                    <el-col :span="4">
                        <div v-model="isCollapse" style="display: inline-block;">
                            <span @click="CollapseChange" style="display:inline-block;width:60px;height:60px;text-align:center;font-size:24px;"><i class="el-icon-s-fold" style="cursor: pointer;"></i></span>
                        </div>
                        <span style="font-size:18px;">
                            后台管理系统
                        </span>
                    </el-col>
                    <el-col :span="16" >
                        <ul class="header-msg">
                            <li>设备总数:2</li>
                            <li>在线数:2</li>
                            <li>离线数:0</li>
                            <li>禁用数:0</li>
                            <li>故障数:0</li>
                            <li>缺货设备数:1</li>
                            <li>未启用设备数:0</li>
                        </ul>
                    </el-col>
                    <el-col :span="4">
                        <ul class="header-right">
                            <li><i class="el-icon-message-solid" style="font-size:24px;color:#F56C6C;padding-top:18px;"></i></li>
                            <li>
                                <el-dropdown trigger="click">
                                    <img src="../public/21351124.jpeg">
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item>查看</el-dropdown-item>
                                        <el-dropdown-item>新增</el-dropdown-item>
                                        <el-dropdown-item>删除</el-dropdown-item>
                                    </el-dropdown-menu>
                                </el-dropdown>
                            </li>
                            <li>用户名：root</li>
                        </ul>
                    </el-col>
                </el-row>
                
            </el-header>
            <el-container>
                <el-aside v-bind:style="{width:widthChange}">
                    <div class="menu-box">
                        <el-menu :default-active="defaultActive" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
                            <el-submenu index="first-level1">
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span slot="title">用户管理</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="home">
                                        <router-link class="routerPointer" to="/home">用户列表</router-link>
                                    </el-menu-item>
                                </el-menu-item-group>
                                <el-menu-item-group>
                                    <el-menu-item index="two">
                                        <router-link class="routerPointer" to="/two">新增用户</router-link>
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
                                    <span slot="title">设备管理</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="home2">
                                        <router-link class="routerPointer" to="/home">设备列表</router-link>
                                    </el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>

                            <el-submenu index="first-level2">
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span slot="title">产品管理</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="home2">
                                        <router-link class="routerPointer" to="/home">产品列表</router-link>
                                    </el-menu-item>
                                    <el-menu-item index="home2">
                                        <router-link class="routerPointer" to="/home">新增产品</router-link>
                                    </el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                            <el-submenu index="first-level2">
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span slot="title">资源管理</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="home2">
                                        <router-link class="routerPointer" to="/home">采购记录</router-link>
                                    </el-menu-item>
                                    <el-menu-item index="home2">
                                        <router-link class="routerPointer" to="/home">新增采购记录</router-link>
                                    </el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>

                            <el-submenu index="first-level2">
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span slot="title">广告管理</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="home2">
                                        <router-link class="routerPointer" to="/home">广告列表</router-link>
                                    </el-menu-item>
                                    <el-menu-item index="home2">
                                        <router-link class="routerPointer" to="/home">新增广告</router-link>
                                    </el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>

                            <el-submenu index="first-level2">
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span slot="title">APK管理</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="home2">
                                        <router-link class="routerPointer" to="/home">APK列表</router-link>
                                    </el-menu-item>
                                    <el-menu-item index="home2">
                                        <router-link class="routerPointer" to="/home">新增APK</router-link>
                                    </el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>

                            <el-submenu index="first-level2">
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span slot="title">数据统计</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="home2">
                                        <router-link class="routerPointer" to="/home">设备月销售统计</router-link>
                                    </el-menu-item>
                                    <el-menu-item index="home2">
                                        <router-link class="routerPointer" to="/home">物资月销售统计</router-link>
                                    </el-menu-item>
                                    <el-menu-item index="home2">
                                        <router-link class="routerPointer" to="/home">设备销售统计</router-link>
                                    </el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>

                            <el-submenu index="first-level2">
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span slot="title">订单管理</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="home2">
                                        <router-link class="routerPointer" to="/home">订单列表</router-link>
                                    </el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>

                            <el-submenu index="first-level2">
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span slot="title">修改密码申请</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="home2">
                                        <router-link class="routerPointer" to="/home">申请列表</router-link>
                                    </el-menu-item>
                                </el-menu-item-group>
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
    .header-msg,.header-right{
        overflow: hidden;
        padding-left:20px;
    }
    .header-msg li{
        float: left;
        padding:0px 8px;
        font-size:14px;
        margin-top:18px;
    }
    .header-right li{
        float:left;
        padding:0px 8px;
        font-size:14px;
    }
    .header-right li:nth-child(2){
        max-height:60px;
        padding-top:5px;
    }
    .el-dropdown{
        height:54px;
    }
    .header-right li:nth-child(2) img{
        width:50px;
        height:50px;
        border-radius: 50%;
        cursor: pointer;
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
        line-height:60px;
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
