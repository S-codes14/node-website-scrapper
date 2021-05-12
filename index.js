const scrape = require('./website-scraper');
//enter the web adress of the website you want to scrape
const websiteUrl = 'https://example.com';
//e.g const websiteUrl = 'https://www.facebook.com/'; 
try {
    scrape({
        urls: [websiteUrl],
        urlFilter: function(url) {
            return url.indexOf(websiteUrl) === 0;
        },
        recursive: true,
        maxDepth: 50,
        prettifyUrls: true,
        filenameGenerator: 'bySiteStructure',
        directory: './public'
    }).then((data) => {
        console.log("you now have the website you wanted");
    }).catch((err) => {
        console.log("An error ocurred", err);
    });
} catch (error) {
    console.log("there was an error:", error)
}