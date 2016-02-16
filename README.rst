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

    pip install -U git+https://github.com/peteut/ipython-file-upload#egg=fileupload

Usage
-----

.. code-block:: python

    from IPython.display import display
    import fileupload

    # Install Javascript
    fileupload.nbinstall()

    upload_widget = fileupload.FileUploadWidget()
    display(upload_widget)

Base64 data is synced to the ``data_base64``  member, decoded data can be
obtained from ``data``.
The name of the uploaded file is stored in ``filename``.

.. _FileReader: https://developer.mozilla.org/en-US/docs/Web/API/FileReader
