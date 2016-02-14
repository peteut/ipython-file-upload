from .widget import FileUploadWidget  # noqa


def nbinstall(overwrite=False, user=True):
    '''
    Installs the Javascript dependencies.

    Parameters
    ----------
    overwrite : bool, optional
        If True, always install the files,
        regardless of what may already be installed.
    user : bool, optional
        Whether to install to the user's nbextensions directory.
    '''
    import os
    try:
        from notebook import install_nbextension
    except ImportError:
        from IPython.html.nbextensions import install_nbextension
    from .widget import _packet_name

    view_static = os.path.abspath(
        os.path.join(os.path.dirname(__file__), 'static', _packet_name()))
    install_nbextension(view_static, user=user, overwrite=overwrite, verbose=0)
