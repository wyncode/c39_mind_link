const mongoose = require('mongoose'),
  validator = require('validator'),
  bcrypt = require('bcryptjs'),
  jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema(
  {
    artistName: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Email is invalid.');
        }
      }
    },

    socialMedia: {
      type: String,
      trim: true,
      lowercase: true
    },

    firstName: {
      type: String,
      required: true,
      trim: true
    },

    lastName: {
      type: String,
      required: true,
      trim: true
    },
    bio: {
      type: String
    },
    currentProjects: {
      type: URL
    },

    myMusic: {
      type: URL
    },

    avatar: {
      type: String
    },

    password: {
      type: String,
      required: true,
      trim: true,
      validate(value) {
        if (value.toLowerCase().includes('password')) {
          throw new Error("Password can't be password.");
        }
        if (value.length < 6) {
          throw new Error('Password must be at least 6 characters long.');
        }
      }
    },
    tokens: [
      {
        token: {
          type: String,
          required: true
        }
      }
    ]
  },
  {
    timestamps: true
  }
);

// userSchema.virtual('tasks', {
//   ref: 'Task',
//   localField: '_id',
//   foreignField: 'owner'
// });

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  delete userObject.tokens;
  return userObject;
};

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign(
    { _id: user._id.toString(), name: user.firstName },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );

  user.tokens = user.tokens.concat({ token });
  await user.save();

  return token;
};

userSchema.statics.findByCredentials = async (artistName, password) => {
  const user = await User.findOne({ artistName });
  if (!user) throw new Error('Unable to log in.');
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Unable to login.');
  return user;
};

userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password'))
    user.password = await bcrypt.hash(user.password, 8);
});

const User = mongoose.model('User', userSchema);

module.exports = User;
