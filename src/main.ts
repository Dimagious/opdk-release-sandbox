import { Notice, Plugin } from "obsidian";

/** A command that shows a notice. It exists so the release has a real bundle to build, attest and compare. */
export default class OpdkSandboxPlugin extends Plugin {
    onload(): void {
        this.addCommand({
            id: "say-hello",
            name: "Say hello",
            callback: () => {
                new Notice("Hello from the release sandbox.");
            },
        });
    }
}
