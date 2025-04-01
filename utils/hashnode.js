const fetch = require('node-fetch');

const HASHNODE_API = 'https://gql.hashnode.com';

async function getPosts(host) {
    const query = `
    query Publication {
    publication(host: "millerdevdesk.hashnode.dev") {
        posts(first: 10) {
        edges {
            node {
            title
            brief
            slug
            url
            publishedAt
            }
        }
        }
    }
    }
    `;

    const res = await fetch(HASHNODE_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
    });

    const data = await res.json();
    const posts = data?.data?.publication?.posts?.edges?.map(edge => edge.node) || [];
    return posts;
}

async function getPost(host, slug) {
    const query = `
    query Publication {
        publication(host: "millerdevdesk.hashnode.dev") {
            isTeam
            title
            post(slug: "${slug}") {
                title
                publishedAt
                content {
                    markdown
                    html
                }
                author {
                    name
                    profilePicture
                }
            }
        }
    }
    `;

    const res = await fetch(HASHNODE_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
    });

    const data = await res.json();
    return data?.data?.publication?.post || null;
}


module.exports = { getPosts, getPost };