# Comments

Comments are text annotations which are ignored. They are useful for adding contextual information to your styles.

A single-line comment can be defined via a `--` prefix.
```rsml
-- The quick brown fox jumps over the lazy dog.
```

Multi-line comments can be defined by surrounding your annotation with `--[(=*)[` and `]$1]`:
```rsml
--[[
    The quick brown fox jumps over the lazy dog.

    --[=[
        The quick brown fox jumps over the lazy dog
    ]=]
]]
``` 