// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Arfa Khushbakht",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Will You Be My Valentine? 💛",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['💚', '💛', '💚', '💛', '🩷'],  // Heart emojis
        bears: ['🐼', '🤓']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Do you love me?",                                    // First interaction
            yesBtn: "Yes",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "I love you 3000"           // Secret hover message
        },
        second: {
            text: "Do you love me as much as Terry loves his yogurt?",                          // For the love meter
            startText: "YESSS!",                                   // Text before the percentage
            nextBtn: "Next 💗"                                         // Text for the next button
        },
        third: {
            text: "Will you be my Valentine on February 14th, 2026? 🌹💐", // The big question!
            yesBtn: "Yes!",                                             // Text for "Yes" button
            noBtn: "No"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "OMG DUDE THATS LIKE HOW MUCH I LOVE PEDRI (no no jonk)",  // Shows when they go past 5000%
        high: "AWW YOU LOVE ME LIKE ITNA ZAIDA LIKE ITS SO BIG LIKE A DINOSAUR 🦖",              // Shows when they go past 1000%
        normal: "YAYYY THANK YOU FOR LOVING ME ITNA ARFA! 💌"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Yay! I'm the luckiest person in the world! 🥳💝💓",
        message: "HEHEHE we'll do virtual date on 14th!!",
        emojis: "🎁💖🤗💝💋❤️💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#94A378",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#94A378",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#E4FF30",     // Button color (should stand out against the background)
        buttonHover: "#FFEF5F",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#313647"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dmw6lzm2t/video/upload/v1769910434/Bruno_Major_-_Nothing_Lyric_Chord_Video_cijgpx.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
