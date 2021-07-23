import prisma from '../prisma'

const getEmail = async (email) => {
  return await prisma.$queryRaw(`
  SELECT email FROM users WHERE email='${email}'`);
};

const getUsers = async (email) => {
  return await prisma.$queryRaw(
    `SELECT email, password FROM users WHERE email='${email}'`
  );
};

const createUser = async (
  email,
  name,
  password,
  account,
  nickname,
  phoneNumber
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
      '${phoneNumber}'
    )
  `);
};

export default { getUsers, getEmail, createUser };
