# Contributing to findaskill MCP

Thanks for taking the time to contribute. This repository contains the public
MCP relay for findaskill: a small, read-only bridge between your AI coding
agent and the findaskill discovery endpoint.

## What this repository is

- The relay: it forwards tool requests to `https://findaskill.tech/api/public/mcp`
  and returns the answer to your agent.
- The documentation: README, examples, security policy.

## What this repository is not

It is not the findaskill website, not the catalog, not the server, and not the
API implementation. Those parts are not open source and are not accepting
contributions here.

## Ways to contribute

1. **Report a bug** — open an issue with the exact command you ran, the agent
   or client you used, and the full error text. Please remove your API key
   before posting.
2. **Propose a better default** — for example a clearer error message, a
   shorter response format, or a more helpful setup hint. Explain the problem
   you ran into, not only the fix you have in mind.
3. **Improve the docs** — setup steps that were unclear, a missing example,
   a typo. These are the most welcome changes.
4. **Share a working example** — a prompt and the result you got, so others
   can copy it.

Before writing code, open an issue first. A small change to a public
interface needs a quick agreement on what the interface should be.

## Pull request checklist

- [ ] The relay still requires no third-party dependencies.
- [ ] No API key, token, or account identifier appears in the diff.
- [ ] Behavior is unchanged for anyone who does not opt into it.
- [ ] The README is updated when user-facing behavior changes.
- [ ] `node index.mjs` starts cleanly with a valid key and fails clearly
      without one.

## Style

- Plain JavaScript with ES modules, no build step, no dependencies.
- Keep functions small and readable; a relay should be auditable in one pass.
- Error messages should say what to do next, not only what went wrong.

## Code of conduct

Be direct and kind. Assume good intent. Criticise the code, not the person.
Keep the discussion focused on the agent experience you are trying to improve.

## License

By contributing, you agree that your contributions are released under the MIT
license already present in this repository.
