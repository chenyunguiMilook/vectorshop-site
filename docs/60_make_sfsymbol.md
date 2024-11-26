---
sidebar_position: 60
---

# 制作 SFSymbol

## 制作

1. 选择形状图层，右键菜单中选择 "Make SFSymbol" 菜单，即可将选中图层转换一个SFSymbol。

2. 双击形状图层，进入形状编辑模式。点击曲线列表的右上角模式菜单，从菜单中选择 "SFSymbol"，将当前形状图层转换为SFSymbol模式。

## 调整

曲线列表中，每个曲线右侧有一个曲线模式按钮，点击该按钮转换曲线模式。当前支持以下四种曲线模式：

1. 填充加：当曲线为封闭状态下，可选择此模式。代表在生成SFSymbol时，会以布尔运算“加”的方式合成。

2. 填充减：当曲线为封闭状态时，可选择此模式。代表在生成SFSymbol时，会以布尔运算“减”的方式合成。

3. 描边加：代表在生成SFSymbol时，会以布尔运算“加”的方式合成。描边粗细和样式由Symbol描边属性决定。

4. 描边减：代表在生成SFSymbol时，会以布尔运算“减”的方式合成。描边粗细和样式由Symbol描边属性决定。

点击SFSymbol配置面板左侧开关，开启SFSymbol配置调节。

1. 点击配置面板开关右侧图标，可修改用于参考的SFSymbol，可以选择一个与当前图标类似的SFSymbol进行比较。

2. 拖动画布中的对齐基线，使图标大小与参考SFSymbol的大小接近。

3. 拖动画布中图标左右两侧的参考线，确定SFSymbol宽度。一般情况下，此值默认是正确的。

4. 点击上方“超细”，“常规”，“粗体”，依次调整在不同粗细下的属性，使之看起来与参考SFSymbol协调。
对于模式为填充加，或填充减的曲线，可以对其进行缩放以正确适配大小。
对于模式为描边加，或描边减的曲线，可以修改Symbol变化属性中的描边缩放比例，以适配正确的描边粗细。

## 导出

点击SFSymbol配置面板右侧导出按钮，导出SFSymbol。