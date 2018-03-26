IPython File Upload
===================

.. image:: https://img.shields.io/pypi/v/fileupload.svg
    :target: https://pypi.python.org/pypi/fileupload/
    :alt: Latest Version

.. image:: https://img.shields.io/pypi/dm/fileupload.svg
    :target: https://pypi.python.org/pypi/fileupload/
    :alt: Downloads

An IPython notebook widget to upload files, using FileReader_.

Installation
------------

Install using pip::

    pip install fileupload

Install JavaScript::

    jupyter nbextension install [--user] --py fileupload

Enable the extension::

    jupyter nbextension enable [--user] --py fileupload

Usage
-----

.. code-block:: python

    import io
    from IPython.display import display
    import fileupload

    def _upload():

        _upload_widget = fileupload.FileUploadWidget()

        def _cb(change):
            decoded = io.StringIO(change['owner'].data.decode('utf-8'))
            filename = change['owner'].filename
            print('Uploaded `{}` ({:.2f} kB)'.format(
                filename, len(decoded.read()) / 2 **10))

        _upload_widget.observe(_cb, names='data')
        display(_upload_widget)

    _upload()


Base64 data is synced to the ``data_base64``  member, decoded data can be
obtained from ``data``.
The name of the uploaded file is stored in ``filename``.

Changelog
---------

Refer to Changelog_.

.. _FileReader: https://developer.mozilla.org/en-US/docs/Web/API/FileReader
.. _Changelog: ./ChangeLog
