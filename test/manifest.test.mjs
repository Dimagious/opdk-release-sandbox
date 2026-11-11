import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

test("manifest and package.json agree on the version", () => {
    const manifest = JSON.parse(readFileSync(new URL("../manifest.json", import.meta.url), "utf8"));
    const pkg = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));
    assert.equal(manifest.version, pkg.version);
});
