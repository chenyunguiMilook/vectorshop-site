---
sidebar_position: 20
---

# 绘制锚点曲线
圆角曲线和光滑曲线都是锚点曲线。

## 绘制曲线
### 绘制
在绘制光滑曲线的过程中，锚点默认为光滑点，按下"Command"键切换为角点。鼠标光标会有相应提示。

当鼠标光标点击曲线第一个锚点，将封闭并结束当前曲线绘制。在绘制过程中，按下回车键，也将结束当前曲线绘制。

### 智能吸附
切换到锚点曲线绘制工具，如果光标为红色，则代表智能吸附功能开启。你可以通过按下"Option"键来开启或关闭智能吸附功能。

智能吸附功能包括轴向吸附，顶点对齐，曲线角度匹配，中点对齐等。

### 强制吸附
切换到锚点曲线绘制工具，长按 "C" 键，开启曲线吸附。长按 "V" 键，开启顶点吸附。长按 "X" 键，开启网格吸附。

## 编辑曲线
在画布中双击图像（或双击图层列表的图标）可进入形状编辑模式，在形状编辑模式下，可以对曲线进行整体的编辑，如复制，删除，镜向，排序，修改形状模式等操作。再次双击曲线，则可进入锚点编辑模式，在锚点编辑模式下，可以对锚点进行选择，移动，旋转，缩放，添加，删除，镜向等操作。

### 选择锚点
点击锚点，即可选中该锚点。按下 "Shift" 键点击锚点，可加选该锚点。
在画布中框选，即可选中框选区域内的锚点。按下 "Shift" 框选锚点，可加选该区域的锚点。
框选边（不选择任何锚点），即可选择该曲线的所有锚点。

### 移动锚点
选择锚点，按 "W" 键，可切换到锚点移动工具。在锚点移动工具下，可通过移动坐标轴，使锚点朝指定轴向进行移动。也可以轴向后的输入框中输入移动距离，达到精确移动的目的。

拖动坐标轴中心，则可在画布中自由移动锚点。此时如果长按 "C" 变换中心可吸附到附近的曲线上。长按 "V" 变换中心可吸附到附近的锚点上。长按 "X" 变换中心可吸附到附近的网格上。

通过重复按下 "W" 键，可使坐标系在不同的本地坐标系（是指选择锚点的法向量，或边的法向量）和全局坐标系下转换。

### 旋转锚点
选择锚点，按下 "E" 键，可切换到锚点旋转工具。在锚点旋转工具下，可通过鼠标拖拽，使锚点绕坐标轴中心旋转。也可以通过输入框中输入旋转角度，达到精确旋转的目的。

点击坐标轴右下蓝色的锚点，即可进入锚点编辑模式。此时可以通过移动锚点位置来修改旋转中心。在修改锚点的过程中也可以通过长按"X","C","V"分别进行网格，曲线及顶点吸附操作。完成锚点修改后，可以点击蓝色勾按钮进行确认。

通过重复按下 "E" 键，也可以使坐标系在不同的本地坐标系和全局坐标系下转换。

### 缩放锚点
选择锚点，按下 "R" 键，可切换到锚点缩放工具。在锚点缩放工具下，可通过拖动坐标轴上手柄，使锚点在指定轴向上缩放。也可通过拖动坐标中心来进行等比缩放。还可以通过在坐标轴后的输入框中输入缩放值，以进行精确缩放。

点击坐标轴右下蓝色的锚点，即可进入锚点编辑模式。此时可以通过移动锚点位置来修改缩放中心。在修改锚点的过程中也可以通过长按"X","C","V"分别进行网格，曲线及顶点吸附操作。完成锚点修改后，可以点击蓝色勾按钮进行确认。

通过重复按下 "R" 键，也可使坐标系在不同的本地坐标系及全局坐标系下转换。以方便在指定方向上缩放锚点。

### 添加锚点
在锚点编辑模式下， 按下Command键，视图中会出现锚点将要添加的位置，点击鼠标左键，即可在该位置添加锚点。点击并拖动，即可添加并移动该锚点。

如果要添加位置为某个边的中心，或为另一个顶点在该边的垂线上，提示图案会出现相应的变化。

选中两个顶点，按下数字键1-9， 则可均匀在该线段上添加指定数量的顶点。

### 删除锚点
选中锚点，按下 "Delete" 键，即可删除选中的锚点。

如果选中的锚点为连续锚点，按下 "X" 键，即可将选中锚点合并为一个顶点。

### 将锚点转换为光滑锚点
选中锚点，按下 "C" 键，即可光滑所选中的锚点。

如果该曲线为圆角曲线，也可以通过修改锚点上方的圆角值来改变圆角大小。

### 将锚点转换为角点
选中锚点，按下 "V" 键，即可锐化所选中的锚点。

### 精确设置锚点位置
选中锚点，在左侧锚点列表中可直接输入锚点的坐标信息对锚点位置进行精确修改。
在列表中点击并拖动，一次滑过多个输入框，可单次修改多个锚点的位置。

### 镜向曲线
选中两个边续的锚点。按下 "M" 键，即可以该选中的边为轴进行对称镜向。

按下 "S" 键，即可以该选中的边进行旋转镜向。

### 挤压边
在锚点编辑模式下，选中两个相邻的顶点，点击挤出边按钮，即可挤出该边。挤出后可以通过移动工具修改挤出距离。

按下 "T" 键也可挤出边。

### 挤压圆弧
在锚点编辑模式下，按下 "Option" 键，视图中会激活最近的边。点击鼠标并拖动，即可挤压出圆弧。

### 开放/关闭曲线
如果当前为封闭曲线，选中两个连续锚点，在画布中右键，点击 "Open Curve" 菜单即可开放曲线。

如果当前为开放曲线，在画布中点击右键，点击 "Close Curve" 菜单即可关闭曲线。

### 重设曲线开始节点
选择任意锚点，在画布中点击右键，点击 "Set as starting point" 菜单即可将开锚点设置为曲线开始节点。