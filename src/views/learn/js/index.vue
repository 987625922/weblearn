<template>
  <div>
      <h3>输出</h3>
    <div>
    <span id="getElementByIdUse">getElementById()的使用</span>
    <button onclick='document.getElementById("getElementByIdUse").innerHTML="修改了这个p标签的值"'>修改id为getElementByIdUse的值</button>
    </div> 
  <div>
    <button onclick='window.alert("弹出框")'>js弹出框</button>
    <button onclick='document.write("111")'>写入 HTML 输出</button>
  </div>
  <h3>变量</h3>
  <div>
      <button onclick='{
        var value;
        console.log(value);
    }'>
    如果变量声明时没有赋值，那么其值是 undefined。</button>
  </div>
    <h3>数据类型</h3>
    <div>
        <button onclick='{
            var length = 7;                             // 数字
            var lastName = "Gates";                      // 字符串
            var cars = ["Porsche", "Volvo", "BMW"];         // 数组
            var x = {firstName:"Bill", lastName:"Gates",fullName : function() {
    return this.firstName + " " + this.lastName;
  }};    // 对象 
            }
            var y;
            console.log(x.firstName)
            console.log(typeof x.firstName) // typeof 来确定 JavaScript 变量的类型
            console.log(typeof x) // typeof 运算符对数组返回 "object"
            console.log(typeof y) // 没有值的变量，其值是 undefined。typeof 也返回 undefined。
            <!-- null 的数据类型是对象。值是null -->
            var p = null;
            console.log(p);
            console.log(typeof p)
            <!-- Undefined 与 Null 的区别 -->
            <!-- Undefined 与 null 的值相等，但类型不相等 -->
            console.log(p == y) // false
            console.log(p === y)  // true
        '>
        JavaScript的数据类型
        </button>
    </div>
    <h3>数组</h3>
    <div>
        <button onclick='var array = ["1","2","3"];
                        console.log(array[1])'>数组使用</button>
    </div>
  </div>
</template>

<script>

export default {
  name: "JavaScript",
  data() {
    return {
      data: {}
    };
  },
  methods: {}
};
</script>

<style lang="scss">
</style>
