---
sidebar_position: 23
---

# Shape Composition Modes

Shapes can be composed of multiple open or closed curves using different composition modes. The supported modes are **EvenOdd**, **Winding**, **Boolean**, and **SFSymbol**.

---

## EvenOdd

In the **EvenOdd** mode, curves are rendered based on the even-odd rule. The visibility of each curve is determined by its even or odd status.

---

## Winding

In the **Winding** mode, you can adjust the winding direction of curves by clicking the button on the right side of the curve list. This allows you to achieve the desired rendering effect.

---

## Boolean

In the **Boolean** mode, shapes are rendered by applying Boolean operations starting from the bottom-most curve and working upwards through the stack.

The following Boolean operations are supported:
1. **Unite (Add)**: Combines the current curve with the result of the lower curves.
2. **Subtract**: Subtracts the current curve from the result of the lower curves.
3. **Intersection**: Retains only the overlapping areas between the lower result and the current curve.
4. **Exclude**: Retains only the non-overlapping areas between the lower result and the current curve.

---

## SFSymbol

In the **SFSymbol** mode, shapes are rendered by applying the composition mode of each curve, starting from the bottom-most curve and proceeding upwards.

Each curve has a mode toggle button on its right side to change its composition mode. The following modes are supported:
1. **Fill Add**: For closed curves, combines the curve using a Boolean "Add" operation when generating the SFSymbol.
2. **Fill Subtract**: For closed curves, subtracts the curve using a Boolean "Subtract" operation when generating the SFSymbol.
3. **Stroke Add**: Combines the curve using a Boolean "Add" operation, with stroke thickness and style defined by the SFSymbol's stroke properties.
4. **Stroke Subtract**: Subtracts the curve using a Boolean "Subtract" operation, with stroke thickness and style defined by the SFSymbol's stroke properties.
