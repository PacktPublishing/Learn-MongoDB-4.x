"""
WSGI config for biglittle_dj project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/2.2/howto/deployment/wsgi/
"""

import os,sys
from django.conf import settings
from django.core.wsgi import get_wsgi_application
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'biglittle_dj.settings')
# only add this if you also have Python set to a local path
sys.path.append('/home/ked/.local/lib/python3.6/site-packages')
sys.path.append(settings.SRC_DIR)
application = get_wsgi_application()
