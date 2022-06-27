export type StreetType = {
    title: string
}

export type AddressType = {
    number: number
    street: StreetType
}
export type HouseType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}
export type GovermentBuildingsType = {
    type: "HOSPITAL" | "FIRE STATION"
    budget: number
    staffCount: number
    address: AddressType
}
export type CityType = {
    title: string
    houses: Array<HouseType>
    govermentBuildings: Array<GovermentBuildingsType>
    citizensNumber: number
}



//------------------------------------------------------------

type LocalCityType = {
    title: string
    street: string
}
type LocalAddressType = {
    city: LocalCityType
    country: string
}
type TechnologiesType = {
        id: number
        title: string
}

export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: LocalAddressType
    technologies: Array<TechnologiesType>
}

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}
const student: StudentType = {
    id: 1,
    name: "name",
    age: 29,
    isActive: true,
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
export function becomeActive (st:StudentType) {
    st.isActive = true
}
export const doesStudentLivesInCity = (st: StudentType, city: string) => {
    return st.address.city.title === city
}

// console.log(student.name)
// console.log(student.age)
// console.log(student.isActive)
// console.log(student.address.city.street)
// console.log(student.technologies[2].title)

export function comp(array1: Array<number>, array2: Array<number>){
    const a = array1.map(el => el*el).sort()
    const b = array2.sort()
    return (JSON.stringify(a)===JSON.stringify(b))
}