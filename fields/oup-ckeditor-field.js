define(function (require, exports, module) {

    var $ = require("jquery");
    var Alpaca = require("alpaca");
    var OneTeam = require("oneteam");

    window.CKEDITOR.config.disableNativeSpellChecker = false;

    Alpaca.Fields.OUPCKEditorField = Alpaca.Fields.CKEditorField.extend(
        /**
         * @lends Alpaca.Fields.OUPCKEditorField.prototype
         */
        {
            toolbarOptions: {
                "config1": {
                    "toolbar": [
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
                    ],
                    "removeButtons": null,
                    "stylesSet": [{
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
                            "name": "OUP bulleted list",
                            "element": "ul",
                            "attributes": {
                                "class": "bullet"
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

                    ],
                    "cloudcms-image": {
                        "imagePickerType": "file-picker",
                        "hideUploadButton": true,
                        "imagePickerConfig": {
                            "rootContainerPath": "../../..",
                            "initialContainerPath": "../Image Library",
                        }
                    },
                    "cloudcms-link": {
                        "linkPickerType": "file-picker",
                        "hideUploadButton": true,
                        "linkPickerConfig": {
                            "rootContainerPath": "../../..",
                            "initialContainerPath": "../Document Library",
                        }
                    }
                },
                "config2": {
                    "height": 50,
                    "toolbar": [
                        [
                            "SpecialChar",
                            "Italic",
                            "Subscript",
                            "Superscript"
                        ]
                    ]
                },
                "config3": {
                    "height": 100,
                    "toolbar": [
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
                    ],
                    "removeButtons": null,
                    "stylesSet": [{
                            "name": "Paragraph",
                            "element": "p"
                        },
                        {
                            "name": "OUP bulleted list",
                            "element": "ul",
                            "attributes": {
                                "class": "bullet"
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
                    ],
                    "cloudcms-image": {
                        "imagePickerType": "file-picker",
                        "hideUploadButton": true,
                        "imagePickerConfig": {
                            "rootContainerPath": "../../..",
                            "initialContainerPath": "./"
                        },
                        "uploadPath": null
                    }
                },
                "config4": {
                    "toolbar": [
                        [
                            "Link",
                            "Unlink"
                        ]
                    ]
                },
                "config5": {
                    "height": 100,
                    "toolbar": [
                        [
                            "Format",
                            "-",
                            "Italic",
                            "SpecialChar",
                            "Subscript",
                            "Superscript",
                            "-",
                            "Link",
                            "Unlink",
                            "-",
                            "ShowBlocks",
                            "Styles"
                        ]
                    ],
                    "removeButtons": null,
                    "stylesSet": [{
                        "name": "callToAction",
                        "element": "p",
                        "attributes": {
                            "class": "callToAction"
                        }
                    }]
                },
                "config6": {
                    "toolbar": [
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
                            "Unlink",
                            "Anchor"
                        ],
                        [
                            "Table",
                            "HorizontalRule",
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
                            "Blockquote",
                            "-",
                            "JustifyLeft",
                            "JustifyCenter",
                            "JustifyRight",
                            "JustifyBlock"
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
                    ],
                    "removeButtons": null,
                    "stylesSet": [{
                            "name": "Paragraph",
                            "element": "p"
                        },
                        {
                            "name": "OUP bulleted list",
                            "element": "ul",
                            "attributes": {
                                "class": "bullet"
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
                    ],
                    "cloudcms-image": {
                        "imagePickerType": "file-picker",
                        "hideUploadButton": true,
                        "imagePickerConfig": {
                            "rootContainerPath": "../../..",
                            "initialContainerPath": "./"
                        },
                        "uploadPath": null
                    }
                },
                "config7": {
                    "height": 100,
                    "toolbar": [
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
                        ]
                    ],
                    "removeButtons": null,
                    "stylesSet": [{
                            "name": "Paragraph",
                            "element": "p"
                        },
                        {
                            "name": "OUP bulleted list",
                            "element": "ul",
                            "attributes": {
                                "class": "bullet"
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
                    ]
                },
                "config8": {
                    "toolbar": [
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
                    ],
                    "removeButtons": null,
                    "cloudcms-image": {
                        "imagePickerType": "file-picker",
                        "hideUploadButton": true,
                        "imagePickerConfig": {
                            "rootContainerPath": "../../..",
                            "initialContainerPath": "./"
                        },
                        "uploadPath": null
                    }
                }
            },

            /**
             * @see Alpaca.Fields.TextField#getFieldType
             */
            getFieldType: function () {
                return "oup-ckeditor-field";
            },

            /**
             * @see Alpaca.Fields.TextField#setup
             */
            setup: function () {

                if (this.options.ckeditor && this.toolbarOptions[this.options.ckeditor]) {
                    var type = this.options.ckeditor;
                    this.options.ckeditor = this.toolbarOptions[this.options.ckeditor];
                    if (type && type == "config5") {
                        this.options.ckeditor.format_tags = 'p;h4;pre';
                    } else if (type && (type == "config1" || type == "config6" || type == "config8")) {
                        this.options.ckeditor.format_tags = 'p;h2;h3;h4;pre';
                    } else {
                        this.options.ckeditor.format_tags = 'p;h2;h3;pre';
                    }
                }

                // TODO: REMOVE BUTTON BASED ON USER TEAM
                if (this.isUserInTeam("academic-editors"))
                {
                    this.options.ckeditor.removeButtons = 'Source';
                }
                

                this.base();
            },

            /**
             * Check if user has role
             * @param {string} role 
             */
            isUserInTeam: function(role)
            {
                var self = this;
                var observableHolder = self.top().options.observableHolder;

                var teamKeys = [];

                var project = observableHolder.observable("project").get();
                if (project)
                {
                    teamKeys = observableHolder.observable("projectUserTeamKeys").get();
                }
                else
                {
                    teamKeys = observableHolder.observable("oneteamUserTeamKeys").get();
                }
    
                if (!teamKeys)
                {
                    return false;
                }
    
                var x = teamKeys.indexOf(role);
                if (x > -1) {
                    return true;
                }
    
                return false;
            },

            afterRenderControl: function (model, callback) {
                var self = this;
                self.base(model, function () {
                    callback();
                });
            },

            /**
             * @see Alpaca.Fields.TextField#handleValidate
             */
            handleValidate: function () {
                    return this.base();
                }

                /* builder_helpers */
                ,

            /**
             * @see Alpaca.Fields.TextField#getTitle
             */
            getTitle: function () {
                return "OUP ckeditor Field";
            },

            /**
             * @see Alpaca.Fields.TextField#getDescription
             */
            getDescription: function () {
                return "Allow output markup rule overrides to ckeditor";
            },

            /* end_builder_helpers */
        });



    Alpaca.registerMessages({
        "noDependentField": "No local config found"
    });
    
    //window.CKEDITOR.config.extraPlugins+=",devtools";

    window.CKEDITOR.on('dialogDefinition', function (ev) {
        var dialogName = ev.data.name;
        var dialogDefinition = ev.data.definition;
        ev.editor.getCommand( 'table' ).allowedContent = "table{width,height}[align,border,cellpadding,cellspacing,summary];caption tbody thead tfoot;th td tr;table[id,dir](*){*}";
        if (dialogName == "table") {
            var infoTab = dialogDefinition.getContents("info");            
            infoTab.get("txtWidth")["default"] = "";
            infoTab.get("txtCellSpace")["default"] = "";
            infoTab.get("txtCellPad")["default"] = "";
            infoTab.get("txtBorder")["default"] = "";

            infoTab.get("selHeaders")["items"].pop();
            infoTab.get("selHeaders")["items"].pop();

            var advancedTab = dialogDefinition.getContents("advanced");
            advancedTab.get("advCSSClasses")["default"] = "";
        }
    });

    Alpaca.registerFieldClass("oup-ckeditor", Alpaca.Fields.OUPCKEditorField);

});