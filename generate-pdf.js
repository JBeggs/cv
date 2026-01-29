const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const htmlPath = 'file://' + path.resolve(__dirname, 'cv.html');
    await page.goto(htmlPath, { waitUntil: 'networkidle0' });

    await page.pdf({
        path: 'Jody_Beggs_CV.pdf',
        format: 'A4',
        printBackground: true,
        displayHeaderFooter: true,
        headerTemplate: '<div style="font-size: 8px; margin-left: 1cm;"></div>',
        footerTemplate: '<div style="font-size: 8px; margin-right: 1cm; text-align: right; width: 100%;"><span class="pageNumber"></span> / <span class="totalPages"></span></div>',
        margin: {
            top: '1cm',
            bottom: '1cm',
            left: '1cm',
            right: '1cm'
        }
    });

    await browser.close();
    console.log('PDF generated successfully!');
})();
