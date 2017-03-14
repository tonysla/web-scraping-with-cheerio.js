// I do not authorize anybody to use indeed's website 
// data. The data scraped in here are only for demonstration purposes 
// load 'fs', it servers for writting and reading data
// load 'request' is designed to be the simplest way possible to make http calls.
// load 'json2csv', it serves for writting and reading 'json' & 'csv' files.
// load 'cheerio', it enables web scraping. 

var fs = require('fs');
var request = require('request');
var json2csv = require('json2csv');
var cheerio = require('cheerio');

// pull the 'indeedIDs.json' file stored in your directory
var indeedIDs = require('./indeedIDs.json');

// create an empty var, it will be used later to store the data. 
var indeed_jobData = [];

// create the function 
function getList(page){

	// these are the IDs to be added in the end of the 'var url', so 
	// we can collect all the data. 
	var ID = indeedIDs[page]

	// now add var ID in the end of the url for multiple webpage scraping.
	var url = 'https://www.indeed.com/jobs?q=data+analyst+%2475%2C000&l=Pittsburgh%2C+PA'+ID;

		// create a 'request' function 
		request({url: url, json: true}, function(err, resp, body){

			var $ = cheerio.load(body);
				var content = $('#pageContent');
					var div = content.find('.row');

			// I advise to enable the console.log below so you can see the progress
			// console.log($);
			div.each(function(index, row){
				
				var comp = $(row).find('.company span').text();
					//comp = comp.replace(/\n+(\w.+)\D+/, '$1');
					var name = $(row).find('.company a').eq(0).text();
						var title = $(row).find('a').eq(0).text();
							var location = $(row).find('.location span').eq(0).text();
								var posted = $(row).find('.result-link-bar span').eq(0).text();
									var wage = $(row).find('.snip nobr').eq(0).text();

				// use console.log below to check your progress
				console.log(comp);

				// push the data into 'empty var 'indeed_jobData' created above
				// to me, this is similar to 'append' function use in Python
				indeed_jobData.push({ company: comp, company_name: name, 
										job_title: title, location: location, 
												day_posted: posted, salary: wage
											});


			});

				// create a statement so the code will keep collecting data as webpages are there
				if(page < 69){

					getList(page+1);
					}else{

						// use the indeed_jobData above to write collected data as json file
						fs.writeFile('indeed_jobData.json', JSON.stringify(indeed_jobData));

							// use again indeed_jobData var to write collected data as csv file. 
							json2csv({data: indeed_jobData }, function(error, csv){
								fs.writeFile('indeed_jobData.csv', csv);

							});

					}
			});
}
// call the function 
getList(0)




