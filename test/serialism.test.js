
const Serialism = require("../index");
const Gen = require("../index").Gen;

// test("Gen.spread_f(-5)");

test("Gen.spreadFloat(24, 0, 24)");
// test("Gen.spreadFloat(48, 0, 12)");
// test("Gen.spreadExp(10, 10, 1000, 4)");
// test("Gen.spreadinclusive(5, 0, 12)");
// test("Gen.spread_f(5, 0, 1)");
// test("Gen.spreadinclusive_f(6, 0, 1)");

// test("Gen.spread(6, -100, 100)");
// test("Gen.spreadinclusive(4, -50, -10)");
// test("Gen.spread_f(5, 2)");
// test("Gen.spreadinclusive_f(5, -2, 2)");

function test(f){
	console.log(f);
	console.log("=> ", eval(f), "\n");
}