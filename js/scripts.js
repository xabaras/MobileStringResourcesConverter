/*
 * LocalizableStringsConverter
 * v. 1.1.1
 */

$(document).ready(function() {
	$('#btnConvert').click(function() {
		var input = "\n" + $('#txtIOS').val();
		var result = '';
		
		result = input.replace(new RegExp("\n\"", "g"), "\n<string name=\"");
		result = result.replace(new RegExp("\" = \"", "g"), "\">");
		result = result.replace(new RegExp("\"=\"", "g"), "\">");
		result = result.replace(new RegExp("\";", "g"), "</string>");
		result = result.replace(new RegExp("\'", "g"), "\\\'");
		result = result.replace(new RegExp("%@", "g"), "%s");
		result = result.replace(new RegExp("/\\*\\*", "g"), "<!--");
		result = result.replace(new RegExp("\\*\\*/", "g"), "-->");
		result = result.replace(new RegExp("/\\*", "g"), "<!--");
		result = result.replace(new RegExp("\\*/", "g"), "-->");
		result = result.replace(new RegExp("\\\\\"", "g"), "\"");
		result = result.replace(new RegExp("(?<!:)//\s*([^\r\n]+)", "g"), "<!-- $1 -->");
		result = result.substr(1, result.length - 1);
		
		$('#txtAndroid').val(result);
	});
	
	$('#btnConvertBack').click(function() {
		var input = $('#txtAndroid').val();
		var result = '';
		
		result = input.replace(new RegExp("\"", "g"), "\\\"");
		result = result.replace(new RegExp("<string name=\\\\\"", "g"), "\"");
		result = result.replace(new RegExp("\\\\\">", "g"), "\" = \"");
		result = result.replace(new RegExp("</string>", "g"), "\";");
		result = result.replace(new RegExp("\\\\\\'", "g"), "\'");
		result = result.replace(new RegExp("<!--", "g"), "/*");
		result = result.replace(new RegExp("-->", "g"), "*/");
		result = result.replace(new RegExp("%s", "g"), "%@");
		
		$('#txtIOS').val(result);
	});
	
	$('#btnClear').click(function() {
		$('#txtIOS').val("");
		$('#txtAndroid').val("");
	});
});