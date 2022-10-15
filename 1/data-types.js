const age = 20;
console.log('age', age, typeof age); // Number

const text = 'Vova';
console.log('Name', text, typeof text); // String

const RedColor = true;
console.log('Red', RedColor, typeof true); // Boolean

const BigIntNumber = BigInt(100);
console.log('100', BigIntNumber, typeof BigIntNumber); // BigInt

const cheesecake = null;
console.log('cheesecake', cheesecake, typeof cheesecake); // Null

const keyowner = undefined;
console.log('keyowner', keyowner, typeof keyowner); // Undefined, только через undefined получилось, без назначения никак, или через переменную let

const teaLover = {
    favouriteDrink: "Milk Oolong",
    RedColor: false,
    numberOfCups: 10n
}
console.log('Tea Lover', teaLover, typeof teaLover); // Object

const id = Symbol('id') ;
console.log('id', id, typeof id); // Symbol
