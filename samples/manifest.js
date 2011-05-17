{
    // The version of the manifest, so ROM Manager knows how to load it
    "version": "1",
    // The homepage for your ROM, if you have one.
    "homepage": "http://www.cyanogenmod.com/",
    // The donate link for yuor ROM, if you have one.
    "donate": "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=3283920",
    // Your list of ROMs
    "roms":
    [
    {
        // Display name of the rom
        "name": "CyanogenMod 5.0.5",
        // Display summary of the rom
        "summary": "Stable",
        // Device that this rom runs on
        "device": "sholes",
        // Product name of the mod. Product names should stay the same between versions of the mod.
        "product": "CyanogenMod",
        // The "modversion" is the value of ro.modversion in /system/build.prop. Your ROM should set this
        // in that build.prop so that ROM Manager can figure out what ROM is currently running.
        // This is optional however, you don't need this line here or in /system/build.prop
        // if you don't want to use OTA updates.
        // ROM Manager then uses this modversion to compare it to other modversions in the list of
        // ROMs, and determine which is the newest version by using an alphabetical sort.
        // For example, if the user is running "CyanogenMod-5.0.5-Droid" and there
        // are roms with modversion "CyanogenMod-5.0.7-Droid" and "CyanogenMod-5.0.6-Droid",
        // ROM Manager will upgrade the user to "CyanogenMod-5.0.7-Droid".
        // Please note, that "CyanogenMod-5.1-Droid" would be considered a DOWNGRADE
        // to "CyanogenMod-5.0.5-Droid" due to how it is sorted alphabetically.
        // The proper version for such an upgrade would be: "CyanogenMod-5.1.0-Droid".
        "modversion": "CyanogenMod-5.0.5-Droid",
        // Some Screenshots that show off the ROM!
        "screenshots":
        [
        "http://www.droidaftermarket.com/koush//motorola/sholes/screenshot.png",
        "http://www.droidaftermarket.com/koush//motorola/sholes/screenshot2.png"
        ],
        // This is a list of mirrors for your ROM. These URLs should have unique filenames per version!
        // Ie, don't use a zip with the same name as that of a previous version with a new version. 
        // Otherwise ROM Manager will continue using the old cached zip on the SD card.
        "urls":
        [
        "http://www.droidaftermarket.com/koush/motorola/sholes/cyanogen_sholes-ota-eng.koush_5.0.5.zip",
        "http://koush.romraid.com/motorola/sholes/cyanogen_sholes-ota-eng.koush_5.0.5.zip",
        "http://alldroid.org/roms/motorola/droid/koush/motorola/sholes/cyanogen_sholes-ota-eng.koush_5.0.5.zip"
        ],
        // Optional addons (you don't need this if you dont have any)
        "addons":
        [
        {
            "name": "Google Apps",
            "url": "http://goo-inside.me/gapps/gapps-passion-EPE54B-signed.zip"
        },
        {
            "name": "Modules",
            "urls":
            [
            "http://koush.romraid.com/motorola/sholes/bekit-modules.zip",
            "http://alldroid.org/roms/motorola/droid/koush//motorola/sholes/bekit-modules.zip",
            "http://www.droidaftermarket.com/koush//motorola/sholes/bekit-modules.zip"
            ]
        }
        ]
    },
    // And here's another, older ROM!
    {
        "name": "CyanogenMod 5.0.4.2",
        "summary": "Stable",
        "device": "sholes",
        "product": "CyanogenMod",
        "incremental": "5042",
        "modversion": "CyanogenMod-5.0.4.2-Droid",
        "urls":
        [
        "http://koush.romraid.com/motorola/sholes/cyanogen_sholes-ota-eng.koush_5.0.4.2.zip",
        "http://alldroid.org/roms/motorola/droid/koush/motorola/sholes/cyanogen_sholes-ota-eng.koush_5.0.4.2.zip",
        "http://www.droidaftermarket.com/koush/motorola/sholes/cyanogen_sholes-ota-eng.koush_5.0.4.2.zip"
        ],
        "addons":
        [
        {
            "name": "Modules",
            "urls":
            [
            "http://koush.romraid.com/motorola/sholes/bekit-modules.zip",
            "http://alldroid.org/roms/motorola/droid/koush//motorola/sholes/bekit-modules.zip",
            "http://www.droidaftermarket.com/koush//motorola/sholes/bekit-modules.zip"
            ]
        }
        ],
        "choices":
        [
        {
            "name": "Kernel",
            "options":
            [
            {
                "name": "Overclocked",
                "url": ""
            },
            {
                name: "Stable",
                "url": "http://clockworkmod.s3.amazonaws.com/motorola/sholes/kernel_nooverlock_1.0.2.zip"
            }
            ]
        }
        ]
    }
    ]
    // Remember to delete all comment lines for JSON compliance, and the blank
    // lines that some editors stick at the end of files. Finally, be sure to
    // run your file through www.jsonlint.com to catch any whitespace or syntax errors.
}