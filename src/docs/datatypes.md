# Datatypes
Values that can be assigned to properties and attributes.

## Mathematical Operations
The following operators can be used between datatypes: `^` (raise to power), `/` (divide), `//` (floor divide), `%` (modulus), `*` (multiply), `+` (add), `-` (subtract).


## UDim Shorthands
- A UDim with only a scale component can be defined by suffixing a number with `%`.
- A UDim with only an offset component can be defined by suffixing a number with `px`.
- You can perform mathematical operations between both shorthands (for example `50% + 125px`).
- A number used in an operation with a udim shorthand will be coerced into a udim scale component (for example `.5 + 25px` will result in `UDim.new(.5, 25)`).


## Tuples
An anonymous tuple is a grouping of other data types. They are defined by wrapping a comma separated list in parenthesis:
```rsml
("hello", "world")
```

You can transform the datatype(s) within a tuple into one consolidated datatype via an annotation, for example.
```rsml
udim2 (50% + 25px, 13px + 12%)
```

If a tuple doesn't have an annotation or has an invalid annotation then the tuple is referred to as an unimplemented tuple.


## Enums
Enums can be written via `Enum.{name}.{item}` or `Enum:{name}:{item_name}`.

### Enum Shorthands
you are able to define solely the item name of the enum via `:{item_name}` when assigning a property or an attribute. The enum name will be inferred to be the name of the property or attribute. For example:
```rsml
TextButton {
    -- Defining Enum's like this can be cumbersome.
    AutomaticSize = Enum.AutomaticSize.XY; 

    -- So instead you can use a shorthand.
    AutomaticSize = :XY;
}
```

Some annotated tuples may also for enum shorthands as well. For example:
```rsml
FontFace = font ("BuilderSans", :SemiBold, :Italic);
```

#### Shorthand Hardcodes
To improve the developer experience, some property names are hardcoded to be inferred as a different enum name. These hardcodes are usually for when the property name does not match the enum name.
| Property Name | Inferred As | 
| ------------- | ----------- |
| FlexMode | UIFlexMode |
| FlexAlignment | UIFlexAlignment |


## Strings
Strings can be written via surrounding text in single or double quotes or double square brackets.

::: code-group
```rsml [Single Quotes]
SomeProperty = 'hello world'
```

```rsml [Double Quotes]
SomeProperty = "hello world"
```

```rsml [Double Square Brackets]
SomeProperty = [[
    hello world
]]
```
:::


## Booleans & Nil
- Booleans can be defined via `true` and `false`.
- Nil can be defined via `nil`.



## Colors

### Hex Colors
You can easily add hex codes into your style sheets via a `#` prefix.
```rsml
#C586C0;
```

### Tailwind Colors
[Tailwind colors](https://tailwindcss.com/docs/customizing-colors) can be written via the `tw:{name}:{shade?}` (case-insensitive) syntax which resolves to a Color3.
```rsml
tw:fuchsia:200;
tw:fuchsia;
```

### Css Colors
Css colors can be written via the `css:{name}` (case-insensitive) syntax which resolves to a Color3.
```rsml
css:rebeccapurple;
```

### Brick Colors
You can write Brick Colors using the `bc:{name}` (case-insensitive) syntax which resolves to a Color3, or alternatively you can use the `brickcolor` annotated tuple which resolves to a BrickColor.

```rsml
bc:reallyred;
```
```rsml
brickcolor (
    name: string = "Medium stone grey"
);
-- Example.
brickcolor ("Really red");
```

### RGB Colors
Rgb colors can be written via the `rgb` annotated tuple.
```rsml
rgb (
    r: number = 0,
    g: number = r,
    b: number = g
);
-- Example.
rgb (255, 82, 24);
```

### Color3
Color3's can be written via the `color3` annotated tuple.
```rsml
color3 (
    r: number = 0,
    g: number = r,
    b: number = g
);
-- Example.
color3 (.8, .1, .3);
```
```rsml
color3 (
    brickColor: BrickColor
);
-- Example.
color3 (brickcolor ("Really red"));
```

## Content
Content can be written via the `content` annotated tuple:
```rsml
content (rbxasset://1234567890)
```
​
- - -
### Misc Annotated Tuples
Below is documentation for annotated tuples which do not fit into the sub-sections above.

## UDim
```rsml
udim (
    scale: number = 0,
    offset: number = scale * 100
);
-- Example.
udim (.5, 25);
```

## UDim2
```rsml
udim2 (
    x: udim = UDim.new(0, 0),
    y: udim = x
);
-- Example.
udim2 (.5 + 100px, .1 + 25px);
```
```rsml
udim2 (
    xScale: number = 0,
    xOffset: number = xScale * 100,
    yScale: number = xScale,
    yOffset: number = yScale * 100
);
-- Example.
udim2 (.5, 100, .1, 25);
```

## Rect
```rsml
rect (
    minX: number = 0,
    minY: number = minX,
    maxX: number = minX,
    maxY: number = minY
);
-- Example.
rect (5, 10, 8, 12);
```
```rsml
rect (
    min: Vector2,
    max: Vector2
);
-- Example.
rect (vec2 (5, 10), vec2 (8, 12));
```

## Vector2
```rsml
vec2 (
    x: number = 0,
    y: number = x
);
-- Example.
vec2 (.5, .5);
```

## Vector2int16
```rsml
vec2i16 (
    x: number = 0,
    y: number = x
);
-- Example.
vec2i16 (2, 4);
```

## Vector3
```rsml
vec3 (
    x: number = 0,
    y: number = x,
    z: number = y
);
-- Example.
vec3 (23.5782, 31.1299, 71);
```

## Vector3int16
```rsml
vec3i16 (
    x: number = 0,
    y: number = x,
    z: number = y
);
-- Example.
vec3i16 (23, 31, 71);
```

## CFrame
```rsml
cframe (
    pos: Vector3 | Vector3int16 = Vector3.new(0, 0, 0),
    orienX: Vector3 | Vector3int16 = Vector3.new(0, 0, 0),,
    orienY: Vector3 | Vector3int16 = orienX,
    orienZ: Vector3 | Vector3int16 = orienY
);
-- Example.
cframe (vec3 (5, 10, 15));
```
```rsml
cframe (
    posX: number = 0,
    posY: number = posX,
    posZ: number = posY,
    orienXX: number = 0,
    orienXY: number = orienXX,
    orienXZ: number = orienXY,
    orienYX: number = 0,
    orienYY: number = orienYX,
    orienYZ: number = orienYY,
    orienZX: number = 0,
    orienZY: number = orienZX,
    orienZZ: number = orienZY
);
-- Example.
cframe (5, 10, 15);
```

## Font
```rsml
font (
    name: string | number = "SourceSansPro",
    weight: Enum.FontWeight | string | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 = Enum.FontWeight.Regular,
    style: Enum.FontStyle | string | 0 | 1 = Enum.FontStyle.Normal
)
-- Example.
font ("BuilderSans", :SemiBold, "Italic")
```

## ColorSequence
```rsml
colorseq (
    ...: (time: number | nil, color: Color3) | Color3
)
-- Example.
colorseq (
    tw:red,
    (.5, tw:blue),
    tw:green
)
```

## NumberSequence
```rsml
numseq (
    ...: (time: number | nil, value: number, envelope: number | nil) | number
)
-- Example.
numseq (
    (0, .3),
    (.5, .8, .235),
    (1, .2)
)
```

## NumberRange
```rsml
numrange (
    min: number,
    max: number
)
-- Example.
numrange (0, 5)
```