# Derives

- Deriving allows you to import the rules from one StyleSheet into another.
- They can only be defined at the root level of the StyleSheet (not inside rules).

They are written as follows:

```rsml
@derive "./path/to/style/sheet/here"
```

- - -

Deriving works slightly differently depending on the integration you are using.
Integrations that rely on `.rsml` files will likely use paths for the local filesystem, whilst integrations which use stringified rsml embedded inside other languages will likely use paths for the Roblox DataModel.