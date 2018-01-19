define(function(require, exports, module) {

    var $ = require("jquery");

    var Alpaca = $.alpaca;

    Alpaca.Fields.OUPCKEditorField = Alpaca.Fields.CKEditorField.extend(
    /**
     * @lends Alpaca.Fields.OUPCKEditorField.prototype
     */
    {
        toolbarOptions: {
            "config1" : {
                "toolbar": [
                    [
                        "Format",
                        "Font",
                        "FontSize"
                    ],
                    [
                        "Bold",
                        "Italic",
                        "Underline",
                        "StrikeThrough",
                        "-",
                        "Cut",
                        "Undo",
                        "Redo"
                    ]
                ]
            },
            "config2" : {
                "toolbar": [
                    [
                        "Font",
                        "Source"
                    ]
                ],
                "removeButtons": null,
                "stylesSet": [
                    {
                        "name": "Paragraph",
                        "element": "p"
                    },
                    {
                        "name": "OUP Custom Inline",
                        "element": "span",
                        "attributes": {
                            "class": "mine"
                        }
                    }
                ]
            }
        },

        /**
         * @see Alpaca.Fields.TextField#getFieldType
         */
        getFieldType: function() {
            return "oup-ckeditor-field";
        },

        /**
         * @see Alpaca.Fields.TextField#setup
         */
        setup: function()
        {
            if (this.options.ckeditor && this.toolbarOptions[this.options.ckeditor]) {
                this.options.ckeditor = this.toolbarOptions[this.options.ckeditor]
            }

            this.base();
        },

        afterRenderControl: function(model, callback)
        {
            var self = this;
            self.base(model, function(){
                callback();
            });
        },

        /**
         * @see Alpaca.Fields.TextField#handleValidate
         */
        handleValidate: function()
        {
            return this.base();
        }

        /* builder_helpers */
        ,

        /**
         * @see Alpaca.Fields.TextField#getTitle
         */
        getTitle: function() {
            return "OUP ckeditor Field";
        },

        /**
         * @see Alpaca.Fields.TextField#getDescription
         */
        getDescription: function() {
            return "Allow output markup rule overrides to ckeditor";
        }

        /* end_builder_helpers */
    });

    Alpaca.registerMessages({
        "noDependentField": "No local config found"
    });
    
    Alpaca.registerFieldClass("oup-ckeditor", Alpaca.Fields.OUPCKEditorField);

});

