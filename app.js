let profile = require('./profile.js')

// let profiles =['arisandi95', 'rizafahmi', 'yofri']
// profiles.map(user => {
// 	return profile.get(user)
// })

let profiles = process.argv.slice(2)
profiles.map(user => profile.get(user))