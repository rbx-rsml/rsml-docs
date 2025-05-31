# Data Types
Values that can be assigned to properties and attributes.

## Mathematical Operations
The following operators can be used between data types: `^` (raise to power), `/` (divide), `//` (floor divide), `%` (modulus), `*` (multiply), `+` (add), `-` (subtract).

## Intermediate Data Types
Some data types which RSML offers are not natively supported in Roblox. These data types are referred to as being intermediate. When you assign them to a property or a token then they will be converted into another data type which Roblox natively supports.

## UDim Shorthands
- A UDim with only a scale component can be defined by suffixing a number with `%`.
- A UDim with only an offset component can be defined by suffixing a number with `px`.
- You can perform mathematical operations between both shorthands (for example `50% + 125px`).
- A number used in an operation with a udim shorthand will be coerced into a udim scale component (for example `.5 + 25px` will result in `UDim.new(.5, 25)`).


## Tuples
An anonymous tuple is a grouping of other data types. They are defined by wrapping a comma separated list in parenthesis:
```rsml-types
("hello", "world")
```

You can transform the datatype(s) within a tuple into one consolidated datatype via an annotation, for example.
```rsml-types
udim2 (50% + 25px, 13px + 12%)
```

If a tuple doesn't have an annotation or has an invalid annotation then the tuple is referred to as an unimplemented tuple.


## Enums
Enums can be written via `Enum.{name}.{item_name}` or `Enum:{name}:{item_name}`.

### Enum Shorthands
When assigning a field you are able to only include the item name of the enum via the `:{item_name}` syntax. The enum name will be inferred to be the name of the field. For example:
```rsml-types
TextButton {
    -- Defining Enum's like this can be cumbersome.
    AutomaticSize = Enum.AutomaticSize.XY; 

    -- So instead you can use a shorthand.
    AutomaticSize = :XY;
}
```

Some annotated tuples may also allow for enum shorthands as well. For example:
```rsml-types
FontFace = font ("BuilderSans", :SemiBold, :Italic);
```

#### Shorthand Hardcodes
To improve the developer experience, some property names are hardcoded to be inferred as a different enum name. These hardcodes are usually for when the property name does not match the enum name.
| Property Name | Inferred As | 
| ------------- | ----------- |
| FlexMode | UIFlexMode |
| HorizontalFlex | UIFlexAlignment |
| VerticalFlex | UIFlexAlignment |


## Strings
Strings can be written via surrounding text in single or double quotes or double square brackets.

::: code-group
```rsml-types [Single Quotes]
SomeProperty = 'hello world'
```

```rsml-types [Double Quotes]
SomeProperty = "hello world"
```

```rsml-types [Double Square Brackets]
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
```rsml-types
#C586C0;
```

### Tailwind Colors
[Tailwind colors](https://tailwindcss.com/docs/customizing-colors) can be written via the `tw:{name}:{shade?}` (case-insensitive) syntax which resolves to a Color3.
```rsml-types
tw:fuchsia:200;
tw:fuchsia;
```

### Css Colors
Css colors can be written via the `css:{name}` (case-insensitive) syntax which resolves to a Color3.
```rsml-types
css:rebeccapurple;
```

### Brick Colors
You can write Brick Colors using the `bc:{name}` (case-insensitive) syntax which resolves to a Color3, or alternatively you can use the `brickcolor` annotated tuple which resolves to a BrickColor.

```rsml-types
bc:reallyred;
```
```rsml-types
brickcolor (
    name: string = "Medium stone grey"
);
-- Example.
brickcolor ("Really red");
```

### RGB Colors
Rgb colors can be written via the `rgb` annotated tuple.
```rsml-types
rgb (
    r: number = 0,
    g: number = r,
    b: number = g
);
-- Example.
rgb (255, 82, 24);
```


### OkLab & OkLch

OkLab and OkLch are color spaces which provide more accurate and perceptually uniform color representation, making them better for accessibility and creating visually appealing designs.

They are currently implemented as [intermediate data types](/docs/datatypes#intermediate-data-types) as Roblox doesn't natively support them. This means that they will turn into `Color3`'s when assigned to `Properties` or `Tokens`.

```rsml
oklab (
    l: number,
    a: number,
    b: number
);
-- Example.
oklab (0.7, 0.05, -0.09)
```

```rsml
oklch (
    l: number,
    c: number,
    h: number
);
-- Example.
oklch (0.7, 0.1, 297)
```

### Color3
Color3's can be written via the `color3` annotated tuple.
```rsml-types
color3 (
    r: number = 0,
    g: number = r,
    b: number = g
);
-- Example.
color3 (.8, .1, .3);
```
```rsml-types
color3 (
    brickColor: BrickColor
);
-- Example.
color3 (brickcolor ("Really red"));
```

## Content
Content can be written via the `content` annotated tuple:
```rsml-types
content (rbxasset://1234567890)
```

## UDim
```rsml-types
udim (
    scale: number = 0,
    offset: number = scale * 100
);
-- Example.
udim (.5, 25);
```

## UDim2
```rsml-types
udim2 (
    x: udim = UDim.new(0, 0),
    y: udim = x
);
-- Example.
udim2 (.5 + 100px, .1 + 25px);
```
```rsml-types
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
```rsml-types
rect (
    minX: number = 0,
    minY: number = minX,
    maxX: number = minX,
    maxY: number = minY
);
-- Example.
rect (5, 10, 8, 12);
```
```rsml-types
rect (
    min: Vector2,
    max: Vector2
);
-- Example.
rect (vec2 (5, 10), vec2 (8, 12));
```

## Vector2
```rsml-types
vec2 (
    x: number = 0,
    y: number = x
);
-- Example.
vec2 (.5, .5);
```

## Vector2int16
```rsml-types
vec2i16 (
    x: number = 0,
    y: number = x
);
-- Example.
vec2i16 (2, 4);
```

## Vector3
```rsml-types
vec3 (
    x: number = 0,
    y: number = x,
    z: number = y
);
-- Example.
vec3 (23.5782, 31.1299, 71);
```

## Vector3int16
```rsml-types
vec3i16 (
    x: number = 0,
    y: number = x,
    z: number = y
);
-- Example.
vec3i16 (23, 31, 71);
```

## CFrame
```rsml-types
cframe (
    pos: Vector3 | Vector3int16 = Vector3.new(0, 0, 0),
    orienX: Vector3 | Vector3int16 = Vector3.new(0, 0, 0),,
    orienY: Vector3 | Vector3int16 = orienX,
    orienZ: Vector3 | Vector3int16 = orienY
);
-- Example.
cframe (vec3 (5, 10, 15));
```
```rsml-types
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
```rsml-types
font (
    name: string | number = "SourceSansPro",
    weight: Enum.FontWeight | string | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 = Enum.FontWeight.Regular,
    style: Enum.FontStyle | string | 0 | 1 = Enum.FontStyle.Normal
)
-- Example.
font ("BuilderSans", :SemiBold, "Italic")
```

## ColorSequence
```rsml-types
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
```rsml-types
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
```rsml-types
numrange (
    min: number,
    max: number
)
-- Example.
numrange (0, 5)
```

- - - 

# Data Type Modifiers

Modifiers are tuple annotations which outputs a modified version of the inputted datatype(s).


## Lerp
```
lerp <T>(
    from: T,
    to: T,
    time: number
) -> T
```


## Lerp
```
lerp <T>(
    from: T,
    to: T,
    time: number
) -> T
```

## Floor
Rounds down all the numerical components of a datatype.
```
floor <T>(
    datatype: T
) -> T
```

## Ceil
Rounds up all the numerical components of a datatype.
```
ceil <T>(
    datatype: T
) -> T
```

## Round
Rounds all the numerical components of a datatype.
```
round <T>(
    datatype: T
) -> T
```


## Abs
Converts all the numerical components of a datatype to be positive.
```
abs <T>(
    datatype: T
) -> T
```