import prisma from '../../prisma';

const getAllUsers = async () => {
  return await prisma.$queryRaw('SELECT * FROM users');
};

const getUsers = async (email) => {
  return await prisma.$queryRaw(`SELECT * FROM users WHERE email='${email}'
  `);
};

const getEmail = async (email) => {
  return await prisma.$queryRaw(`
    SELECT email FROM users WHERE email='${email}'`);
};

const createUser = async (
  email,
  name,
  password,
  account,
  nickname,
  phone_number
) => {
  return await prisma.$queryRaw(`
    INSERT INTO 
      users(
        email, 
        name,
        password, 
        account, 
        nickname,
        phone_number
      )
    VALUES (
      '${email}',
      '${name}',
      '${password}',
      '${account}',
      '${nickname}',
      '${phone_number}'
    )
  `);
};

export default { getAllUsers, getUsers, getEmail, createUser };
