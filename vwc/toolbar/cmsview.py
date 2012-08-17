from five import grok

from plone.app.layout.navigation.interfaces import INavigationRoot


class CMSView(grok.View):
    grok.context(INavigationRoot)
    grok.require('zope2.View')
    grok.name('cms')
