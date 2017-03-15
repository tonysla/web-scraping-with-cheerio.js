# Cheerio.js: Web scraping with cheerio.js
This repository is about web scraping data analyst jobs posted on indeed.com using cheerio.js. Also collecting data from usajobs.gov api using node.js and request. I hope you will find it helpful and get what you need, as I learn from others too. 

## Preparations
* Create a folder in your preferred directory
* Plan to use a text editor. 
* Sign up on **usajobs.gov** and receive `api` "Authorization_Key"
* Open `terminal - cmd` for Windows 
* From `terminal - cmd` change directory from current to created folder above

	  	user-MacBook-Pro:~ mycomputer$ cd Desktop/new_folder/
	  	user-MacBook-Pro:new_folder mycomputer$

## Installation
First install `node.js` which comes with `npm` installed.

* Go to **nodejs.org**, click ‘install’, and run through the install process.
* From your `terminal - cmd` in the folder directory shown above, install the following:
	
	  	user-MacBook-Pro:new_folder mycomputer$ npm install request
	  	user-MacBook-Pro:new_folder mycomputer$ npm install fs
	  	user-MacBook-Pro:new_folder mycomputer$ npm install json2csv
	  	user-MacBook-Pro:new_folder mycomputer$ npm install cheerio
		
* After installation you will see a folder inside your working folder named "node_modules"
* Installation instructions above are for **Mac** users, check on the web for different operating system (OS). 
* **Test installation** of node.js & npm

	  	user-MacBook-Pro:~ mycomputer$ node -v
	  	v6.10.0
	  	user-MacBook-Pro:~ mycomputer$ npm -v
	  	4.4.1
	






		**Note** I do not authorize anybody to use indeed's website data. The data scraped in here are only for demonstration purposes
