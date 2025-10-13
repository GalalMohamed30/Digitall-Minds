const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');
const path = require('path');

const links = [
  { url: '/', changefreq: 'monthly', priority: 1.0 },
];

const stream = new SitemapStream({ hostname: 'https://digitall-minds.com/' });
const sitemapPath = path.resolve(__dirname, 'public', 'sitemap.xml');
const writeStream = fs.createWriteStream(sitemapPath);

// كتابة اللينكات في الستريم
links.forEach((link) => stream.write(link));

stream.end();

streamToPromise(stream)
  .then((data) => {
    console.log('✅ Sitemap created successfully!');
  })
  .catch((err) => {
    console.error('❌ Error creating sitemap:', err);
  });

// توصيل الستريم بملف الإخراج
stream.pipe(writeStream);
