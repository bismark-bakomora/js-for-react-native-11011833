function createUserProfiles( names, modifiedNames) {
    return names.map((name, index) => {
        return {
            originalName: name,
            modifiedName: modifiedNames[index],
            id: index + 1 // auto-incremented ID starting from 1
        };
    });
}

module.exports = { createUserProfiles}
