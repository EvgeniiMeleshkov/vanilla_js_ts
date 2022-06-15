type UsersType = { [key: string]: { id: number, name: string } }

let users: UsersType

beforeEach(() => {
    users = {
        '49384': {id: 49384, name: 'Dimich'},
        '322': {id: 322, name: 'Victor'},
        '92': {id: 92, name: 'Igor'},
        '1': {id: 1, name: 'Sveta'},
    }
})

test('Should update corresponding user', () => {
    users['1'].name = 'Svetlana'
    expect(users['1']).toEqual({id: 1, name: 'Svetlana'})
})
test('Should delete corresponding user', () => {
    delete users['1']
    expect(users['1']).toBe(undefined)
})