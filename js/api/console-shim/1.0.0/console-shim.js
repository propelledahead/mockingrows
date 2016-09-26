var console_log_shim = function(){
	/// Add Console.Log() if it doesn't exist
	try{ 
    	if (! (window.console && typeof console.log == 'function') ){ 
            console = { log: function(){} };
    	} 
    	if (! (window.console && typeof console.error == 'function') ){ 
            console = { error: function(){} };
    	} 
    	if (! (window.console && typeof console.warn == 'function') ){ 
            console = { warn: function(){} };
    	} 
    	if (! (window.console && typeof console.info == 'function') ){ 
            console = { info: function(){} };
    	} 
    	if (! (window.console && typeof console.debug == 'function') ){ 
            console = { debug: function(){} };
    	} 
    } catch (e) {}
}; 
console_log_shim();