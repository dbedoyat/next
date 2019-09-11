function linkResolver(doc) {
    if (doc.type === 'first-blog') {
        return `/work/${doc.uid}`;
    }
    return '/';
}

function hrefResolver(doc) {
    if (doc.type === 'first-blog') {
        return `/blogPost?uid=${doc.uid}`
    }
    return '/'
}

module.exports = {
    linkResolver,
    hrefResolver
};