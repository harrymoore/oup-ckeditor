define(function (require, exports, module) {

    return {
        actionH4: function (editor) {
            var newElement = new CKEDITOR.dom.element("h4");
            newElement.setText(editor.getSelection().getSelectedText());
            editor.insertElement(newElement);
        }
    };

});