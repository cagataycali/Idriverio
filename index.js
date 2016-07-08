import webdriver from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';
let path = require('chromedriver').path;
import config from './config.js';

async function recorder(url) {
  const service = new chrome.ServiceBuilder(path).build();
  chrome.setDefaultService(service);

  const driver = new webdriver.Builder()
      .withCapabilities(webdriver.Capabilities.chrome())
      .build();
  driver.manage().window().setSize(config.webdriver.width, config.webdriver.height);
  driver.get(url);
}

(function hello() {
  recorder('http://cagataycali.xyz');
})();
