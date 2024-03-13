# react-fiber

## Fiber架构详解

### 1.render 阶段
Fiber节点是如何被创建并构建成render树的。


#### 1.1 Diff 算法
在 render 阶段，对于update的组件，他会将当前组件与该组件在上次更新时对应的Fiber节点比较（也就是俗称的Diff算法），将比较的结果生成新Fiber节点。

### 2.commit 阶段
Fiber 节点进行更新。


#### 2.1 状态更新


