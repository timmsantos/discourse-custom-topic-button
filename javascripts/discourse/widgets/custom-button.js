import { ajax } from "discourse/lib/ajax";
import { createWidget } from "discourse/widgets/widget";
import { getOwner } from "discourse-common/lib/get-owner";
import { h } from "virtual-dom";
import PostCooked from "discourse/widgets/post-cooked";


function defaultSettings() {
    return {};
  }

function parseSetups(raw) {
    const parsed = {};
    raw.split("|").forEach((setting) => {
        const [tag, url] = setting.split(",").map((s) => s.trim());
        parsed[tag] = parsed[tag] || defaultSettings();
        console.log(parsed[tag])
    });
    return parsed;
}
