const Mocha=require("mocha");
const assert=require("assert");
const cf=require("../index.js"); 


describe("Circlefit", function(){

	describe("compute()", function(){

		it("fits circle", function(){

			let result = cf.compute([ 

				{ x: 10,	y: 10 },
				{ x: 11,	y: 7 },
				{ x: 12,	y: 7 },
				{ x: 14,	y: 11 }
			]);
			assert.equal(result.success, true);
			assert.equal(result.radius, 2.427575528264906);
			assert.deepEqual(result.center, { "x": 12.26153846153846, "y": 9.256410256410255 });

		});

		it("does not fit line", function(){

			let result = cf.compute([ 

				{ x: 10,	y: 5 },
				{ x: 11,	y: 6 },
				{ x: 12,	y: 7 },
			]);
			assert.equal(result.success, false);

		});


	});

});





//console.log("Center = {" + result.center.x + "," + result.center.y + "}, Radius = " + result.radius);
