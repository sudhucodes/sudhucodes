import fs from "fs/promises";
import path from "path";

async function fetchProductData() {
    const response = await fetch("https://sudhucodes.com/api/products");
    const data = await response.json();
    return data.products || [];
}

function formatCell(val) {
    if (!val) return "-";
    return val.replace(/\|/g, "\\|");
}

function markdownTable(products) {
    const headers =
        "| Project  | Category            | Repository             | Website                        |";
    const separator =
        "| :------- | :------------------ | :--------------------- | :----------------------------- |";
    const rows = products.map((p) => {
        const repo = p.type === "Open Source" ? "✅ Available on GitHub" : "-";
        const website = formatCell(p.link);
        return `| ${formatCell(p.name)} | ${formatCell(p.type)} | ${repo} | ${website} |`;
    });
    return [headers, separator, ...rows].join("\n");
}

async function updateReadme(tableContent) {
    const readmePath = path.join(process.cwd(), "README.md");
    const readme = await fs.readFile(readmePath, "utf-8");
    const productsRegex = /(## Products\n\n)[\s\S]*?(\n\n\[https:\/\/sudhucodes\.com\]|$)/;
    if (productsRegex.test(readme)) {
        const updatedReadme = readme.replace(productsRegex, `$1${tableContent}$2`);
        await fs.writeFile(readmePath, updatedReadme, "utf-8");
    }
}

async function build() {
    const data = await fetchProductData();
    const table = markdownTable(data);
    console.log("Table generated successfully");
    await updateReadme(table);
    console.log("Readme updated successfully");
}

build();
