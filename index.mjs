#!/usr/bin/env node
// @findaskill/mcp — stdio relay to the hosted findaskill MCP endpoint.
// No dependencies. Requires Node.js 18+.
//
// The catalog, API keys and rate logic all live on https://findaskill.tech;
// this package only forwards newline-delimited JSON-RPC between the MCP
// client (Claude Code, Cursor…) and the hosted endpoint.

const ENDPOINT = (process.env.FINDASKILL_MCP_URL || "https://findaskill.tech/api/public/mcp").replace(/\/+$/, "");
const KEY = process.env.FINDASKILL_API_KEY || "";
const VERSION = "1.0.0";

if (!KEY) {
  console.error(
    "[findaskill] FINDASKILL_API_KEY is not set.\n" +
      "[findaskill] Create a free key at https://findaskill.tech/settings, then add it to your MCP configuration:\n" +
      '[findaskill]   "env": { "FINDASKILL_API_KEY": "fsk_live_..." }',
  );
}

let buffer = "";
process.stdin.setEncoding("utf8");
process.stdin.on("data", (chunk) => {
  buffer += chunk;
  let i;
  while ((i = buffer.indexOf("\n")) >= 0) {
    const line = buffer.slice(0, i).trim();
    buffer = buffer.slice(i + 1);
    if (line) void forward(line);
  }
});

async function forward(raw) {
  let msg;
  try {
    msg = JSON.parse(raw);
  } catch {
    return; // not JSON-RPC; ignore
  }
  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json, text/event-stream",
        ...(KEY ? { authorization: `Bearer ${KEY}` } : {}),
      },
      body: raw,
    });
    if (res.status === 202) return; // notification accepted, no response body
    const text = await res.text();
    if (text) process.stdout.write(text + "\n");
  } catch (e) {
    if (msg && msg.id !== undefined) {
      process.stdout.write(
        JSON.stringify({
          jsonrpc: "2.0",
          id: msg.id,
          error: { code: -32000, message: `findaskill relay error: ${e instanceof Error ? e.message : String(e)}` },
        }) + "\n",
      );
    }
  }
}

process.on("SIGINT", () => process.exit(0));
process.on("SIGTERM", () => process.exit(0));
console.error(`[findaskill] MCP relay v${VERSION} ready → ${ENDPOINT}`);
