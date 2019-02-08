define(function (require, exports, module) {

    var CKEDITOR = window.CKEDITOR;

    return {
        registerPlugin: function (pluginId) {
            // var pluginPath = "../../../_modules/wordcount/plugins/ckeditor/wordcount/";
            // var moduleId = module.uri.match(/^.+(_modules[^\/]+)\/.*/)[1];
            // '../../../' + moduleId + '/oup-ckeditor-dev/plugins/icons/' + pluginName + '.png'
            //CKEDITOR.plugins.addExternal(pluginId, moduleId, 'plugin.js');

            if (CKEDITOR.config.extraPlugins.length > 0) {
                CKEDITOR.config.extraPlugins += ",";
            }
            CKEDITOR.config.extraPlugins += pluginId;
        }
    };
});