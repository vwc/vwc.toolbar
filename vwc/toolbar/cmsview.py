from five import grok

from plone.app.layout.navigation.interfaces import INavigationRoot

from vwc.toolbar.interfaces import IVWCToolbar


class CMSView(grok.View):
    grok.context(INavigationRoot)
    grok.layer(IVWCToolbar)
    grok.require('zope2.View')
    grok.name('cms')
