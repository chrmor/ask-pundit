define([
        "dojo/_base/declare", 
        "dojo/_base/lang",
        "dojo/text!ask/tmpl/nbTab/ACAnnotation.html", 
        "ask/ACAnnotationSubject",
        "ask/ACAnnotationPredicate",
        "ask/ACAnnotationObject",
        "dijit/_WidgetBase", 
        "dijit/_TemplatedMixin"
    ], function(
        declare, lang, ACAnnotationTemplate, 
        ACAnnotationSubject, ACAnnotationPredicate, ACAnnotationObject,
        _WidgetBase, _TemplatedMixin
    ) {

    return declare("ask.ACAnnotation", [_WidgetBase, _TemplatedMixin], {
        notebookId: '',
        annotationId: '',
        createdBy: '',
        createdAt: '',
        pageContext: '',
        isOwner: false,
        body: '',
        itemsURIs: [],
        templateString: ACAnnotationTemplate,
        startup: function() {
            var self = this;
            
            self.loadAnnotationItems(self.annotationId);
        },

        loadAnnotationItems: function(annotationId) {
            var self = this,
                def, url;
                                
            // Use authenticated API if we're owning the notebook
            if (self.isOwner) {
                def = ASK.requester;
                url = lang.replace(ASK.ns.asAnnItems, { id: annotationId });
            } else {
                def = request;
                url = lang.replace(ASK.ns.asOpenAnnItems, { id: annotationId });
            }
            
            def.get(url, {
                handleAs: "json",
                headers: { "Accept": "application/json" }
            }).then(
                function(data){
                    
                    ASK._cache['nb-'+self.notebookId]['ite-rdf-'+annotationId] = data;
                    self.loadAnnotationContent({
                        annotationId: self.annotationId,
                        createdBy: self.createdBy,
                        createdAt: self.createdAt,
                        pageContext: self.pageContext
                    });
                    
                }, 
                function(error) {
                    console.log('error :|');
                }
            );
            
        }, // loadAnnotationItems()
        
        // Will build the main annotation content:
        // grouped by annotation id, grouped by subject, grouped by predicate
        loadAnnotationContent: function(annotationMeta) {
            var self = this,
                def, url,
                annotationId = annotationMeta.annotationId;
            
            // Use authenticated API if we're owning the notebook
            if (self.isOwner) {
                def = ASK.requester;
                url = lang.replace(ASK.ns.asAnnGraph, { id: annotationId });
            } else {
                def = request;
                url = lang.replace(ASK.ns.asOpenAnnGraph, { id: annotationId });
            }

            self.itemsURIs[annotationId] = [];
        
            def.get(url, {
                handleAs: "json",
                headers: { "Accept": "application/json" }
            }).then(
                function(data){

                    for (var subject in data) {
                                            
                        var sub = new ACAnnotationSubject({
                            createdBy: annotationMeta.createdBy,
                            createdAt: annotationMeta.createdAt,
                            pageContext: annotationMeta.pageContext,
                            uri: subject,
                            annotationId: annotationId,
                            notebookId: self.notebookId
                        }).placeAt(dojo.query('.askACAnn.annotation-'+annotationId)[0]);
                                        
                        for (var predicate in data[subject]) {
                        
                            var pre = new ACAnnotationPredicate({
                                notebookId: self.notebookId,
                                annotationId: annotationId,
                                subject_enc: BASE64.encode(subject),
                                uri: predicate,
                                objects_num: data[subject][predicate].length
                            }).placeAt(dojo.query('.askACAnn.annotation-'+annotationId+' [data-askreplace="predicates-'+annotationId+'-'+BASE64.encode(subject)+'"]')[0]);
                            pre.startup();

                            for (var object in data[subject][predicate]) {

                                var object_value = data[subject][predicate][object].value,
                                    sel = '.askACAnn.annotation-'+annotationId+
                                        ' [data-askreplace="objects-'+annotationId+'-'+BASE64.encode(subject)+
                                        '-'+BASE64.encode(predicate)+'"]';

                                var obj = new ACAnnotationObject({
                                    notebookId: self.notebookId,
                                    annotationId: annotationId,
                                    uri: object_value,
                                    uri_enc: BASE64.encode(object_value)
                                }).placeAt(dojo.query(sel)[0]);
                            
                            } // for object in data[subject][predicate]
                        } // for predicate in data[subject]
                    } // for subject and data                
                }, 
                function(error) {
                    console.log('error :|');
                }
            ); // then
            
        }, // loadAnnotationContent()
        
        
	});
});