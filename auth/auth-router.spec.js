const db = require('../database/dbConfig')
const request = require('supertest')
const Users = require('./auth-model')
const routes = require('./auth-router')

describe('GET /', () => {
    it('has process.env.DB_ENV as "testing"', () => {
        expect(process.env.DB_ENV).toBe('testing')
    })
    it('returns 201 created', () => {
        return request(routes).post('/register')
        .expect(201)
    })
})


// describe('users model', () => {
//     beforeEach(async () => {
//         await db('users').truncate()
//     })

//     describe("add function", () => {
//         it("adds users into the db", async () => {
//           let usersNumber;
//           usersNumber = await db("users");
//           expect(usersNumber).toHaveLength(0);
//           await Users.add({ username: "bobby" });
//           usersNumber = await db('users')
//           expect(usersNumber).toHaveLength(1);
//         });
    
//         it('inserts the provided user into the db', async () => {
//             let user = await Users.add({username: 'bobby'})
//             expect(user.username).toBe('bobby')
//         })
//       });
// })