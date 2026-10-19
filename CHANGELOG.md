# Changelog

All notable changes to the findaskill MCP relay are documented here.
The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-10-19

First public release of the relay.

### Added

- `findaskill_search_skills` — search the skills catalog. Returns up to 5
  results by default, each trimmed to a small token budget.
- `findaskill_get_skill` — read one skill's full details before choosing it.
- `findaskill_search_mcp_servers` — search MCP servers with an estimated
  footprint level (light / medium / heavy) so you can judge the context cost
  before adding one.
- Cursor and other MCP clients can connect over HTTP directly, with an
  `Authorization: Bearer <key>` header.
- Pagination with `limit` (default 5, maximum 10), `next_cursor` and a `hint`
  that tells your agent whether more results exist.
- Discovery instructions sent to the agent: prefer a skill over a server,
  propose at most three options, never install anything without your explicit
  agreement, and flag any server whose footprint looks heavy.
- Free self-service API keys at https://findaskill.tech/settings.
- A key is required for tool calls. Search results themselves are free and
  unmetered.
- MIT license, security policy, contributing guide.

### Notes

- No third-party dependencies, no build step, Node.js 18 or newer.
- The relay only forwards requests. It installs nothing and takes no action
  on your files or on external services.
- Request metadata (tool name, search text, result count, latency, hashed
  client identifier) is recorded server-side. There is no client-side opt-out.

[1.0.0]: https://github.com/MEB-TCH/findaskill-mcp/releases/tag/v1.0.0
