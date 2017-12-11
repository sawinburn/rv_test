console.log('Image testing...');

var wdio = require('webdriverio');
var assert = require('assert');

describe('Image checking: ', function(){
	/*
		Notes for this module:
		1) Since I have been having so much difficulty with collecting all items from
		   the site and iterating over them for my tests, I decided to just grunt through
		   this one (manually setup individual tests for each image that I see on the website).
		2) I feel like the check I am doing (isVisible) is not really enough here, but not sure
		   what else to do other than take screen shots and do pixel comparisons... and that 
		   doesn't seem the right way to handle it either.
		3) I dont know how to get the background images to check. Leaving these out.
		4) Also leaving out the check marks due to time contstraints.
	*/
	var baseUrl = 'https://internet.frontier.com/';
	
	it('Should verify masthead frontier logo', function(){
		browser.url(baseUrl);
		//console.log(browser.element('//*[@id="js-track-logo"]'));
		assert.equal(browser.element('//*[@id="js-track-logo"]').isVisible(), true);
	});
	
		it('Should verify shopping cart icon', function(){
		browser.url(baseUrl);
		//console.log(browser.element('//*[@id="js-track-logo"]'));
		assert.equal(browser.element('/html/body/header/div[3]/div/nav/a/i').isVisible(), true);
	});
	
	it('Should verify internet icon', function(){
		browser.url(baseUrl);
		//console.log(browser.element('//*[@id="js-track-logo"]'));
		assert.equal(browser.element('/html/body/main/section[3]/div/div/div/ul/li[1]').isVisible(), true);
	});
	
	it('Should verify tv icon', function(){
		browser.url(baseUrl);
		//console.log(browser.element('//*[@id="js-track-logo"]'));
		assert.equal(browser.element('/html/body/main/section[3]/div/div/div/ul/li[3]').isVisible(), true);
	});
	
	it('Should verify voice service phone icon', function(){
		browser.url(baseUrl);
		//console.log(browser.element('//*[@id="js-track-logo"]'));
		assert.equal(browser.element('/html/body/main/section[3]/div/div/div/ul/li[2]').isVisible(), true);
	});
	
	it('Should verify banner phone icon', function(){
		browser.url(baseUrl);
		//console.log(browser.element('//*[@id="js-track-logo"]'));
		assert.equal(browser.element('/html/body/header/div[4]/div/div/div/span/span[1]').isVisible(), true);
	});
	
	it('Should verify mastfoot phone icon', function(){
		browser.url(baseUrl);
		//console.log(browser.element('//*[@id="js-track-logo"]'));
		assert.equal(browser.element('/html/body/main/section[4]/div/div/div[2]/i').isVisible(), true);
	});
	
	it('Should verify high-speed internet icon', function(){
		browser.url(baseUrl);
		//console.log(browser.element('//*[@id="js-track-logo"]'));
		assert.equal(browser.element('/html/body/main/section[1]/div[2]/div[1]/div/div').isVisible(), true);
	});
	
	it('Should verify tv icon', function(){
		browser.url(baseUrl);
		//console.log(browser.element('//*[@id="js-track-logo"]'));
		assert.equal(browser.element('/html/body/main/section[1]/div[2]/div[2]/div/div').isVisible(), true);
	});
	
	it('Should verify voice service icon', function(){
		browser.url(baseUrl);
		//console.log(browser.element('//*[@id="js-track-logo"]'));
		assert.equal(browser.element('/html/body/main/section[1]/div[2]/div[3]/div/div').isVisible(), true);
	});
	
	it('Should verify bundles icon', function(){
		browser.url(baseUrl);
		//console.log(browser.element('//*[@id="js-track-logo"]'));
		assert.equal(browser.element('/html/body/main/section[1]/div[2]/div[4]/div/div').isVisible(), true);
	});
});