console.log('testing spellCheck...');

var chai = require('chai');
var expect = require('expect');
var assert = chai.assert;
var wdio = require('webdriverio');
var typo = require('typo-js');

var spellcheck = new typo('en_US');

String.prototype.replaceAll = function(search, replacement){
	var target = this;
	return target.replace(new RegExp(search, 'g'), replacement);
}

//var spellcheck = require('simple-spellchecker');

describe('Spell check all text contained in web page', function(){
	it ('should have all correct spelling', function() {
		browser.url('https://internet.frontier.com/');
		
		var text = browser.getText(`p, h1, h2, h3, h4, h5, h6, 
			dl, dt, dd, ol, ul, li, address, article, aside, blockquote,
			del, figcaption, footer, header, ins`);
		//console.log(text);
		var expectedErrors = ["Espanol",
							  "Online",
							  "agmt",
							  "Wi",
							  "Fi",
							  "FiOS"];
		var tempText = [];
		var count = 0;
		for(var i=0;i<text.length;i++){
			//console.log(text[i]);
			tempText = text[i].split(/[^A-Za-z]/);
			for(var j=0;j<tempText.length;j++){
				//console.log(tempText[j]);
				var is_correct = spellcheck.check(tempText[j]);
				if( is_correct == false ){
					var index = expectedErrors.indexOf(tempText[j]);
					//console.log(index);
					if( index == -1 ){
						count += 1;
						console.log(is_correct + " " + tempText[j]);
						//console.log("Original string:" + text[i]);
					}
				}
			}
		}
		console.log("Found " + count + " errors.");
		//expect(count).to.equal(0);
	});
});