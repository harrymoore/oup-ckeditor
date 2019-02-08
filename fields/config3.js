CKEDITOR.editorConfig = function (config) {
    config.height = 100;
    config.toolbar = [
        [
            "Cut",
            "Copy",
            "Paste",
            "-",
            "Undo",
            "Redo"
        ],
        [
            "Link",
            "Unlink"
        ],
        [
            "Italic",
            "BulletedList",
            "Strike",
            "Subscript",
            "Superscript",
            "SpecialChar",
            "-",
            "RemoveFormat",
            "-",
            "ShowBlocks"
        ],
        [
            "Format",
            "Styles"
        ],
        [
            "cloudcms-image"
        ],
    ];
    config.removeButtons = null;
    config.stylesSet = [{
            "name": "Paragraph",
            "element": "p"
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
            "initialContainerPath": "./"
        },
        "uploadPath": null
    };
}