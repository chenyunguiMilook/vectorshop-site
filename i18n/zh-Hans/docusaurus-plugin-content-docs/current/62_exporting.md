---
sidebar_position: 62
---

# 导出

在没有选中图层的情况下，在画布中右键单击并选择 **"Export..."** 菜单即可打开导出面板；如果有图层选中，选择 **"Export Selection..."** 菜单即可。  
导出分为两类：**自定义导出** 和 **模板导出**。  
导出图片时，可以直接点击工具栏右侧的 **“导出”** 按钮完成操作，或点击配置面板下方的 **“渲染”** 按钮进行渲染，然后将文件拖动到目标文件夹。

---

## 自定义导出

### 可用类型

1. **Crop Size（裁切大小）**  
   导出的图片大小由裁切区域决定。  
   - **参考线**：选择不同参考线辅助调整对齐。
   - **预设**：使用预设大小导出图片。
   - **宽度/高度**：手动设置导出图片的宽度和高度。
   - **图像格式**：选择导出格式（PNG 或 SVG）。
   - **基础缩放**：导出图片会根据基础缩放比例调整大小。
   - **平台**：支持导出为 iOS 或 Android 平台格式。

2. **Margin（边界宽度）**  
   图片大小由画布中的图像大小加上指定的边界宽度决定。
   - **左/右/上/下**：设置边界宽度（可为负值）。
   - 其他参数与裁切配置相同。

3. **Fixed Size（指定大小）**  
   导出图片的大小由配置中指定的宽度和高度决定，适用于需要固定大小的导出需求。
   - **宽度/高度**：指定导出图片的尺寸。

4. **Fixed Ratio（指定比例）**  
   导出图片大小由当前画布的图像大小决定，同时固定宽高比例。
   - **比例**：设置宽高比（可选择预设值）。

5. **Mouse Cursor（鼠标光标）**  
   导出鼠标光标图片时，大小由画布中的图像大小决定。  
   - 可在画布中拖动光标锚点至正确位置。

---

## 模板导出

切换到模板导出模式后，画布中会渲染相应模板的参考线。调整参考线的大小和位置以适应图标，并选择预设背景样式后即可导出。  

支持的模板包括：  
- **[Android App Icon](https://developer.android.com/distribute/google-play/resources/icon-design-specifications?hl=zh-cn)**：支持选择背景预设。
- **[iOS App Icon](https://developer.apple.com/design/human-interface-guidelines/app-icons)**：支持选择背景预设。
- **[Mac Dock Icon](https://developer.apple.com/news/?id=5i6jlf4d)**：支持选择背景预设。
- **[Launcher Icon](https://m2.material.io/design/iconography/product-icons.html#grid-and-keyline-shapes)**：支持选择背景预设。
- **[Adaptive Icon](https://medium.com/google-design/designing-adaptive-icons-515af294c783)**：支持选择背景预设。
- **[Android System Icon](https://m2.material.io/design/iconography/system-icons.html#design-principles)**  
- **[Font Icon](https://fontawesome.com/v5/docs/web/use-kits/icon-design-guidelines)**  
