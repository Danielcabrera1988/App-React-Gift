import { getGifts } from "../../src/helpers/getGifs"

describe('Pruebas en getGifs', () => { 
    test('debe de retornar un arreglo de gif', async () => { 
        const gif = await getGifts('Goku');
        expect(gif[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        })
     })
 })