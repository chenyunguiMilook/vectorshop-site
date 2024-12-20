---
sidebar_position: 21
---

# Drawing Bézier Curves

## Drawing Curves

### Drawing

![draw_bezier](./img/bezierCurve/draw_bezier.gif)

- Click on an empty area of the canvas to add an anchor point. Click and drag to adjust the control handle of the anchor point.
- While dragging the handle, press **␣ Spacebar** to reposition the most recently added anchor point.
- While dragging the handle, press **⌥ Option** to adjust only one side of the handle, allowing for the creation of corner points.
- During drawing, hovering the mouse over the starting anchor point changes the cursor to indicate curve closure. Click to close the curve and end the drawing. Press **⏎ Return** to finish drawing an open curve.
- Hovering over a middle anchor point changes the cursor to indicate anchor point deletion. Click to remove the anchor point.

## Editing Curves

Double-click a shape on the canvas (or the corresponding icon in the layer list) to enter shape editing mode. In this mode, you can perform overall operations, such as copying, deleting, mirroring, sorting, and modifying the shape mode. Double-click the curve again to enter anchor editing mode for more detailed adjustments.

### Selecting Anchor Points

![select_bezier_anchor](./img/bezierCurve/select_bezier_anchor.gif)

- Click on an anchor point to select it.
- Drag a selection box to select all anchor points within the area. Hold **⇧ Shift** while dragging to add anchor points to the selection.

### Selecting Curve Segments

![select_bezier_segment](./img/bezierCurve/select_bezier_segment.gif)

- Click on a curve segment to activate it.
- Drag a selection box around a curve segment (without selecting anchor points) to activate it.

### Moving Anchor Points

![move_bezier_anchor](./img/bezierCurve/move_bezier_anchor.gif)

- Click and drag an unselected anchor point to move it directly.
- Click and drag a selected anchor point to move all selected anchor points simultaneously.

### Adjusting Curvature

![move_bezier_handle](./img/bezierCurve/move_bezier_handle.gif)

- Select anchor points or curve segments to activate their handles. Drag the handles to adjust the curve's curvature.
- Press **⌥ Option** while dragging a handle to adjust only one side, creating a corner point.
- Drag directly on the curve segment to adjust its overall curvature.

### Adding Anchor Points

![add_bezier_anchor](./img/bezierCurve/add_bezier_anchor.gif)

- In anchor editing mode, hold **⌘ Command** to show the position of the new anchor point. Click to add the anchor point, or click and drag to add and move it simultaneously.

### Deleting Anchor Points

![delete_bezier_anchor](./img/bezierCurve/delete_bezier_anchor.gif)

- Select anchor points and press **⌫ Delete** to remove them.
- If the selected points are continuous, press **X** to merge them into a single vertex.

### Converting Anchor Point Types

![smooth_sharpen_bezier_anchor](./img/bezierCurve/smooth_sharpen_bezier_anchor.gif)

- Press **C** to convert the selected anchor points to smooth points.
- Press **V** to convert the selected anchor points to corner points.

### Precisely Setting Anchor Point Positions

![set_bezier_anchor_pos](./img/bezierCurve/set_bezier_anchor_pos.gif)

- Select an anchor point and use the anchor point list on the left to input coordinates for precise adjustments.
- Drag over multiple input fields in the list to modify the positions of multiple anchor points simultaneously.

### Extruding Arcs

![extrude_bezier_edge](./img/bezierCurve/extrude_bezier_edge.gif)

- In anchor editing mode, hold **⌥ Option** to activate the nearest curve edge. Drag the mouse to extrude an arc from that position.

### Opening/Closing Curves

![open_close_bezier_curve](./img/bezierCurve/open_close_bezier_curve.gif)

- For closed curves: Select two consecutive anchor points, right-click, and choose "Open Curve" to open the curve.
- For open curves: Right-click and choose "Close Curve" to close it.

### Setting the Curve Starting Point

![set_bezier_curve_start](./img/bezierCurve/set_bezier_curve_start.gif)

- Select any anchor point, right-click, and choose "Set as starting point" to set it as the starting point of the curve.
