---
sidebar_position: 61
---

# Copying Code

Supports copying code for shape layers and text layers, with options to adjust the precision of floating-point values in the code.  
Right-click on the layer and select the **"Copy Code..."** menu to open the code export panel.

## Shape Layer Code

Shape layers support copying three types of code:

1. **CAShapeLayer Code**:
    - Supports solid colors, linear gradients, and radial gradients for fills.
2. **CGContext Drawing Code**:
    - Supports solid colors, linear gradients, and radial gradients for fills.
3. **SwiftUI View Code**:
    - Supports solid colors, linear gradients, radial gradients, and angular gradients for fills.
    - Requires referencing the **CustomShape** class to simplify and enhance code flexibility.

## Text Layer Code

Text layers support copying three types of code:

1. **UILabel**:
    - Supports system or custom fonts and solid color fills.
2. **SwiftUI Text**:
    - Supports system or custom fonts and special font styles.
    - Supports solid colors, linear gradients, radial gradients, and angular gradients for fills.
3. **SwiftUI Font**:
    - Supports system or custom fonts and special font styles.
