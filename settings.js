const fs = require('fs')

global.creator = 'Revolt' 
global.apikey = ["rev", "Rico", "Revolt", "Rev", "Rev-Bot"]

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
