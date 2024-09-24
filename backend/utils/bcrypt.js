import bcrypt from "bcryptjs";

const generateUserPassword = (password) => bcrypt.hashSync(password, 10);

const comaprePasswords = (password, cryptPassword) => {
    return bcrypt.compareSync(password, cryptPassword);
};

export { generateUserPassword, comaprePasswords };