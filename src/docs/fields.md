# Fields
Rsml has three types of fields: `Properties`, `Tokens` and `Static Tokens`.


## Properties
- Property fields are used to define properties for instances.
- They can be assigned either a data type or an attribute.

They are written as follows:

```rsml
SomeProperty = ...
```


## Tokens
- Token fields are used to store a data type, or another token, that can be assigned to other fields later on.
- If a token is changed then the properties it is assigned to will update accordingly.
- They propagate downwards which means that rules will inherit attributes from their ancestor(s).
- If multiple tokens of the same name are defined then the most recently defined one takes precedence.

They are written with a `$` prefix as follows:

```rsml
$MyToken = ...
```


## Static Tokens
`Static Tokens` are like `Tokens` except they are resolved during compilation. This means their value can't be changed dynamically during runtime. Unlike regular tokens mathematical operations can be performed on them and intermediate data types can be assigned to them.

They are written with a `$!` prefix as follows:
```rsml
$!MyStaticToken = ...
```