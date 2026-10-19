# findaskill MCP

**Find the right skill or MCP server without leaving your coding agent.**

[![MCP](https://img.shields.io/badge/Protocol-MCP-blue)](https://modelcontextprotocol.io/)
[![Read-only discovery](https://img.shields.io/badge/Discovery-read--only-brightgreen)](#three-tools-one-purpose)
[![MIT License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

[Get your free API key](https://findaskill.tech/settings) · [Documentation](https://findaskill.tech/findaskill-mcp.md) · [Report an issue](https://github.com/MEB-TCH/findaskill-mcp/issues)

<img width="960" height="569" alt="Claude Code using findaskill to find a Figma to React skill" src="https://github.com/user-attachments/assets/bc74a231-59a6-45b7-82e9-cbfbfcfb75a2" />

## Why findaskill?

Your coding agent should find relevant capabilities when it needs them—not load dozens of integrations before you start.

findaskill gives MCP-compatible agents three discovery tools to search for reusable skills and MCP servers. Results stay compact, and your agent can read a skill's details before recommending it.

- **On-demand discovery:** your agent chooses search keywords from your task.
- **Skills first:** prefer reusable instructions when an external integration isn't needed.
- **Focused recommendations:** guidance asks your agent to present at most three options.
- **Small responses:** five results by default, up to ten per page, with pagination.
- **MCP footprint signals:** light, medium or heavy when tool-count information is available; unknown counts are identified rather than invented.
- **No automatic installation:** discovery does not install servers or perform external actions.

## Quick start: Claude Code

### 1. Get a key

Sign in at [findaskill.tech/settings](https://findaskill.tech/settings), open **API & MCP**, and create a key.

**Access is free and unlimited for now. An API key is required.**

### 2. Connect findaskill

Replace `YOUR_API_KEY` with your own key and run:

```bash
claude mcp add --transport http findaskill https://findaskill.tech/api/public/mcp --header "Authorization: Bearer YOUR_API_KEY"
```

Keep your key private. Never commit it to GitHub or include it in a public screenshot.

### Alternative: npm relay

Prefer running findaskill through npm? Add this to your MCP client configuration:

```json
{
  "mcpServers": {
    "findaskill": {
      "command": "npx",
      "args": ["-y", "@findaskill/mcp"],
      "env": {
        "FINDASKILL_API_KEY": "YOUR_API_KEY"
      }
    }
  }
}
```

The relay needs Node.js 18 or newer and no other setup. It forwards requests to the same hosted endpoint.

The npm package `@findaskill/mcp` is being published. Until it is live, use the HTTP connection in step 2.

### 3. Check the connection

Open `/mcp` in Claude Code and check that findaskill is connected. Reconnect or start a new session if its tools haven't loaded.

### 4. Try a task

```text
Find a skill to help me turn a Figma design into accessible React components.
Show me the best match and explain why it fits. Don't install anything yet.
```

Or:

```text
I need my agent to work with GitHub issues.
Search findaskill for a suitable MCP server, explain its footprint,
and ask me before installing or connecting anything.
```

These are example prompts, not recorded results. Recommendations depend on the current catalog.

## Cursor and other HTTP MCP clients

Add this entry to your client's MCP configuration, replacing `YOUR_API_KEY`:

```json
{
  "mcpServers": {
    "findaskill": {
      "url": "https://findaskill.tech/api/public/mcp",
      "headers": {
        "Authorization": "Bearer YOUR_API_KEY"
      }
    }
  }
}
```

Your client must support remote HTTP MCP servers. Configuration locations vary by client.

## Three tools, one purpose

| Tool | Purpose |
| --- | --- |
| `findaskill_search_skills` | Find reusable skills relevant to a task. |
| `findaskill_get_skill` | Read a selected skill's details. |
| `findaskill_search_mcp_servers` | Discover MCP servers and available footprint information. |

Search responses include a hint and a `next_cursor` when another page is available. Your agent can request more results without loading the entire catalog into its context.

## Before adding another MCP server

A server's tools consume context in your coding client. findaskill flags heavy servers when known tool counts exceed 15 or estimated context exceeds approximately 5,000 tokens.

Footprint estimates are guidance, not exact token measurements. An unknown tool count is not a guarantee that a server is lightweight.

A newly installed MCP server may require a reconnect or a new session before its tools become available.

Your findaskill key grants access to findaskill only. Third-party services may require separate accounts, credentials or paid plans.

## What this repository contains

This repository contains the lightweight findaskill MCP relay (`index.mjs`), connection examples and documentation.

The website, hosted search implementation, catalog infrastructure, administration and agent execution engine are not included.

**The hosted service is required. This is not a self-hosted copy of findaskill.**

## Privacy and logging

findaskill records tool-call metadata for reliability and abuse monitoring, including the tool name, search query, result count, response time and a hashed IP address. Calls are associated with the API key used.

Search queries are sent to the hosted service. Do not include passwords, secrets or sensitive personal information in them.

There is currently no client-side telemetry opt-out setting. For questions or deletion requests, contact **mourad@findaskill.tech**.

## Troubleshooting

| Problem | What to check |
| --- | --- |
| Tools are missing | Check the connection status, then reconnect or start a new session. |
| Authentication error / HTTP 401 | Check your key and Authorization header. Replace a revoked key. |
| Connection timeout | Check the URL and whether your network can reach findaskill.tech. |
| HTTP 503 | The service is temporarily unavailable. Try again later. |
| No useful results | Try different keywords or ask the agent to broaden its search. |

Never include your API key in an issue. Share the client name, error message and reproduction steps with secrets removed.

## Feedback

Have a use case, a client compatibility issue or an idea for better discovery?

[Open an issue](https://github.com/MEB-TCH/findaskill-mcp/issues) with enough detail for us to reproduce it.

If findaskill helps your workflow, a star helps other developers discover this project.

## License

Public repository files are licensed under [MIT](LICENSE). The license does not grant access to private findaskill source code or infrastructure.
