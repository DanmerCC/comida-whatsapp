///scraping images and names from google images

const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

const googleImagesWithNames = async (searchTerm) => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(
        `https://www.google.com/search?q=comida+peruana&sca_esv=573559708&tbm=isch&sxsrf=AM9HkKlWcte_dr2QprbRVHj1CceslmDT8g:1697352268151&source=lnms&sa=X&ved=2ahUKEwjVx4H4ufeBAxUINrkGHUz3AukQ_AUoAXoECAIQAw&cshid=1697352302679344&biw=1366&bih=582&dpr=1`,
        { waitUntil: "networkidle2" }
    );

    const images = await page.evaluate(() => {
        const imgs = Array.from(document.querySelectorAll("img"));
        return imgs.map((img) => img.src);
    }
    );
    await browser.close();
    return images;
}
