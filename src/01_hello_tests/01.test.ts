import {multiply, splitIntoWorlds, sum} from "./01";

let a: number;
let b: number;
let c: number;

beforeEach(() => {
    a = 1
    b = 2
    c = 3
})


test('sum should be correct', () => {
    let a = 1
    let b = 2
    let c = 3
    const result1 = sum(a,b)
    const result2 = sum(b,c)

    expect(result1).toBe(3)
    expect(result2).toBe(5)
})

test('multiply should be correct', () => {
    let a = 1
    let b = 2
    let c = 3
    const result1 = multiply(a,b)
    const result2 = multiply(b,c)

    expect(result1).toBe(2)
    expect(result2).toBe(6)
})

test('split should be correct', () => {
    let sentense1: string = "Hello my friends";
    let sentense2: string = "JS - the best programming language"

    const result1 = splitIntoWorlds(sentense1)
    const result2 = splitIntoWorlds(sentense2)

    expect(result1.length).toBe(3)
    expect(result1[0]).toBe("hello")
    expect(result1[1]).toBe("my")
    expect(result1[2]).toBe("friends")

    expect(result2.length).toBe(5)
    expect(result2[0]).toBe("js")
    expect(result2[1]).toBe("the")
    expect(result2[2]).toBe("best")
    expect(result2[3]).toBe("programming")
    expect(result2[4]).toBe("language")
})

