import * as bcrypt from 'bcrypt'

console.log(bcrypt.hashSync('admin', 10))