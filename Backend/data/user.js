import bcrypt from 'bcryptjs'
const users = [
    {
        name:'Seller',
        email:'seller@example.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name:'Kunal Kumar',
        email:'kunal@example.com',
        password:bcrypt.hashSync('123456',10),
       
    },

]

export  default users