# Datatypes
Values that can be assigned to properties and attributes.

## Mathematical Operations
The following operators can be used between datatypes: `^` (raise to power), `/` (divide), `%` (modulus), `*` (multiply), `+` (addition), `-` (subtraction).

## UDim Shorthands
- A UDim with only a scale component can be defined by prefixing a number with `%`.
- A UDim with only an offset component can be defined by prefixing a number with `px`.
- You can perform mathematical operations between both shorthands (for example `50% + 125px`).

## Tuples
A tuple is a grouping of other data types. They are defined by wrapping a comma separated list in parenthesis:
```rsml
("hello", "world")
```

You can define the data type of the tuple via an annotation, for example:
```rsml
udim2 (50% + 25px, 13px + 12%)
```

## Strings
Strings can be written via surrounding text in single or double quotes, double square brackets or backticks.

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

```rsml [Backticks]
SomeProperty = `hello world`
-- Please note that interpolation does not work for backtick strings.
```
:::



## Colors

### Hex Colors
You can easily add hex codes into your style sheets via a `#` prefix:
```rsml
#C586C0;
```

### Tailwind Colors
[Tailwind colors](https://tailwindcss.com/docs/customizing-colors) can be written via the `tw:{name}:{shade?}` syntax:
```rsml
tw:fuchsia:200;
tw:fuchsia;
```

### Css Colors
Css colors can be written via the `css:{name}` syntax:
```rsml
css:rebeccapurple;
```

### Brick Colors
Brick colors can be written via the `bc:{name}` syntax or the `brickcolor` annotated tuple:
```rsml
bc:reallyred;
```
```rsml
brickcolor (
    name: string
);
-- Example.
brickcolor ("Really red");
```

### RGB Colors
Rgb colors can be written via the `rgb` annotated tuple:
```rsml
rgb (
    r: number,
    g: number,
    b: number
);
-- Example.
rgb (255, 82, 24);
```

### Color3
Color3's can be written via the `color3` annotated tuple:
```rsml
color3 (
    r: number,
    g: number,
    b: number
);
-- Example.
color3 (.8, .1, .3);
```

## Content
Content can be written via the `content` annotated tuple, or if your content is an rbxassetid then you can use the `contentid://{number}` syntax.
```rsml
content (rbxasset://1234567890)
```
```rsml
contentid://1234567890
```
​

- - -
### Annotated Tuples
Below is documentation for annotated tuples which do not fit into the sub-sections above.

## UDim
```rsml
udim (
    scale: number,
    offset: number
);
-- Example.
udim (.5, 25);
```

## UDim2
```rsml
udim2 (
    x: udim,
    y: udim
);
-- Example.
udim2 (.5 + 100px, .1 + 25px);
```
```rsml
udim2 (
    xScale: number,
    xOffset: number,
    yScale: number,
    yOffset: number
);
-- Example.
udim2 (.5, 100, .1, 25);
```

## Rect
```rsml
rect (
    min: Vector2,
    max: Vector2
);
-- Example.
rect (vec2 (5, 10), vec2 (8, 12));
```
```rsml
rect (
    minX: number,
    minY: number,
    maxX: Vector2,
    maxY: Vector2
);
-- Example.
rect (5, 10, 8, 12);
```

## Vector2
```rsml
vec2 (
    x: number,
    y: number
);
-- Example.
vec2 (.5, .5);
```

## Vector2int16
```rsml
vec2i16 (
    x: number,
    y: number
);
-- Example.
vec2i16 (2, 4);
```

## Vector3
```rsml
vec3 (
    x: number,
    y: number,
    z: number
);
-- Example.
vec3 (23.5782, 31.1299, 71);
```

## Vector3int16
```rsml
vec3i16 (
    x: number,
    y: number,
    z: number
);
-- Example.
vec3i16 (23, 31, 71);
```

## CFrame
```rsml
cframe (
    pos: Vector3 | Vector3int16,
    orienX: (Vector3 | Vector3int16)?,
    orienY: (Vector3 | Vector3int16)?,
    orienZ: (Vector3 | Vector3int16)?
);
-- Example.
cframe (vec3 (5, 10, 15));
```
```rsml
cframe (
    posX: number,
    posY: number,
    posZ: number,
    orienXX: number,
    orienXY: number,
    orienXZ: number,
    orienYX: number,
    orienYY: number,
    orienYZ: number,
    orienZX: number,
    orienZY: number,
    orienZZ: number
);
-- Example.
cframe (5, 10, 15);
```

## Font
```rsml
font (
    name: string,
    weight: string | Enum.FontWeight,
    style: string | Enum.FontStyle
)
-- Example.
font ("BuilderSans", :SemiBold, "Italic")
```

## ColorSequence
```rsml
colorseq (
    ...: (time: number, color: Color3) | Color3
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
    ...: (time: number, value: number, envelope: number) | number
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