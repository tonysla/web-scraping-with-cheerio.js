# Cheerio.js: Web scraping with cheerio.js
This repository is about web scraping data analyst jobs posted on indeed.com using cheerio.js. Also collecting data from usajobs.gov api using node.js and request. 

## Preparation
* Create a folder in your preferred directory

* Plan to use a text editor. 

* Sign up on **usajobs.gov** and receive `api` "Authorization_Key"

## Installation
First install `node.js` which comes with `npm` installed.

* Go to **nodejs.org**, click ‘install’, and run through the install process.

* **Test installation** of node.js & npm

	  	user-MacBook-Pro:~ mycomputer$ node -v
	  	v6.10.0
	  	user-MacBook-Pro:~ mycomputer$ npm -v
	  	4.4.1
		
* Open `terminal - cmd` for Windows 

* From `terminal - cmd` change directory from current to created folder above

	  	user-MacBook-Pro:~ mycomputer$ cd Desktop/new_folder/
	  	user-MacBook-Pro:new_folder mycomputer$

* From your `terminal - cmd` in the folder directory shown above, install the following:
	
			user-MacBook-Pro:new_folder mycomputer$ npm init
	  	user-MacBook-Pro:new_folder mycomputer$ npm install request
	  	user-MacBook-Pro:new_folder mycomputer$ npm install fs
	  	user-MacBook-Pro:new_folder mycomputer$ npm install json2csv
	  	user-MacBook-Pro:new_folder mycomputer$ npm install cheerio
		
* After installation you will see a folder inside your working folder named "node_modules"
* Installation instructions above are for **Mac** users, check on the web for different operating system (OS). 
		
## Folder & files
* In the folder there are four files with data. Two `csv` files and two `json` that contain data. The `indeed_jobData.csv` & `indeed_jobData.json` contain the same information and are product of `collect_indeed_jobPosting.js` & `indeedIDs.json` files. The `usajobs_allJobs.csv` & `usajobs_allJobs.json` contain same data and are product of `usAjobs_all_type.js` file. 

## Web scraping with cheerio:
Let’s start web scraping using `cheerio.js`. Save `collect_indeed_jobPosting.js` & `indeedIDs.json` into your folder. In `indeedIDs.json` are the ID’s that end the url and make possible web scraping for multiple web pages at once. The ID's file will be used from `collect_indeed_jobPosting.js` file. 

* Load packages 

		var fs = require('fs');
		var request = require('request');
		var json2csv = require('json2csv');
		var cheerio = require('cheerio');

* Pull the `indeedIDs.json` file stored in your directory

		var indeedIDs = require('./indeedIDs.json');

* Create an empty var, it will be used later to store the data. 

		var indeed_jobData = [];
		
* Copy and paste the url into the url variable. Now add var ID in the end of the url for multiple webpage scraping. 

		var url = 'https://www.indeed.com/jobs?q=data+analyst+%2475%2C000&l=Pittsburgh%2C+PA'+ID;
		
* Create a `request` function and now we start to use cheerio.js codes, which are very similar to jQuery codes. This is very convenient for people who code mostly using javascrip or `jQuery`. 

		request({url: url, json: true}, function(err, resp, body){

* The first line below is used every time to initiate webscraping. The second and third are variables identifying html tags. The second locates the main/wrapper `div` by its id `#pageContent` and the second the row `div` by its class `.row`. I did not try it, by this code may also work by just using the third line below and get rid of the second line of code.

		var $ = cheerio.load(body);
		var content = $('#pageContent');
		var div = content.find('.row');
		
* Now we pass `div` variable into the function using `.each()` method. The `.each()` function can be used to iterate over any collection, whether it is an object or an array. In the case of an array, the callback is passed an array index and a corresponding array value each time.

		div.each(function(index, row){
		
* The following variables locate the `html div` that contain the information we want to collect. 

		var comp = $(row).find('.company span').text();

* Now I use the `.push` method to store the data into the empty var. 

		indeed_jobData.push({
		
* Now create a `if statement` to repeat the process for all the web pages there are with the information we need.

		if(page < 69){

* The final step is to write collected data into a `json` & `csv` file. Remember that `fs.wrtieFile` it deletes the previous data collected, and writes the current collection. If you plan to collect data periodically, it will be wise to use `fs.appendFile`.

		fs.writeFile(
		fs.appendFile(
		
After running the code you will see two additional files in your folder containing the data.


**README IN PROGRESS**








**Note** I do not authorize anybody to use indeed's website data. The data scraped in here are only for demonstration purposes
