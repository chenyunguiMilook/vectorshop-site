---
sidebar_position: 23
---

# 形状组合方式

形状可以由多个开放或封闭的曲线以不同的组合方式组成。支持以下四种组合方式：**EvenOdd**（奇偶规则）、**Winding**（非零缠绕规则）、**Boolean**（布尔运算）和 **SFSymbol**。

---

## EvenOdd（奇偶规则）

![evenOdd](./img/shapeComposition/evenOdd.gif)

在 **EvenOdd** 模式下，曲线会根据奇偶规则进行渲染。每一条曲线的奇偶性决定了其显示或隐藏的部分。

---

## Winding（非零缠绕规则）

![winding](./img/shapeComposition/winding.gif)

在 **Winding** 模式下，可以通过点击曲线列表中曲线右侧的按钮调整曲线的缠绕方向，从而改变渲染效果。

---

## Boolean（布尔运算）

![boolean](./img/shapeComposition/boolean.gif)

在 **Boolean** 模式下，形状会按照每条曲线的运算法则，从最底层曲线开始，与其上层曲线逐步进行布尔运算，最终获得渲染结果。

支持的布尔运算模式如下：
1. **Unite（加）**：将当前曲线与下层结果合并。
2. **Subtract（减）**：从下层结果中减去当前曲线。
3. **Intersection（交叉）**：保留下层结果与当前曲线的交叉区域。
4. **Exclude（排除）**：保留下层结果与当前曲线不相交的区域。

---

## SFSymbol

![sfsymbol](./img/shapeComposition/sfsymbol.gif)

在 **SFSymbol** 模式下，形状会根据每条曲线的合成模式，从最底层曲线开始，依次进行运算，最终合成渲染结果。

每条曲线右侧都有模式切换按钮，用于更改曲线的合成模式。支持以下四种模式：
1. **填充加**：适用于封闭曲线，在生成 SFSymbol 时以布尔运算“加”的方式进行合成。
2. **填充减**：适用于封闭曲线，在生成 SFSymbol 时以布尔运算“减”的方式进行合成。
3. **描边加**：通过布尔运算“加”方式合成，描边的粗细和样式由 SFSymbol 的描边属性决定。
4. **描边减**：通过布尔运算“减”方式合成，描边的粗细和样式由 SFSymbol 的描边属性决定。
