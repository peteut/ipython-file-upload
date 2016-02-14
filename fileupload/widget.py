import os
import base64
import ipywidgets
import traitlets


def _module_name():
    return os.path.splitext(os.path.basename(__file__))[0]


def _packet_name():
    return os.path.basename(os.path.dirname(__file__))


class FileUploadWidget(ipywidgets.DOMWidget):
    '''File Upload Widget.
    This widget provides file upload using `FileReader`.
    '''
    _view_static = os.path.abspath(
        os.path.join(os.path.dirname(__file__), 'static', _packet_name()))
    _view_name = traitlets.Unicode('FileUploadView', sync=True)
    _view_module = traitlets.Unicode(
        os.path.join('nbextensions', _packet_name(), _module_name()),
        sync=True)

    filename = traitlets.Unicode(help='Filename of `data`.', sync=True)
    data_base64 = traitlets.Unicode(help='File content, base64 encoded.',
                                    sync=True)
    data = traitlets.Bytes(help='File content.')

    def __init__(self, *args, **kwargs):
        super(FileUploadWidget, self).__init__(*args, **kwargs)
        self._dom_classes += ('widget_item', 'btn-group')

    def _data_base64_changed(self, *args):
        self.data = base64.b64decode(self.data_base64.split(',', 1)[1])
