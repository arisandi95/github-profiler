

//TODO : connect to Github API [done]
let https =  require('https')

const options = {
	hostname : 'api.github.com',
	port : 443, //karna httpa
	path : '/users/arisandi95',
	method : 'GET',
	headers : {
		'user-agent' : 'nodejs' //bebas
	}
} 

//TODO : Read the data [done]
let request = https.request(options, (response) => {
	let body = ''
	response.on('data', (data)=>{
		body += data
	})
	response.on('end', () => {
		//TODO : Parse the data [done]
		//convert string to JSON (javascript Object)
		let profile = JSON.parse(body) //merubah string ke OBJECT
		console.log(profile);
	})

//TODO : Print out the data  
})



request.end()

request.on('error', (e) => {
	console.error(e)
})


