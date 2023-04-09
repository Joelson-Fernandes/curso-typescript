type User = {username: string, password: string};
type VerifyUserfn = (user: User, sentValue: User) => boolean;

const verifyUser: VerifyUserfn = (user, sentValue) => (user.username === sentValue.username
   && user.password === sentValue.password);

const userBD = {
  username: 'Joelson',
  password: '123456',
};

const userLogin = {
  username: 'Joelson',
  password: '123',
};

console.log(verifyUser(userBD, userLogin));
