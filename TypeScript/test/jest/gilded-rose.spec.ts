import { Item, GildedRose } from '@/gilded-rose';

const backstage = 'Backstage passes to a TAFKAL80ETC concert';
const sulfuras = 'Sulfuras, Hand of Ragnaros';
const queso = 'Aged Brie';

describe('Gilded Rose', () => {
  it(`cuando expira un producto, se degrada la calidad con el doble de velocidad`, () => {
    const gildedRose = new GildedRose([new Item('aPrdocuto', 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(8);
  })

  it(`la calidad de un artículo nunca puede ser negativa`, () => {

  })

  it(`la calidad de un artículo nunca será mayor que 50`, () => {

  })

  it(`el artículo Sulfuras no modifica su fecha de expiracion ni su calidad`, () => {

  })

  describe('el queso brie', () => {
    it(`aumenta su calidad en lugar de disminuir`, () => {

    })

    it(`aumenta su calidad el doble en lugar de disminuir, cuando expira`, () => {

    })
  })

  describe('las entradas al backstage', () => {
    it(`aumenta su calidad cuando se acerca la expiración`, () => {

    })

    it(`si la expiracion , aumenta su calidad en 2`, () => {

    })

    it(`si la expiracion es 10 o menos, aumenta su calidad en 2`, () => {
      const gildedRose = new GildedRose([new Item(backstage, 11, 8)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(9);
    })

    it(`si la expiración es menor que 5, aumenta su calidad en 3`, () => {

    })

    it(`si expira, la calidad cae a 0`, () => {

    })
  })
});

