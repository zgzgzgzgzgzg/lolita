<template>

    <div class="mini-header">
        <div class="nav-logo">
            <ul class="nav-logo-ul">
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
            </ul>
        </div>
        <div class="nav-link">

        </div>
        <div class="nav-user">

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
                        color: #ffffff;
                        text-shadow: 0 1px 1px rgba(0,0,0,.3);
                        white-space: nowrap;
                        display: flex;
                        text-decoration: none;
                    }
                }
            }
        }
    }
</style>