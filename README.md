# vue-router-transition
vue单页面应用转场动画

这个项目主要做了两件事：

1. 记录路由历史，由此判断是前进还是后退
2. 对transition组件包装得到了vue-router-transition组件，根据前进还是后退决定使用的动画

使用示例如下：

```javascript
Vue.use(vueRouterTransition,router)
```

```html
<vue-router-transition 
    forward-name="move-right-to-left" 
    backward-name="move-left-to-right"
    v-on:after-enter="afterEnter"
>
</vue-router-transition>
```

vue中transition组件提供了一个name参数，vue-router-transition是对其包装，需要两个参数：forwardName(前进动画名称)和backwardName(后退动画名称)。其余的和transition组件使用一致。

转场动画可以采用[这个项目提供的动画效果](https://github.com/WebCodeFarmer/vue-transition.css)