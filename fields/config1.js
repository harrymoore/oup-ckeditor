CKEDITOR.editorConfig = function (config) {
    config["toolbar"] = [
        [
            "Cut",
            "Copy",
            "PasteText",
            "-",
            "Undo",
            "Redo"
        ],
        [
            "Link",
            "Unlink",
            "Anchor",
            "cloudcms-link"
        ],
        [
            "Table",
            "SpecialChar"
        ],
        [
            "Maximize",
            "ShowBlocks",
            "Source",
            "Preview"
        ],
        [
            "Italic",
            "Strike",
            "Subscript",
            "Superscript",
            "-",
            "RemoveFormat"
        ],
        [
            "NumberedList",
            "BulletedList",
            "-",
            "Outdent",
            "Indent",
            "Blockquote"
        ],
        [
            "Format",
            "Styles"
        ],
        [
            "cloudcms-image"
        ],
        [
            "cloudcms-iframe"
        ]
    ];
    config["removeButtons"] = null;
    config["stylesSet"] = [{
            "name": "Paragraph",
            "element": "p"
        },
        {
            "name": "OUP Notice",
            "element": "div",
            "attributes": {
                "class": "notice"
            }
        },
        {
            "name": "OUP unbulleted list",
            "element": "ul",
            "attributes": {
                "class": "unbulleted"
            }
        },
        {
            "name": "OUP horizontal list",
            "element": "ul",
            "attributes": {
                "class": "inline"
            }
        },
        {
            "name": "OUP floatLeft Image",
            "element": "img",
            "attributes": {
                "class": "floatLeft"
            }
        },
        {
            "name": "OUP floatRight Image",
            "element": "img",
            "attributes": {
                "class": "floatRight"
            }
        }

    ];
    config["cloudcms-image"] = {
        "imagePickerType": "file-picker",
        "hideUploadButton": true,
        "imagePickerConfig": {
            "rootContainerPath": "../../..",
            "initialContainerPath": "../Image Library",
        }
    };
    config["cloudcms-link"] = {
        "linkPickerType": "file-picker",
        "hideUploadButton": true,
        "linkPickerConfig": {
            "rootContainerPath": "../../..",
            "initialContainerPath": "../Document Library",
        }
    };
}