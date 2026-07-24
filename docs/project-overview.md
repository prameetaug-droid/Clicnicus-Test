# Project Overview and Local Setup

## Project Summary
This workspace contains a Next.js landing page project for Clinicus. The site was built as a modern, component-based marketing page with reusable sections for the hero area, solution overview, programs, steps, testimonials, and footer.

## What Was Created
- Next.js app structure for a landing page
- Reusable React components for each major section
- Styling with Tailwind-based utility classes
- Local image assets in the public images folder
- A Figma MCP server setup for connecting design data into the development workflow
- A local Node.js-based MCP server configuration

## Files Created or Used
- App entry: src/app/page.tsx
- Main layout: src/app/layout.tsx
- Global styling: src/app/globals.css
- Reusable page sections: src/components
- Images: public/images
- MCP server setup: mcp/figma-mcp/server.js
- VS Code workspace config: .vscode/settings.json

## How to Run Locally
1. Open the project folder in a terminal.
2. Run:
   npm install
   npm run dev
3. Open http://localhost:3000 in your browser.

## How the Figma MCP Server Was Set Up
- Node.js was verified and used as the runtime.
- A local MCP server was configured to run in stdio mode.
- The workspace was updated with a VS Code-compatible MCP configuration.
- The Figma MCP package was launched using npx and the Figma API key.

## Notes
- The local website runs through the Next.js development server.
- The MCP server is intended to support design-to-code workflows from the Figma design file.
- The current workspace implementation is a strong starting point, but visual matching to the Figma design should be reviewed manually for pixel-level accuracy.
