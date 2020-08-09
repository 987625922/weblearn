<template>
  <div>
    <el-button @click="toCssPage" type="primary">跳转到css学习界面</el-button>
    <el-button @click="toJavaScript" type="primary">跳转到JavaScript学习界面</el-button>
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
    },
    toJavaScript(){
        this.$router.push({path:'/javascript'})
    }
  }
};
</script>

<style lang="scss">
</style>
