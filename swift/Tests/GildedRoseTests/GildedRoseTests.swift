import Foundation
import XCTest

@testable import GildedRose

class GildedRoseTests: XCTestCase {

    func testFoo() {
        let items = [Item(name: "foo", sellIn: 0, quality: 0)]
        let app = GildedRose(items: items);
        app.updateQuality();
        XCTAssertEqual("fixme", app.items[0].name);
    }
}

#if os(Linux)
extension GildedRoseTests {
    static var allTests : [(String, (GildedRoseTests) -> () throws -> Void)] {
        return [
            ("testFoo", testFoo),
        ]
    }    
}
#endif