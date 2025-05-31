# Priorities

- Every rule has a priority which defines its precedence against other rules.
- Rules take precedence over other rules with a lower priority.
- Rules which are defined later have a higher priority.
- A Priority declaration allows you to explicitly define the priority for a rule.

They are written as follows:

```rsml
... {
    @priority 5
}
```