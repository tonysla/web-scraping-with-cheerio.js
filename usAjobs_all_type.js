// This is a demonstration on how to collect data 
// using usajobs.gov api. 
// This code was tested minutes before loaded to repository &
// collected the data you can see on the data folder. 
// I did remove my email address and my Authorization-Key below
// you need to provide your own, and then this code will collect the data. 

// load 'request', 
// fs & 
// json2csv
var request = require('request');
var fs = require('fs');
var json2csv = require('json2csv');

// usajobs url add or change extention to 
// below url for internships '&Internship=True' etc. 
var url = 'https://data.usajobs.gov/api/Search?ResultsPerPage=500' 

	request({
		url: url,
		json: true,
		headers: {
				// enter your email address that you provided at usajobs.gov
				'Host': 'data.usajobs.gov',
				// insert your email address
				'User-Agent': 'your.email@goeshere.com'
				// include the Authorization-Key that usajobs.gov gave you
				'Authorization-Key': ' here goes your Authorization-Key '
				
		}
			// create function and name all the variables you want to pull from api
				}, function(error, response, body){

						// create empy variable to store the data later
						var usajobs_allJobs = [];
							// enable console.log so you can check your progress 
							console.log(body.SearchResult.SearchResultItems);
							// create a function 
								body.SearchResult.SearchResultItems.forEach(function(all){

								// name all the variables as you wish & specify from where to collect the 
								// data. Then use '.push' function to add the data into the empty 
								// variable created above, similar to '.append' in Python
								usajobs_allJobs.push({ Posting_Date: all.MatchedObjectDescriptor.PublicationStartDate, 
								Application_Deadline: all.MatchedObjectDescriptor.ApplicationCloseDate,
									Position: all.MatchedObjectDescriptor.PositionTitle, 
									Job_Category: all.MatchedObjectDescriptor.JobCategory[0].Name, 
										Institution: all.MatchedObjectDescriptor.OrganizationName, 
										Department: all.MatchedObjectDescriptor.DepartmentName, 
											Salary_Min: all.MatchedObjectDescriptor.PositionRemuneration[0].MinimumRange,
											Salary_Max: all.MatchedObjectDescriptor.PositionRemuneration[0].MaximumRange,
												Salary_Type: all.MatchedObjectDescriptor.PositionRemuneration[0].RateIntervalCode,
												Schedule: all.MatchedObjectDescriptor.PositionSchedule[0].Name,
												Position_Type: all.MatchedObjectDescriptor.PositionOfferingType[0].Name,
											Who_May_Apply: all.MatchedObjectDescriptor.UserArea.Details.WhoMayApply.Name,
											Requirements: all.MatchedObjectDescriptor.QualificationSummary, 
										URI: all.MatchedObjectDescriptor.PositionURI, 
			   							Location: all.MatchedObjectDescriptor.PositionLocation[0].LocationName,
			   						Country: all.MatchedObjectDescriptor.PositionLocation[0].CountryCode,
									Longitude: all.MatchedObjectDescriptor.PositionLocation[0].Longitude, 
								Latitude: all.MatchedObjectDescriptor.PositionLocation[0].Latitude 
							})
					});

					// write 'usajobs_allJobs' file as json file 
					// keep in mind that you need to change into 'append' function
					// in case you will add more data next time. If not, the data
					// collected before will be replaced with the new data
					fs.writeFile('usajobs_allJobs.json', JSON.stringify(usajobs_allJobs))
						// write 'sllJobs' file as csv file 
						json2csv({data: usajobs_allJobs}, function(error, csv){
							fs.writeFile('usajobs_allJobs.csv', csv);
						});						
});

