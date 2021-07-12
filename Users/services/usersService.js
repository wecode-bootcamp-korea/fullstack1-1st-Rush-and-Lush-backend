import { usersDao } from '../models';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const TOKEN_KEY = '' + process.env.SECRET_KEY;

const findAllUsers = async () => {
  return await usersDao.getAllUsers();
};

const userSignUp = async (
  email,
  name,
  password,
  account,
  nickname,
  phone_number
) => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);

  const existingEmail = await usersDao.getEmail(email);

  if (existingEmail.length) {
    const error = new Error('error');
    error.statusCode = 409;
    throw error;
  }

  return await usersDao.createUser(
    email,
    name,
    hashedPassword,
    account,
    nickname,
    phone_number
  );
};

const userLogin = async (email, password) => {
  const findUsers = await usersDao.getUsers(email);

  if (!findUsers) {
    const error = new Error('CANNOT_FIND_USER');
    error.statusCode = 404;
    throw error;
  }

  const { email: my_email, password: hashedPassword } = findUsers[0];
  const comparedPassword = await bcrypt.compare(password, hashedPassword);

  if (!comparedPassword) {
    const err = new Error('INCORRECT_PASSWORD');
    err.statusCode = 401;
    throw err;
  }
  const token = jwt.sign({ my_email }, TOKEN_KEY, { expiresIn: '1h' });

  return token;
};

export default { findAllUsers, userSignUp, userLogin };
