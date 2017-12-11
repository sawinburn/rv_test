console.log("testing links...");

var wdio = require('webdriverio');
var assert = require('assert');

describe("Link Validation: ", function(){
		
	/*
		Notes for this module:
		1) I havent been able to really wrap my head around the asynchronous nature of this
		   type of testing. I think that is the reason what I am trying to do here isnt working.
		   I would like to find all links by pulling 'a' from the browswer object and iterate
		   over that list with 'it' statements testing each one independently. I know there is 
		   probably something simple here that I am missing, but havent been able to get this 
		   to work. Instead, I am going to leave my broken code commented out and just manually 
		   test a few of the links. Not goign to test them all due to time constraints.
		2) An outline of what I would like to do:
			A) Get link names from all 'a' labelled elements from web page.
			B) Iterate over this list (array, collection, whatever) and check each one by:
				i) grabbing the href='/plans-pricing.html' tag from the HTML
				ii) appending this tag to the base URL
				iii) clicking link and checking destination url against calculated expected from
				     previous steps.

	*/
	
	/*
	//before(function(){
	var timeoutValue = 5000;
	var baseUrl = 'https://internet.frontier.com/';
			
	browser.url(baseUrl);
	var links = browser.getAttribute('a','href');
	console.log(links);

	for( var i=0; i<links.length; i++ ){
		console.log(links[i]);
		
	}
	var arr = Array.prototype.slice.call(links);
	console.log(arr);
	//});
	browser.pause(timeoutValue);
	for( var i=0; i<links.length; i++ ){
	//arr.forEach(function(foo){
		it('Iteration: ' + i, function(){
			console.log(links[i]);
			assert(equal(1,0));
		});
	//});
	}
	
	*/
	it('should redirect to correct page from clicking "Shop Online" button', function(){		
		browser.url('https://internet.frontier.com/');
		browser.click('/html/body/header/div[3]/div/nav/a');
		var pageUrl = browser.getUrl();
		assert.equal(pageUrl, 'https://internet.frontier.com/cart/.html');		
	});	
	
	it('should redirect to correct page from clicking "Shop Internet" button', function(){		
		browser.url('https://internet.frontier.com/');
		browser.click('//*[@id="js-track-home-hero"]');
		var pageUrl = browser.getUrl();
		assert.equal(pageUrl, 'https://internet.frontier.com/services/');		
	});	
	
	it('should redirect to correct page from clicking "Shop Internet" medium button', function(){		
		browser.url('https://internet.frontier.com/');
		browser.click('//*[@id="js-track-home-shop-internet"]');
		var pageUrl = browser.getUrl();
		assert.equal(pageUrl, 'https://internet.frontier.com/services/');		
	});	
	
	it('should redirect to correct page from clicking "Shop TV" medium button', function(){		
		browser.url('https://internet.frontier.com/');
		browser.click('//*[@id="js-track-home-shop-tv"]');
		var pageUrl = browser.getUrl();
		assert.equal(pageUrl, 'https://internet.frontier.com/fios-tv/');		
	});	
	
	it('should redirect to correct page from clicking "Shop Plans" medium button', function(){		
		browser.url('https://internet.frontier.com/');
		browser.click('//*[@id="js-track-home-shop-plans"]');
		var pageUrl = browser.getUrl();
		assert.equal(pageUrl, 'https://internet.frontier.com/plans-pricing.html');		
	});	
	
	it('should redirect to correct page from clicking "Shop Bundles" medium button', function(){		
		browser.url('https://internet.frontier.com/');
		browser.click('//*[@id="js-track-home-shop-bundles"]');
		var pageUrl = browser.getUrl();
		assert.equal(pageUrl, 'https://internet.frontier.com/bundles/');		
	});	
	
	it('should redirect to correct page from clicking "Shop Plans" bundles section button', function(){		
		browser.url('https://internet.frontier.com/');
		browser.click('//*[@id="js-track-home-shop-plans"]');
		var pageUrl = browser.getUrl();
		assert.equal(pageUrl, 'https://internet.frontier.com/plans-pricing.html');		
	});	
	
});

