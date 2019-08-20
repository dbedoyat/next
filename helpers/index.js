function linkResolver(doc) {
    if (doc.type === 'work') {
        return `/work/${doc.uid}`;
    }
    return '/';
}

module.exports = {
    linkResolver
};