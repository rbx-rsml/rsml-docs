# Names

Each StyleRule Instance's name will default to its selector. However you can override this behaviour via a `@name` declaration:
```rsml
... {
    @name "MyAwesomeName";
}
```

- - -

Name declarations may also work on the root level for StyleSheets depending on which integration you are using.


Integrations that rely on `.rsml` files will likely use the name of the file for the StyleSheet's name regardless of any name declaration.