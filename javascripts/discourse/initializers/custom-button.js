

import { withPluginApi } from "discourse/lib/plugin-api";
import { iconNode } from "discourse-common/lib/icon-library";
import { dasherize } from "@ember/string";
import isValidUrl from "../lib/isValidUrl";
import { h } from "virtual-dom";

export default {
  name: "header-icon-links",
  initialize() {
    withPluginApi("0.8.41", (api) => {
      try {
        const splitLinks = settings.setup.split("|").filter(Boolean);

        splitLinks.forEach((link, index, links) => {
          const fragments = link.split(",").map((fragment) => fragment.trim());
          const title = fragments[0];
          const href = fragments[1];
          const icon = "Button";
          const className = `custom-button-${dasherize(fragments[0])}`;
          const target = "_blank";
          const rel = target ? "noopener" : "";
          const selector = `div.topic-category.${className}`;

          api.decorateWidget("post-links:before", (helper) => {
            return helper.h(selector, [
              helper.h(
                "a.icon.btn-flat",
                {
                  href,
                  title,
                  target,
                  attributes: {
                    rel,
                  },
                },
              icon
              ),
            ]);
          });
        });
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(
          error,
          "There's an issue in the header icon links component. Check if your settings are entered correctly"
        );
      }
    });
  },
};