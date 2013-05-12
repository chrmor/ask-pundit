define(["dojo/_base/declare", 
        "dojo/text!ask/tmpl/nbTab/ACSubject.html", 
        "bootstrap/Tooltip",
        "dijit/_WidgetBase", 
        "dijit/_TemplatedMixin"], 
    function(declare, ACSubjectTemplate, BTooltip, _WidgetBase, _TemplatedMixin) {

    return declare("ask.ACAnnotationSubject", [_WidgetBase, _TemplatedMixin], {
        notebookId: '',
        annotationId: '',
        createdBy: '',
        createdAt: '',
        pageContext: '',
        pageContext_short: '',
        pageContext_short_length: 20,

        uri: '',
        subject_enc: '',
        type: 'default',
        templateString: ACSubjectTemplate,
        postMixInProperties: function() {
            var self = this;
            self.inherited(arguments);
            self.subject_enc = BASE64.encode(self.uri);
            
            // Page context: show the first part of the URL
            var start = 0;
            if (self.pageContext.match(/^http:\/\/www\./))
                start = 11; 
            else if (self.pageContext.match(/^http:\/\//))
                start = 7;
            self.pageContext_short = self.pageContext.substr(start, start + self.pageContext_short_length) + " ..";
            
            var u = this.uri,
                c,
                nbid = 'nb-'+self.notebookId,
                anrd = 'ite-rdf-'+self.annotationId;
            
            if ((nbid in ASK._cache) && (anrd in ASK._cache[nbid]))
                c = ASK._cache[nbid][anrd];
            else {
                console.log('Subject ouch?');
                return;
            }
            
            if (self._inTypesArray(c[u][ASK.ns.items.type], ASK.ns.fragments.text)) {
                console.log('We haz a text fragment!');
                self.type = 'textfragment';
            }
        
            self.label = c[u][ASK.ns.items.label][0].value,
            label_short = this.label.length > 50 ? this.label.substr(0, self.titleChars)+' ..' : this.label,
            self.depic = (ASK.ns.items.image in c[u]) ? c[u][ASK.ns.items.image][0].value : 'http://placehold.it/62x80/ffcc00';
            if (self.depic === "http://api.freebase.com/api/trans/image_thumb/guid/")
                self.depic = 'http://placehold.it/320x400/cc00cc';
        
            if (typeof(c[u][ASK.ns.items.description]) !== "undefined")
                self.desc = c[u][ASK.ns.items.description][0].value;

        },
        _inTypesArray: function(a, t) {
            for (var l=a.length; l--;)
                if (a[l].type === "literal" && a[l].value === t)
                    return l;
            return -1;
        },
        startup: function() {
        }
    });
});