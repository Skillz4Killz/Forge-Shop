module.exports = [
  {
    name: "Argon",
    title: "Aspiring Knight",
    prerequisite: "Merchant Lv.1",
    stats: [
      { name: "attack", amount: 50 },
      { name: "health", amount: 30 },
      { name: "defense", amount: 30 },
      { name: "evasion", amount: "0%" },
    ],
    skill: {
      name: "Aura of Courage",
      effect: "10% bonus Attack and Defense for the party.",
    },
    criticalHit: {
      chance: "5%",
      damage: "2x",
    },
    unlockCost: {
      coins: 0,
    },
    threatRating: 90,
    ranks: [
      {
        rank: 1,
        coins: 5,
        reward: {
          health: 0,
          attack: 0,
          defense: 0,
          skill: {
            name: "Aura of Courage",
            effect: "10% bonus Attack and Defense for the party.",
          },
        },
        title: "The King's Shadow",
        story: [
          {
            name: "Argon",
            text:
              "...And that's when I slashed the Troublin with my sword! Pow!",
          },
          {
            name: "Elder Owen",
            text:
              "Ho ho! Quite the tale, Argon! Ah the fire of youth... I must say, it's very nice of you to accompany this old man on his morning walk.",
          },
          {
            name: "Argon",
            text:
              "Don't mention it! If I am to become a knight someday, I must help people in need!",
          },
          {
            name: "Elder Owen",
            text:
              "Just like your father, eh? I'm sure you'll make a fine knight, my boy. Why, perhaps you could even work as the King's royal guard. Speak of the devil, there he is at the market! Why not go ask him?",
          },
          {
            name: "Argon",
            text:
              "YOUR MAJESTY! I've come to offer you my services as a knight!",
          },
          {
            name: "Reinhold",
            text:
              "W-what's the meaning of this!? Sia, please handle this commoner!",
          },
          {
            name: "Sia",
            text: "Of course, my King. Well, young man? What is it?",
          },
          {
            name: "Argon",
            text:
              "Wow! I, uh... I'm knight! I want to become an Argon! No, wait a minute...",
          },
          {
            name: "Sia",
            text:
              "You certainly have guts! If you're so determined, come see me in the castle's courtyard next week. Train hard until then! I would not tolerate a slacker among the King's knights...",
          },
        ],
      },
      {
        rank: 2,
        coins: 15,
        reward: { health: 6, attack: 25, defense: 40, skill: "---" },
        title: "Training Montage",
        story: [
          { name: "Lilu", text: "Argon, what are you doing out here?" },
          {
            name: "Argon",
            text:
              "Training hard! I've finally got my chance at becoming a knight for the King!",
          },
          {
            name: "Lilu",
            text: "The King? ...Or his mysterious advisor, Sia?",
          },
          { name: "Argon", text: "Is that her name? It's beautiful too!" },
          { name: "Lilu", text: "..." },
          {
            name: "Argon",
            text:
              "Gah! No! Only the King matters! I must become a knight! Nothing else matters!",
          },
          { name: "Lilu", text: "Right... Here, let me heal your wounds." },
          { name: "Argon", text: "Thanks- ouch! This spell stings!" },
        ],
      },
      {
        rank: 3,
        coins: 25,
        reward: { health: 19, attack: 75, defense: 121, skill: "---" },
        title: "Two Sides of a Coin",
        story: [
          {
            name: "Argon",
            text:
              "Alright! Sia will show up any moment now! My training has paid off, I'm ready! ... But I'm still way too nervous... Oh! Hi there! You, in the bushes!",
          },
          { name: "Yami", text: "...!" },
          {
            name: "Argon",
            text:
              "Are you here to become a knight too? Sia will be here soon! There's no need to hide, she's pretty nice!",
          },
          { name: "Yami", text: "Sia...! I need to leave. Farewell." },
          {
            name: "Argon",
            text: "W-wait! Woah! Smoke bomb!? What a strange girl...",
          },
          { name: "Sia", text: "Young man, who are you talking to?" },
          {
            name: "Argon",
            text: "Ah, Sia! Just a shy passerby! Pay it no mind!",
          },
          {
            name: "Sia",
            text:
              "...I see. Well then, it seems your resolve has not wavered. Are you ready to risk your life as one of the King's knights?",
          },
          {
            name: "Argon",
            text: "You bet! I-I mean, of course! I will make my father proud!",
          },
          {
            name: "Sia",
            text:
              "Good. For your first assignment, I have an important event coming up...",
          },
        ],
      },
      {
        rank: 4,
        coins: 50,
        reward: {
          health: 0,
          attack: 0,
          defense: 0,
          skill: {
            name: "Aura of Resolve",
            effect: "20% bonus Attack and Defense for the party.",
          },
        },
        title: "Empty-Handed",
        story: [
          { name: "Argon", text: "..." },
          {
            name: "Sia",
            text:
              "Surely you jest! You've cornered the assassin... and failed to stop her. Not only that, you're saying you LET HER GO because you think she's a good person!?",
          },
          { name: "Argon", text: "..." },
          {
            name: "Sia",
            text:
              "What nonsense is this? You DO realize that this assassin tried to kill our King - the very man you have sworn to protect? Such an incident endangers much more than your feeble mind can understand. Ugh... I suppose the King has the final say about the termination of his knights... ...But don't expect me to speak highly of you. Dismissed.",
          },
          { name: "Argon", text: "... Oh man... Sorry, dad." },
        ],
      },
      {
        rank: 5,
        coins: 75,
        reward: { health: 25, attack: 100, defense: 162, skill: "---" },
      },
      {
        rank: 6,
        coins: 75,
        reward: { health: 32, attack: 125, defense: 202, skill: "---" },
      },
      {
        rank: 7,
        coins: 100,
        reward: {
          health: 0,
          attack: 0,
          defense: 0,
          skill: {
            name: "Aura of Heroism",
            effect: "30% bonus Attack and Defense for the party.",
          },
        },
      },
      {
        rank: 8,
        coins: 100,
        reward: { health: 38, attack: 150, defense: 243, skill: "---" },
      },
      {
        rank: 9,
        coins: 150,
        reward: { health: 57, attack: 225, defense: 364, skill: "---" },
      },
      {
        rank: 10,
        coins: 200,
        reward: { health: 77, attack: 300, defense: 486, skill: "---" },
      },
      {
        rank: 11,
        coins: 0,
        reward: {
          health: 0,
          attack: 0,
          defense: 0,
          skill: {
            name: "Aura of the Paladin",
            effect: "40% bonus Attack and Defense for the party.",
          },
        },
      },
    ],
  },
  {
    name: "Lilu",
    title: "Apprentice",
    prerequisite: "Merchant Lv.7",
    stats: [
      { name: "attack", amount: 150 },
      { name: "health", amount: 20 },
      { name: "defense", amount: 20 },
      { name: "evasion", amount: "0%" },
    ],
    skill: {
      name: "Cure Wounds",
      effect: "Heals party by 3 HP each turn. 10% faster resting time.",
    },
    criticalHit: {
      chance: "5%",
      damage: "2x",
    },
    unlockCost: {
      coins: 25,
    },
    threatRating: 10,
    ranks: [
      {
        rank: 1,
        coins: 5,
        reward: {
          health: 0,
          attack: 0,
          defense: 0,
          skill: {
            name: "Cure Wounds",
            effect: "Heals party by 3 HP each turn. 10% faster resting time.",
          },
        },
        title: "Precocious Apprentice",
        story: [
          {
            name: "Lilu",
            text:
              "Well, Pollux? What do you think of this new spell? Perfect, right? Yeah, this time we'll ace it for sure!",
          },
          {
            name: "Maribel",
            text:
              "Good morning, Lilu. Here for the weekly shipment of Living Roots?",
          },
          { name: "Lilu", text: "Yes, thank you, Maribel!" },
          {
            name: "Maribel",
            text:
              "You sure ordered a lot this week! What's your master doing with all of these?",
          },
          {
            name: "Lilu",
            text:
              "To be honest, about half of it is for me. I'm doing some serious studying!",
          },
          { name: "Maribel", text: "Oh? What kind?" },
          {
            name: "Lilu",
            text:
              "Healing spells! I've spent all of last week mending cuts and bruises at the Training Hall!",
          },
          {
            name: "Maribel",
            text:
              "Right, I'm sure the Heroes are glad to have you around. ...And Argon, too!",
          },
          { name: "Lilu", text: "...! I- I gotta go! Thanks!" },
        ],
      },
      {
        rank: 2,
        coins: 15,
        reward: { health: 2, attack: 74, defense: 19, skill: "---" },
        title: "Grim Tidings",
        story: [
          {
            name: "Lilu",
            text: "Here you go, Master Grimar. This week's Living Roots.",
          },
          {
            name: "Grimar",
            text: "Thank you, Lola. Here is today's homework.",
          },
          {
            name: "Lilu",
            text:
              "Oh! A magic tome! Is it about healing!? 'The Miscreant's Manual to Maledictions'...? This book is way too advanced! It's even got an entire section about curses!",
          },
          { name: "Grimar", text: "...Curses? Hmm... curses...?" },
          { name: "Lilu", text: "Master?" },
          { name: "Grimar", text: "35 years ago, on this very day... I...!" },
          { name: "Lilu", text: "Master Grimar!?" },
          { name: "Grimar", text: "...I forgot. And who might you be?" },
          {
            name: "Lilu",
            text:
              "...I'm Lilu, your apprentice. Or Lola, sometimes... Oh well, nevermind. I'll be studying this book. Thank you, Grim.",
          },
        ],
      },
      {
        rank: 3,
        coins: 25,
        reward: { health: 6, attack: 223, defense: 58, skill: "---" },
        title: "Addled Mind",
        story: [
          {
            name: "Lilu",
            text:
              "... Add in a pinch of Silver Dust and... done! Look at it glow! Not bad, huh Pollux? If the Miscreant's Manual's to Malediction is correct, this potion should-",
          },
          {
            name: "Grimar",
            text: "Lola, what is all this ruckus? I'm trying to sleep here!",
          },
          {
            name: "Lilu",
            text:
              "Master Grimar! Thanks to your book, I brewed a very advanced potion! It should-",
          },
          {
            name: "Grimar",
            text:
              "You did what!? Well then, give it here! Let's have a taste! ...",
          },
          { name: "Lilu", text: "Master Grimar?" },
          {
            name: "Grimar",
            text:
              "Lilu! I-mu-mu-must be fr-freed! Le-let me out of this doltish, half-witted mm-mind!",
          },
          { name: "Lilu", text: "M-master Grimar! Are you well?" },
          {
            name: "Grimar",
            text:
              "... *Burp* A little fruity! Not bad, Lola. Now then, back to your chores.",
          },
          { name: "Lilu", text: "... That was NOT normal." },
        ],
      },
      {
        rank: 4,
        coins: 50,
        reward: {
          health: 0,
          attack: 0,
          defense: 0,
          skill: {
            name: "Divine Power",
            effect: "Heals party by 5 HP each turn. 20% faster resting time.",
          },
        },
        title: "Bloodline's End",
        story: [
          {
            name: "Lilu",
            text:
              "Something isn't right with Master Grimar... His voice, it was as though someone was speaking from within him! Maybe we're dealing with a complex transmutation spell? Or maybe even-",
          },
          {
            name: "Tamas",
            text: "Dude, Lilu! Something went wrong at the king's feast!",
          },
          { name: "Lilu", text: "Tamas? What's going on?" },
          {
            name: "Tamas",
            text:
              "Something about an invader in the castle, dude. Pretty spooky!",
          },
          {
            name: "Lilu",
            text:
              "An invader...! Oh no, this is Argon's first day as a knight! Thanks Tamas, I gotta go! Oh no...! What's going on here!? Argon, where are you!?",
          },
          { name: "Reinhold", text: "Aaargh..." },
          { name: "Lilu", text: "KING REINHOLD!? Are you alright!?" },
          { name: "Reinhold", text: "Aahh... My precious life... fleeting..." },
          {
            name: "Lilu",
            text:
              "This is bad...! Focus Lilu! Remember the Sage training! King Reinhold! Hold still! Heal!",
          },
          {
            name: "Reinhold",
            text: "It's no use... Please... preserve my beautiful corpse...",
          },
          {
            name: "Lilu",
            text:
              "No effect... Oh no... could it be... Poison? ...Just like my parents...! I won't fail this time! I can't! Greater Poison Purge!",
          },
          { name: "Reinhold", text: "...Aaaah... Huh?" },
          {
            name: "Lilu",
            text:
              "King Reinhold! How do you feel? Wait a minute... That cup shielded you from that shuriken! You weren't harmed at all!",
          },
          {
            name: "Reinhold",
            text:
              "Oh! Is that so? I suppose I may have overreacted a little bit. A monarch's death is a dramatic affair, after all.",
          },
          { name: "Lilu", text: "Argh! Reinhold!" },
        ],
      },
      {
        rank: 5,
        coins: 75,
        reward: { health: 8, attack: 298, defense: 78, skill: "---" },
      },
      {
        rank: 6,
        coins: 75,
        reward: { health: 10, attack: 372, defense: 97, skill: "---" },
      },
      {
        rank: 7,
        coins: 100,
        reward: {
          health: 0,
          attack: 0,
          defense: 0,
          skill: {
            name: "Revitalization",
            effect: "Heals party by 7 HP each turn. 35% faster resting time.",
          },
        },
      },
      {
        rank: 8,
        coins: 100,
        reward: { health: 12, attack: 447, defense: 117, skill: "---" },
      },
      {
        rank: 9,
        coins: 150,
        reward: { health: 19, attack: 670, defense: 176, skill: "---" },
      },
      {
        rank: 10,
        coins: 200,
        reward: { health: 25, attack: 894, defense: 234, skill: "---" },
      },
      {
        rank: 11,
        coins: 0,
        reward: {
          health: 0,
          attack: 0,
          defense: 0,
          skill: {
            name: "Sacred Circle",
            effect: "Heals party by 10 HP each turn. 50% faster resting time.",
          },
        },
      },
    ],
  },
  {
    name: "Sia",
    title: "King's Shadow",
    prerequisite: "Merchant Lv.10",
    stats: [
      { name: "attack", amount: 100 },
      { name: "health", amount: 25 },
      { name: "defense", amount: 30 },
      { name: "evasion", amount: "30%" },
    ],
    skill: {
      name: "Eye for Loot",
      effect: "25% more components found. Slightly more valuable loot found.",
    },
    criticalHit: {
      chance: "20%",
      damage: "2x",
    },
    unlockCost: {
      coins: 50,
    },
    threatRating: 40,
    ranks: [
      {
        rank: 1,
        coins: 10,
        reward: {
          health: 0,
          attack: 0,
          defense: 0,
          skill: {
            name: "Eye for Loot",
            effect:
              "25% more components found. Slightly more valuable loot found.",
          },
        },
        title: "Kingly First Steps",
        story: [
          { name: "Reinhold", text: "Sia! I've decided!" },
          { name: "Sia", text: "Yes, my King?" },
          { name: "Reinhold", text: "Today, I would like to go shopping!" },
          {
            name: "Sia",
            text:
              "An excellent idea, your Majesty. However, looking at your schedule, it seems you are to meet foreign dignitaries today...",
          },
          {
            name: "Reinhold",
            text: "Oh, what a bore! Can't we just send them away?",
          },
          {
            name: "Sia",
            text:
              "Remember, my King, though you may be young, you are still King. Your word is law.",
          },
          {
            name: "Reinhold",
            text:
              "...You're absolutely right! Shopping it is, then! Those dignitaries can wait!",
          },
          {
            name: "Sia",
            text: "Your decisiveness is admirable. Shall I accompany you?",
          },
          {
            name: "Reinhold",
            text:
              "Of course! I trust no one else with the protection of my graceful self.",
          },
        ],
      },
      {
        rank: 2,
        coins: 20,
        reward: { health: 2, attack: 42, defense: 30, skill: "---" },
        title: "Friends in Low Places",
        story: [
          {
            name: "Sia",
            text:
              "...And so, I have reasons to believe our King's life may be in danger.",
          },
          {
            name: "Elder Owen",
            text:
              "I see. Indeed, a few rival kingdoms would benefit from an attempt on the King's life. I haven't seen any suspicious characters, but I'm sure Naya over at the tavern would know more.",
          },
          {
            name: "Sia",
            text:
              "Thank you, Elder. Your wisdom and patriotism is appreciated.",
          },
          {
            name: "Elder Owen",
            text:
              "Don't mention it. It is my duty as a resident to ensure our kingdom's prosperity. Though he may be young and foolish, I'm sure Reinhold will grow into a fine king... given time.",
          },
          {
            name: "Sia",
            text: "And it is my duty to see him live until then!",
          },
          {
            name: "Naya",
            text:
              "Well well, it's not often we see pretty blue blood down here at the tavern!",
          },
          { name: "Sia", text: "Cut the act, Naya, you know who I am." },
          {
            name: "Naya",
            text:
              "Indeed! Sia Leonel, a gift to our King by the Kern emperor... To act as an advisor, but also to keep tabs on him, am I right?",
          },
          {
            name: "Sia",
            text:
              "...! ...Nosy girl, aren't you? Well then, tell me, nosy Naya... Have you seen any strange faces in your tavern lately?",
          },
          {
            name: "Naya",
            text:
              "Oh, we get plenty of strange faces! Tipsy orcs, shopkeepers... But the strangest of all would be that girl in the corner, over there.",
          },
          { name: "Yami", text: "...!" },
          {
            name: "Sia",
            text:
              "She escaped... That was an Azuman spy! ...or assassin. I'll need to be extra vigilant...",
          },
        ],
      },
      {
        rank: 3,
        coins: 30,
        reward: { health: 7, attack: 128, defense: 90, skill: "---" },
        title: "Gate Crasher",
        story: [
          {
            name: "Sia",
            text:
              "We have gathered you here today to celebrate the King's incredible generosity. In the past months, he has donated several million gold from his own coffers... ...To several local temples, schools, and orphanages. All are welcome to this feast, so please tell your friends and family Long live King Reinhold!",
          },
          { name: "Yami", text: "Tyrant Reinhold, your reign ends now!" },
          { name: "Reinhold", text: "Aaargh..." },
          {
            name: "Sia",
            text:
              "A shuriken...! The Azuman spy! Guards! Form a perimeter around the castle! Let none escape! Argon, go after that assassin!",
          },
          { name: "Argon", text: "At once!" },
          {
            name: "Sia",
            text:
              "You! Unwashed buffoon! The King is injured! Seek out a healer at once!",
          },
          { name: "Tamas", text: "Wow, rude, dude." },
          {
            name: "Sia",
            text:
              "(I had every entry point under maximum surveillance...) (...Just who is this girl?)",
          },
        ],
      },
      {
        rank: 4,
        coins: 60,
        reward: {
          health: 0,
          attack: 0,
          defense: 0,
          skill: {
            name: "Trained Eye",
            effect: "50% more components found. More valuable loot found.",
          },
        },
        title: "Mail Scorched Black",
        story: [
          {
            name: "Sia",
            text: "Nosy Naya, I believe you owe me some explanations.",
          },
          {
            name: "Naya",
            text: "Oh, Mrs. Leonel... I believe YOU owe me explanations.",
          },
          { name: "Sia", text: "I beg your pardon?" },
          {
            name: "Naya",
            text:
              "I've intercepted some VERY interesting letters. Sent by you, I believe. Shall we read it together?",
          },
          { name: "Sia", text: "...!" },
          {
            name: "Naya",
            text:
              "Let's see here... A Kern seal, addressed directly to the Kern emperor? My, my. I was dearly hoping for a scandalous love affair, but I suppose treason is fine, too.",
          },
          { name: "Sia", text: "N-naya, please stop!" },
          {
            name: "Naya",
            text:
              "Oh! Here's a juicy bit! 'King Reinhold is a complete fool whose presence on the throne benefits you greatly.' 'Keeping him alive is sure to damage his kingdom even more so than its ruler's death.'",
          },
          { name: "Sia", text: "..." },
          {
            name: "Naya",
            text:
              "Such unkind words are rather unbecoming of his advisor, I would say!",
          },
          { name: "Sia", text: "Nosy... Naya... You'll pay for this!" },
          {
            name: "Naya",
            text:
              "Someday, perhaps. But for now, I believe it is you who will pay. Handsomely, I suspect.",
          },
          { name: "Sia", text: "...Stooping so low as to blackmail?" },
          {
            name: "Naya",
            text:
              "So small a sin, compared to treason! If you had planned harm upon our king, on the other hand...",
          },
          {
            name: "Sia",
            text:
              "Hmph. Very well. Name your price. And pray that my spy network never outsmarts yours, Naya.",
          },
          { name: "Naya", text: "I'm looking forward to it!" },
        ],
      },
      {
        rank: 5,
        coins: 90,
        reward: { health: 9, attack: 171, defense: 121, skill: "---" },
      },
      {
        rank: 6,
        coins: 90,
        reward: { health: 11, attack: 214, defense: 151, skill: "---" },
      },
      {
        rank: 7,
        coins: 125,
        reward: {
          health: 0,
          attack: 0,
          defense: 0,
          skill: {
            name: "Eye for Style",
            effect:
              "75% more components found in quests. Loot found is much more valuable.",
          },
        },
      },
      {
        rank: 8,
        coins: 125,
        reward: { health: 14, attack: 257, defense: 181, skill: "---" },
      },
      {
        rank: 9,
        coins: 200,
        reward: { health: 21, attack: 386, defense: 272, skill: "---" },
      },
      {
        rank: 10,
        coins: 250,
        reward: { health: 28, attack: 515, defense: 363, skill: "---" },
      },
      {
        rank: 11,
        coins: 0,
        reward: {
          health: 0,
          attack: 0,
          defense: 0,
          skill: {
            name: "Eye of the Beholder",
            effect:
              "100% more components found in quests. Loot found is way more valuable!",
          },
        },
      },
    ],
  },
  {
    name: "Yami",
    title: "Kunoichi",
    prerequisite: "Merchant Lv.15",
    stats: [
      { name: "attack", amount: 100 },
      { name: "health", amount: 25 },
      { name: "defense", amount: 30 },
      { name: "evasion", amount: "30%" },
    ],
    skill: {
      name: "Ambush",
      effect:
        "10% faster quest time. +5% Critical Chance and Evasion for the party.",
    },
    criticalHit: {
      chance: "20%",
      damage: "3x",
    },
    unlockCost: {
      coins: 50,
    },
    threatRating: 40,
    ranks: [
      {
        rank: 1,
        coins: 10,
        reward: {
          health: 0,
          attack: 0,
          defense: 0,
          skill: {
            name: "Ambush",
            effect:
              "10% faster quest time. +5% Critical Chance and Evasion for the party.",
          },
        },
        title: "The Azuman Wanderer",
        story: [
          {
            name: "Troublin Chief",
            text: "Hee hee hee! What do we have here?",
          },
          { name: "Yami", text: "Hmph. Begone, pest." },
          {
            name: "Troublin Chief",
            text: "Y'got some bad manners, lady! And weird clothes!",
          },
          { name: "Yami", text: "..." },
          {
            name: "Troublin Chief",
            text:
              "Ah hah! You smell like Azuma, the eastern human kingdom! What're ya doing all the way over here, lady? Armed to the teeth and tight lipped... Ya gotta be an assassin, right?",
          },
          { name: "Yami", text: "..." },
          {
            name: "Troublin Chief",
            text:
              "Hee hee! I knew it! Stupid humans, always killing each others!",
          },
          {
            name: "Yami",
            text: "...You're right. I traveled here to kill a tyrannical king.",
          },
          {
            name: "Troublin Chief",
            text:
              "Well! Ya can't be a good assassin if you just tell everybody that! Why'd you tell me?",
          },
          {
            name: "Yami",
            text: "Because you won't live to tell anybody. Farewell.",
          },
          { name: "Troublin Chief", text: "Eek!" },
          { name: "Yami", text: "...King Reinhold, you're next." },
        ],
      },
      {
        rank: 2,
        coins: 20,
        reward: { health: 2, attack: 45, defense: 20, skill: "---" },
        title: "Hunt or be Hunted",
        story: [
          {
            name: "Yami",
            text:
              "...The castle's security is tight. A password system that changes daily... Unscheduled guard patrols... I'll need to be-",
          },
          { name: "Argon", text: "Hi there! You, in the bushes!" },
          { name: "Yami", text: "...!" },
          {
            name: "Argon",
            text:
              "Are you here to become a knight too? Sia will be here soon! There's no need to hide, she's pretty nice!",
          },
          { name: "Yami", text: "Sia...! I need to leave. Farewell." },
          { name: "Argon", text: "W-wait! Woah! Smoke bomb!?" },
          {
            name: "Yami",
            text:
              "...I lost that fool. With Sia here... my task will be difficult. But it must be done. I cannot fail. For the Order... and for my sister's sake.",
          },
        ],
      },
      {
        rank: 3,
        coins: 30,
        reward: { health: 7, attack: 136, defense: 62, skill: "---" },
        title: "Turning Poin",
        story: [
          {
            name: "Reinhold",
            text:
              "Esteemed people of my kingdom! Thank you for coming to my sumptuous feast! It is also a perfect opportunity for you all to gaze upon my beautiful self! Do not miss this chance!",
          },
          { name: "Yami", text: "(Pompous tyrant. Typical.)" },
          {
            name: "Sia",
            text:
              "Erm, yes. Thank you for this edifying speech, your Majesty. We have gathered here today to celebrate the King's incredible generosity. In the past months, he has donated several million gold from his own coffers... ...to several local temples, schools and orphanages. All are welcome to partake, so please tell your friends and family. Long live King Reinhold!",
          },
          {
            name: "Yami",
            text:
              "(...These are not the actions of a tyrant. ...No, the Order wouldn't lie. This must be a trick.) Tyrant Reinhold, your reign ends now!",
          },
          { name: "Sia", text: "A shuriken...! The Azuman assassin!" },
          { name: "Yami", text: "I missed...!? Impossible!" },
          {
            name: "Sia",
            text: "Guards! Block off all exits! Capture this woman at once!",
          },
        ],
      },
      {
        rank: 4,
        coins: 60,
        reward: {
          health: 0,
          attack: 0,
          defense: 0,
          skill: {
            name: "Coordinated Ambush",
            effect:
              "20% faster quest time. +10% Critical Chance and Evasion for the party.",
          },
        },
        title: "Reflection",
        story: [
          {
            name: "Yami",
            text:
              "(I hesitated... And failed. Could the Order have lied...? It matters not. I am on my own, now.)",
          },
          { name: "Argon", text: "I finally found you!" },
          { name: "Yami", text: "The foolish knight!" },
          { name: "Argon", text: "Woah! I'm not here to fight!" },
          { name: "Yami", text: "I won't fall for your tricks, Reinhold dog!" },
          { name: "Argon", text: "...You missed on purpose didn't you?" },
          { name: "Yami", text: "...!" },
          {
            name: "Argon",
            text:
              "I saw you at the feast. It even looked like you regretted throwing that shuriken. The King's not a bad person, you know? He's a bit weird sometimes, but he tries his best! I'm not sure who paid you to do this, but they can't be good guys... How about going back to the castle and apologizing? I'm sure Reinhold will-",
          },
          {
            name: "Yami",
            text:
              "...Apologize? How dense. I have a lot of thinking to do. Don't follow me, if you value your life.",
          },
          {
            name: "Argon",
            text:
              "...She's not a bad person, I'm sure of it. Now I need to report to Sia... Oh man, I'm going to get chewed out...",
          },
        ],
      },
      {
        rank: 5,
        coins: 90,
        reward: { health: 10, attack: 182, defense: 82, skill: "---" },
      },
      {
        rank: 6,
        coins: 90,
        reward: { health: 12, attack: 228, defense: 103, skill: "---" },
      },
      {
        rank: 7,
        coins: 125,
        reward: {
          health: 0,
          attack: 0,
          defense: 0,
          skill: {
            name: "Ethereal Ambush",
            effect:
              "35% faster quest time. +15% Critical Chance and Evasion for the party.",
          },
        },
      },
      {
        rank: 8,
        coins: 125,
        reward: { health: 15, attack: 273, defense: 124, skill: "---" },
      },
      {
        rank: 9,
        coins: 200,
        reward: { health: 22, attack: 410, defense: 186, skill: "---" },
      },
      {
        rank: 10,
        coins: 250,
        reward: { health: 30, attack: 547, defense: 248, skill: "---" },
      },
      {
        rank: 11,
        coins: 0,
        reward: {
          health: 0,
          attack: 0,
          defense: 0,
          skill: {
            name: "Perfect Ambush",
            effect:
              "50% faster quest time. +20% Critical Chance and Evasion for the party.",
          },
        },
      },
    ],
  },
  {
    name: "Rudo",
    title: "Lone Warrior",
    prerequisite: "Merchant Lv.20",
    stats: [
      { name: "attack", amount: 80 },
      { name: "health", amount: 40 },
      { name: "defense", amount: 25 },
      { name: "evasion", amount: "0%" },
    ],
    skill: {
      name: "Rudo Blitz",
      effect:
        "30% critical hit chance and -50% break chance for the party. Lasts 1 round.",
    },
    criticalHit: {
      chance: "5%",
      damage: "2x",
    },
    unlockCost: {
      coins: 90,
    },
    threatRating: 90,
    ranks: [
      {
        rank: 1,
        coins: 20,
        reward: {
          health: 10,
          attack: 38,
          defense: 33,
          skill: "---",
        },
      },
      {
        rank: 2,
        coins: 30,
        reward: { health: 32, attack: 114, defense: 101, skill: "---" },
      },
      {
        rank: 3,
        coins: 50,
        reward: {
          health: 7,
          attack: 136,
          defense: 62,
          skill: {
            name: "Headstrong Assault",
            effect:
              "+40% Critical Hit Chance and -100% break chance for the party. Lasts 1 round.",
          },
        },
      },
      {
        rank: 4,
        coins: 70,
        reward: {
          health: 43,
          attack: 152,
          defense: 135,
          skill: "---",
        },
      },
      {
        rank: 5,
        coins: 100,
        reward: { health: 43, attack: 152, defense: 135, skill: "---" },
      },
      {
        rank: 6,
        coins: 100,
        reward: { health: 54, attack: 190, defense: 169, skill: "---" },
      },
      {
        rank: 7,
        coins: 150,
        reward: {
          health: 0,
          attack: 0,
          defense: 0,
          skill: {
            name: "Berserker Rampage",
            effect:
              "+40% Critical Hit Chance and -100% break chance for the party. Lasts 2 rounds.",
          },
        },
      },
      {
        rank: 8,
        coins: 150,
        reward: { health: 65, attack: 228, defense: 203, skill: "---" },
      },
      {
        rank: 9,
        coins: 250,
        reward: { health: 98, attack: 342, defense: 203, skill: "---" },
      },
      {
        rank: 10,
        coins: 300,
        reward: { health: 131, attack: 457, defense: 406, skill: "---" },
      },
      {
        rank: 11,
        coins: 0,
        reward: {
          health: 0,
          attack: 0,
          defense: 0,
          skill: {
            name: "Total Mayhem",
            effect:
              "+50% Critical Hit Chance and -100% break chance for the party. Lasts 3 rounds.",
          },
        },
      },
    ],
  },
]
