import os
import sys

# Add the project's root directory to the path
sys.path.insert(0, os.path.abspath('../SCD_Assignment-2'))

# Project information
project = 'SCD_Assignment-2'
author = 'Talal'
release = '1.0.0'

# General configuration
extensions = [
    'sphinx.ext.autodoc',
    'sphinx.ext.viewcode',
    'sphinx.ext.napoleon',
]

# Paths for custom static files
html_static_path = ['_static']

# Theme options
html_theme = 'sphinx_rtd_theme'
html_title = 'Docx'
