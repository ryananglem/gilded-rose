import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('should add new item', function() {
        const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
        const added = gildedRose.items[0]
        expect(added.name).to.equal('foo');
        expect(added.quality).to.equal(0);
        expect(added.sellIn).to.equal(0);
    });

    it('should update quality for sellin 1 day', function() {
        const gildedRose = new GildedRose([ new Item('foo', 1, 1) ]);
        const items = gildedRose.updateQuality();
        const added = items[0]
        expect(added.quality).to.equal(0);
        expect(added.sellIn).to.equal(0);
    });
     




});
