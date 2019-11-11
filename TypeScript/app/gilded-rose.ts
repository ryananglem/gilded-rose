export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() :Item[]  {
        for (let i = 0; i < this.items.length; i++) {
            let currentItem = this.items[i]

            switch (currentItem.name) {
                case 'Aged Brie': {
                    currentItem = this.updateQualityForAgedBrie(currentItem)
                    break;
                }
                case 'Backstage passes to a TAFKAL80ETC concert': {
                        currentItem = this.updateQualityForConcert(currentItem)
                        break;
                    }
                case  'Sulfuras, Hand of Ragnaros':  {
                        currentItem = this.updateQualityForSulfuras(currentItem)
                        break;
                    }
                case 'Conjured':  {
                        currentItem = this.updateQualityForConjured(currentItem)
                        break;
                }
                    default: {
                        currentItem = this.updateQualityForNormalItem(currentItem)
                }
            }
        }
        return this.items;
    }

    updateQualityForAgedBrie(item) :Item {
        if (item.quality < 49 ) {
            item.quality = item.quality + 1; 
            if (item.sellIn < 0 && item.quality < 50) {
                item.quality =  item.quality + 1
            }
        }
        item.sellIn = item.sellIn - 1;

        return item
    }
    updateQualityForConcert(item) :Item {
        if (item.sellIn===0) {
            item.quality=0
        } else {
            item.quality = item.quality + 1
            if (item.sellIn < 11) {
                if (item.quality < 50) {
                    item.quality = item.quality + 1
                }
            }
            if (item.sellIn < 6) {
                if (item.quality < 50) {
                    item.quality = item.quality + 1
                }
            }
        }
        item.sellIn = item.sellIn -1

        return item;
    }

    updateQualityForSulfuras(item) :Item {
        item.quality = 80;

        return item
    }
    updateQualityForConjured(item) :Item {
        item = this.updateQualityItem(item)
        item = this.updateQualityItem(item)
        item.sellIn = item.sellIn - 1

        return item
    }

    updateQualityItem(item): Item {
        if (item.quality > 0) {
            item.quality = item.quality - 1;
            if (item.sellIn <= 0 && item.quality > 0 ) {
                item.quality = item.quality -1;
            }   
        }

        return item
    }

    updateQualityForNormalItem(item) :Item {
        item = this.updateQualityItem(item)
        item.sellIn = item.sellIn - 1

        return item
    }
}
