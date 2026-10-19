# Security Policy

## Scope

This repository contains the public findaskill MCP relay and its documentation.
It does not contain findaskill's private source code, catalog, keys or infrastructure.

## What the relay does

- Sends your agent's search and read requests to `https://findaskill.tech/api/public/mcp`.
- Returns the response to your agent.
- Never installs software, never writes to your machine, and never performs actions in external services.

## What we log

Server-side request logs record the tool called, the search text, the number of results,
latency and a hashed client identifier. Logs are used to operate and improve discovery.
There is currently no client-side telemetry opt-out; contact us for deletion requests.

## Reporting a vulnerability

If you believe you found a security issue in the relay, the MCP endpoint or the
documentation, report it privately to **mourad@findaskill.tech**.

Please do not open a public issue for security problems.

Include:

- the client and version you used (Claude Code, Cursor, ...)
- the exact request or steps that trigger the problem
- what you expected and what happened instead

We aim to acknowledge reports within 72 hours and to publish a fix or advisory once the issue is resolved.

## Key safety

- Treat your findaskill key like a password.
- Never paste a key into a chat, screenshot, issue or commit.
- If a key is exposed, revoke it at [findaskill.tech/settings](https://findaskill.tech/settings), create a new one and update your client.
- Keep files containing keys (for example `mcp.json`) out of version control.

## Supported versions

| Version | Supported |
| --- | --- |
| Latest release | Yes |
| Older releases | No |
