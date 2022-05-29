const { body, validationResult } = require('express-validator');

exports.registerValidation=[
    //init ki t3mel signup t3mel requet ely 3ndha donn" donc heka t7eb tthbit 
    // el body chfih fih les donné email name , 
    body('email','please enter a valid email' ).isEmail(),
    body('password','please must contain 6 caraters').isLength({min : 6})
] 
//
exports.logvalidator=[
    body('email','please enter a valid email').isEmail()
]


//ken themech error , yt3ada si nn y3ml error yficheha khw 
exports.validation=(req,res,next)=>{
    const errors = validationResult(req);
if (!errors.isEmpty()) {
  return res.status(400).json({ errors: errors.array() });
}
next()
}