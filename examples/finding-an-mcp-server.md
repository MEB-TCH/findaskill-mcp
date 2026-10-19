# Example: finding an MCP server

A real conversation with an AI coding agent connected to findaskill.

## You ask

> I need to read and create GitHub issues from my agent. What should I use?

## What your agent does

1. Calls `findaskill_search_mcp_servers` with query `github issues`.
2. Receives up to 5 results, each with a short description, the footprint
   level (light, medium, or heavy) when known, and a setup hint.
3. Shows you at most 3 options, for example:

   - **github** (official) — manage issues, pull requests, and files.
     Footprint: heavy (many tools). Your agent will warn you.
   - **github-issues-lite** — read and create issues only.
     Footprint: light.

4. Explains the trade-off: the official server can do everything but loads
   many tools into every conversation; the light one does less but stays
   cheap in context.
5. Installs nothing until you explicitly approve one option.

## The footprint rule

Before suggesting any MCP server, your agent checks its footprint:

- **light** — a few tools, safe to add.
- **medium** — usable, but your agent tells you the cost first.
- **heavy** — more than 15 tools or about 5,000 tokens. Your agent warns
  you and looks for a lighter alternative or a skill instead.
- **unknown** — the server was never measured. Your agent treats it as
  potentially heavy, not as free.

## Try it

Connect findaskill to your client (see the README quick start), then ask:

> Find an MCP server to manage GitHub issues, and tell me how heavy it is.
