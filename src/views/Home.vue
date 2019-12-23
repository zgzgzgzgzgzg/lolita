<template>
  <div class="home">
    <el-container class="main-container">
      <HeaderNav class="header"></HeaderNav>
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
