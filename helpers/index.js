function linkResolver(doc) {
    if (doc.type === 'first-blog') {
        return `/work/${doc.uid}`;
    }
    return '/';
}

module.exports = {
    linkResolver
};