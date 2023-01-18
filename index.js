var fs = require("fs")

const header = "country, year, population"

fs.writeFileSync('canada.txt', header)
fs.writeFileSync('canada.txt', '\n1,Canada,1952,14785584', {flag: 'a'})
fs.writeFileSync('canada.txt', '\n1,Canada,1957,17010154', {flag: 'a'})
fs.writeFileSync('canada.txt', '\n1,Canada,1962,18985849', {flag: 'a'})
fs.writeFileSync('canada.txt', '\n1,Canada,1967,20819767', {flag: 'a'})
fs.writeFileSync('canada.txt', '\n1,Canada,1972,22284500', {flag: 'a'})
fs.writeFileSync('canada.txt', '\n1,Canada,1977,23796400', {flag: 'a'})
fs.writeFileSync('canada.txt', '\n1,Canada,1982,25201900', {flag: 'a'})
fs.writeFileSync('canada.txt', '\n1,Canada,1987,26549700', {flag: 'a'})
fs.writeFileSync('canada.txt', '\n1,Canada,1992,28523502', {flag: 'a'})
fs.writeFileSync('canada.txt', '\n1,Canada,1997,30305843', {flag: 'a'})
fs.writeFileSync('canada.txt', '\n1,Canada,2002,31902268', {flag: 'a'})
fs.writeFileSync('canada.txt', '\n1,Canada,2007,33390141', {flag: 'a'})

// fs.readFile('canada.txt', (err, data) => {
//     console.log(data.toString())
// })

fs.writeFileSync('usa.txt', header)
fs.writeFileSync('usa.txt', '\n1,United States,1952,157553000', {flag: 'a'})
fs.writeFileSync('usa.txt', '\n1,United States,1957,171984000', {flag: 'a'})
fs.writeFileSync('usa.txt', '\n1,United States,1962,186538000', {flag: 'a'})
fs.writeFileSync('usa.txt', '\n1,United States,1967,198712000', {flag: 'a'})
fs.writeFileSync('usa.txt', '\n1,United States,1972,209896000', {flag: 'a'})
fs.writeFileSync('usa.txt', '\n1,United States,1977,220239000', {flag: 'a'})
fs.writeFileSync('usa.txt', '\n1,United States,1982,232187835', {flag: 'a'})
fs.writeFileSync('usa.txt', '\n1,United States,1987,242803533', {flag: 'a'})
fs.writeFileSync('usa.txt', '\n1,United States,1992,256894189', {flag: 'a'})
fs.writeFileSync('usa.txt', '\n1,United States,1997,272911760', {flag: 'a'})
fs.writeFileSync('usa.txt', '\n1,United States,2002,287675526', {flag: 'a'})
fs.writeFileSync('usa.txt', '\n1,United States,2007,301139947', {flag: 'a'})

// fs.unlink("canada.txt", (err)=>{
// 	if(err){
// 		console.log(err)
// 	}
// 	console.log("File delete successfully!")
// })
// fs.unlink("usa.txt", (err)=>{
// 	if(err){
// 		console.log(err)
// 	}
// 	console.log("File delete successfully!")
// })