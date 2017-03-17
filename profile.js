//TODO : connect to Github API [done]
let https =  require('https')

let get = (username) => {
const options = {
	hostname : 'api.github.com',
	port : 443, //karna https
	path : `/users/${username}`,
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

		if(response.statusCode === 200) {
		//TODO : Print out the data  [done]
		console.log(`${profile.login} type ${profile.type} have ${profile.followers}`);
		}else{
			console.log(`Profile with username ${username} not found`)
		}

	})


})



request.end()

request.on('error', (e) => {
	console.error(e)
})



}

module.exports = {
	get
}