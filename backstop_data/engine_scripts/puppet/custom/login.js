module.exports = async page => {
    await page.type("#email", "7927+reinger@qa.wjump.com");
    await page.type("#pass", "teste123");
    await page.click("#send2");
    await page.waitFor(7000);
}