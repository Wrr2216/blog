const fs = require('fs');
const path = require('path');
const marked = require('marked');

const postsDir = path.join(__dirname, '../blog/posts');

function getAllPosts() {
    const files = fs.readdirSync(postsDir).filter(file => file.endsWith('.md'));
    return files.map(file => {
        const filePath = path.join(postsDir, file);
        const content = fs.readFileSync(filePath, 'utf8');
        const title = content.split('\n')[0].replace('# ', '').trim();
        const slug = file.replace('.md', '');
        return { slug, title, content: marked.parse(content) };
    }).sort((a, b) => b.slug.localeCompare(a.slug)); // newest first if filenames are dates
}

function getPost(slug) {
    const filePath = path.join(postsDir, `${slug}.md`);
    if (!fs.existsSync(filePath)) return null;
    const content = fs.readFileSync(filePath, 'utf8');
    const title = content.split('\n')[0].replace('# ', '').trim();
    return { slug, title, content: marked.parse(content) };
}

module.exports = { getAllPosts, getPost };
