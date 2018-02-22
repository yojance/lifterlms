<?php

use Facebook\WebDriver\WebDriverBy;

class LLMS_Test_Something extends BrowserStack_TestCase {

	// public function testLocal() {
	// 	self::$driver->get("http://bs-local.com:45691/check");
	// 	$this->assertContains('Up and running', self::$driver->getPageSource(), '', true);
	// }

	public function testRemote() {

        self::$driver->get("https://www.google.com/ncr");
        $element = self::$driver->findElement(WebDriverBy::name("q"));
        $element->sendKeys("BrowserStack");
        $element->submit();
        self::$driver->wait(10, 500)->until(function($driver) {
          $elements = $driver->findElements(WebDriverBy::id("resultStats"));
          return count($elements) > 0;
        });
        $this->assertEquals('BrowserStack - Google Search', self::$driver->getTitle());

	}

}
