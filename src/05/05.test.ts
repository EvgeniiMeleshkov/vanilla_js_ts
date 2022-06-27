import exp from 'constants';

type UserType = {
    name: string
    age: number
    address:{city: string}
}
function increaseAge(user: UserType) {
    user.age++;
}
test('reference type test', () => {

    let user = {
        name: 'Dimich',
        age: 32,
        address: {
            city: 'Minsk'
        }
    }
    const superman = user
    superman.age = 1000

    expect(user.age).toBe(1000)
})
test('reference type arrays test', () => {

    let users: Array<UserType> = [
        {
            name: 'Dimich',
            age: 32,
            address: {city: 'Minsk'}
        },
        {
            name: 'Victor',
            age: 43,
            address: {city: 'Grodno'}
        },

    ]
    const admins = users
    admins.push({name: 'Bandygan', age: 10, address: {city: 'Gomel'}})

    expect(users[2]).toEqual({name: 'Bandygan', age: 10, address: {city: 'Gomel'}})
})

test('value type test', () => {

    let usersCount = 100
    let adminsCount = usersCount
    adminsCount = adminsCount + 1
    expect(usersCount).toBe(100)
})
test('reference type test2', () => {
    const address = {city: 'Minsk'}
    let user1: UserType = {
        name: 'Dimich',
        age: 32,
        address: address
    }
    //
    // let addr = user1.address.city
    //
    const user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: address
    }
    address.city = 'Minsk City'
    expect(user2.address).toEqual({city: 'Minsk City'})
})
test('reference type arrays test2',()=>{
    const address = {city: 'Minsk'}
    let user1: UserType = {
        name: 'Dimich',
        age: 32,
        address: address
    }
    const user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: address
    }
    const users = [user1, user2, {name: 'Misha', age: 4, address: address}]
    const  admins = [user1, user2]
    admins[0].name = 'Dmitry'

    expect(user1.name).toBe('Dmitry')
})