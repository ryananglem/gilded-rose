// swift-tools-version:4.0

import PackageDescription

let package = Package(
    name: "GildedRose", 
    targets: [
        .target(
            name: "GildedRose",
            path: "Sources"
        ),
        .target(
            name: "GildedRoseApp",
            dependencies: ["GildedRose"],
            path: "App"
        ),        
        .testTarget(
            name: "GildedRoseTests",
            dependencies: ["GildedRose"],
            path: "Tests"
        )
    ]
)
