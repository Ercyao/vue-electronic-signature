
# 项目说明
基于[https://github.com/yinhui1129754/elesigncode](https://github.com/yinhui1129754/dzqm)的代码，二次处理
目前适用vue下的一个电子签名插件


### 安装依赖命令
```
 npm i vue-ele-sign --save-dev
```

### 使用例子
```
<vue-ele-sign ref="VueEleSign" :color="color" :bgImg="bgImg" :readOnly="readOnly" />
    ...
import VueEleSign from 'vue-ele-sign'
components: { VueEleSign }
    ...
```

### 运行项目
```
 npm install
 npm run serve
```

### 构建npm包
```
 npm run build-bundle
```


### class
我们这个类所需要的的所有类

[data 数据类](https://github.com/Ercyao/vue-electronic-signature/md/data.md)  
[draw 绘制类](https://github.com/Ercyao/vue-electronic-signature/md/draw.md)  
[event 事件类](https://github.com/Ercyao/vue-electronic-signature/md/event.md)  
[image 图片类](https://github.com/Ercyao/vue-electronic-signature/md/image.md)  
[line 线段类](https://github.com/Ercyao/vue-electronic-signature/md/line.md)  
[main 核心类](https://github.com/Ercyao/vue-electronic-signature/md/main.md)  
[point 点类](https://github.com/Ercyao/vue-electronic-signature/md/point.md)  

### core 
我们这个类的中心脚本

### untils
各种方法和工具

#### config.js 默认配置项
#### struct.js 没有使用到，结构字典表
#### untils.js 工具方法类

# 在vue-cli中使用我们的组件

详细可以看[在vue中使用此组件](https://github.com/yinhui1129754/dzqm/blob/master/md/dzqm-vue.md)


# 实例对象的时候可传入的参数
|属性名称|描述|默认|
|:-|-:|-:|
|ele|要挂载的节点|null|
|color|签名的颜色|'#333333'|
|lineWidth|签名的线宽|4|
|bgColor|签名的背景颜色|-1|
|pen|签名的笔类型可选择的值：'default' 'writing'|'default'|
|writingMaxLine|当笔是writing的时候我们来设置最大线宽|20|
|writingMinLine|当笔是writing的时候我们来设置最小线宽|10|
|bgImg|背景图片|''|
|readOnly|是否只读|false|

# 对象主要方法说明 
|方法名称|描述|参数|返回值|
|:-|-:|-:|-:|
|init|初始化方法|无|无|
|moutedEle|挂载到节点下|ele:传入的节点|无|
|resize|重置签名canvas节点大小到挂载节点的大小，一般可以和resize混合使用|无|无|
|resizeWithNumber|重置签名canvas节点大小到传入的宽度和高度|w:宽度,h:高度|无|
|destory|销毁对象:实例的对象的所有属性没有了事件取消绑定,canvas节点从挂载节点移出|无|无|
|drawEle|强制重新绘制数据|无|无|
|undo|撤销方法|无|无|
|redo|重做方法|无|无|
|toJson|将当前实例签名的数据转化为json|无|无|
|jsonTo|将传入的json数据转化到当前对象|json|无|
|imgTo|将传入的img地址显示在图层|string|无|
|toPng|获取当前签名的base64位数据png类型|无|无|
|toJpeg|获取当前签名的base64位数据jpeg类型|无|无|
|setColor|设置签名的颜色|color:颜色字符串rgb hex均可以|无|
|setLineWidth|设置线宽|lineWidth:线宽|无|
|setBgColor|设置背景颜色|bgColor:颜色字符串rgb hex均可以|无|
|setPen|设置笔的类型|name:'default' 'writing'|无|
|clear|清除签名|无|无|
|clearBgImg|清除背景图片|无|无|
|setReadOnly|设置只读|type:是否只读|无|
|isEmpty|获取是否签名了|无|返回true表示是没有签名，返回false表示签名了|
|addPen|新增笔的类型可以看这个文档[addPen](https://github.com/Ercyao/vue-electronic-signature/md/addPen.md)|name:笔的名称<br/>url:笔需要的图片地址<br/>penCall:笔需要的绘制回调<br/>loadCall:笔需要的图片加载完成的回调函数<br/>start:鼠标按下回调<br/>move:鼠标移动回调函数<br/>end:结束回调函数|无|



