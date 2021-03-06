"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function transformImportLess2Css() {
    return {
        name: 'import-scss-or-less-to-css',
        visitor: {
            ImportDeclaration: function (path) {
                var re = /(\.scss|\.less)$/;
                if (re.test(path.node.source.value)) {
                    path.node.source.value = path.node.source.value.replace(re, '.css');
                }
            },
        },
    };
}
exports.default = transformImportLess2Css;
