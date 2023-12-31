/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => CustomTaskStatePlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian3 = require("obsidian");

// src/task-view.ts
var import_obsidian = require("obsidian");

// src/utilities.ts
function getTextNodes(e) {
  const textNodes = [];
  const childNodes = e.childNodes;
  for (let i = 0; i < childNodes.length; i++) {
    const childNode = childNodes.item(i);
    if (childNode.nodeType === Node.TEXT_NODE) {
      textNodes.push(childNode);
    }
  }
  return textNodes;
}

// src/task-view.ts
var TaskView = class extends import_obsidian.MarkdownRenderChild {
  constructor(containerEl, customState) {
    super(containerEl);
    this.customState = customState;
  }
  onload() {
    const stateReadingViewEl = document.body.createSpan({
      cls: "task-list-item-checkbox",
      text: this.customState.readingView
    });
    this.containerEl.classList.add("task-list-item");
    const p = this.containerEl.querySelector("p");
    const descriptionContainer = p || this.containerEl;
    const children = Array.from(descriptionContainer.childNodes);
    descriptionContainer.setChildrenInPlace([stateReadingViewEl, ...children]);
    const firstTextNode = getTextNodes(descriptionContainer)[0];
    firstTextNode.nodeValue = firstTextNode.nodeValue.trimStart().substring(this.customState.state.length + 2).trimStart();
  }
};

// src/setting-tab.ts
var import_obsidian2 = require("obsidian");
var DEFAULT_SETTINGS = {
  customStates: [
    { state: "committed", readingView: "\u{1F4CC}" },
    { state: "doing", readingView: "\u{1F6A7}" },
    { state: "deferred", readingView: "\u{1F634}" },
    { state: "removed", readingView: "\u{1F5D1}" }
  ]
};
var DEFAULT_NEW_CUSTOM_STATE = {
  state: "newState",
  readingView: "\u{1F195}"
};
var CustomTaskStatePluginSettingTab = class extends import_obsidian2.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  async commitChanges() {
    await this.plugin.saveSettings();
    this.display();
  }
  async commitChangesWithoutRerendering() {
    await this.plugin.saveSettings();
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h1", { text: "Custom State for Task List" });
    containerEl.createEl("p", { text: "Introduction and usage: " }).createEl("a", {
      text: "README.md",
      href: "https://github.com/OkamiWong/obsidian-custom-state-for-task-list#readme"
    });
    containerEl.createEl("p", { text: "Developer: " }).createEl("a", {
      text: "Okami Wong",
      href: "https://github.com/OkamiWong"
    });
    new import_obsidian2.Setting(containerEl).setName("Reset custom states").setDesc("Warning: this will roll back to the default settings and cause you to lose all the changes.").addButton((button) => button.setButtonText("Reset").onClick(async () => {
      this.plugin.settings = structuredClone(DEFAULT_SETTINGS);
      await this.commitChanges();
    }));
    new import_obsidian2.Setting(containerEl).setName("Add custom state").setDesc("Click the button on the right side to add more custom state.").addButton((button) => {
      button.setButtonText("Add").onClick(async () => {
        this.plugin.settings.customStates.push(structuredClone(DEFAULT_NEW_CUSTOM_STATE));
        await this.commitChanges();
      });
    });
    for (let i = 0; i < this.plugin.settings.customStates.length; i++) {
      const customState = this.plugin.settings.customStates[i];
      new import_obsidian2.Setting(containerEl).setName(`Custom State ${i + 1}`).addText((text) => text.setPlaceholder("Name of the state").setValue(customState.state).onChange(async (value) => {
        this.plugin.settings.customStates[i].state = value;
        await this.commitChangesWithoutRerendering();
      })).addText((text) => text.setPlaceholder("String to display in reading view").setValue(customState.readingView).onChange(async (value) => {
        this.plugin.settings.customStates[i].readingView = value;
        await this.commitChangesWithoutRerendering();
      })).addButton((button) => button.setButtonText("Remove").onClick(async () => {
        this.plugin.settings.customStates.remove(customState);
        await this.commitChanges();
      }));
    }
  }
};

// src/main.ts
var CustomTaskStatePlugin = class extends import_obsidian3.Plugin {
  async loadSettings() {
    this.settings = Object.assign({}, structuredClone(DEFAULT_SETTINGS), await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
    console.debug(this.settings);
  }
  findCustomState(taskState) {
    let matchedCustomState = null;
    for (const customState of this.settings.customStates) {
      if (customState.state === taskState) {
        matchedCustomState = customState;
        break;
      }
    }
    return matchedCustomState;
  }
  async onload() {
    await this.loadSettings();
    this.addSettingTab(new CustomTaskStatePluginSettingTab(this.app, this));
    this.registerMarkdownPostProcessor((element, context) => {
      const domParser = new DOMParser();
      const customStateRegex = /^\[\w+\](?=\s)/;
      const elements = element.querySelectorAll("li");
      for (let i = 0; i < elements.length; i++) {
        const e = elements.item(i);
        const children = e.children;
        const firstChild = children.item(0);
        const isListItem = firstChild !== null && firstChild.outerHTML.startsWith('<div class="list-bullet">');
        const taskContent = e.innerText.trim();
        const taskStates = taskContent.match(customStateRegex);
        if (isListItem && taskStates && taskStates.length >= 1) {
          const taskStateRaw = taskStates[0];
          const taskState = taskStateRaw.substring(1, taskStateRaw.length - 1);
          const matchedCustomState = this.findCustomState(taskState);
          if (matchedCustomState !== null) {
            console.debug('Custom Task Found "%s" : %o', taskContent, domParser.parseFromString(e.innerHTML, "text/html").body);
            context.addChild(new TaskView(e, matchedCustomState));
          }
        }
      }
    });
  }
};
