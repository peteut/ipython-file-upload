define([
    'jquery',
    'widgets/js/widget'
], function ($, widget) {

    'use strict';
    var FileUploadView = widget.DOMWidgetView.extend({
        render: function () {

            var $label = $('<label />')
            .text('Browse')
            .addClass('btn btn-default')
            .attr('for', 'fileupload')
            .appendTo(this.$el);

            var $input = $('<input />')
            .attr('type', 'file')
            .attr('id', 'fileupload')
            .css('display', 'none')
            .appendTo($label);

            var that = this;
            $input.on(
                'change',
                function handleUpload (ev) {

                    var file = ev.target.files[0];
                    if (file) {
                        var fileReader = new FileReader();
                        fileReader.onload = function () {

                            that.model.set('data_base64', fileReader.result);
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
