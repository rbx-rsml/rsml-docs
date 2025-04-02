# Introduction

RSML (Roblox Style Management Language) is a declarative language for defining styles.

### Example

::: code-group
```rsml [./button.rsml]
@derive "attributes";

.Button {
    @priority 50;
    AutomaticSize = :XY;
    TextColor3 = $ColorText;
    FontFace = $FontFace;
    TextSize = $TextSize;

    .Primary {
        BackgroundColor3 = $ColorPrimary;
    }

    .Secondary {
        BackgroundColor3 = $ColorSecondary;
    }

    .Destructive {
        BackgroundColor3 = $ColorDestructive;
    }

    .Disabled {
        BackgroundTransparency = .4;
        Interactable = false;
    }

    ::UIPadding {
        PaddingLeft = 10px;
        PaddingRight = 10px;
        PaddingTop = 10px;
        PaddingBottom = 10px;
    }

    ::UICorner {
        CornerRadius = 10px;
        CornerRadius = 50px;
    }
}
```

```rsml [./attributes.rsml]
$FontFace = font ("BuilderSans", "SemiBold");
$TextSize = 14;
$ColorText = tw:slate:50;
$ColorPrimary = tw:blue:700;
$ColorSecondary = tw:slate:700;
$ColorDestructive = tw:rose:700;
```
:::


## Integrations


### RSML Luau
A package designed to convert stringified rsml inside `.luau` and `.ts` files into Instances in the DataModel at runtime. Also exposes a lexer and parser.<br></br>
<ul style="list-style-type: none; padding: 0; margin: 0; margin-top: -5px; display: flex; gap: 20px; flex-wrap: wrap;">
    <a href="/integrations/luau" target="_blank">
        <li style="display: flex; gap: 10px; justify-content: center;">
            <img src="/logo.svg" width="20px" />
            Documentation
        </li>
    </a>
    <a href="https://github.com/rbx-rsml/rsml-luau" target="_blank">
        <li style="display: flex; gap: 10px; justify-content: center;">
            <img src="/github-dark.svg" width="20px" />
            Github Repo
        </li>
    </a>
    <a href="https://wally.run/package/cameronpcampbell/rsml" target="_blank">
        <li style="display: flex; gap: 10px; justify-content: center;">
            <img src="/wally.svg" width="20px" />
            Wally Package
        </li>
    </a>
    <a href="https://www.npmjs.com/package/@rbxts/rsml" target="_blank">
        <li style="display: flex; gap: 10px; justify-content: center;">
            <img src="/npm.svg" width="20px" />
            NPM Package
        </li>
    </a>
</ul>

### RSML Rojo
A Rojo fork which converts `.rsml` files to Roblox instances in the DataModel.
<br></br>
<ul style="list-style-type: none; padding: 0; margin: 0; margin-top: -5px; display: flex; gap: 20px; flex-wrap: wrap;">
    <a href="/integrations/rojo" target="_blank">
        <li style="display: flex; gap: 10px; justify-content: center;">
            <img src="/logo.svg" width="20px" />
            Documentation
        </li>
    </a>
    <a href="https://github.com/rbx-rsml/rojo" target="_blank">
        <li style="display: flex; gap: 10px; justify-content: center;">
            <img src="/github-dark.svg" width="20px" />
            Github Repo
        </li>
    </a>
</ul>

### RSML CLI
A codegen CLI which converts `.rsml` files to `.luau` files in the local file system.
<br></br>
<ul style="list-style-type: none; padding: 0; margin: 0; margin-top: -5px; display: flex; gap: 20px; flex-wrap: wrap;">
    <a href="/integrations/cli" target="_blank">
        <li style="display: flex; gap: 10px; justify-content: center;">
            <img src="/logo.svg" width="20px" />
            Documentation
        </li>
    </a>
    <a href="https://github.com/rbx-rsml/rsml-cli" target="_blank">
        <li style="display: flex; gap: 10px; justify-content: center;">
            <img src="/github-dark.svg" width="20px" />
            Github Repo
        </li>
    </a>
</ul>

### RSML Rust
A crate designed for lexing and parsing RSML.
<br></br>
<ul style="list-style-type: none; padding: 0; margin: 0; margin-top: -5px; display: flex; gap: 20px; flex-wrap: wrap;">
    <a href="/integrations/rust" target="_blank">
        <li style="display: flex; gap: 10px; justify-content: center;">
            <img src="/logo.svg" width="20px" />
            Documentation
        </li>
    </a>
    <a href="https://github.com/rbx-rsml/rsml-rust" target="_blank">
        <li style="display: flex; gap: 10px; justify-content: center;">
            <img src="/github-dark.svg" width="20px" />
            Github Repo
        </li>
    </a>
    <a href="https://docs.rs/rbx-rsml/latest/rbx_rsml" target="_blank">
        <li style="display: flex; gap: 10px; justify-content: center;">
            <img src="/crates-io.png" width="20px" />
            Crates.io
        </li>
    </a>
</ul>

## IDE Support

### VS Code Extension

Adds syntax highlighting to `.rsml` files. Also adds highlighting to luau and typscript strings prefixed with the `--!rsml` (or `--[=*[rsml!]=*]`) sigil.
<br></br>
<ul style="list-style-type: none; padding: 0; margin: 0; margin-top: -5px; display: flex; gap: 20px; flex-wrap: wrap;">
    <a href="https://github.com/rbx-rsml/rsml-vsc" target="_blank">
        <li style="display: flex; gap: 10px; justify-content: center;">
            <img src="/github-dark.svg" width="20px" />
            Github Repo
        </li>
    </a>
    <a href="https://marketplace.visualstudio.com/items?itemName=rbx-rsml.roblox-style-markup-language" target="_blank">
        <li style="display: flex; gap: 10px; justify-content: center;">
            <img src="/vs-dark.svg" width="20px" />
            VS Marketplace
        </li>
    </a>
</ul>
