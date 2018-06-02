var a = 'hello';

function outerScope() {
    var a ="my";
    tellMeMore('OUTER', outerScope);

    function innerScope() {
        a;
        tellMeMore('INNER', innerScope);

        function deepScope() {
            a;
            tellMeMore('DEER', deepScope);
        }
        deepScope();
    }
    innerScope();
}
outerScope();




function tellMeMore (title, fnc) {
    console.log(title);
    console.dir(fnc);
    console.groupEnd();
}