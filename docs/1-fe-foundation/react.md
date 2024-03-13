# React
**The library for web and native user interfaces.（UI组件库）** [更多](https://react.dev/)

单向数据流：ui = render(data) 

## React 基础

### 一、JSX 模块语法



### 二、props和state
三、生命周期


## React 状态管理

### 一、组件通信的方式

1. 父子传值
  props
2. 兄弟传值
  状态提升。多个组件需要反映相同的变化数据，这时我们建议将共享状态提升到最近的共同父组件中去。
3. 子父传值
  通过 `forwardRef` 会创建一个React组件，这个组件能够将其接受的 ref 属性转发到其组件树下的另一个组件中。`useImperativeHandle` 可以让你在使用 ref 时自定义暴露给父组件的实例值。
4. 多层级之前传值
  通过 `createContext()`、`Context.Provider`、`Context.Consumer`、`useContext()` 来实现

5. redux、 等

 
### 二、高级使用
useHooks + provide context + HOC

通过 hooks 实现多组件层级的状态共享





## React & SSR

通过不同环境变量实现不同的配置，然后构建打包内容。同时进行项目同构（客户端和服务端的路由及store内容是一致的）实现 SSR 加载项目首页，优化首屏加载速度。




## React 源码解析

### 新老框架的对比

#### React 15
1. Reconciler（协调器）--- 负责找出变化的组件。在渲染之前，抹平跨平台的更新组件的差异。
   stack reconciler 递归渲染更新。
    在React中可以通过this.setState、this.forceUpdate、ReactDOM.render等API触发更新。
    每当有更新发生时，Reconciler会做如下工作：
    1. 调用函数组件、或class组件的render方法，将返回的JSX转化为虚拟DOM
    2. 将虚拟DOM和上次更新时的虚拟DOM对比
    3. 通过对比找出本次更新中变化的虚拟DOM
    4. 通知Renderer将变化的虚拟DOM渲染到页面上
2. Renderer（渲染器）--- 负责将变化的组件渲染到页面上
由于React支持跨平台，所以不同平台有不同的Renderer。我们前端最熟悉的是负责在浏览器环境渲染的Renderer —— ReactDOM。<br />
在每次更新发生时，Renderer接到Reconciler通知，将变化的组件渲染在当前宿主环境。

递归的缺点：
1. 当层级很深时，递归更新时间超过了**16ms**，用户交互就会卡顿
2. React 15不支持用可中断的异步更新代替同步的更新


#### React 16
**Fiber架构**
定义：React内部实现的一套状态更新机制。支持任务不同优先级，可中断与恢复，并且恢复后可以复用之前的中间状态。
react fiber node定义
[地址](https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiber.new.js#L117)

1. Scheduler（调度器）—— 调度任务的优先级，高优任务优先进入Reconciler.
2. Reconciler（协调器）—— 负责找出变化的组件>>> 变成了可以中断执行的。Fiber Reconciler
   ```js
   // 更新工作从递归变成了可以中断的循环过程。每次循环都会调用shouldYield判断当前是否有剩余时间。
    function workLoopConcurrent() {
      // Perform work until Scheduler asks us to yield
      while (workInProgress !== null && !shouldYield()) {
        workInProgress = performUnitOfWork(workInProgress);
      }
    }
   ```
  同时会将需要更新的组件打标记。`Placement`。只有当所有组件都完成该操作后，才会统一去执行renderer阶段。

3. Renderer（渲染器）—— 负责将变化的组件渲染到页面上


#### 一、render 阶段


#### 二、commit 阶段


#### 三、Diff 算法


#### 四、状态更新



## React 相关面试题

### 1、如何提高页面响应交互？
- CPU卡顿：大量的计算操作导致性能问题。
  - 在浏览器刷新频率为60Hz（即1000ms / 60HZ = 16.6ms）中，每16.6ms为一帧，刷新一次。
  - 由于浏览器中 JS 线程和 CPU 线程是互斥的。所以JS脚本和浏览器的render、painting不能同时执行，所以执行顺序为：JS脚本执行 ->样式布局 ->样式绘制，JS执行时间超过16.6ms，就不会执行render与painting了。此时就会导致页面白屏且半天无响应的情况。
  所以需要再这个时间段内，空闲出时间来执行 render和painting。
  浏览器通过`requestIdCallback`可以解决该问题。但是兼容性不太好。同时触发频率不稳定。
  
- IO卡顿：网络请求延迟，无法快速响应。
  - 时间长的时候，可以增加页面提示，加个loading或者友好提示。
  - 停留时间短：不显示loading，用户无感知，不然loading闪一下
  `React`中可以通过`Suspense`的fallback={<Loading />}来进行统一处理。<br />
  `useDeferredValue`是 React 18 中引入的一个新特性，用于处理暂时不需要立即更新到 UI 的状态。它可以用于在某些情况下延迟状态的更新，以提高性能和用户体验。

### 2、React Fiber 如何更新DOM？
使用了双缓存的Fiber树，`current Fiber` 和 `workInProgress Fiber`，两者通过 alternate 连接。交替更新。
```js
currentFiber.alternate === workInProgressFiber;
workInProgressFiber.alternate === currentFiber;
```
React应用的根节点通过current指针指向不同的fiber dom切换，当update时，workInProgressFiber rende完成后会跟currentFiber 替换，下一次更新会将当前currentFiber（上一次的workInProgressFiber）替换


### 3、JSX和Fiber节点是同一个东西么？React Component、React Element是同一个东西么，他们和JSX有什么关系？

