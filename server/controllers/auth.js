const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');


exports.signup = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    const contact = req.body.contact;
 console.log(req.body);
    User.findOne({ email: email }).then(user => {
        //   console.log("User: ", user);
        if (user) {
            const err = new Error('Email already exists');
            err.statusCode = 403;
            return next(err);
        } else {
            bcrypt.hash(password, 12)
                .then(hashedPassword => {
                    const user = new User({
                        email: email,
                        name: name,
                        password: hashedPassword,
                        contact: contact
                    });
                    return user.save();
                })
                .then(result => {
                    const token = jwt.sign(
                        {
                            email: result.email,
                            userId: result._id.toString()
                        },
                        'secretKey',
                        { expiresIn: '100h' }
                    );
                    res.status(201).json({
                        message: "User Created",
                        userId: result._id,
                        token: token,
                        userEmail: email,
                        userName: name
                    });
                })
                .catch(err => {
                    next(err);
                })
        }
    })
}

exports.signin = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    let loadedUser;
    User.findOne({ email: email })
        .then(user => {
            if (!user) {
                const error = new Error("A user with this email could not be found!");
                error.statusCode = 401;
                throw error;
            }
            loadedUser = user;
            return bcrypt.compare(password, user.password);
        })
        .then(isEqual => {
            if (!isEqual) {
                const error = new Error("Wrong Password!");
                error.statusCode = 401;
                throw error;
            }
            const token = jwt.sign(
                {
                    email: loadedUser.email,
                    userId: loadedUser._id.toString()
                },
                'secretKey',
                { expiresIn: '100h' }
            );
            res.status(200).json({
                token: token,
                userId: loadedUser._id.toString(),
                userName: loadedUser.name,
                userEmail: loadedUser.email
            });
        })
        .catch(err => {
            next(err);
        })
}

exports.verifyToken = (req, res, next) => {
    const token = req.body.token;
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, 'secretKey');
        res.json({ message: "Token verified." });
    } catch (error) {
        const err = new Error("Token expired. Please sign in again to continue");
        err.statusCode = 401;
        next(err);
    }
}

exports.google = async (req, res, next) => {
    try {
      
      const user = await User.findOne({ email: req.body.email });
      if (user) {
        const token = jwt.sign
        (
            {
             id: user._id, 
             userId: user._id.toString() 
            },
            'secretKey',
                { expiresIn: '100h' }
        );
       

        const { password: hashedPassword, ...rest } = user._doc;
       // const expiryDate = new Date(Date.now() + 3600000); // 1000 hour
       // console.log("bich me problem hai");
        res.status(200)
          .json({
            token: token,
            userId: user._id.toString(),
            userName: user.name,
            userEmail: user.email
          });
      } else {
        const generatedPassword =
          Math.random().toString(36).slice(-8) +
          Math.random().toString(36).slice(-8);
        const hashedPassword = bcrypt.hashSync(generatedPassword, 10);
       
        const newUser = new User({
            name:
            req.body.name,
          email: req.body.email,
          password: hashedPassword,
          
         
        });
        await newUser.save();
       
        const { password: hashedPassword2, ...rest } = newUser._doc;

        const token = jwt.sign
        (
            {
             id: user._id, 
             userId: user._id.toString() 
            },
            'secretKey',
                { expiresIn: '100h' }
        );
      //  const expiryDate = new Date(Date.now() + 3600000); // 1 hour
                  res.status(200)
                      .json({
                      token: token,
                      userId: user._id.toString(),
                      userName: user.name,
                      userEmail: user.email
                       });
      }
    } catch (error) {
        console.log("backend vale google auth me problem hai")
      next(error);
    }
  };
  