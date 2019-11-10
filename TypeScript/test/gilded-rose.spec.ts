import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', () => {

    it('should add new item', () => {
        const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
        const added = gildedRose.items[0]
        expect(added.name).to.equal('foo');
        expect(added.quality).to.equal(0);
        expect(added.sellIn).to.equal(0);
    });
});

describe('basic quality rules', () => {
    it('should update quality for sellin 1 day', () => {
        const gildedRose = new GildedRose([ new Item('foo', 1, 1) ]);
        const items = gildedRose.updateQuality();
         const added =items[0]
        expect(added.quality).to.equal(0);
        expect(added.sellIn).to.equal(0);
    });
     
    it('should update quality 2x as fast for sellin 0 days', () => {
        const gildedRose = new GildedRose([ new Item('foo', 0, 4) ]);
        const items = gildedRose.updateQuality();
         const added =items[0]
        expect(added.quality).to.equal(2);
        expect(added.sellIn).to.equal(-1);
    });

    it('quality should never go below 0', () => {
        const gildedRose = new GildedRose([ new Item('foo', 0, 1) ]);
        const items = gildedRose.updateQuality();
        const added = items[0]
        expect(added.quality).to.equal(0);
        expect(added.sellIn).to.equal(-1);
    });
})

describe('aged brie quality', () => { 

    it('quality of Aged Brie goes up', () => {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 1, 1) ]);
        const items = gildedRose.updateQuality();
        const added =items[0]
        expect(added.quality).to.equal(2);
        expect(added.sellIn).to.equal(0);
    });
    
    it('quality should never go above 50', () => {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 1, 50) ]);
        const items = gildedRose.updateQuality();
         const added =items[0]
        expect(added.quality).to.equal(50);
        expect(added.sellIn).to.equal(0);
    });
    it('should allow quality of aged brie to be incremented up to 50', () => {
        const gildedRose = new GildedRose([ new Item('Aged Brie', -10, 10) ]);
        const items = gildedRose.updateQuality();
         const added =items[0]
        expect(added.quality).to.equal(12);
        expect(added.sellIn).to.equal(-11);
    });
})

describe('sulfuras quality rules', () => {
    it('should not decrease quality for sulfuras', () => {
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 1, 1) ]);
        const items = gildedRose.updateQuality();
         const added =items[0]
        expect(added.quality).to.equal(80);
        expect(added.sellIn).to.equal(1);
    });
})

describe('backstage pass quality rules', () => {
    it('should increase quality of backstage passes by 1 when more than 10 days remaining', () => {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 11, 1) ]);
        const items = gildedRose.updateQuality();
         const added =items[0]
        expect(added.quality).to.equal(2);
        expect(added.sellIn).to.equal(10);
    });
    it('should increase quality of backstage passes by 2 when more than 5 days remaining', () => {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 6, 1) ]);
        const items = gildedRose.updateQuality();
         const added =items[0]
        expect(added.quality).to.equal(3);
        expect(added.sellIn).to.equal(5);
    });
    it('should increase quality of backstage passes by 3 when less than 5 days remaining', () => {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 3, 1) ]);
        const items = gildedRose.updateQuality();
         const added =items[0]
        expect(added.quality).to.equal(4);
        expect(added.sellIn).to.equal(2);
    });
    it('should set quality of backstage passes to 0 after concert', () => {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10) ]);
        const items = gildedRose.updateQuality();
         const added =items[0]
        expect(added.quality).to.equal(0);
        expect(added.sellIn).to.equal(-1);
    });
})

describe('conjured items', () => {
    it('should update quality for conjured sellin 1 day', () => {
        const gildedRose = new GildedRose([ new Item('Conjured', 1, 2) ]);
        const items = gildedRose.updateQuality();
         const added =items[0]
        expect(added.quality).to.equal(0);
        expect(added.sellIn).to.equal(0);
    });
     
    it('should update conjured quality 4x as fast for sellin 0 days', () => {
        const gildedRose = new GildedRose([ new Item('Conjured', 0, 4) ]);
        const items = gildedRose.updateQuality();
         const added =items[0]
        expect(added.quality).to.equal(0);
        expect(added.sellIn).to.equal(-1);
    });

    it('conjured item quality should never go below 0', () => {
        const gildedRose = new GildedRose([ new Item('Conjured', 0, 1) ]);
        const items = gildedRose.updateQuality();
        const added = items[0]
        expect(added.quality).to.equal(0);
        expect(added.sellIn).to.equal(-1);
    });
})