<template>
  <div>
      <h3>- 输出</h3>
    <div>
    <span id="getElementByIdUse">getElementById()的使用</span>
    <button onclick='document.getElementById("getElementByIdUse").innerHTML="修改了这个p标签的值"'>修改id为getElementByIdUse的值</button>
    </div> 
  <div>
    <button onclick='window.alert("弹出框")'>js弹出框</button>
    <button onclick='document.write("111")'>写入 HTML 输出</button>
  </div>
  <h3>- 变量</h3>
  <div>
      <button onclick='{
        var value;
        console.log(value);
    }'>
    如果变量声明时没有赋值，那么其值是 undefined。</button>
  </div>
    <h3>- 数据类型</h3>
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
    <h3>- 数组</h3>
    <div>
        <button onclick='var array = ["1","2","3"];
                        console.log(array[1])'>数组使用</button>
    </div>
    <h3>- HTML DOM</h3>
    <div>
      <h6>DOM把所有的html都转换为节点
          整个文档 是一个节点
          元素 是节点
          元素属性 是节点
          元素内容 是节点
          注释 也是节点
          如:
          通过document.getElementById获取了id=d1的div标签对应的元素节点
          然后通过attributes 获取了该节点对应的属性节点
          接着通过childNodes获取了内容节点
        </h6>
        <button id="getElement" style="border: 1px solid blue;" onclick='
        function p(s){
            document.write(s)
            document.write("<br>")
            }
            var id1 = document.getElementById("getElement")
            p("文档的节点"+document)
            p("元素"+id1)
            p("属性节点"+id1.attributes[0])
            p("内容节点"+id1.childNodes[0])
            document.write("=====<br>attributes<br>")
            var as = id1.attributes
            document.write("button总共有"+as.length+"个属性")
            document.write("分别为：")
            for(i = 0;i < as.length;i++){
              document.write("<br>")
              document.write(as[i].nodeName)
              document.write(":")
              document.write(as[i].nodeValue)
            }
            document.write("<br>")
            document.write("div的id属性值是："+as["id"].nodeValue)
            document.write("=====<br>childNodes<br>")
            var content = id1.childNodes[0]
            document.write("button的内容节点名是："+content.nodeName)
            document.write("<br>")
            document.write("div的内容节点值是："+content.nodeValue)
            id1.innerHTML="通过innerHTML改变内容"
            '>hello HTML DOM</button>
            <h6>元素上的属性，比如id,value 可以通过 . 直接访问,如果是自定义属性,可以通过如下test标签的方式获取</h6>
            <input id="input1" test="t1" value="这是一个输入框" type="text">
            <button onclick='var input1 = document.getElementById("input1")
                            var s = "id = "+input1.id+"<br>"
                            s+="class="+input1.value+"<br>"
                            s+="test="+input1.getAttribute("test")+"<br>"
                            s+="test"+input1.attributes["test"].nodeValue+"<br>"
                            document.getElementById("getElement").innerHTML=s'>
                            通过getElementById获取input元素
                            </button>
            <h6>一个元素节点的style属性即对应的css(通过js修改元素的css属性)</h6>
            <button onclick='
              document.getElementById("getElement").style.display="none"
            '>
            隐藏id为getElement的元素
            </button>
            <button onclick='
              var id = document.getElementById("getElement")
              id.style.display="block"
              id.style.backgroundColor="red"
            '>显示id为getElement的元素并改变背景颜色</button>
            <h6>HTML DOM的事件</h6>
            <button style="display:block;margin-bottom:10px" onclick='function singleClick(button){
                  var s= "被点击的按钮上的文本是："+ button.value
                  alert(s)
            };
            //这个写法有问题，要普通的js写法
            singleClick(this)'>this表示触发事件的组件，可以在调用函数的时候，作为参数传进去,onclcik为DOM的单击事件</button>
            <input style="width:500px;display:block;margin-bottom:10px" type="text" id="onchange" value="如果输入框值发生了变化，就会触发js方法" onchange='
              var onchange = document.getElementById("onchange")
              alert(onchange.value)
            '>
            <h6>js操作节点</h6>
            <!-- 判断提交的表单是否符合要求，符合要求才能提交 -->
            <!-- <form method="post" action="/study/login.jsp" onsubmit="return login()">
账号：<input id="name" type="text" name="name"> <br/>
密码：<input type="password" name="password" > <br/>
<input type="submit" value="登录">
</form>
  
<script>
  function login(){
   var name = document.getElementById("name");
   if(name.value.length==0){
     alert("用户名不能为空");
     return false;
   }
   return true;
    
  }
</script> -->

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
