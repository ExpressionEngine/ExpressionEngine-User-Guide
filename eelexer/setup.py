"""
Install and setup ExpressionEngine highlighting for Pygments.
"""

from setuptools import setup

entry_points = """
[pygments.lexers]
eelexer = eelexer.eelexer:ExpressionEngineLexer
"""

setup(
    name         = 'pyeelexer',
    version      = '0.2.1',
    description  = __doc__,
    author       = "EllisLab, Inc.",
    packages     = ['eelexer'],
    entry_points = entry_points
)