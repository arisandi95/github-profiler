//Problem: we need a simple to look at Github Profile
//Solution : use nodeJS to connect to Github API 
// to get profile info and print out to console

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
		console.log(body)
		console.log(typeof body)
	})
})

request.end()

request.on('error', (e) => {
	console.error(e)
})


//TODO : Parse the data
//TODO : Print out the data  