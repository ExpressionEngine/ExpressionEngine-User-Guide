
# Color Picker Fieldtype

The color picker lets you select pre-defined or custom colors.

![color picker field](/_images/field_color_picker.png)

## Field Options

#### Allowed Colors

Choose what colors are allowed to be selected:

- **Any** - Any color value can be selected.
- **Swatches** - Does not allow any color to be picked that's not in the swatches or the default color. Only the swatches will be shown.

#### Default Color

When set, if no color is selected the default color will be used instead.

#### Swatches

Specify a list of pre-defined colors to show in the color picker.

## Template Tag

The color picker tag outputs css hexadecimal values: 

```ee
{my_colorpicker_field}
{!-- Example Output: #ff0000  --}
```

### Contrast Color Modifier

Use the `:contrast_color` modifier to output a black or white color that contrasts with the selected color:

```ee
<div style="background: {my_colorpicker_field};">
    <p style="color: {my_colorpicker_field:contrast_color};">
        This text will contrast with the background so it's always legible.
    </p>
</div>
```

