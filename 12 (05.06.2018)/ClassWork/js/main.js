/*
console.dir(b);
console.log(b.tagName, b.nodeName);
console.log(b.childNodes, b.children);

console.log('TEXT',
    b.childNodes[0],
    b.childNodes[0].tagName,
    b.childNodes[0].nodeName);

    */
/*
function consoleNodeRecurcive(el) {
    if (!el instanceof Node) throw Error ('That is not Node');
    if (el.childNodes.length) {
        console.group('ELEMENT' + el.tagName);
        el.childNodes.forEach(function (node) {
            consoleNodeRecurcive(node);
        })
        console.groupEnd();
    } else if (el.tagName) {
        console.log(el.tagName);
    } else {
        console.log(el.nodeName,
            el.nodeType === Node.TEXT_NODE &&
            el.parentElement.tagName !== 'SCRIPT' ?
                el.nodeValue.trim() : '');
    }
}

consoleNodeRecurcive(document.body);
*/
var b = document.body;
console.dir(b.children[0].);
