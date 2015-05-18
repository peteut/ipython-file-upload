define([
    'jquery',
    'widgets/js/widget'
], function ($, widget) {

    'use strict';
    var FileUploadView = widget.DOMWidgetView.extend({
        render: function () {

            var $input = $('<input />')
            .attr('type', 'file')
            .attr('id', 'fileupload')
            .appendTo(this.$el);

            var that = this;
            $input.on(
                'change',
                function handleUpload (ev) {

                    var file = ev.target.files[0];
                    if (file) {
                        var fileReader = new FileReader();
                        fileReader.onload = function () {

                            that.model.set('data', fileReader.result);
                            that.touch();
                        };
                        fileReader.readAsDataURL(file);
                    }
                    else {
                        that.send({ event: 'Unable to open file.' });
                    }
                    that.model.set('filename', file.name);
                    that.touch();
                }
            );
        }
    });

    return { FileUploadView: FileUploadView };
});
