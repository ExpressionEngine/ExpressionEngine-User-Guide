
# Color Picker Fieldtype

The color picker lets you select pre-defined or custom colors.

![color picker field](/_images/field_color_picker.png)

## Field Settings

#### Allowed Colors

Choose what colors are allowed to be selected:

- **Any** - Any color value can be selected.
- **Swatches** - Does not allow any color to be picked that's not in the swatches or the default color. Only the swatches will be shown.

#### Default Color

When set, if no color is selected the default color will be used instead.

#### Swatches

Specify a list of pre-defined colors to show in the color picker.

## Template Tag

The color picker tag outputs CSS hexadecimal values:

```ee
{my_colorpicker_field}
{!-- Example Output: #ff0000  --}
```

### Contrast Parameters

The `:complementary`, `:darken`, `:lighten`, `:rotate`, `:saturate`, `:desaturate`, and `:mix` modifiers can adjust their returned color to meet a contrast target against the original field color.

Use `contrast_ratio` to adjust the returned modifier color until it meets a WCAG 2.x contrast ratio against the original field color. Use `perceptual_contrast` to adjust the returned modifier color using a generic perceptual contrast target.

```ee
<div style='
    background: {my_colorpicker_field};
    color: {my_colorpicker_field:rotate degrees="180" contrast_ratio="4.5"};
'>
    This text color is based on the selected color and adjusted to meet the contrast ratio.
</div>
```

NOTE: **Note:** If `contrast_ratio` and `perceptual_contrast` are both present on the same modifier, `contrast_ratio` is used.

### Modifiers

#### `:contrast_color`

Use the `:contrast_color` modifier to output a black or white color that contrasts with the selected color:

```ee
<div style="background: {my_colorpicker_field};">
    <p style="color: {my_colorpicker_field:contrast_color};">
        This text will contrast with the background so it's always legible.
    </p>
</div>
```

This modifier has no parameters.

#### `:complementary`

Outputs the complementary color.

```ee
{my_colorpicker_field:complementary}
```

| Parameter | Description | Default |
| --------- | ----------- | ------- |
| `contrast_ratio` | WCAG 2.x contrast ratio target, from `1` to `21`. | `4.5` |
| `perceptual_contrast` | Generic perceptual contrast target, from `-108` to `108`. Positive values allow either light or dark returned colors. Negative values request a light returned color against the original field color. | `60` |

#### `:darken`

Outputs a darker shade.

```ee
{my_colorpicker_field:darken percent="20"}
```

| Parameter | Description | Default |
| --------- | ----------- | ------- |
| `percent` | Amount to darken the color, from `0` to `100`. | `10` |
| `contrast_ratio` | WCAG 2.x contrast ratio target, from `1` to `21`. | `4.5` |
| `perceptual_contrast` | Generic perceptual contrast target, from `-108` to `108`. Positive values allow either light or dark returned colors. Negative values request a light returned color against the original field color. | `60` |

#### `:lighten`

Outputs a lighter tint.

```ee
{my_colorpicker_field:lighten percent="20"}
```

| Parameter | Description | Default |
| --------- | ----------- | ------- |
| `percent` | Amount to lighten the color, from `0` to `100`. | `10` |
| `contrast_ratio` | WCAG 2.x contrast ratio target, from `1` to `21`. | `4.5` |
| `perceptual_contrast` | Generic perceptual contrast target, from `-108` to `108`. Positive values allow either light or dark returned colors. Negative values request a light returned color against the original field color. | `60` |

#### `:rotate`

Outputs the color with its hue rotated by a number of degrees.

```ee
{my_colorpicker_field:rotate degrees="180"}
```

| Parameter | Description | Default |
| --------- | ----------- | ------- |
| `degrees` | Degrees to rotate the hue. Positive and negative values are supported. | `0` |
| `contrast_ratio` | WCAG 2.x contrast ratio target, from `1` to `21`. | `4.5` |
| `perceptual_contrast` | Generic perceptual contrast target, from `-108` to `108`. Positive values allow either light or dark returned colors. Negative values request a light returned color against the original field color. | `60` |

#### `:saturate`

Outputs a more saturated color.

```ee
{my_colorpicker_field:saturate percent="20"}
```

| Parameter | Description | Default |
| --------- | ----------- | ------- |
| `percent` | Amount to increase saturation, from `0` to `100`. | `10` |
| `contrast_ratio` | WCAG 2.x contrast ratio target, from `1` to `21`. | `4.5` |
| `perceptual_contrast` | Generic perceptual contrast target, from `-108` to `108`. Positive values allow either light or dark returned colors. Negative values request a light returned color against the original field color. | `60` |

#### `:desaturate`

Outputs a less saturated color.

```ee
{my_colorpicker_field:desaturate percent="20"}
```

| Parameter | Description | Default |
| --------- | ----------- | ------- |
| `percent` | Amount to decrease saturation, from `0` to `100`. | `10` |
| `contrast_ratio` | WCAG 2.x contrast ratio target, from `1` to `21`. | `4.5` |
| `perceptual_contrast` | Generic perceptual contrast target, from `-108` to `108`. Positive values allow either light or dark returned colors. Negative values request a light returned color against the original field color. | `60` |

#### `:mix`

Outputs a color mixed with another color.

```ee
{my_colorpicker_field:mix color="#ffffff" percent="35"}
```

| Parameter | Description | Default |
| --------- | ----------- | ------- |
| `color` | Hex color to mix with the selected color. When omitted, the modifier mixes with black for light colors and white for dark colors. | Black or white contrast color |
| `percent` | Amount of the `color` parameter to include in the result, from `0` to `100`. | `50` |
| `contrast_ratio` | WCAG 2.x contrast ratio target, from `1` to `21`. | `4.5` |
| `perceptual_contrast` | Generic perceptual contrast target, from `-108` to `108`. Positive values allow either light or dark returned colors. Negative values request a light returned color against the original field color. | `60` |

#### `:rgb`

Outputs the color as comma-separated RGB values.

```ee
rgb({my_colorpicker_field:rgb})
{!-- Example Output: rgb(255, 0, 0) --}
```

This modifier has no parameters.

#### `:hsl`

Outputs the color as comma-separated HSL values.

```ee
hsl({my_colorpicker_field:hsl})
{!-- Example Output: hsl(0, 100%, 50%) --}
```

This modifier has no parameters.
