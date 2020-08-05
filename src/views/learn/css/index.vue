<template>
<div class="body">
<div class="one-tag">
      <p class="one-tag-p">
          123
      </p>
      <!--  -->
  </div>
</div>
</template>

<script>

export default {
  name: 'Css',
  data() {
    return {
      data: {
        username: 'admin',
        password: '111111'
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss">
.one-tag{
    background:#511da5;
    width: 100px;
    height: 100px;
}
.one-tag-p{
    color:#ffffff;
}
</style>
