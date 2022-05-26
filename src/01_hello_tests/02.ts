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

type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: LocalAddressType
    technologies: Array<TechnologiesType>
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

console.log(student.name)
console.log(student.age)
console.log(student.isActive)
console.log(student.address.city.street)
console.log(student.technologies[2].title)


const school = {
    name: "It-Incubator",
    IsOpen: true,
    mentors: []
}