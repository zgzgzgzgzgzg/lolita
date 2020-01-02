<template>

    <div class="mini-header">
        <div class="nav-logo">
            <ul class="nav-logo-ul">
                <li class="nav-logo-ul-li">
                    <a href="" class="link">
                        首页
                    </a>
                </li>
                <li class="nav-logo-ul-li">
                    <a href="" class="link">
                        lolita
                    </a>
                </li>
                <li class="nav-logo-ul-li">
                    <a href="" class="link">
                        汉服
                    </a>
                </li>
                <li class="nav-logo-ul-li">
                    <a href="" class="link">
                        JK
                    </a>
                </li>
                <li class="nav-logo-ul-li">
                    <a href="" class="link">
                        下载APP
                    </a>
                </li>
            </ul>
        </div>
        <div class="nav-user">
            <div class="nav-user-search">
                <i class="el-icon-search"></i>
            </div>
            <div class="nav-user-notification">
                <i class="el-icon-bell"></i>
            </div>
            <div class="nav-user-avatar">
<!--                <el-avatar icon="el-icon-user-solid"></el-avatar>-->
                <i class="el-icon-user"></i>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderNav",
        data(){
            return{

            }
        },
        methods:{

        }
    }
</script>

<style lang="scss">
    .mini-header{
        box-sizing: border-box;
        z-index: 1;
        position: absolute;
        width: 100%;
        height: 56px;
        display: flex;
        justify-content:space-between;
        .nav-logo{
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            .nav-logo-ul{
                display: flex;
                /*height: 36px;*/
                align-items: center;
                list-style: none;
                .nav-logo-ul-li{
                    margin-right: 12px;
                    .link{
                        font-size: 14px;
                        color: #000000;
                        text-shadow: 0 1px 1px rgba(0,0,0,.3);
                        white-space: nowrap;
                        display: flex;
                        text-decoration: none;
                    }
                }
            }
        }
        .nav-user{
            box-sizing: border-box;
            display: flex;
            flex-shrink: 0;
            .nav-user-search{
                display: flex;
                align-items: center;
                margin-left: 5px;
            }
            .nav-user-notification{
                display: flex;
                align-items: center;
                margin-left: 5px;
            }
            .nav-user-avatar{
                display: flex;
                align-items: center;
                margin-right: 24px;
                margin-left: 5px;
            }
        }
    }
</style>