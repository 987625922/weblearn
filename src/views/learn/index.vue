<template>
  <div>
    <el-button @click="toCssPage" type="primary">跳转到css学习界面</el-button>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
    
    };
  },
  methods: {
    toCssPage(){
        this.$router.push({path:'/css'})
    }
  }
};
</script>

<style lang="scss">
</style>
