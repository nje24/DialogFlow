function test(agent){
			   result = "testing the module";
         agent.add(result);
         return agent;
}



module.exports = {
		test: test
}
