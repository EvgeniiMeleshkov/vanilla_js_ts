import {addSkill, becomeActive, comp, doesStudentLivesInCity, StudentType} from '../02/02';

let student: StudentType

beforeEach(()=> {
    student = {
        id: 1,
        name: 'Dimich',
        age: 32,
        isActive: false,
        address: {
            city: {
                title: "Minsk",
                street: "Surganova 2",
            },
            country: "Belarus",
        },
        technologies: [
            {
                id: 1,
                title: "HTML"
            },
            {
                id: 2,
                title: "CSS"
            },
            {
                id: 3,
                title: "React"
            }
            ]
    }
})

test("new skill should be added to student", () => {
    addSkill(student, "JS")
    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe("JS")
    expect(student.technologies[3].id).toBeDefined()
})

test("student should become active", () => {
    expect(student.isActive).toBe(false)
    becomeActive(student)
    expect(student.isActive).toBe(true)

})

test("student lives in city?", () => {
    let res1 = doesStudentLivesInCity(student, "Moscow")
    let res2 = doesStudentLivesInCity(student, "Minsk")
    expect(res1).toBe(false)
    expect(res2).toBe(true)
})
test('equal', () => {
    const a1 = [121, 144, 19, 161, 19, 144, 19, 11];
    const a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
    let a = comp(a1,a2)
    expect(a).toBe(true)
})
// describe("Tests", () => {
//     it("test", () => {
//         a1 = [121, 144, 19, 161, 19, 144, 19, 11];
//         a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
//         Test.assertEquals(comp(a1, a2), true);
//     });
// });