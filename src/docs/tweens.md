# Tweens

::: warning
Tweens are currently not implemented on Roblox Stylesheets yet.
:::

Tweens let you apply a transition / animation to a StyleSheet property.



```rsml
-- Tweens can be defined via:

-- A time value.
@tween Size .5;

-- Or via (time, easingStyle?, easingDirection?).
@tween Size (.5, :Linear, :InOut);
```
