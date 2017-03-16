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
**README IN PROGRESS**
























**Note** I do not authorize anybody to use indeed's website data. The data scraped in here are only for demonstration purposes
	





















		
