const assert = require('assert');

describe( 'WebDriverJsDemo', function() {
	this.timeout( 30000 );

	it( 'can wait for an element to appear', function() {
        browser.url( 'https://webdriverjsdemo.github.io/' );
        const childElement = $( '#elementappearsparent' );
        childElement.waitForDisplayed( 10000 );
	} );
} );
