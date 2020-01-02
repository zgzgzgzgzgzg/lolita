<template>
  <div class="home">
    <el-container class="main-container">
      <el-header class="ele-header" style="padding: 0px">
        <HeaderNav class="header"></HeaderNav>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HeaderNav from "../components/HeaderNav";

export default {
  name: 'home',
  components: {
    HeaderNav
  },
  data(){
    return{

    }
  },
  methods:{

  }
}
</script>
<style lang="scss">

</style>
