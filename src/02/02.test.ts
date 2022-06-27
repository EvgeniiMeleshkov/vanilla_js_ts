import {CityType} from "./02";


let city: CityType;

beforeEach(() => {
    city = {
        title: "Ney York",
        houses: [{
            buildedAt: 2012, repaired: false, address: {
                number: 100,
                street: {
                    title: "White Street"
                }
            }
        },{
            buildedAt: 2008, repaired: false, address: {
                number: 100,
                street: {
                    title: "Happy Street"
                }
            }
        },{
            buildedAt: 2020, repaired: false, address: {
                number: 101,
                street: {
                    title: "Happy Street"
                }
            }
        }],
        govermentBuildings: [{
            type: "HOSPITAL",
            budget: 200000,
            staffCount: 200,
            address: {
                number: 10,
                street: {
                    title: "Central Str"
                }
            }
        },{
            type: "FIRE STATION",
            budget: 500000,
            staffCount: 1000,
            address: {
                number: 3,
                street: {
                    title: "South Str"
                }
            }
        }],
        citizensNumber: 1000000
    }
})


test("test city should contains 3 houses", () => {
    expect(city.houses.length).toBe(3)

    expect(city.houses[0].buildedAt).toBe(2012)
    expect(city.houses[0].repaired).toBe(false)
    expect(city.houses[0].address.number).toBe(100)
    expect(city.houses[0].address.street.title).toBe("White Street")

    expect(city.houses[1].buildedAt).toBe(2008)
    expect(city.houses[1].repaired).toBe(false)
    expect(city.houses[1].address.number).toBe(100)
    expect(city.houses[1].address.street.title).toBe("Happy Street")

    expect(city.houses[2].buildedAt).toBe(2020)
    expect(city.houses[2].repaired).toBe(false)
    expect(city.houses[2].address.number).toBe(101)
    expect(city.houses[2].address.street.title).toBe("Happy Street")
})


test("test city should contain hospital and firefighters house", () => {
    expect(city.govermentBuildings.length).toBe(2)
    expect(city.govermentBuildings[0].type).toBe("HOSPITAL")
    expect(city.govermentBuildings[0].budget).toBe(200000)
    expect(city.govermentBuildings[0].staffCount).toBe(200)
    expect(city.govermentBuildings[0].address.street.title).toBe("Central Str")

    expect(city.govermentBuildings[1].type).toBe("FIRE STATION")
    expect(city.govermentBuildings[1].budget).toBe(500000)
    expect(city.govermentBuildings[1].staffCount).toBe(1000)
    expect(city.govermentBuildings[1].address.street.title).toBe("South Str")

})