define([
    'jquery',
    'widgets/js/widget'
], function ($, widget) {

    'use strict';
    var FileUploadView = widget.DOMWidgetView.extend({
        render: function () {

            var $span = $('<span />')
            .text('Browse')
            .addClass('btn btn-default btn-file')
            .css('position', 'relative')
            .css('overflow', 'hidden')
            .appendTo(this.$el);

            var $input = $('<input />')
            .attr('type', 'file')
            .attr('id', 'fileupload')
            .css('position', 'absolute')
            .css('top', '0')
            .css('right', '0')
            .css('min-width', '100%')
            .css('min-height', '100%')
            .css('font-size', '100px')
            .css('text-align', 'right')
            .css('filter', 'alpha(opacity=0)')
            .css('opacity', '0')
            .css('outline', 'none')
            .css('background', 'white')
            .css('cursor', 'inherit')
            .css('display', 'block')
            .appendTo($span);

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
