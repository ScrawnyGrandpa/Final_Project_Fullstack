import bcrypt from "bcryptjs";

const generateUserPassword = (password) => bcrypt.hashSync(password, 10);

const comparePasswords = (password, cryptPassword) => {
    return bcrypt.compareSync(password, cryptPassword);
};

export { generateUserPassword, comparePasswords };