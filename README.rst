IPython File Upload
===================

An IPython notebook widget to upload files, using FileReader_.

Installation
------------

Run ``pip install .`` in this directory.

Usage
-----

.. code-block:: python

    from IPython.display import display
    import fileupload

    upload_widget = fileupload.FileUploadWidget()
    display(upload_widget)


.. _FileReader: https://developer.mozilla.org/en-US/docs/Web/API/FileReader
