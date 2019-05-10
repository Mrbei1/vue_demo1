<template>
    <div id="app">
        <el-container>
            <el-header>Header</el-header>
            <el-container>
                <el-aside width="200px">
                    <AsideMenu></AsideMenu>
                </el-aside>
                <el-container>
                    <el-main>
                        <ContentBoxRight></ContentBoxRight>
                    </el-main>
                    <el-footer>Footer</el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import AsideMenu from './views/menu'
import ContentBoxRight from './views/content'
import  './assets/css/reset.css'

export default {
    name: 'app',
    components: {
        AsideMenu,
        ContentBoxRight
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

</style>
