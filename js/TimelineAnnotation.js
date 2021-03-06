define(["dojo/_base/declare", 
        "dojo/on", 
        "dojo/date/stamp",
        "ask/TimelineAnnotationTag",
        "dojo/text!ask/tmpl/TimelineAnnotationTemplate.html", 
        "dijit/_WidgetBase", 
        "dijit/_TemplatedMixin"], 
    function(declare, on, dateStamp, 
        TimelineAnnotationTag, timelineAnnotationTemplate,
        _WidgetBase, _TemplatedMixin) {
	
	return declare("ask.TimelineAnnotation", [_WidgetBase, _TemplatedMixin], {
        notebookId: '',
        subject: '',
        subject_enc: '',
        annotation: '',
        parentTimeline: '',

        colorClass: '',
        colorClassPrefix: 'color-',

        annContent: '',
        annDate: '',
        annDay: '',
        annQuotationFrom: '',
        annQuotationFromURI: '',
        annDepiction: '',
        annSource: '',
		annWebPage: '',
        
       //  tagsWidgets: [],
        
        templateString: timelineAnnotationTemplate,
        postMixInProperties: function() {
            var self = this,
                items = self.parentTimeline.notebookRawData.items,
                _desc = "http://purl.org/dc/elements/1.1/description",
                _date = "http://purl.org/dc/elements/1.1/date",
                _quotationFrom = "http://purl.org/spar/cito/cites",
                _quotationFrom2 = "http://purl.org/spar/cito/includesQuotationFrom",
                _label = "http://www.w3.org/2000/01/rdf-schema#label",
                _depic = "http://xmlns.com/foaf/0.1/depiction",
                _source = "http://purl.org/dc/elements/1.1/source",
				_pageContext = "http://purl.org/pundit/ont/ao#hasPageContext",
                _tag = "http://xmlns.com/foaf/0.1/primaryTopic",
                foo;
            
            self.inherited(arguments);
            
            self.subject_enc = BASE64.encode(self.subject);
            
            // TODO: validate all of these items for missing [0].value
            self.annContent = items[self.subject][_desc][0].value;
			self.annWebPage = items[self.subject][_pageContext][0].value;

            self.annDate = self.annotation[_date][0].value;
            self.annDay = dateStamp.fromISOString(self.annDate).getDate();

            // if there's a source, use it
            if (_source in self.annotation) {
                foo = self.annotation[_source][0].value;
                if (foo in items)
                    self.annSource = items[foo][_label][0].value;
            }
            
            foo = null;
            if (_quotationFrom in self.annotation)
                foo = self.annotation[_quotationFrom][0].value;
            else if (_quotationFrom2 in self.annotation)
                foo = self.annotation[_quotationFrom2][0].value;
            
            if (foo) {    
                self.colorClass = self.colorClassPrefix + self.parentTimeline.getColor(foo);
                self.annQuotationFrom = items[foo][_label][0].value;
                self.annQuotationFromURI = foo;
                // From the URI of the quoted person, get also the color
                self.annDepiction = items[foo][_depic][0].value;
            }
                        
            // Add tags
            if (_tag in self.annotation) {
                foo = self.annotation[_tag];
                
                for (var t = foo.length; t--;) {
                    
                    self.parentTimeline.addTag(foo[t].value);
                    var bar = new TimelineAnnotationTag({
                        notebookId: self.notebookId,
                        uri: foo[t].value,
                        parentTimeline: self.parentTimeline
                    });
                    if (typeof(self['tagsWidgets']) === 'undefined')
                        self.tagsWidgets = [];
                    
                    self.tagsWidgets.push(bar);
                    
                    console.log('found tag!', self.annQuotationFrom, self.annDate, foo[t].value, self.tagsWidgets);
                    
                } // for t = foo.length
            } else {
                console.log('NO TAGS HERE', self.annQuotationFrom, self.annDate, self.tagsWidgets);
            } // if _tag
            
        },
        
        startup: function() {
            var self = this;
            self.inherited(arguments);
            
            // Add tags to the annotation
            for (var t in self.tagsWidgets) {
                self.tagsWidgets[t].placeAt(dojo.query('.ti-ann-item[data-annotation="'+self.subject_enc+'"] .ti-ann-content-tags')[0]);
            }
            

            // Close annotation icon
            on(dojo.query('.ti-ann-item[data-annotation="'+self.subject_enc+'"] .ti-ann-close'), 'click', function(e) {
                dojo.query('.ti-ann-item[data-annotation="'+self.subject_enc+'"]').addClass('collapsed');
            });

            // Open annotation box
            on(dojo.query('.box[data-target-annotation="'+self.subject_enc+'"]'), 'click', function(e) {
                var foo = dojo.query('.ti-ann-item[data-annotation="'+self.subject_enc+'"]');
                
                // TODO: dojo .hasClass() ?
                if (foo[0].className.match(/collapsed/) !== null) {
                    dojo.query('.ti-ann-item').addClass('collapsed');
                    foo.removeClass('collapsed');
                } else {
                    foo.addClass('collapsed');
                }
            });
            
        }
	});

});