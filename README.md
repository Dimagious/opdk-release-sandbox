# Opdk Sandbox

This repository is a test fixture for the release automation of [obsidian-plugin-dev-kit](https://github.com/Dimagious/obsidian-plugin-dev-kit). It is not a real plugin: do not install it.

Its releases are made by `opdk release`, which pushes a tag, waits for the kit's reusable release workflow, verifies the draft release and its attestations, publishes it and pushes the branch. The plugin itself is one command that shows a notice.
