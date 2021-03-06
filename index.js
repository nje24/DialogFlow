const rp = require('request-promise-native');

function test(agent){
	var result = "";
	var options = {
    		uri: 'https://api.devhub.virginia.edu/v1/library/services',
    		headers: {
        		'User-Agent': 'Request-Promise'
    		},
    		json: true // Automatically parses the JSON string in the response
	};
	return rp(options)
    		.then(function (services) {
			console.log(services);
        		result = services.length;
			agent.add(result);
    		})
		.catch(function (err) {
        		result = err;
			agent.add(result);
    		});
	return Promise.resolve(agent);
}



module.exports = {
		test: test
}
