const code = require("vscode");
const fs = require("fs");
const path = require("path");

const colors = {
    // 
    keyword: "#ff79a9",
    declaration: "#45a9e1",
    type: "#e17964",
    constant: "#a964e1",
    generic: "#e1c4ff",
    property: "#79b4c4",
    local: "#e1e1e1",
    //enum: "#79c4ff",
    //enumMem: "#90a9e1",
    interface: "#c4a9ff",
    string: "#64e179",
    numeric: "#f0e164",
    decorator: "#d4d4d4",
    namespace: "#64a9c4",
    operator: "#d4d4d4",
    function: "#e1a9c4",
    error: "#ff6479",

    blue: "#2479C4",
    green: "#45a990",

    p3: "#f06040",

    // Rust
    lifetime: "#7990e1",
    macro: "#6490ff",

    comment: "#a9a9a9",

    fg: "#d4d4d4",
    bg0: "#3b4252",
    bg1: "#2E3440",
    bg2: "#232831",
    bg3: "#2b313c"
};

const THEME_NAME = "Rusty Sakura";
const THEME_PATH = path.join(__dirname, "theme.json");

function buildTheme() {
    const theme = {
        "$schema": "vscode://schemas/color-theme",
        "name": THEME_NAME,
        "author": "Andy Chen (Ardyneus)",
        "type": "dark",
        "semanticHighlighting": true,
        "editor.bracketPairColorization.enabled": true,
        "editor.renderWhitespace": "none",
        "colors": {
            "activityBar.background": colors.bg2,
            "activityBar.foreground": colors.fg,

            "activityBar.activeBackground": colors.bg2,

            "activityBar.activeFocusBorder": colors.property,
            "activityBar.dropBorder": colors.property,

            "activityBarBadge.background": colors.keyword,
            "activityBarBadge.foreground": colors.local,

            "badge.background": colors.property,

            "breadcrumb.background": colors.bg0,

            "breadcrumb.focusForeground": colors.fg,
            "breadcrumb.activeSelectionForeground": colors.fg,

            "breadcrumbPicker.background": colors.bg1,

            "checkbox.background": colors.bg1,
            "checkbox.foreground": colors.fg,

            "debugToolBar.background": colors.bg1,

            "dropdown.background": colors.bg1,
            "dropdown.foreground": colors.fg,
            "dropdown.border": colors.property,

            "dropdown.listBackground": colors.bg1,

            "editor.background": colors.bg0,
            "editor.foreground": colors.fg,

            "editorGroup.border": colors.property,
            "editorGroup.emptyBackgroud": colors.bg1,
            "editorGroupHeader.tabsBackground": colors.bg1,

            "editorWidget.background": colors.bg1,
            "editorWidget.foreground": colors.fg,

            "editorHoverWidget.background": colors.bg1,
            "editorHoverWidget.foreground": colors.fg,
            "editorHoverWidget.border": colors.property,

            "editorSuggestWidget.background": colors.bg1,
            "editorSuggestWidget.foreground": colors.fg,
            "editorSuggestWidget.border": colors.property,

            "editorLineNumber.foreground": colors.comment,
            "editorWhitespace.foreground": colors.comment + "34",
            "editor.lineHighlightBackground": colors.bg1 + "34",
            "editor.selectionBackground": colors.bg1 + "80",

            "editorCursor.background": colors.bg0,
            "editorCursor.foreground": colors.keyword,

            "editorBracketHighlight.foreground1": colors.local,
            "editorBracketHighlight.foreground2": colors.local,
            "editorBracketHighlight.foreground3": colors.local,
            "editorBracketHighlight.foreground4": colors.local,
            "editorBracketHighlight.foreground5": colors.local,
            "editorBracketHighlight.foreground6": colors.local,
            "editorBracketHighlight.focusedForeground": colors.keyword,

            "editorError.foreground": colors.error,
            "editorError.border": colors.error,

            "extensionButton.prominentBackground": colors.property,
            "extensionButton.prominentHoverBackground": colors.keyword,
            "extensionButton.prominentForeground": colors.local,

            "focusBorder": colors.property,

            "input.background": colors.bg1,
            "input.foreground": colors.fg,
            "input.border": colors.property,

            "keybindingLabel.background": colors.bg1,
            "keybindingLabel.foreground": colors.fg,

            "list.activeSelectionForeground": colors.fg,

            "list.focusForeground": colors.fg,

            "list.hoverBackground": colors.bg2,
            "list.hoverForeground": colors.fg,

            "list.inactiveSelectionForeground": colors.fg,

            "menubar.selectionForeground": colors.fg,

            "menu.background": colors.bg1,
            "menu.foreground": colors.fg,

            "menu.selectionForeground": colors.fg,

            "menubar.selectionBackground": colors.bg2,

            "merge.border": colors.property,

            "notifications.foreground": colors.fg,

            "notifications.foreground": colors.fg,
            "notifications.border": colors.property,

            "notificationCenterHeader.background": colors.bg1,
            "notificationCenterHeader.foreground": colors.fg,
            "notificationCenter.border": colors.property,
            "notificationToast.border": colors.property,

            "panel.background": colors.bg0,
            "panelTitle.activeForeground": colors.fg,

            "peekView.border": colors.property,

            "peekViewEditor.background": colors.bg1,

            "peekViewResult.background": colors.bg1,

            "peekViewResult.fileForeground": colors.fg,

            "peekViewResult.selectionForeground": colors.fg,

            "peekViewTitle.background": colors.keyword + "34",

            "peekViewTitleLabel.foreground": colors.fg,
            "peekViewTitleDescription.foreground": colors.comment,

            "pickerGroup.border": colors.property,

            "quickInput.background": colors.bg1,
            "quickInput.foreground": colors.fg,

            "scrollbarSlider.background": colors.property + "80",
            "scrollbarSlider.hoverBackground": colors.property + "e1",
            "scrollbarSlider.activeBackground": colors.property,

            "settings.checkboxBackground": colors.bg1,
            "settings.checkboxForeground": colors.fg,

            "settings.dropdownBackground": colors.bg1,
            "settings.dropdownForeground": colors.fg,

            "settings.headerForeground": colors.fg,

            "settings.numberInputBackground": colors.bg1,
            "settings.numberInputForeground": colors.fg,

            "settings.textInputBackground": colors.bg1,
            "settings.textInputForeground": colors.fg,

            "sideBar.background": colors.bg1,
            "sideBar.foreground": colors.fg,
            "sideBarTitle.foreground": colors.fg,
            "sideBarSectionHeader.background": colors.bg2,
            "sideBarSectionHeader.foreground": colors.fg,
            "statusBar.noFolderBackground": colors.bg1,

            "statusBar.foreground": colors.fg,

            "statusBarItem.activeBackground": colors.bg2,

            "statusBarItem.hoverBackground": colors.bg2,

            "statusBarItem.prominentForeground": colors.fg,

            "tab.border": colors.property,

            "tab.activeBackground": colors.bg0,
            "tab.activeForeground": colors.fg,
            "tab.activeBorder": colors.property,
            "tab.activeModifiedBorder": colors.property,

            "tab.inactiveBackground": colors.bg1,

            "tab.hoverBackground": colors.bg2,
            "tab.hoverForeground": colors.fg,
            "tab.hoverBorder": colors.property,

            "terminal.foreground": colors.fg,
            "terminal.background": colors.bg0,

            "titleBar.activeBackground": colors.bg3,
            "titleBar.activeForeground": colors.fg,

            "titleBar.inactiveBackground": colors.bg3,

            "welcomePage.background": colors.bg0,

            "welcomePage.buttonBackground": colors.bg1,
            "welcomePage.buttonHoverBackground": colors.bg2,

            "walkThrough.embeddedEditorBackground": colors.bg1
        },
        "tokenColors": [
            {
                /*
                main keyword color:
                - keywords
                - important punctuation ;
                - pointers & *
                */
                "scope": [
                    "storage.type.numeric",
                    "meta.method.declaration",
                    "keyword.declaration",
                    "keyword.operator.new",
                    "storage.type.primitive",
                    "keyword.other",
                    "punctuation.semi",
                    "punctuation.comma",
                    "entity.name.type.numeric",
                    "entity.name.type.primitive",
                    "storage.type.built-in.primitive",
                    // Rust
                    "storage.type.rust",
                    "keyword.operator.borrow",
                    "keyword.declaration.struct.rust",
                    "storage.modifier.mut.rust",
                    "variable.language.super.rust",
                    "entity.name.function.macro.rules.rust",
                    "variable.other.metavariable.specifier.rust",
                    // Ruby
                    "keyword.other.special-method.ruby",
                    // string escape characters
                    "constant.character.escape",
                    "string.quoted.byte.raw.rust",
                    "punctuation.section.embedded.rust",
                    // C++
                    "storage.type.modifier.access.control",
                    "keyword.control.cpp",
                    "variable.language.this.cpp",
                    "storage.modifier.reference.cpp",
                    "storage.modifier.specifier",
                    "punctuation.terminator",
                    "keyword.control",
                    "entity.name.function.operator.cpp",
                    "punctuation.separator.pointer-access",
                    "punctuation.separator.delimiter.c",
                    "punctuation.separator.delimiter.comma.cpp",
                    //"constant.language",
                    "storage.modifier",
                    "entity.name.function.preprocessor.c",
                    "storage.type.struct",
                    "storage.type.union",
                    "storage.type.built-in.cpp",
                    // Swift
                    "support.type.swift",
                    // C#
                    "keyword.type.int.cs",
                    "keyword.type.string.cs",
                    "keyword.type.void.cs",
                    "keyword.type.double.cs",
                    "keyword.type.float.cs",
                    "keyword.type.decimal.cs",
                    "keyword.type.char.cs",
                    "keyword.type.ulong.cs",
                    "keyword.type.long.cs",
                    "keyword.type.uint.cs",
                    "keyword.type.ushort.cs",
                    "keyword.type.short.cs",
                    "keyword.type.sbyte.cs",
                    "keyword.type.byte.cs",
                    "keyword.type.bool.cs",
                    // Java
                    "keyword.hard",
                    "storage.type.class",
                    "storage.type.enum",
                    "storage.type.record",
                    "punctuation.separator.delimiter.java",
                    // JS(TS)
                    "storage.type.ts",
                    "storage.type.js",
                    "storage.type.type",
                    "storage.type.function.ts",
                    "storage.type.function.js",
                    "support.type.primitive.ts",
                    "punctuation.definition.template-expression",
                    // CSS
                    "meta.property-name.css",
                    "meta.property-list.css",
                    "punctuation.definition.entity.css",
                    "punctuation.definition.keyword.css",
                    // HTML
                    "entity.name.tag",
                    "punctuation.separator.key-value.html",
                    // Swift
                    "storage.type.function.swift",
                    // XML
                    "constant.character.entity.xml",
                    // GO
                    "keyword.const.go",
                    "keyword.function.go",
                    "keyword.package.go",
                    "keyword.go.mod",
                    "keyword.var.go",
                    "keyword.import.go",
                    "keyword.type.go",
                    "keyword.struct.go",
                    "keyword.interface.go",
                    "keyword.channel.go",
                    // Python
                    "storage.type.function.python",
                    "storage.type.builtin",
                    "constant.character.format.placeholder",
                    "punctuation.section.function.begin.python",
                    "punctuation.separator.colon.python",
                    // Shell
                    "punctuation.definition.subshell.single.shell",
                    "punctuation.definition.assignment",
                    "punctuation.separator.batchfile",
                    "punctuation.definition.variable.shell",
                    "variable.parameter.positional.shell",
                    "variable.language.special.shell",
                    "constant.other.option.shell",
                    // Clojure
                    "storage.control.clojure",
                    "entity.name.function.clojure"
                ],
                "settings": {
                    "foreground": colors.keyword
                }
            },
            {
                "scope": [
                    // Rust
                    "variable.language.self.rust",
                    // SCSS & CSS
                    "variable.scss",
                    "variable.css",
                    // JS(TS)
                    "variable.language.this",
                    // Python 
                    "variable.parameter.function.language.special.self.python",
                    "variable.language.special.self.python",
                    // Swift
                    "variable.language.swift",
                    // Dart
                    "variable.language.dart"
                ],
                "settings": {
                    "foreground": colors.type
                }
            },
            {
                // functions & structs declaration
                // non-primitive types
                "scope": [
                    "entity.name.class",
                    "entity.name.function.constructor",
                    "entity.name.type.struct",
                    "entity.name.type.class",
                    "entity.name.type.rust",
                    "meta.method.identifier",
                    "meta.definition.variable.java",
                    // C++
                    "entity.name.operator.cpp",
                    "entity.name.type.parameter.cpp",
                    "support.type.posix-reserved.c",
                    "meta.function.definition.parameters.c",
                    "meta.declaration.type.alias.cpp",
                    "meta.body.function.definition.cpp",
                    // C#
                    "entity.name.type.cs",
                    "entity.name.type.declaration.rust",
                    // Java
                    "storage.type.object.array.java",
                    "entity.name.type.enum",
                    "entity.name.type.kotlin",
                    "variable.other.object.java",
                    // JS(TS)
                    "meta.definition.method",
                    "entity.name.type.ts",
                    "entity.name.type.alias.ts",
                    // CSS
                    "entity.other.attribute-name.class.css",
                    "entity.other.attribute-name.id.css",
                    // TOML
                    "support.type.property-name.table.toml",
                    "support.type.property-name.array.toml",
                    // Swift
                    "support.type.swift",
                    // MARKDOWN
                    "heading",
                    // GO
                    "entity.name.type.go",
                    "entity.name.type.receiver.go",
                    // Proto
                    "entity.name.class.message.proto",
                    "entity.name.class.proto",
                    // Python
                    "support.variable.magic.python",
                    "support.function.magic.python",
                    // Shell
                    "keyword.command.batchfile",
                    // Clojure
                    "entity.global.clojure"
                ],
                "settings": {
                    "foreground": colors.declaration,
                    "fontStyle": "bold"
                }
            },
            {
                "scope": [
                    "meta.class.body",
                    "meta.method.return-type",
                    "variable.other.constant",
                ],
                "settings": {
                    "foreground": colors.type,
                    "fontStyle": "bold"
                }
            },
            {
                "scope": [
                    "support.constant",
                    "support.class",
                    "support.type.other",
                    "variable.constant.other",
                    "constant.other.caps",
                    "variable.other.global.cpp",
                    "constant.character",
                    "constant.escape",
                    // C
                    "entity.name.function.preprocessor.c",
                    "entity.name.function.preprocessor.cpp",
                    // CSS
                    "support.function.misc.css",
                ],
                "settings": {
                    "foreground": colors.constant
                }
            },
            {
                "scope": [
                    "storage.type.generic",
                    "entity.name.type.template.cpp",
                    "meta.template.call.cpp",
                    "variable.language.generic-parameter.swift",
                    "text.html.basic entity.other.attribute-name"
                ],
                "settings": {
                    "foreground": colors.generic,
                }
            },
            {
                // fields of structure
                "scope": [
                    "variable.object.property",
                    "variable.other.member",
                    "variable.other.readwrite.member",
                    "meta.object-literal.key",
                    "entity.name.variable.enum-member",
                    "variable.other.enummember",
                    // Rust
                    //"variable.other.rust",
                    "entity.name.type.option.rust",
                    // Ruby
                    "variable.other.readwrite.instance.ruby",
                    "constant.language.symbol.hashkey.ruby",
                    // Java
                    "variable.other.definition.java",
                    "constant.other.enum.java",
                    // JS(TS)
                    "variable.other.property",
                    "support.variable.property",
                    "entity.other.attribute-name",
                    // C
                    "meta.block.c",
                    // C#
                    "entity.name.variable.property.cs",
                    "variable.other.object.property",
                    // CSS
                    "support.type.property-name.css",
                    "source.css.less entity.other.attribute-name.id",
                    // JSON
                    "support.type.property-name.json",
                    // TOML
                    "support.type.property-name.toml",
                    // MARKDOWN
                    "markup.inline.raw.string.markdown",
                    // Go
                    "string.unquoted.go.mod",
                    "variable.other.go",
                    // Proto
                    "variable.other.proto",
                    "support.other.proto",
                    // Python
                    "meta.attribute.python",
                    // Swift
                    "meta.definition.type.body.swift",
                    // Shell
                    "variable.other.readwrite.batchfile",
                    "punctuation.definition.variable.batchfile",
                    "variable.other.normal.shell",
                    "variable.other.assignment.shell",
                    // hyprland
                    "variable.other.hyprland",
                    // Clojure
                    "constant.keyword.clojure"
                ],
                "settings": {
                    "foreground": colors.property
                }
            },
            {
                /*
                main text color:
                - local variables
                - common syntax {},()
                - function arguments
                */
                "scope": [
                    "punctuation",
                    "variable.parameter",
                    "variable.other.local",
                    "variable.other.readwrite.local",
                    "meta.block variable.other.readwrite",
                    "meta.function.parameters variable",
                    "meta.parameters variable",
                    "entity.name.variable",
                    "meta.definition.variable.name",
                    "keyword.operator.logical",
                    "keyword.operator.assignment",
                    "keyword.operator.namespace",
                    "keyword.operator.access",
                    "keyword.operator.comparison",
                    "support.variable",
                    // Rust
                    "variable.other.rust",
                    "keyword.operator.key-value.rust",
                    "keyword.operator.arrow.skinny.rust",
                    // C++
                    "punctuation.section.block",
                    "punctuation.section.parameters",
                    "punctuation.section",
                    "punctuation.definition.capture",
                    "punctuation.definition.parameters",
                    "meta.block.cpp",
                    "punctuation.separator.namespace.access.cpp",
                    "meta.body.class.cpp",
                    "meta.parameter",
                    "punctuation.separator.namespace.access.cpp",
                    "punctuation.separator.initializers.cpp",
                    "punctuation.separator.colon.range-based.cpp",
                    "punctuation.separator.dot-access.cpp",
                    "punctuation.separator.delimiter.comma.template.argument.cpp",
                    // Java
                    "meta.function.call",
                    "meta.method-call",
                    "meta.method.body.java",
                    "storage.type.function.arrow",
                    "punctuation.separator.java",
                    // JS(TS)
                    "punctuation.accessor",
                    "keyword.operator.type.annotation.ts",
                    "meta.function-call",
                    // CSS
                    "meta.property-list.css",
                    // Python
                    "punctuation.definition.arguments",
                    "meta.function-call.arguments.python",
                    "meta.indexed-name.python",
                    "meta.item-access.python",
                    // php
                    "variable.other.php",
                    // Shell
                    "entity.name.command.shell",
                    // Swift
                    "meta.definition.function.body.swift",
                    "meta.function-call.swift",
                    "entity.name.function.swift",
                    // HTML
                    "text.html.derivative"
                ],
                "settings": {
                    "foreground": colors.local
                }
            },
            {
                // function call
                "scope": [
                    "variable.function",
                    "support.function",

                    ///// "entity.name.function", TODO remove

                    // Rust
                    "entity.name.function.rust",
                    // C
                    "entity.name.function.c",
                    // C++
                    "entity.name.function.member.cpp",
                    "entity.name.function.definition.cpp",
                    "entity.name.function.call.cpp",
                    // C# - EXCEPTION DECLARATION
                    "entity.name.function.cs",
                    "entity.name.function.declaration.kotlin",
                    // Java
                    "entity.name.function.java",
                    // JS(TS)
                    "meta.definition.function",
                    // CSS
                    "entity.other.attribute-name.pseudo-class.css",
                    // Python
                    "meta.function-call.generic",
                    "entity.name.function.python",
                    // Ruby
                    "entity.name.function.ruby",
                    // Swift
                    "entity.name.function.swift",
                    // Go
                    "entity.name.function.go",
                    // Php
                    "storage.type.function.php",
                    "entity.name.function.php",
                    // Dart
                    "	entity.name.function.dart",
                    // Clojure
                    "	entity.global.clojure",
                    // MARKDOWN
                    "string.other.link.title.markdown",
                    "string.other.link.description.markdown",
                    // Shell
                    "entity.name.command.shell",
                    "keyword.other.special-method"

                    // Don't do this!!!
                    // this makes every function definition ever wrong color!!
                    // "entity.name.function",
                ],
                "settings": {
                    "foreground": colors.function,
                    "fontStyle": "bold italic"
                }
            },
            {
                // Interface
                "scope": [
                    "meta.interface",
                    "storage.type.interface",
                    "meta.class.header",
                    "entity.other.inherited-class",
                    "entity.name.type.interface",
                    "entity.name.type.trait.rust",
                    "punctuation.definition.annotation"
                ],
                "settings": {
                    "foreground": colors.interface,
                }
            },
            {
                "name": "Strings",
                "scope": [
                    "string",
                    "string.quoted",
                    "string.template",
                    "punctuation.definition.string.template"
                ],
                "settings": {
                    "foreground": colors.string
                }
            },
            {
                "name": "Comments",
                "scope": [
                    "comment",
                    "punctuation.definition.comment",
                    "comment.block.documentation",
                    "comment.line.documentation"
                ],
                "settings": {
                    "foreground": colors.comment,
                    "fontStyle": "italic"
                }
            },
            {
                // numbers
                "scope": [
                    "constant.numeric.decimal",
                    // JSON
                    "constant.numeric",
                ],
                "settings": {
                    "foreground": colors.numeric
                }
            },
            {
                "scope": [
                    "meta.attribute",
                    "storage.type.annotation",
                ],
                "settings": {
                    "foreground": colors.decorator,
                }
            },
            {
                "scope": [
                    //"source", TODO remove later
                    "meta.attribute"
                ],
                "settings": {
                    "foreground": colors.operator,
                }
            },
            {
                "scope": [
                    "meta.throwables.java"
                ],
                "settings": {
                    "foreground": colors.error
                }
            },
            {
                // mod / module / namespace
                "scope": [
                    "entity.name.import",
                    //"entity.name.namespace",
                    "entity.name.section",
                    "entity.name.module.rust",
                    "entity.name.namespace.rust",
                    // C++
                    "string.quoted.other.lt-gt.include.cpp",
                    "entity.name.scope-resolution.cpp",
                    "entity.name.scope-resolution.function.call.cpp",
                    "entity.name.scope-resolution.parameter.cpp",
                    "meta.preprocessor.include.cpp",
                    // C#
                    "entity.name.type.namespace.cs",
                    // Java
                    "storage.modifier.import.java",
                    // MARKDOWN
                    "markup.underline.link.markdown",
                    "markup.underline.link.image.markdown",
                    // Go
                    "entity.name.package.go"
                ],
                "settings": {
                    "foreground": colors.namespace
                }
            },
            {
                "scope": [
                    "punctuation.definition.lifetime.rust",
                    "entity.name.type.lifetime.rust",
                ],
                "settings": {
                    "foreground": colors.lifetime
                }
            },
            {
                "scope": [
                    "entity.name.function.macro.rust",
                    "variable.other.metavariable.name.rust",
                ],
                "settings": {
                    "foreground": colors.macro
                }
            },
            {
                "scope": [
                    "markup.bold.markdown",
                ],
                "settings": {
                    "fontStyle": "bold"
                }
            },
            {
                "scope": [
                    "markup.italic.markdown",
                ],
                "settings": {
                    "fontStyle": "italic"
                }
            }
        ],
        "semanticTokenColors": {
            "*.unused": {
                "foreground": "#222",
                "fontStyle": "italic"
            },
            "*.mutable": {
                "fontStyle": "underline"
            },

            "keyword": {
                "fontStyle": "bold"
            },
            "builtinType": colors.keyword,
            "boolean": colors.keyword,
            "keyword.async": colors.keyword,
            "keyword.injected": colors.keyword,

            "type.declaration": colors.declaration,
            "typeAlias.declaration": colors.declaration,
            "typeAlias.injected": colors.declaration,
            "struct.injected": colors.declaration,
            "class": {
                "foreground": colors.declaration,
                "fontStyle": "bold"
            },
            "enum": colors.declaration,
            "enum.injected": colors.declaration,

            "function.declaration": colors.function,
            "method.declaration": colors.function,

            "enumMember.static": colors.constant,
            "variable.static": colors.constant,
            "property.static": colors.constant,
            "function.static": colors.constant,
            "method.static": colors.constant,
            "class.static": colors.constant,

            "variable.constant": colors.type,
            "selfKeyword": {
                "foreground": colors.type,
                "fontStyle": "bold"
            },
            "selfTypeKeyword": {
                "foreground": colors.type,
                "fontStyle": "bold"
            },

            "typeParameter": colors.generic,
            "property": colors.property,
            "field": colors.property,
            "tomlTableKey": colors.property,
            "tomlArrayKey": colors.property,
            "enumMember": colors.property,
            "enumMember.injected": colors.property,

            "*.injected": colors.local,
            "parameter": colors.local,

            "interface": {
                "foreground": colors.interface,
                "fontStyle": "bold"
            },
            "class.interface": colors.interface,

            "string.injected": colors.string,

            "decorator": {
                "foreground": colors.decorator,
                "fontStyle": "bold"
            },
            "label": {
                "foreground": colors.decorator,
                "fontStyle": "bold"
            },

            "namespace.injected": colors.namespace,

            "lifetime": colors.lifetime,
            "macro.injected": colors.macro,

            "comment.injected": colors.comment,
        }
    };
    // END OF THEME


    // atomic write
    const tmp = THEME_PATH + ".tmp";
    fs.writeFileSync(tmp, JSON.stringify(theme, null, 2));
    fs.renameSync(tmp, THEME_PATH);
}

function activate() {
    buildTheme();

    code.workspace.onDidChangeConfiguration(event => {
        const wb = 'workbench';
        const ct = 'colorTheme';
        if (event.affectsConfiguration(wb + '.' + ct)) {
            const current = code.workspace.getConfiguration(
                wb
            ).get(ct);

            if (current === THEME_NAME) buildTheme();
        }
    });
}

function deactivate() { }

module.exports = { activate, deactivate };
