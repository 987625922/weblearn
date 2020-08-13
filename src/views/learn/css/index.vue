<template>
  <div class="body">
    <p class="one-tag-p">123</p>
    <ul class="a">
      <li>Coffee</li>
      <li>Tea</li>
      <li>Coca Cola</li>
    </ul>
    <table>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
      </tr>
      <tr>
        <td>Peter</td>
        <td>Griffin</td>
      </tr>
      <tr>
        <td>Lois</td>
        <td>Griffin</td>
      </tr>
    </table>
    <div class="box"></div>
    <div class="position">
      HTML 元素的默认值，即没有定位，遵循正常的文档流对象。
      静态定位的元素不会受到 top, bottom, left, right影响。
      这个元素是static（默认）
    </div>
    <div class="fixed">
      元素的位置相对于浏览器窗口是固定位置。
      即使窗口是滚动的它也不会移动。
    </div>
    <div class="relative">
      相对定位元素的定位是相对其正常位置。
      与绝对定位不同的是，相对定位不会把该元素从原文档删除掉，
      而是在原文档的位置的基础上，移动一定的距离
    </div>
    <div class="absolute">
      绝对定位的元素的位置相对于最近的已定位父元素，
      如果元素没有已定位的父元素，那么它的位置相对于html。
      absolute 定位使元素的位置与文档流无关，因此不占据空间。
      absolute 定位的元素和其他元素重叠。
      z-index属性决定谁掩盖谁
    </div>
    <div class="overflow">
      <p>这里的文本内容是可以滚动的，滚动条方向是垂直方向。</p>
      <p>这里的文本内容是可以滚动的，滚动条方向是垂直方向。</p>
      <p>这里的文本内容是可以滚动的，滚动条方向是垂直方向。</p>
      <p>这里的文本内容是可以滚动的，滚动条方向是垂直方向。</p>
      <p>这里的文本内容是可以滚动的，滚动条方向是垂直方向。</p>
      <p>这里的文本内容是可以滚动的，滚动条方向是垂直方向。</p>
    </div>
    <div>
      <img class="float" width="75" height="30" />
      <img class="float" width="75" height="30" />
      <img class="float" width="75" height="30" />
    </div>
    <!-- 取消float -->
    <div style="clear:both;"></div>
    <p>
      <img class="float-img" src width="75" height="30" />
      元素的水平方向浮动，意味着元素只能左右移动而不能上下移动。
      一个浮动元素会尽量向左或向右移动，直到它的外边缘碰到包含框或另一个浮动框的边框为止。
      浮动元素之后的元素将围绕它。
      浮动元素之前的元素将不会受到影响。
      如果图像是右浮动，下面的文本流将环绕在它左边：
    </p>
    <!--  css居中布局  -->
    <div class="center">div水平居中</div>
    <div class="text-center">
      <p>文本居中对齐。</p>
    </div>
    <!-- 图片居中 -->
    <img src class="img-center" />
    <div class="div-absolute-right">使用定位方式-右对齐</div>
    <div class="div-center">水平垂直居中</div>
    <!-- 图片垂直居中 -->
    <div style="display:table-cell;height:200px;vertical-align: middle;">
      <img style="width:100px;height:100px;" src=""/>
    </div>
    <div class="dropdown">
      <span>下拉菜单的学习</span>
      <div class="dropdown-content">
        <p>:hover .dropdown-content</p>
        <p>的学习</p>
      </div>
    </div>
    <!-- 元素的display显示方式有多种，隐藏、块级、内联、内联-块级 -->
    <!-- 
    1. display:block; 表示块级元素
      块级元素会自动在前面和后面加上换行，并且在其上的width和height也能够生效
      div默认是块级元素
      span默认是内联元素(不会有换行,width和height也不会生效)

    2.display:inline; 表示内联元素
      内联元素前后没有换行，并且在其上的width和height也无效。 其大小由其中的内容决定

    3.display:inline-block 内联-块级
      元素前后没有换行并且能指定大小
    -->
  </div>
</template>

<script>
export default {
  name: "Css",
  data() {
    return {
      data: {
        username: "admin",
        password: "111111"
      },
      loading: false,
      passwordType: "password",
      redirect: undefined
    };
  },
  methods: {}
};
</script>

<style lang="scss">
.body {
  background-color: #90899c;
  position: absolute;
}
.one-tag-p {
  color: #ffffff;
  text-align: center;
  font-size: 2em;
  // 块元素，前后都是换行符
  display: block;
}

// css的列表
ul.a {
  list-style-type: circle;
}
//css的table
table,
th,
td {
  border: 1px solid black;
  // 显示
  visibility: hidden;
}
// css的盒子模型
.box {
  background: #511da5;
  width: 300px;
  border: 25px solid blue;
  padding: 25px;
  margin: 25px;
}
//css的定位
.position {
  position: static;
  border: 3px solid rgb(26, 40, 145);
}
//css的定位
.fixed {
  position: fixed;
  top: 30px;
  right: 5px;
}
//css的定位
.relative {
  position: relative;
  left: -120px;
}
//css的定位
.absolute {
  position: absolute;
  left: 100px;
  top: 150px;
  // 表示堆叠顺序
  z-index: -1;
}
.overflow {
  color: white;
  padding: 15px;
  width: 80%;
  height: 100px;
  overflow: scroll;
  border: 1px solid #ccc;
}
//浮动
.float-img {
  float: right;
}
.float {
  float: left;
  width: 110px;
  height: 90px;
  margin: 5px;
}
// div水平居中
.center {
  margin: auto;
  width: 50%;
  height: 20px;
  border: 3px solid blue;
}
// 文字行内居中
.text-center {
  text-align: center;
  border: 3px solid blue;
}
.img-center {
  display: block;
  margin: auto;
  width: 40%;
  height: 150px;
}
//使用定位方式-右对齐
.div-absolute-right {
  position: absolute;
  right: 0px;
  width: 300px;
  border: 3px solid blue;
  padding: 10px;
}
//水平垂直居中
.div-center {
  padding: 70px 0;
  border: 3px solid blue;
  text-align: center;
}
//下拉菜单的学习 start
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
}
//主要是.dropdown:hover .dropdown-content实现下拉菜单
.dropdown:hover .dropdown-content {
  display: block;
}
//下拉菜单的学习 end
</style>
