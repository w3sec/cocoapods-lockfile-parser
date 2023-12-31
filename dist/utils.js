"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// e.g. Adjust (4.17.1)
///      Adjust/Core (4.17.1)
function pkgInfoFromSpecificationString(stringRepresentation) {
    const match = stringRepresentation.match(/^((?:\s?[^\s(])+)(?: \((.+)\))?$/);
    if (!match) {
        throw new Error('Invalid string representation for a ' +
            `specification: \`${stringRepresentation}\`. ` +
            'The string representation should include the name and ' +
            'optionally the version of the Pod.');
    }
    return { name: match[1], version: match[2] };
}
exports.pkgInfoFromSpecificationString = pkgInfoFromSpecificationString;
/// e.g. Expecta
///      ReactiveObjC (~> 2.0)
///      Pulley (from `https://github.com/l2succes/Pulley.git`, branch `master`)
function pkgInfoFromDependencyString(stringRepresentation) {
    const match = stringRepresentation.match(/^((?:\s?[^\s(])+)(?: \((.+)\))?$/);
    if (!match) {
        throw new Error('Invalid string representation for a ' +
            `dependency: \`${stringRepresentation}\`. ` +
            'The string representation should include the name and ' +
            'a requirement of which version of the Pod should be used.');
    }
    if (!match[2] || match[2].match(/from `(.*)(`|')/)) {
        return { name: match[1] };
    }
    return { name: match[1], version: match[2] };
}
exports.pkgInfoFromDependencyString = pkgInfoFromDependencyString;
/// Returns the root spec name, if the given specification name
/// is a subspec or just the same name.
function rootSpecName(specName) {
    return specName.split('/')[0];
}
exports.rootSpecName = rootSpecName;
//# sourceMappingURL=utils.js.map
