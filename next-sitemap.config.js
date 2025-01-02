/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.framewisehq.com', // Replace with your site's URL
    generateRobotsTxt: true, // Generates robots.txt file automatically
    exclude: ['/admin', '/api', '/login'], // Exclude sensitive paths
  };