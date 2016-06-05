//
//  mindBubbleEvironmentEditor.js
//  MindBubble Evironment Editor
//
//  Created by Steven Dong on May 24 2016
//

Script.include([
    "libraries/toolBars.js",
]);

var toolIconUrl = Script.resolvePath("assets/images/tools/");

var ASSETLIBRARY_URL = "http://students.washington.edu/jtdong/highfidelity/index.html";
var assetlibraryWindow = new OverlayWebWindow({
    title: 'Environment Asset Library',
    source: "about:blank",
    width: 900,
    height: 700,
    visible: false
});

var toolHeight = 100;
var toolWidth = 100;
var TOOLBAR_MARGIN_Y = 0;


function showAssetLibrary(marketplaceID) {
    var url = ASSETLIBRARY_URL;
    if (marketplaceID) {
        url = url + "/items/" + marketplaceID;
    }
    print("setting asset library URL to " + url);
    assetlibraryWindow.setURL(url);
    assetlibraryWindow.setVisible(true);
}

function hideAssetLibrary() {
    assetlibraryWindow.setVisible(false);
    assetlibraryWindow.setURL("about:blank");
}

function toggleAssetLibrary() {
    if (assetlibraryWindow.visible) {
        hideAssetLibrary();
    } else {
        showAssetLibrary();
    }
}

var toolBar = (function() {
    var that = {},
        toolBar,
        browseAssetLibraryButton;

    function initialize() {
        toolBar = new ToolBar(0, 0, ToolBar.HORIZONTAL, "highfidelity.assetlibrary.toolbar", function(windowDimensions, toolbar) {
            return {
                x: windowDimensions.x / 2,
                y: windowDimensions.y
            };
        }, {
            x: -toolWidth / 2 - 100,
            y: -TOOLBAR_MARGIN_Y - toolHeight
        });
        browseAssetLibraryButton = toolBar.addTool({
            imageURL: toolIconUrl + "environment-01.svg",
            subImage: {
                x: 0,
                y: Tool.IMAGE_WIDTH,
                width: Tool.IMAGE_WIDTH,
                height: Tool.IMAGE_HEIGHT
            },
            width: toolWidth,
            height: toolHeight,
            alpha: 0.9,
            visible: true,
            showButtonDown: true
        });

        toolBar.showTool(browseAssetLibraryButton, true);
    }

    var browseAssetLibraryButtonDown = false;
    that.mousePressEvent = function(event) {
        var clickedOverlay,
            url,
            file;

        if (!event.isLeftButton) {
            // if another mouse button than left is pressed ignore it
            return false;
        }

        clickedOverlay = Overlays.getOverlayAtPoint({
            x: event.x,
            y: event.y
        });

        if (browseAssetLibraryButton === toolBar.clicked(clickedOverlay)) {
            toggleAssetLibrary();
            return true;
        }

        return false;
    };

    that.mouseReleaseEvent = function(event) {
        var handled = false;


        if (browseAssetLibraryButtonDown) {
            var clickedOverlay = Overlays.getOverlayAtPoint({
                x: event.x,
                y: event.y
            });
        }

        newModelButtonDown = false;
        browseAssetLibraryButtonDown = false;

        return handled;
    }

    that.cleanup = function() {
        toolBar.cleanup();
    };

    initialize();
    return that;
}());

Controller.mousePressEvent.connect(toolBar.mousePressEvent)
Script.scriptEnding.connect(toolBar.cleanup);
