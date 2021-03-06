/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    _$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (typeof _$jscoverage !== 'object') {
  _$jscoverage = {};
}
if (! _$jscoverage['BaseComponent.js']) {
  _$jscoverage['BaseComponent.js'] = [];
  _$jscoverage['BaseComponent.js'][20] = 0;
  _$jscoverage['BaseComponent.js'][28] = 0;
  _$jscoverage['BaseComponent.js'][57] = 0;
  _$jscoverage['BaseComponent.js'][61] = 0;
  _$jscoverage['BaseComponent.js'][62] = 0;
  _$jscoverage['BaseComponent.js'][65] = 0;
  _$jscoverage['BaseComponent.js'][66] = 0;
  _$jscoverage['BaseComponent.js'][67] = 0;
  _$jscoverage['BaseComponent.js'][71] = 0;
  _$jscoverage['BaseComponent.js'][73] = 0;
  _$jscoverage['BaseComponent.js'][74] = 0;
  _$jscoverage['BaseComponent.js'][75] = 0;
  _$jscoverage['BaseComponent.js'][79] = 0;
  _$jscoverage['BaseComponent.js'][80] = 0;
  _$jscoverage['BaseComponent.js'][82] = 0;
  _$jscoverage['BaseComponent.js'][98] = 0;
  _$jscoverage['BaseComponent.js'][101] = 0;
  _$jscoverage['BaseComponent.js'][102] = 0;
  _$jscoverage['BaseComponent.js'][104] = 0;
  _$jscoverage['BaseComponent.js'][106] = 0;
  _$jscoverage['BaseComponent.js'][111] = 0;
  _$jscoverage['BaseComponent.js'][112] = 0;
  _$jscoverage['BaseComponent.js'][116] = 0;
  _$jscoverage['BaseComponent.js'][117] = 0;
  _$jscoverage['BaseComponent.js'][118] = 0;
  _$jscoverage['BaseComponent.js'][119] = 0;
  _$jscoverage['BaseComponent.js'][126] = 0;
  _$jscoverage['BaseComponent.js'][127] = 0;
  _$jscoverage['BaseComponent.js'][129] = 0;
  _$jscoverage['BaseComponent.js'][130] = 0;
  _$jscoverage['BaseComponent.js'][145] = 0;
  _$jscoverage['BaseComponent.js'][148] = 0;
  _$jscoverage['BaseComponent.js'][149] = 0;
  _$jscoverage['BaseComponent.js'][151] = 0;
  _$jscoverage['BaseComponent.js'][153] = 0;
  _$jscoverage['BaseComponent.js'][154] = 0;
  _$jscoverage['BaseComponent.js'][155] = 0;
  _$jscoverage['BaseComponent.js'][156] = 0;
  _$jscoverage['BaseComponent.js'][157] = 0;
  _$jscoverage['BaseComponent.js'][158] = 0;
  _$jscoverage['BaseComponent.js'][160] = 0;
  _$jscoverage['BaseComponent.js'][161] = 0;
}
_$jscoverage['BaseComponent.js'].source = ["<span class=\"c\">/**</span>","<span class=\"c\">    Provides common facilities used by other pundit</span>","<span class=\"c\">    components, such as callback creation, initialization, logging, etc.</span>","<span class=\"c\">    </span>","<span class=\"c\">    Every component extending this class will be able to use these methods,</span>","<span class=\"c\">    and the options passed to the constructor.</span>","<span class=\"c\">    </span>","<span class=\"c\">    If the component has an .opts field, it will be used as defaults for the</span>","<span class=\"c\">    component, overwritable when calling new</span>","<span class=\"c\">    @class pundit.baseComponent</span>","<span class=\"c\">    @module pundit</span>","<span class=\"c\">    @constructor</span>","<span class=\"c\">    @example</span>","<span class=\"c\">        var x = new pundit.BaseComponent({</span>","<span class=\"c\">                debug: true,</span>","<span class=\"c\">                libName: 'myComponent'</span>","<span class=\"c\">            });</span>","<span class=\"c\">    @param options {object} See object properties</span>","<span class=\"c\">**/</span>","define<span class=\"k\">([</span>","        <span class=\"s\">\"dojo/_base/declare\"</span>","    <span class=\"k\">],</span> ","        ","    <span class=\"k\">function</span><span class=\"k\">(</span>","        declare","    <span class=\"k\">)</span> <span class=\"k\">{</span>","","    <span class=\"k\">return</span> declare<span class=\"k\">(</span><span class=\"s\">\"pundit.BaseComponent\"</span><span class=\"k\">,</span> <span class=\"k\">[],</span> <span class=\"k\">{</span>","","    defaultOpts<span class=\"k\">:</span> <span class=\"k\">{</span>","        <span class=\"c\">/**</span>","<span class=\"c\">            Enables debug messages for the component</span>","<span class=\"c\">            @property debug</span>","<span class=\"c\">            @type Boolean</span>","<span class=\"c\">            @default false</span>","<span class=\"c\">        **/</span>","        debug<span class=\"k\">:</span> <span class=\"k\">false</span><span class=\"k\">,</span>","","        <span class=\"c\">/**</span>","<span class=\"c\">            Name of the component, shown in debug messages</span>","<span class=\"c\">            @property libName</span>","<span class=\"c\">            @type String</span>","<span class=\"c\">            @default this.declaredClass</span>","<span class=\"c\">        **/</span>","        libName<span class=\"k\">:</span> <span class=\"s\">''</span>","    <span class=\"k\">}</span><span class=\"k\">,</span>","","    <span class=\"c\">/**</span>","<span class=\"c\">    * Initializes the component</span>","<span class=\"c\">    * @method constructor</span>","<span class=\"c\">    * @param options {object}</span>","<span class=\"c\">    * @param options.debug {boolean} wether or not to activate debug mode for the component</span>","<span class=\"c\">    * @param options.libName {string} component name visualized in debug messages. If not </span>","<span class=\"c\">    * assigned explicitly dojo's 'declaredClass' field will be used.</span>","<span class=\"c\">    */</span>","    constructor<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">(</span>options<span class=\"k\">)</span> <span class=\"k\">{</span>","        <span class=\"k\">var</span> self <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">,</span> ","            i<span class=\"k\">;</span>","","        <span class=\"c\">// If the class extending us doesnt have an .opts field, create it</span>","        <span class=\"k\">if</span> <span class=\"k\">(</span><span class=\"k\">typeof</span><span class=\"k\">(</span>self<span class=\"k\">.</span>opts<span class=\"k\">)</span> <span class=\"k\">===</span> <span class=\"s\">'undefined'</span><span class=\"k\">)</span>","            self<span class=\"k\">.</span>opts <span class=\"k\">=</span> <span class=\"k\">{}</span><span class=\"k\">;</span>","","        <span class=\"c\">// Copy in the baseComponent defaults, if the given .opts doesnt have it</span>","        <span class=\"k\">for</span> <span class=\"k\">(</span>i <span class=\"k\">in</span> self<span class=\"k\">.</span>defaultOpts<span class=\"k\">)</span> ","            <span class=\"k\">if</span> <span class=\"k\">(</span><span class=\"k\">typeof</span><span class=\"k\">(</span>self<span class=\"k\">.</span>opts<span class=\"k\">[</span>i<span class=\"k\">])</span> <span class=\"k\">===</span> <span class=\"s\">'undefined'</span><span class=\"k\">)</span>","                self<span class=\"k\">.</span>opts<span class=\"k\">[</span>i<span class=\"k\">]</span> <span class=\"k\">=</span> self<span class=\"k\">.</span>defaultOpts<span class=\"k\">[</span>i<span class=\"k\">];</span>","","        <span class=\"c\">// If _PUNDIT, _PUNDIT.config and _PUNDIT.config.modules.THISMODULENAME are</span>","        <span class=\"c\">// defined, get that configuration and initialize the component</span>","        <span class=\"k\">if</span> <span class=\"k\">(</span><span class=\"k\">typeof</span><span class=\"k\">(</span>_PUNDIT<span class=\"k\">)</span> <span class=\"k\">!==</span> <span class=\"s\">'undefined'</span> <span class=\"k\">&amp;&amp;</span> <span class=\"k\">typeof</span><span class=\"k\">(</span>_PUNDIT<span class=\"k\">.</span>config<span class=\"k\">)</span> <span class=\"k\">!==</span> <span class=\"s\">'undefined'</span>","                <span class=\"k\">&amp;&amp;</span> <span class=\"k\">typeof</span><span class=\"k\">(</span>_PUNDIT<span class=\"k\">.</span>config<span class=\"k\">.</span>modules<span class=\"k\">[</span>self<span class=\"k\">.</span>declaredClass<span class=\"k\">])</span> <span class=\"k\">!==</span> <span class=\"s\">'undefined'</span><span class=\"k\">)</span> <span class=\"k\">{</span>","            <span class=\"k\">var</span> configOpts <span class=\"k\">=</span> _PUNDIT<span class=\"k\">.</span>config<span class=\"k\">.</span>modules<span class=\"k\">[</span>self<span class=\"k\">.</span>declaredClass<span class=\"k\">];</span>","            <span class=\"k\">for</span> <span class=\"k\">(</span>i <span class=\"k\">in</span> configOpts<span class=\"k\">)</span> ","                self<span class=\"k\">.</span>opts<span class=\"k\">[</span>i<span class=\"k\">]</span> <span class=\"k\">=</span> configOpts<span class=\"k\">[</span>i<span class=\"k\">];</span>","        <span class=\"k\">}</span>","","        <span class=\"c\">// Finally overwrite any given field coming from options parameter</span>","        <span class=\"k\">for</span> <span class=\"k\">(</span>i <span class=\"k\">in</span> options<span class=\"k\">)</span> ","            self<span class=\"k\">.</span>opts<span class=\"k\">[</span>i<span class=\"k\">]</span> <span class=\"k\">=</span> options<span class=\"k\">[</span>i<span class=\"k\">];</span>","        ","        self<span class=\"k\">.</span>log<span class=\"k\">(</span><span class=\"s\">'BaseConstructor built opts for '</span><span class=\"k\">+</span>self<span class=\"k\">.</span>declaredClass<span class=\"k\">);</span>","","    <span class=\"k\">}</span><span class=\"k\">,</span> <span class=\"c\">// constructor</span>","","    <span class=\"c\">/**</span>","<span class=\"c\">    * @method createCallback</span>","<span class=\"c\">    * @description Creates one or more callbacks for the component. For each 'name' passed</span>","<span class=\"c\">    * as parameter two methods will be created:&lt;br&gt;</span>","<span class=\"c\">    * onName(f) (first letter is automatically capitalized): used by other components to</span>","<span class=\"c\">    * subscribe a function to be called when the event hits. Optional parameters. &lt;br&gt;</span>","<span class=\"c\">    * fireOnName(data) (first letter is automatically capitalized): fires the event </span>","<span class=\"c\">    * calling all of the subscribed callbacks passing data as parameter. This </span>","<span class=\"c\">    * function must be called by the component when needed.</span>","<span class=\"c\">    * @param names {string or array of strings} Names of the callbacks to be created.</span>","<span class=\"c\">    */</span>","    createCallback<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">(</span>name<span class=\"k\">)</span> <span class=\"k\">{</span>","        <span class=\"k\">var</span> self <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">;</span>","","        <span class=\"c\">// If it's not an array already, create one</span>","        <span class=\"k\">if</span> <span class=\"k\">(</span><span class=\"k\">typeof</span><span class=\"k\">(</span>name<span class=\"k\">)</span> <span class=\"k\">===</span> <span class=\"s\">'string'</span><span class=\"k\">)</span>","            name <span class=\"k\">=</span> <span class=\"k\">[</span>name<span class=\"k\">];</span>","","        <span class=\"k\">for</span> <span class=\"k\">(</span><span class=\"k\">var</span> n <span class=\"k\">=</span> name<span class=\"k\">.</span>length<span class=\"k\">;</span> n<span class=\"k\">--;)</span> <span class=\"k\">{</span>","","            <span class=\"k\">var</span> current_name <span class=\"k\">=</span> name<span class=\"k\">[</span>n<span class=\"k\">].</span>substr<span class=\"k\">(</span><span class=\"s\">0</span><span class=\"k\">,</span><span class=\"s\">1</span><span class=\"k\">).</span>toUpperCase<span class=\"k\">()</span> <span class=\"k\">+</span> name<span class=\"k\">[</span>n<span class=\"k\">].</span>substr<span class=\"k\">(</span><span class=\"s\">1</span><span class=\"k\">),</span>","                callbacksArrayName <span class=\"k\">=</span> <span class=\"s\">'on'</span> <span class=\"k\">+</span> current_name <span class=\"k\">+</span> <span class=\"s\">'Callbacks'</span><span class=\"k\">,</span>","                callbacksName <span class=\"k\">=</span> <span class=\"s\">'on'</span> <span class=\"k\">+</span> current_name<span class=\"k\">,</span>","                callbacksFireName <span class=\"k\">=</span> <span class=\"s\">'fireOn'</span> <span class=\"k\">+</span> current_name<span class=\"k\">;</span>","","            <span class=\"k\">if</span> <span class=\"k\">(</span><span class=\"k\">typeof</span><span class=\"k\">(</span>self<span class=\"k\">[</span>callbacksArrayName<span class=\"k\">])</span> <span class=\"k\">===</span> <span class=\"s\">'undefined'</span><span class=\"k\">)</span>","                self<span class=\"k\">[</span>callbacksArrayName<span class=\"k\">]</span> <span class=\"k\">=</span> <span class=\"k\">[];</span>","","            <span class=\"c\">// The onNAME method adds the passed in function among</span>","            <span class=\"c\">// the callbacks for that NAME</span>","            self<span class=\"k\">[</span>callbacksName<span class=\"k\">]</span> <span class=\"k\">=</span> <span class=\"k\">(</span><span class=\"k\">function</span><span class=\"k\">(</span>cb_name<span class=\"k\">)</span> <span class=\"k\">{</span>","                <span class=\"k\">return</span> <span class=\"k\">function</span><span class=\"k\">(</span>f<span class=\"k\">)</span> <span class=\"k\">{</span>","                    <span class=\"k\">if</span> <span class=\"k\">(</span><span class=\"k\">typeof</span><span class=\"k\">(</span>f<span class=\"k\">)</span> <span class=\"k\">===</span> <span class=\"s\">'function'</span><span class=\"k\">)</span>","                        self<span class=\"k\">[</span>cb_name<span class=\"k\">].</span>push<span class=\"k\">(</span>f<span class=\"k\">);</span>","                <span class=\"k\">}</span>","            <span class=\"k\">}</span><span class=\"k\">)(</span>callbacksArrayName<span class=\"k\">);</span>","","            <span class=\"c\">// the fireOnNAME function will take the arguments</span>","            <span class=\"c\">// passed in, and call each of the registered callbacks</span>","            <span class=\"c\">// with those same parameters</span>","            self<span class=\"k\">[</span>callbacksFireName<span class=\"k\">]</span> <span class=\"k\">=</span> <span class=\"k\">(</span><span class=\"k\">function</span><span class=\"k\">(</span>cb_name<span class=\"k\">)</span> <span class=\"k\">{</span>","                <span class=\"k\">return</span> <span class=\"k\">function</span><span class=\"k\">()</span> <span class=\"k\">{</span>","                    <span class=\"c\">//for (var i in self[cb_name]) </span>","                    <span class=\"k\">for</span> <span class=\"k\">(</span><span class=\"k\">var</span> i <span class=\"k\">=</span> self<span class=\"k\">[</span>cb_name<span class=\"k\">].</span>length<span class=\"k\">;</span> i<span class=\"k\">--;)</span> ","                        self<span class=\"k\">[</span>cb_name<span class=\"k\">][</span>i<span class=\"k\">].</span>apply<span class=\"k\">(</span>self<span class=\"k\">,</span> arguments<span class=\"k\">);</span>","                <span class=\"k\">}</span>","            <span class=\"k\">}</span><span class=\"k\">)(</span>callbacksArrayName<span class=\"k\">);</span>","","        <span class=\"k\">}</span> <span class=\"c\">// for n in name</span>","    <span class=\"k\">}</span><span class=\"k\">,</span> <span class=\"c\">// createCallback</span>","","    <span class=\"c\">/**</span>","<span class=\"c\">    * @method log</span>","<span class=\"c\">    * @description Logs a debug message in the browser console or (if not</span>","<span class=\"c\">    * present) in a debug div appended to the document.</span>","<span class=\"c\">    * @param options {string} message to be logged.</span>","<span class=\"c\">    * @return boolean true if something has been logged, false otherwise</span>","<span class=\"c\">    */</span>","    log<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">(</span>w<span class=\"k\">)</span> <span class=\"k\">{</span>","        <span class=\"k\">var</span> foo <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">.</span>opts<span class=\"k\">.</span>debug<span class=\"k\">;</span>","        ","        <span class=\"c\">// If there's an user supplied object and it says not to log, dont log.</span>","        <span class=\"k\">if</span> <span class=\"k\">(</span><span class=\"k\">typeof</span><span class=\"k\">(</span>punditConfig<span class=\"k\">)</span> <span class=\"k\">!==</span> <span class=\"s\">'undefined'</span> <span class=\"k\">&amp;&amp;</span> punditConfig<span class=\"k\">.</span>debugAllModules <span class=\"k\">===</span> <span class=\"k\">true</span><span class=\"k\">)</span>","            foo <span class=\"k\">=</span> <span class=\"k\">true</span><span class=\"k\">;</span>","","        <span class=\"k\">if</span> <span class=\"k\">(</span>foo <span class=\"k\">===</span> <span class=\"k\">false</span><span class=\"k\">)</span> <span class=\"k\">return</span> <span class=\"k\">false</span><span class=\"k\">;</span>","        ","        <span class=\"k\">var</span> lib_name <span class=\"k\">=</span> <span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>opts<span class=\"k\">.</span>libName <span class=\"k\">!==</span> <span class=\"s\">\"\"</span><span class=\"k\">)</span> <span class=\"k\">?</span> <span class=\"k\">this</span><span class=\"k\">.</span>opts<span class=\"k\">.</span>libName <span class=\"k\">:</span> <span class=\"k\">this</span><span class=\"k\">.</span>declaredClass<span class=\"k\">;</span>","        <span class=\"k\">if</span> <span class=\"k\">(</span><span class=\"k\">typeof</span> console <span class=\"k\">===</span> <span class=\"s\">\"undefined\"</span><span class=\"k\">)</span> <span class=\"k\">{</span>","            <span class=\"k\">if</span> <span class=\"k\">(!</span>dojo<span class=\"k\">.</span>query<span class=\"k\">(</span><span class=\"s\">'#debug_foo'</span><span class=\"k\">))</span>","                $<span class=\"k\">(</span><span class=\"s\">\"body\"</span><span class=\"k\">).</span>append<span class=\"k\">(</span><span class=\"s\">\"&lt;div id='debug_foo' style=' border: 3px solid yellow; font-size: 0.9em;'&gt;&lt;/div&gt;\"</span><span class=\"k\">);</span>","            dojo<span class=\"k\">.</span>query<span class=\"k\">(</span><span class=\"s\">\"#debug_foo\"</span><span class=\"k\">).</span>append<span class=\"k\">(</span><span class=\"s\">\"&lt;div&gt;#\"</span><span class=\"k\">+</span>lib_name<span class=\"k\">+</span><span class=\"s\">\"# \"</span><span class=\"k\">+</span>w<span class=\"k\">+</span><span class=\"s\">\"&lt;/div&gt;\"</span><span class=\"k\">);</span>","            <span class=\"k\">return</span> <span class=\"k\">true</span><span class=\"k\">;</span>","        <span class=\"k\">}</span> <span class=\"k\">else</span> <span class=\"k\">{</span>","            console<span class=\"k\">.</span>log<span class=\"k\">(</span><span class=\"s\">'#'</span><span class=\"k\">+</span>lib_name<span class=\"k\">+</span><span class=\"s\">'# '</span><span class=\"k\">+</span>w<span class=\"k\">);</span>","            <span class=\"k\">return</span> <span class=\"k\">true</span><span class=\"k\">;</span>","        <span class=\"k\">}</span>","    <span class=\"k\">}</span> <span class=\"c\">// log()</span>","","    <span class=\"k\">}</span><span class=\"k\">);</span>","<span class=\"k\">}</span><span class=\"k\">);</span>"];
_$jscoverage['BaseComponent.js'][20]++;
define(["dojo/_base/declare"], (function (declare) {
  _$jscoverage['BaseComponent.js'][28]++;
  return declare("pundit.BaseComponent", [], {defaultOpts: {debug: false, libName: ""}, constructor: (function (options) {
  _$jscoverage['BaseComponent.js'][57]++;
  var self = this, i;
  _$jscoverage['BaseComponent.js'][61]++;
  if (((typeof self.opts) === "undefined")) {
    _$jscoverage['BaseComponent.js'][62]++;
    self.opts = {};
  }
  _$jscoverage['BaseComponent.js'][65]++;
  for (i in self.defaultOpts) {
    _$jscoverage['BaseComponent.js'][66]++;
    if (((typeof self.opts[i]) === "undefined")) {
      _$jscoverage['BaseComponent.js'][67]++;
      self.opts[i] = self.defaultOpts[i];
    }
}
  _$jscoverage['BaseComponent.js'][71]++;
  if ((((typeof _PUNDIT) !== "undefined") && ((typeof _PUNDIT.config) !== "undefined") && ((typeof _PUNDIT.config.modules[self.declaredClass]) !== "undefined"))) {
    _$jscoverage['BaseComponent.js'][73]++;
    var configOpts = _PUNDIT.config.modules[self.declaredClass];
    _$jscoverage['BaseComponent.js'][74]++;
    for (i in configOpts) {
      _$jscoverage['BaseComponent.js'][75]++;
      self.opts[i] = configOpts[i];
}
  }
  _$jscoverage['BaseComponent.js'][79]++;
  for (i in options) {
    _$jscoverage['BaseComponent.js'][80]++;
    self.opts[i] = options[i];
}
  _$jscoverage['BaseComponent.js'][82]++;
  self.log(("BaseConstructor built opts for " + self.declaredClass));
}), createCallback: (function (name) {
  _$jscoverage['BaseComponent.js'][98]++;
  var self = this;
  _$jscoverage['BaseComponent.js'][101]++;
  if (((typeof name) === "string")) {
    _$jscoverage['BaseComponent.js'][102]++;
    name = [name];
  }
  _$jscoverage['BaseComponent.js'][104]++;
  for (var n = name.length; (n--);) {
    _$jscoverage['BaseComponent.js'][106]++;
    var current_name = (name[n].substr(0, 1).toUpperCase() + name[n].substr(1)), callbacksArrayName = ("on" + current_name + "Callbacks"), callbacksName = ("on" + current_name), callbacksFireName = ("fireOn" + current_name);
    _$jscoverage['BaseComponent.js'][111]++;
    if (((typeof self[callbacksArrayName]) === "undefined")) {
      _$jscoverage['BaseComponent.js'][112]++;
      self[callbacksArrayName] = [];
    }
    _$jscoverage['BaseComponent.js'][116]++;
    self[callbacksName] = (function (cb_name) {
  _$jscoverage['BaseComponent.js'][117]++;
  return (function (f) {
  _$jscoverage['BaseComponent.js'][118]++;
  if (((typeof f) === "function")) {
    _$jscoverage['BaseComponent.js'][119]++;
    self[cb_name].push(f);
  }
});
})(callbacksArrayName);
    _$jscoverage['BaseComponent.js'][126]++;
    self[callbacksFireName] = (function (cb_name) {
  _$jscoverage['BaseComponent.js'][127]++;
  return (function () {
  _$jscoverage['BaseComponent.js'][129]++;
  for (var i = self[cb_name].length; (i--);) {
    _$jscoverage['BaseComponent.js'][130]++;
    self[cb_name][i].apply(self, arguments);
}
});
})(callbacksArrayName);
}
}), log: (function (w) {
  _$jscoverage['BaseComponent.js'][145]++;
  var foo = this.opts.debug;
  _$jscoverage['BaseComponent.js'][148]++;
  if ((((typeof punditConfig) !== "undefined") && (punditConfig.debugAllModules === true))) {
    _$jscoverage['BaseComponent.js'][149]++;
    foo = true;
  }
  _$jscoverage['BaseComponent.js'][151]++;
  if ((foo === false)) {
    _$jscoverage['BaseComponent.js'][151]++;
    return false;
  }
  _$jscoverage['BaseComponent.js'][153]++;
  var lib_name = ((this.opts.libName !== "")? this.opts.libName: this.declaredClass);
  _$jscoverage['BaseComponent.js'][154]++;
  if (((typeof console) === "undefined")) {
    _$jscoverage['BaseComponent.js'][155]++;
    if ((! dojo.query("#debug_foo"))) {
      _$jscoverage['BaseComponent.js'][156]++;
      $("body").append("<div id='debug_foo' style=' border: 3px solid yellow; font-size: 0.9em;'></div>");
    }
    _$jscoverage['BaseComponent.js'][157]++;
    dojo.query("#debug_foo").append(("<div>#" + lib_name + "# " + w + "</div>"));
    _$jscoverage['BaseComponent.js'][158]++;
    return true;
  }
  else {
    _$jscoverage['BaseComponent.js'][160]++;
    console.log(("#" + lib_name + "# " + w));
    _$jscoverage['BaseComponent.js'][161]++;
    return true;
  }
})});
}));
