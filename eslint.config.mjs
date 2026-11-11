import { obsidianPlugin } from "obsidian-plugin-dev-kit/eslint";

export default [...obsidianPlugin({ rootDir: import.meta.dirname })];
