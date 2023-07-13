export const validCredentials = [
  { email: 'admin@admin.com', password: '2020' },
  { email: 'biancunha@gmail.com', password: '123456' },
  { email: 'growdev@growdev.com.br', password: 'growdev123' },
];
export const invalidEmails = [
  { issue: 'unknown', email: 'guest@admin.com', password: '2020' },
  { issue: 'missing "@"', email: 'adminadmin.com', password: '2020' },
  { issue: 'missing ".com"', email: 'admin@admin', password: '2020' },
  { issue: 'additional space', email: 'admin@admin.com ', password: '2020' },
  { issue: 'empty', email: '', password: '2020' },
  { issue: 'space', email: ' ', password: '2020' },
  {
    issue: 'special characters',
    email: '§±!@#$%^&*()-_=+[{]};:"\'|\\,<.>/?`~',
    password: '2020',
  },
];
export const invalidPasswords = [
  { issue: 'wrong password', email: 'admin@admin.com', password: '2019' },
  { issue: 'empty ', email: 'admin@admin.com', password: '' },
  { issue: 'space', email: 'admin@admin.com', password: ' ' },
  {
    issue: 'special characters',
    email: 'admin@admin.com',
    password: '§±!@#$%^&*()-_=+[{]};:"\'|\\,<.>/?`~',
  },
];
