# Fields
Rsml has two types of fields: `Properties` and `Attributes`.


## Properties
- Property fields are used to define properties for instances.
- They can be assigned either a data type or an attribute.

They can be written as follows:

```rsml
SomeProperty = ...
```


## Attributes
- Attribute fields are used to store a data type, or another attribute, that can be assigned to multiple properties.
- If a attribute is changed then the properties it is assigned to will update accordingly.
- They propagate downwards which means that rules will inherit attributes from their ancestor(s).
- If multiple attributes of the same name are defined then the most recently defined one takes precedence.

They can be written with a dollar sign prefix as follows:

```rsml
$MyAttribute = ...
```