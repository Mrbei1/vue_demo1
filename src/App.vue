<template>
    <div id="app">
        <el-container>
            <el-header>Header</el-header>
            <el-container>
                <el-aside width="200px">
                    <div class="menu-box">
                        <!--<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">-->
                        <!--<el-radio-button :label="false">展开</el-radio-button>-->
                        <!--<el-radio-button :label="true">收起</el-radio-button>-->
                        <!--</el-radio-group>-->
                        <el-menu default-active="1-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
                            <el-submenu index="1">
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span slot="title">导航一</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="1-1">
                                        <router-link to="home">选项1</router-link>
                                    </el-menu-item>
                                    <el-menu-item index="1-2">
                                        <router-link to="two">选项2</router-link>
                                    </el-menu-item>
                                </el-menu-item-group>
                                <el-menu-item-group>
                                    <el-menu-item index="1-3">选项3</el-menu-item>
                                </el-menu-item-group>
                                <el-submenu index="1-4">
                                    <span slot="title">选项4</span>
                                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                                </el-submenu>
                            </el-submenu>

                            <el-submenu index="2">
                                <template slot="title">
                                    <i class="el-icon-menu"></i>
                                    <span slot="title">导航二</span>
                                </template>
                                <el-menu-item-group>
                                    <span slot="title">分组一</span>
                                    <el-menu-item index="2-1">选项1</el-menu-item>
                                    <el-menu-item index="2-2">选项2</el-menu-item>
                                </el-menu-item-group>
                                <el-menu-item-group title="分组2">
                                    <el-menu-item index="2-3">选项3</el-menu-item>
                                </el-menu-item-group>
                                <el-submenu index="2-4">
                                    <span slot="title">选项4</span>
                                    <el-menu-item index="2-4-1">选项1</el-menu-item>
                                </el-submenu>
                            </el-submenu>

                            <el-submenu index="3">
                                <template slot="title">
                                    <i class="el-icon-document"></i>
                                    <span slot="title">导航三</span>
                                </template>
                                <el-menu-item-group>
                                    <span slot="title">分组一</span>
                                    <el-menu-item index="3-1">选项1</el-menu-item>
                                    <el-menu-item index="3-2">选项2</el-menu-item>
                                </el-menu-item-group>
                                <el-menu-item-group title="分组2">
                                    <el-menu-item index="3-3">选项3</el-menu-item>
                                </el-menu-item-group>
                                <el-submenu index="3-4">
                                    <span slot="title">选项4</span>
                                    <el-menu-item index="3-4-1">选项1</el-menu-item>
                                </el-submenu>
                            </el-submenu>


                            <el-submenu index="4">
                                <template slot="title">
                                    <i class="el-icon-setting"></i>
                                    <span slot="title">导航四</span>
                                </template>
                                <el-menu-item-group>
                                    <span slot="title">分组一</span>
                                    <el-menu-item index="4-1">选项1</el-menu-item>
                                    <el-menu-item index="4-2">选项2</el-menu-item>
                                </el-menu-item-group>
                                <el-menu-item-group title="分组2">
                                    <el-menu-item index="4-3">选项3</el-menu-item>
                                </el-menu-item-group>
                                <el-submenu index="4-4">
                                    <span slot="title">选项4</span>
                                    <el-menu-item index="4-4-1">选项1</el-menu-item>
                                </el-submenu>
                            </el-submenu>
                        </el-menu>
                    </div>
                </el-aside>
                <el-container>
                    <el-main>
                        <router-view></router-view>
                        <!--<HomePage></HomePage>-->
                    </el-main>
                    <el-footer>Footer</el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script>

import HomePage from './views/home'
import TwoPage from './views/two'

import  './assets/css/reset.css'

export default {
    name: 'app',
    components: {
        HomePage,
        TwoPage
    },
    data() {
        return {
            isCollapse: false
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
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
    .el-container.is-vertical{
        height:100%;
    }
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
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
</style>
