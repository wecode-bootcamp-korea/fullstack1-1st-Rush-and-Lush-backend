import { usersService } from '../services';

const userSignUp = async (req, res) => {
  try {
    const { email, name, password, account, nickname, phoneNumber } = req.body;
    await usersService.userSignUp(
      email,
      name,
      password,
      account,
      nickname,
      phoneNumber
    );

    res.status(201).json({
      message: 'USER_CREATED_SUCCESSFULLY',
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email && !password) {
      let error = new Error('PLEASE_INSERT_REQUIRED_INFORMATION');
      error.statusCode = 400;
      throw error;
    } else if (!email) {
      let error = new Error('PLEASE_INSERT_EMAIL');
      error.statusCode = 400;
      throw error;
    } else if (!password) {
      let error = new Error('PLEASE_INSERT_PASSWORD');
      error.statusCode = 400;
      throw error;
    } else {
      const token = await usersService.userLogin(email, password);

      res.status(200).json({ message: 'LOGIN_SUCCESS!', token });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export default { userSignUp, userLogin };
