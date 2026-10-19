# Example: Figma to React

A real conversation with an AI coding agent connected to findaskill.

## You ask

> Convert these Figma frames to React components.

## What your agent does

1. Calls `findaskill_search_skills` with query `figma react component`.
2. Receives up to 5 lightweight results, each with a short description and
   an install command.
3. Picks at most 3 relevant options and shows them to you, for example:

   - **figma-to-react** — turns Figma frames into React components.
     Install: `npx skills add example/figma-to-react`
   - **figma-design-tokens** — extracts colors and spacing as tokens.
     Install: `npx skills add example/figma-design-tokens`

4. Waits for your choice, then installs only the skill you approved.
5. Generates the components.

## Why not add a Figma MCP server instead?

A Figma MCP server would load all of its tools into every conversation,
whether you use them or not. A skill is loaded only for this task. Your
agent checks the footprint level before suggesting any MCP server and
warns you if a server is heavy (more than 15 tools or about 5,000 tokens).

## Try it

Connect findaskill to your client (see the README quick start), then ask:

> Find a skill to convert Figma designs to React.
