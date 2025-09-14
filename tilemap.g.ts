// Автоматически генерируемый код. Не редактируйте.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "уровень0":
            case "уровень3":return tiles.createTilemap(hex`0700070002020202020202020101010101020201010101010202010101010102020101010101020201010101010202020202020202`, img`
2 2 . . . 2 2 
2 . . . . . 2 
. . . . . . . 
. . . . . . . 
. . . . . . . 
2 . . . . . 2 
2 2 . . . 2 2 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile3], TileScale.Sixteen);
            case "уровень1":
            case "уровень1":return tiles.createTilemap(hex`0700070002020202020202020301010101020201010101010202050101010402020101010101020201010101010202020202020202`, img`
2 2 . . . 2 2 
2 . . . . . 2 
. . . . . . . 
. . . . . . . 
. . . . . . . 
2 . . . . . 2 
2 2 . . . 2 2 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile3,myTiles.tile2,myTiles.tile7,myTiles.tile8], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile6":
            case "tile8":return tile8;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile7":
            case "tile9":return tile9;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Автоматически генерируемый код. Не редактируйте.
