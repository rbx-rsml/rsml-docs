# Tweens

::: warning
StyleSheet transitions are currently not available in live servers yet. You'll need the following fflags to enable them: `FFlagStylingTransitionsBetaFeature`, `FFlagStyleEditorSupportTransitions2`, `FFlagStyleEditorShowDefaultTransitions`, `FFlagStylingTransitionsDefaultTransition`.

Rojo also doesn't support StyleSheet transitions yet. You'll need to use [this fork](https://github.com/rbx-rsml/rojo/releases/tag/v7.7.0-rc.1-stylesheets.0).
:::

Tweens let you apply a transition / animation to a StyleSheet property.



```rsml
-- Tweens can be defined via:

-- A time value.
@tween Size .5;

-- Or via (time, easingStyle?, easingDirection?).
@tween Size (.5, :Linear, :InOut);
```
