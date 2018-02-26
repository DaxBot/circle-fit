# circle-fit
Fast circle fitting of a set of 2D points based on Least-Squares method from Michael Migliore's circle-fit: https://github.com/Meakk/circle-fit


# Install
```> npm install --save circle-fit```
# Test
```> mocha```

# Synopsis
```javascript
const Circlefit=require("circle-fit"); 
let result = cf.compute([ 
	{ x: 10,	y: 10 },
	{ x: 11,	y: 7 },
	{ x: 12,	y: 7 },
	{ x: 14,	y: 11 }
]);
//{
//  "success": true,
//  "center": {
//    "x": 12.26153846153846,
//    "y": 9.256410256410255
//  },
//  "radius": 2.427575528264906
//  ...
//}
```

# Speed and stability
The algorithm do not contain any iterative solvers and will find a solution in linear time, meaning that you will have the result instantly.  
This library handles degenerate cases when you do not have enough non-colinear points to determine a correct circle by returning an error flag.

# Result object
The result object contains more than the circle informations, here are all the parameters :
* `success (Boolean)` : status of the computation
* `points (Array)` : all points given by the user
* `projections (Array)` : projections of each points onto the circle
* `distances (Array)` : distance of each points to the circle
* `center (Object)` :  center of the circle
* `radius (Number)` : radius of the circle
* `residue (Number)` : residue of the least squares method, can be use to define the quality of the circle
* `computationTime (Number)` : time spent in computation (in milliseconds)


![Img1](http://migl.io/img/cf_1.png)
![Img2](http://migl.io/img/cf_2.png)
