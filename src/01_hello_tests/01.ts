export function sum(a: number, b: number) {
    return a + b
}
export function multiply(a: number, b: number) {
    return a * b
}

export function splitIntoWorlds(sentencse: string) {
    const words = sentencse.toLowerCase().split(' ')

    return words.filter(w => w !== '' && w !== '-').map(w => (w
            .replace('!','')
            .replace('.', '')
            .replace(',', '')
    ))
}