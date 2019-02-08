CKEDITOR.editorConfig = function (config) {
    config["toolbar"] = [
        [
            "Format"
        ],
        [
            "SpecialChar",
            "Subscript",
            "Superscript"
        ],
        [
            "Link",
            "Unlink"
        ],
        [
            "cloudcms-image"
        ]
    ];
    config["removeButtons"] = null;
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