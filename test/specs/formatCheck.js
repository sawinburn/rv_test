console.log("Testing format...");

var wdio = require('webdriverio');
var assert = require('assert');

describe("Format checking: ", function(){
	/*
		Notes on this module:
		1) Probably should have used loops to go through and find all instances of prices,
		   phone numbers, etc. but I didn't have time to pursue how to do that. Kept running
		   into (probably) very simple problems that were preventing me from creating it statements
		   on looped items. Think it had to do with the object being a different type than array
		   (collection or somethign). Thinking about it, probably the best way to navigate this
		   problem would have been to search through the web page based on the regex I determined
		   to find all phone numbers. And to find all prices by searching for the $ symbol.
		2) Probably should break out the asssert to each it's own 'it' statement.
		3) Didnt see a timer, so I skipped that part.
	*/
	var baseUrl = 'https://internet.frontier.com/';
	
	it("Prices should be formatted correctly", function(){
		browser.url(baseUrl);
		var dollars = browser.getText('/html/body/main/div/section/div/div/div/div[2]/div/div/span[2]');
		var cents = browser.getText('/html/body/main/div/section/div/div/div/div[2]/div/div/span[3]');
		var regexPrice = /^\d+(?:[.,]\d+)*$/gm;
		console.log(dollars+cents);
		assert.equal(regexPrice.test(dollars+cents), true);
		
		//I know this is sloppy, but it is late and I am running low on time...
		var subPrice = browser.getText('/html/body/main/div/section/div/div/div/div[2]/div/p');
		var tempSubPrice = subPrice.substring(subPrice.indexOf('$')+1);
		tempSubPrice = tempSubPrice.substring(0, tempSubPrice.indexOf(' '));
		console.log(tempSubPrice);
		console.log(subPrice);
		assert.equal(regexPrice.test(tempSubPrice), true);
		tempSubPrice = tempSubPrice.substring(tempSubPrice.lastIndexOf('$'));
		console.log(tempSubPrice);
		tempSubPrice = tempSubPrice.substring(0, tempSubPrice.indexOf(' '));
		console.log(tempSubPrice);
		assert.equal(regexPrice.test(tempSubPrice), true);
		
		
		/*
		while(1){
			var index = subPrice.search('$');
			if(index == -1){
				break;
			}
			subPrice = subPrice.substring(index);
			console.log(subPrice);
		}
		*/

	});
	
	it("Phone numbers should be formatted correctly", function(){
		browser.url(baseUrl);
		var phoneNumber = browser.getText('/html/body/header/div[4]/div/div/div/span/span[2]');
		var regex = /\+?1?\s*\(?-*\.*(\d{3})\)?\.*-*\s*(\d{3})\.*-*\s*(\d{4})$/gm;
		console.log(phoneNumber);
		assert.equal(regex.test(phoneNumber), true);
		phoneNumber = browser.getText('/html/body/main/section[4]/div/div/div[2]/span');
		console.log(phoneNumber);
		assert.equal(regex.test(phoneNumber), true);
	});
});