# parallax
这是一个原生js写的视觉差插件

### npm安装

```
npm install orijs-parallax --save-dev
```

### H5页面中正常引入即可

### vue中引入(需要使用的页面引入)

```
import parallax from 'orijs-parallax'
```

### 使用

可以只写一个绑定元素或者多个绑定元素

```
var parallax = new parallax(['.parallax_el','.parallax_el2']);
```

注意：当绑定一个元素的时候以下是可以单独设置的

```
data-direction: 设置这个元素的滚动方向(默认为down，可设值down，up这两个，设置up时与页面滚动方向相反)
data-duration:  设置这个元素滚动时持续的时间(默认为0)
data-speed: 	设置这个元素滚动的速度(默认为0，这个要设置正整数，数值越大滚动就越慢，滚动的距离就越小)
```

### 注意

- 注意1：绑定元素的父元素要设置相对定位position:relative;

- 注意2：绑定元素不要设置内联样式，就是不要在绑定元素标签上设置样式，可在样式文件里面设置你需要的样式
- 注意3：在样式文件中<u>**绑定的元素需要设置固定定位position:absolute;left或者right自行设置，不要设置top或者bottom**</u> 
- 注意4：绑定元素里面可用背景图，设置图的宽高，就不会使真实图片变形，且高度要设置到这个盒子内容高度的200%以上，不然不够高度滚动，滚动时这个背景就会有空白。



### 示例

![1566972002797](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1566972002797.png)

