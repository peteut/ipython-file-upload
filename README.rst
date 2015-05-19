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

Base64 data is synced to the ``data``  member, decoded data can be
obtained with the ``decoded_data`` member.

.. _FileReader: https://developer.mozilla.org/en-US/docs/Web/API/FileReader
