# Macros
Macros lets you define a snippet of RSML which can be reused throughout your styles. You can import them from another Style Sheet via the `@derive` declaration.

They can be defined via the macro declaration:
```rsml
@macro MyCoolMacro {
    Size = udim2 (200px, 100px);
    Position = udim2 (.5, .5);
}
```

Macros can be given arguments which can be referenced via a `&` prefix
```rsml
@macro MyCoolMacro (&size) {
    Size = &size,
    Position = udim2 (.5, .5),
}
```


## Calling Macros
A macro can be called by referencing its name with a `!` suffix.

```rsml
MyCoolMacro! (udim2 (500px))
```


## Overloading
You can define multiple macros with the same name but with a different amount of parameters.

```rsml
-- Padding A
@macro Padding (&all) {
    ::UIPadding {
        PaddingTop = &all;
        PaddingBottom = &all;
        PaddingLeft = &all;
        PaddingRight = &all;
    }
}

-- Padding B
@macro Padding (&top_bottom, &left_right) {
    ::UIPadding {
        PaddingTop = &top_bottom;
        PaddingBottom = &top_bottom;
        PaddingLeft = &left_right;
        PaddingRight = &left_right;
    }
}

-- Padding C
@macro Padding (&top, &left_right, &bottom) {
    ::UIPadding {
        PaddingTop = &top;
        PaddingLeft = &left_right;
        PaddingRight = &left_right;
        PaddingBottom = &bottom;
    }
}

-- Padding D
@macro Padding (&top, &right, &bottom, &left) {
    ::UIPadding {
        PaddingTop = &top;
        PaddingRight = &right;
        PaddingBottom = &bottom;
        PaddingLeft = &left;
    }
}

.Button {
    -- `Padding C` will be called
    -- as we have three parameters.
    Padding! (10px, 20px, 8px);
}
```


## Built-In Macros
RSML has some macros built-in to speed up development: `Padding` (seen in the example above), `CornerRadius`, and `Scale`. An up to date list can be found [here](https://github.com/rbx-rsml/rsml-rust/blob/main/builtins.rsml).