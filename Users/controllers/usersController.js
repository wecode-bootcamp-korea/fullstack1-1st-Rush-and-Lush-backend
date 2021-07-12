import { usersService } from '../services';

const findAllUsers = async (req, res) => {
  try {
    const users = await usersService.findAllUsers();
    res.status(200).json({ users });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const userSignUp = async (req, res) => {
  try {
    const { email, name, password, account, nickname, phone_number } = req.body;
    await usersService.userSignUp(
      email,
      name,
      password,
      account,
      nickname,
      phone_number
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
    console.log('여긴 컨트롤러');
    const { email, password } = req.body;

    if (!email && !password) {
      let error = new Error('PLZ_INSERT_REQUIRED_INFORMATION');
      error.statusCode = 404;
      throw error;
    } else if (!email) {
      let error = new Error('PLZ_INSERT_EMAIL');
      error.statusCode = 404;
      throw error;
    } else if (!password) {
      let error = new Error('PLZ_INSERT_PASSWORD');
      error.statusCode = 404;
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

export default { findAllUsers, userSignUp, userLogin };
