import { sum } from "../TestUtils";
import { fetchData } from "../TestUtils";
import { fetchError } from "../TestUtils";

describe('Basic unit test for JS functions', () => {


      //assertion(asercja)
    test('should return proper number', () => {

        expect(sum(1,3)).toBe(4)
    })

    test('should return null if params are undefined', () => {

        expect(sum()).toBe(null)
    })
})

describe('Basic unit test for JS promises', () => {

  test('should return proper Promise result', () => {
    return fetchData().then(data => {
        expect(data).toStrictEqual({"data":"Data from the server"})
    })

  })

  test('should return error Promise result', () => {
    return fetchError().catch(data => {
        expect(data).toStrictEqual({"data":"Data from the server"})
    })
    // asercja jest prawidłowa, tu chodzi o sprawdzenie czy prawidłowo raportuje errory
  })


})