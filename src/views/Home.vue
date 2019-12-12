<template>
  <div class="home">
      <el-container>
          <el-header>
            <head-nav></head-nav>
          </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HeadNav from "../components/HeadNav";

export default {
  name: 'home',
  components: {
    HeadNav
  },

}
</script>
