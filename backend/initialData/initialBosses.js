export const InitialBosses = [
    // Nerub'ar Palace
    // Ulgrax ++
    {
        "wowheadID": "215657",
        "name": "Ulgrax the Devourer",
        "description": "Queen Ansurek's evolutionary experimentation created a number of monstrous guardians for her throne, none more voracious than Ulgrax the Devourer. Driven mad by endless hunger, Ulgrax is now the ravenous protector of Queen Ansurek's court.",
        "location": "Nerub'ar Palace",
        "instanceType": "Raid",
        "imageURL": "https://bnetcmsus-a.akamaihd.net/cms/content_entry_media/DF2H305UK7471726093901017.png",
        "imageALT": "Ulgrax the Devourer",
        "phases": 2,
        "skills": [
            "434799",
            "439502",
            "436217",
            "458074",
            "439037",
            "455831",
            "435138",
            "438041",
            "434705",
            "434776",
            "455847",
            "440849",
            "441451",
            "439419",
            "435136",
            "434697",
            "435341",
            "440177",
            "438012",
            "436255",
            "438657",
            "438324",
            "455870",
            "443842"
        ],
        "guide": {
            "normal": [
                {
                    "phase": "Phase 1",
                    "description": "In this phase there are a few primary mechanics to watch for:\n* [434697] - Ulgrax crushes the current tank for big physical damage and leaves stacks of [434705] each stack reduces healing taken by 10%. Tanks swap on this mechanic.\n\n* [434776] - Ulgrax will target a random player and put a large white swirly circle around them which needs to be shared with other allies in the group. The targeted player wants to move a small distance away from the boss and wait for the mechanic to finish casting. At the end all players within the circle will be bound and pulled towards Ulgrax. Reaching Ulgrax while still bound will cause the player to die. The stength of the pull is reduced for each player that soaks the ability.\n\n* [439502] - Ulgrax shoots web across the platform at random locations and leaves [439419] at the locations that were hit. Stepping on [439419] will cause a player to take damage and be rooted for 8 seconds.\n\n* [435138] - Ulgrax belches Digestive Acid at serveral random players which will appear as green circles around them. Use those circles to remove [439419] from the platform by standing near them when [435138] expires."
                },
                {
                    "phase": "Intermission",
                    "description": "Once Ulgrax runs out of energy he leaps to the center of the platform using [435341], dealing raid wide damage and knocking players back. The further the players are from the center, the less damage they receive. Ulgrax then disappears and reapears from rifts at the edges of the platform, performing a [436217] inflicting heavy shadow damage to players caught in his path and re-entering the Darkness portal on opposite side of the arena. During this stage of the phase Ulgrax will spawn eggs on one side of the platform which in turn will spawn {216205}.\n\n* {216205} - These adds need to be tanked because they apply a stacking debuff called [439037]. Tanks need to be mindful of [439037] stacks and ask for a dispell if one is available when needed.\n\n* After {216205} is killed, it leaves behind a [438657] which players need to pick up and carry to Ulgrax in order to feed him when he leaves his Darkness portal for the last time.\n\n* [438012] - Upon leaving the Darkness portal Ulgrax will begin to scream for food, inflicting increasing physical damage to the entire raid until fed to full energy use [438657] which players previously picked up from the {216205} corpses.\n\n* While screaming for food Ulgrax will continue to gain stacks of [438041] increasing the raid wide damage taken by 10% each stack until fully fed.\n\n* Once Ulgrax is fully fed, the fight returns to Phase 1 again and continues as before."
                }
            ],
            "heroic": []
        },
    },
    // Blood Hound
    {
        "wowheadID": "214502",
        "name": "The Bloodbound Horror",
        "description": "In the dark pits below Nerub-ar Palace, the blood of the Old Gods congeals in foul, black pools. The Bloodbound Horror rises from this vile ooze - drawing everything in its path into The Unseeming.",
        "location": "Nerub'ar Palace",
        "instanceType": "Raid",
        "imageURL": "https://bnetcmsus-a.akamaihd.net/cms/content_entry_media/C9HU17NR1ENL1725495744094.jpg",
        "imageALT": "The Bloodbound Horror",
        "phases": 1,
        "skills": [
            "462306",
            "444363",
            "442530",
            "445174",
            "443042",
            "445936",
            "445016",
            "443203",
            "451288",
            "445257",
            "445570",
            "452237",
            "452313",
            "442987",
            "442604",
            "461876",
            "443305",
            "443061",
            "438696",
            "438679"
        ],
        "guide": {
            "normal": [
                {
                    "phase": "Phase 1",
                    "description": "The Bloodhound Horror fight consists of a single phase fight with two parallel realms. \nBegin the fight by splitting into two preferably even groups with each group having a tank, a healer and half the DPS. A few seconds after the fight begins The Bloodhound Horror will cast a frontal cone on the currently active tank.\n\n* [444363] - The Bloodhound Horror will cast a frontal cone on the currently active tank which does damage and applies a 40 seconds debuff on the tank and everyone who stood in the frontal. The players affected by the debuff will then be phased into [462306] for its entire duration. Tanks swap after this ability was cast.\n\n* While in [462306], players will be able to see and attack the adds that the boss spawns. The adds are:\n-- {221667} - Which casts [451288] that shields the boss for a large amount of damage and needs to be interrupted. And casts [445016] on the current highest threat target inflicting a large amount of single target damage. This add needs to be tanked!\n-- {221945} - This add is stationary and all it does is cast [445174] which summons {221986}'s that slowly move towards the boss, and if they reach the boss, they will explode moderate for raid wide damage. These adds need to be killed before reaching the boss, and both {221945}'s need to be killed before the players debuff runs out and they leave the [462306]. All adds that did not die during the debuff phase, will continue casting their abilities until the next group of players enters [462306].\n\n* In the meantime players that are in the normal realm and not affected by [444363] continue fighting the boss as before while some players will be targeted by [443042] which is 12 seconds debuff that causes tentacles to spawn under the player to impale them for a moderate amount of damage. The tentacles spring out after 3 seconds from the moment a dark patch spawned under the player therefor simply move out and continue moving out of the dark patches until the debuff runs out. Please be mindful of other players you might hit with your debuff spawns.\n\n* Occasionally The Bloodhound Horror will cast [443305] which coats the player with blood and causes them to have a heal-absord which needs to be healed through.\n\nOnce The Bloodhound Horror reaches 100% energy, it will cast [442530] which appears like an expanding circle from the boss. Simply move out to the back of the boss platform and wait for the cast to be over. At the end of it, all players within it will receive a huge amount of damage and a debuff which will continue ticking for moderate amounts of damage. And all players who were within a safe distance will receive a debuff that will deal a small amount of overtime damage that needs to be healed through."
                }
            ],
            "heroic": [
                {
                    "phase": "Phase 1",
                    "description": "On heroic difficulty The Bloodbound Horror gains a new ability called [445936] which occurs a few seconds after [444363]. [445936] forms two geysers of Black Blood on each side of the boss that slowly rotate around itself for 20 sec. Standing within a geyser inflicts huge amounts of Shadow damage every 0.25 sec. Getting hit will most likely result in death unless you use a huge defensive CD. The tank must position the [445936] in a manner so it corresponds with the positioning of the adds without blocking the team killing them from killing the adds."
                }
            ]
        },
    },
    // Sikran
    {
        "wowheadID": "214503",
        "name": "Sikran, Captain of the Sureki",
        "description": "Sikran established himself as an arrogant duelist within Queen Ansurek's court. Never knowing the cut of an enemy's blade, Sikran dispatched his rivals one-by-one and was proclaimed Captain of the Sureki by the queen herself. This indomitable fighter now ensures that any who threaten his queen fall before the throne's might.",
        "location": "Nerub'ar Palace",
        "instanceType": "Raid",
        "imageURL": "https://bnetcmsus-a.akamaihd.net/cms/content_entry_media/BSHP9U2S6KIL1726093900884.png",
        "imageALT": "Sikran, Captain of the Sureki",
        "phases": 1,
        "skills": [
            "464233",
            "464839",
            "458272",
            "458277",
            "439511",
            "435401",
            "432969",
            "439559",
            "459273"
        ],
        "guide": {
            "normal": [
                {
                    "phase": "Phase 1",
                    "description": "Sikran is a single phase boss fight with few abilities.\n* [439511] is a tank combo that consists of two [435401] hits which increase physical damage taken by 50% for each stack for 6 seconds and one [432969] which places a debuff that increase the damage of [432969] by 100% for 30 seconds. Tanks swap after the 2nd [435401] so that the offtank may receive the [432969] debuff and continue tanking the boss.\n\n* [433475] - marks random players with a red arrow. These players need to move together as a group to the edge of the platform. The boss then charges into them in turn, leaving a 20 seconds debuff which inflicts damage and reduces healing received. And leaves behind a [458272] which looks like the player and pulses damage until destroyed. \n\n* [442428] - marks random players with blue arrows. The boss then unleashes a barrage of cosmic eruptions inflicting shadow damage to all players between himself and the targeted [442428] player. Any [458272] that are hit by this eruption is destroyed leaving a 6 seconds [459273] ticking dot on all players of the raid.  \n\n* Every so often Sikran will cast [439559] which is a volley of arrows that deals high moderate damage to any players standing within 3 yards of the impact. \n\n* When Sikran reaches 100% energy he swings his polearm in a deadly arc, inflicting moderate Shadow damage to all enemies. This damage is decreased based on distance from Sikran. And any remaining [458272]s are destroyed by this effect, increasing the damage of [459273] by 25% for each destroyed [458272]."
                }
            ],
            "heroic": [
                {
                    "phase": "Phase 1",
                    "description": "On heroic difficulty, any [433475] that hit additional non-marked players, will also spawn [458272]."
                }
            ]
        },
    },
    // Rasha'nan
    {
        "wowheadID": "214504",
        "name": "Rasha'nan",
        "description": "Twisted by Queen Ansurek's experiments, Rasha'nan was transformed from a proud nerubian into a monstrous, winged horror. Trapped within her new form, shattered memories of her former self drive Rasha'nan into an unquenchable rage.",
        "location": "Nerub'ar Palace",
        "instanceType": "Raid",
        "imageURL": "https://bnetcmsus-a.akamaihd.net/cms/content_entry_media/WTETHCOAKO501725495744210.jpg",
        "imageALT": "Rasha'nan",
        "phases": 1,
        "skills": [
            "434655",
            "449734",
            "434089",
            "434407",
            "434096",
            "438957",
            "449042",
            "434668",
            "438946",
            "434579",
            "434576",
            "448213",
            "448888",
            "463428",
            "449332",
            "452001",
            "434119",
            "435793"
        ],
        "guide": {
            "normal": [
                {
                    "phase": "Phase 1",
                    "description": "Rasha'nan is a single phase boss fight with a fly-away mechanic during which the boss moves across the platform to a different location on it. The fight starts with Rasha'nan in the middle of the platform where it does not move until the fly-away mechanic. \n\n* [444694] - Is the only tank ability in the fight and tanks should swap after each cast. The effect left from the ability stacks. Rasha'nan smashes the current tank for high physical damage and leaves a dot [458067] the damage of which is calculated based on unmitigated damage; inflicts both physical and nature damage over time. Use a defensive to mitigate the damage before it is applied. \n\n* [439784] - Occasionally Rasha'nan will choose random players to apply [439784] to. Players with the debuff must move out of the raid because at the end of the debuff's duration, [439784] will create a large floor aoe and tether any player hit by it with [446349]. [446349] Slows the players movement speed by 70% and inflicts moderate amounts of damage while players remain tethered and within the area of the aoe. Upon exiting the [446349] the removal of the debuff triggers a [439778] inflicting a small amount of damage to the raid. Please note that since multiple players are tethered, be mindful of raid overall HP before breaking the tether. \n\n* [439789] - Much like the mechanic in The Dawnbreaker, in the raid, not one, but two players are infected by the ability which means 2 waves will be present in the raid. The waves consist of a thick green line, and an animated long thin line. The animated line indicates the direction to which the acid wave will move. So the ideal is that both players will position themselves with the raid between them. Each animated line facing away from the raid.\n\nUpon expiration [439789] the player affected will receive a 1.5 seconds debuff [434576] which will inflict a small amount of damage and a stun. Any other player hit by [439789] will have their movement speed reduced by 50% and gain [434579] for 15 seconds. This effect stacks so players should avoid being hit by more than one wave. Additionally, [439789] will clear any [439784] remaining on the platform.\n\n* Additionally Rasha'nan will infect random players with [439815] which upon expiration deals a small amount of damage to all players around the infected player and spawns {219739} adds which bite the initial infected player and then proceed to hunt random players with [455287] which inflicts damage and reduces movement speed by 5% per stack. The effect stacks. Simply cleave down these adds as soon as possible.\n\n* Occasionally Rasha'nan will spew [439811] on all players, which leaves [440193] on players and drops [439776] in random locations on the platform. Avoid the pools and use defensives in case healers cannot top you up. \n\nWhen Rasha'nan reaches 100% energy she will fly away to a different location on the platform and begin to cast [452806] which needs to be interrupted. Once Rasha'nan relocated to the next point, the fight will continue as before."
                }
            ],
            "heroic": [
                {
                    "phase": "Phase 1",
                    "description": "On heroic difficulty, Rasha'nan gains a new ability called [439795] which inflicts high amounts of damage and pulls all players inside the effect towards her. The effect's damage and pull strength are split evenly among players present inside the 8 yards impact area. The whole raid must stack together to mitigate this effect."
                }
            ]
        },
    },
    // Broodtwister
    {
        "wowheadID": "214506",
        "name": "Broodtwister Ovi'nax",
        "description": "Deep within the bowels of the queen's palace, Broodtwister Ovi'nax conducts abominable experiments with the black blood found in Azj-kahet. This corpulent horror lumbers through the palace's cavernous depths, regurgitating inky sludge onto hatchlings to observe its gruesome effects.",
        "location": "Nerub'ar Palace",
        "instanceType": "Raid",
        "imageURL": "https://bnetcmsus-a.akamaihd.net/cms/content_entry_media/5VBKA2B0HE441725495744178.jpg",
        "imageALT": "Broodtwister Ovi'nax",
        "phases": 1,
        "skills": [
            "442526",
            "442430",
            "442802",
            "441362",
            "438807",
            "446349",
            "442257",
            "450362",
            "446694",
            "458212",
            "446690",
            "446700",
            "442263",
            "442251",
            "441612",
            "452802",
            "442799",
            "450661",
            "446351"
        ],
        "guide": {
            "normal": [
                {
                    "phase": "Room Layout",
                    "description": "Broodtwister Ovi'nax boss room is split into 3 sections. All 3 sections contain 3 types of eggs. Small cluster of eggs, medium eggs and large eggs. Each of the sections has one type of egg that is more dominant than the rest. \n\n- The south-west side has more big eggs which spawn {219045}s for the tanks to pick up. They cast [438807] inflicting moderate damage and receiving a stack of Frenzy which increases its damage by 25% until defeated. The effect stacks. When hatched as a result of coming in contact with [442799] the spiders will mutate, increasing their health and the damage of [438807] until slain.\n\n- The north-west side has more medium eggs which spawn {219046}s that cast a raid wide AOE spell [446700] that needs to be interrupted. When hatched as a result of coming in contact with [442799] the {219046} becomes mutated, increasing their health and the cast speed of [446700] by 50% until slain.\n\n- The east side has more small egg clusters which spawn {220626} that that fixate random players and need to be CCed and killed ASAP. Failure to kill them will cause them to [442257] the fixated target and multiply by incubating inside the bodies of players. When hatched as a result of coming in contact with [442799] the parasites become mutated, increasing their health and movement speed until slain."
                },
                {
                    "phase": "Phase 1",
                    "description": "At the start of the fight the tanks want to pull the boss towards the platform they wish to start the encounter on. Once the boss is positioned within the borders of the platform, the boss will then begin by Ingesting Black Blood.\n\n* After the first tank buster ability [441362] Ovi'nax will move towards the cluster of Black Blood and begin devouring it. The tank that received the [441362] needs to be topped up because at the end of its duration the tank will explode for raid wide damage based on the tank's missing health.  This mechanic will persist through the entire fight and it is the tank swap mechanic.\n\n* While [441362] is active the canisters being consumed unleash torrents of [441612] dealing moderate amount of damage on impact and inflicts a healing absorb to all players. Upon finishing, Ovi'nax gains [450362] which causes the boss to emit waves of shadowy energy that deal damage and apply a heal absorb to all players every 7.5 seconds. Alongside this effect, Ovi'nax continues to cast [441612] inflicting shadow damage and a heal adsorb upon impact. \n\n* After ingesting the Black Blood, Ovi'nax will inject 2 random players with [442526]. After 8 seconds the affected player and all those standing within their range will erupt for a moderate amount of damage and receive a large heal absorb. Any eggs that are within the 4 yards range of the eruption will also hatch and cause the corresponding add to spawn. Big eggs will spawn {219045}s for the tanks to pick up. Medium eggs will spawn {219046}s that cast a raid wide AOE spell that needs to be interrupted. And small egg clusters will spawn {220626}s that need to be CCed and killed ASAP. If not tended to will duplicate out of control and thus overrunning the raid.\n\n* After ingesting the Black Blood the canister trigger the [442799], causing the leftover of the Black Blood to slowly leak onto the platform, expanding in side and covering most of the platforms territory. The pool itself inflicts a small amount of damage and places a moderate heal absorb on players who come in contact with it.\nAny leftover eggs that were not broken by [442526] will hatch its relative add and causing a [450661] which inflicts high amounts of raid damage every 2 seconds for the next 30 seconds."
                }
            ],
            "heroic": [
                {
                    "phase": "Phase 1",
                    "description": "On heroic difficulty, Broodtwister Ovi'nax gains an additional ability called [446349] which applies to 2 random players inflicting nature damage and reducing their movement speed by 70% until dispelled. Upon removal [446349] triggers a [446351] which inflicts moderate amounts of damage to all players within the effect area and roots them for 8 seconds. The root does not apply to the initially affected player."
                }
            ]
        },
    },
    // Princess 
    {
        "wowheadID": "218425",
        "name": "Nexus-Princess Ky'veza",
        "description": "Nexus-Princess Ky'veza arrived at Nerub-ar Palace only recently, quickly establishing herself as a confidante of Queen Ansurek. However, rumors abound within the inner court that she may harbor a dark and deadly secret. If discovered, the princess is prepared to dispatch all witnesses without mercy...",
        "location": "Nerub'ar Palace",
        "instanceType": "Raid",
        "imageURL": "https://bnetcmsus-a.akamaihd.net/cms/content_entry_media/5h/5H8M5M78FIVE1725495781158.jpg",
        "imageALT": "Nexus-Princess Ky'veza",
        "phases": 2,
        "skills": [
            "436867",
            "437620",
            "438245",
            "439409",
            "437343",
            "435486",
            "414186",
            "434645",
            "436749",
            "440149",
            "440377",
            "440709"
        ],
        "guide": {
            "normal": [
                {
                    "phase": "Room Layout",
                    "description": "Nexus-Princess Ky'veza's boss room' specifically the center part has a Hexagon shaped platform that should be used as reference to positioning of some of her abilities. Tank the boss on one of the corners of the Hexagon. \n\n*** Any player that drops below 10% will be instantly killed by [436749]. This effect applies throughout the entire fight."
                },
                {
                    "phase": "Phase 1",
                    "description": "Nexus-Princess Ky'veza is a pretty straight forward fight with few abilities. Though they are few, they hit hard. \nBegin the fight by positioning the boss on one of the edges of the hexagon. This will be the tanks spot. \n\n* [440377] is a tank buster ability that is also a cast so make sure not to swap before the cast is over. At the end of [440377] Ky'veza applies 4 stacks of [440576] which inflict a small amount of damage over time and increases [440377] damage by 25% for each stack. This debuff lasts for 35 seconds and tanks should swap after each full application.\n\n* In the meantime Ky'veza will target random players with [436867] which upon expiring deals high amounts of damage to the player and leaves a [437371] at the location where the player's debuff expired. After a few moments, these phantoms turn into [437620]s that inflict high damage to anyone standing inside them, small amounts of damage to the entire raid and pulling all players towards the center of the rift. Because of this, players targeted by Ky'veza's [436867] each need to stand on one of the edges of the hexagon on the floor. In addition, the players targeted will also receive [437343] which will inflict moderate amounts of damage and upon expiration after 9 seconds, even more damage. The effect stacks therefor players should about being hit by any abilities that cause [437343].\n\nAt the same time the [437620]s appear, another such rift will also spawn at the current tank's location. Since each rift will try to pull all players towards its own center, positioning the rifts in a near perfect circle around the raid will cause the raid to be pulled in all directions equally and thus remain in the middle of the room unharmed by the rifts. \n\nOnce the [437620] disappear, the tanks should return the boss to the corner of the hexagon they tank her at. \n\n* Additionally, Ky'veza's [437371]s will respawn and target random players from the raid in order to perform [438245]. After 5 seconds the [437371] will charge the targeted player and inflict [437343] and additionally spawn a new [437620] on the location the player was hit by the [437371]. Important to note that any player that will be on the phantom's path will also receive [437343]. Therefore the players targeted need to move out of the raid and position themselves as if they were trying to position [436867] spawns. \n\n* Occasionally Ky'veza will fling [439576] at random players which are 3 lines of players need to dodge. Ky'veza spawns multiple such daggers."
                },
                {
                    "phase": "Phase 2",
                    "description": "Upon reaching 100% energy Ky'veza will enter the [435414] phase that will continue for 24 seconds during which all players receive constantly damage every second. If she ever starts Phase 2 a 3rd time, she will enter [442278] which will never end. This is the Enrage mechanic. \n\nDuring [435414] [437371] will dive through the shadows to inflict moderate amounts of damage to targeted players and any player upon their path. These will be visible as long lines that players who are not targeted by the ability should dodge. While the players that are targeted should try to stay still and let others dodge. \n\nAt the end of the phase (24 seconds) the fight continues as it does in Phase 1."
                }
            ],
            "heroic": [
                {
                    "phase": "Phase 1",
                    "description": "On heroic difficulty all players targeted by [437371] will also receive cast [439409] when [437343] expires, shooting out 3 orbs in a triangular  shape that deal huge amounts of damage to anyone hit by them. Players who were targeted need to stay out of the raid group until the debuffs expire."
                },
                {
                    "phase": "Phase 2",
                    "description": "During [435414] Ky'veza will also cast [434645] which veils sections of the room with waves of darkness inflicting high amounts of damage to players caught within. The sections change locations every few seconds and look like pizza slices."
                }
            ]
        },
    },
    // Silken Court
    {
        "wowheadID": "223779",
        "name": "The Silken Court",
        "description": "Scarab Lord Anub'arash and Skeinspinner Takazj are Queen Ansurek's most trusted advisors, yet these two powerful nerubians harbor a hatred for each other even more powerful than their loyalty to the throne. While unleashing their considerable strength onto their enemies, each also fights to ensure their counterpart doesn't survive.",
        "location": "Nerub'ar Palace",
        "instanceType": "Raid",
        "imageURL": "https://bnetcmsus-a.akamaihd.net/cms/content_entry_media/HGJNX3R5ZXYV1725495744125.jpg",
        "imageALT": "The Silken Court",
        "phases": 5,
        "skills": [
            "439992",
            "440158",
            "450980",
            "438677",
            "438355",
            "451277",
            "449857",
            "438801",
            "440179",
            "440001",
            "460360",
            "442994",
            "438218",
            "450045",
            "450483",
            "455363",
            "455796",
            "455849",
            "460357",
            "460359",
            "455850",
            "460263",
            "460281",
            "455863",
            "440168",
            "438706",
            "438773",
            "455080",
            "440504",
            "438656",
            "438200",
            "460600",
            "463461",
            "438708",
            "449993",
            "456235",
            "441634",
            "441626",
            "450129",
            "441782",
            "441772",
            "460364",
            "463464",
            "440246",
            "443092",
            "443081",
            "443063"
        ],
        "guide": {
            "normal": [
                {
                    "phase": "Anub'arash and Skeinspinner Takazj",
                    "description": "The fight consists of 3 phases and 2 intermissions where one of the bosses is more dominant than the other. A dominance that is displayed by a special ability being introduced into each phase. It is important to note that the bosses share their health and the fact that Takazj will prefer to stand still and not move because he is a caster. So you always want to drag Anub'arash to Takazj location in order to cleave the bosses.\n\nIn phase 1 the major Anub'arash ability is [440158] which needs to be stopped by using Skeinspinner Takazj's [439992].\nIn Phase 2 the major Skeinspinner Takazj ability is [438355] which needs to be stopped before the cast is complete by dispelling Anub'arash's [438677].\nIn phase 3 all boss abilities seen throughout the fight are now active with another addition of [443063] by Anub'arash."
                },
                {
                    "phase": "Phase 1",
                    "description": "Phase 1 begins with both bosses being present in the room. \n\n<b>Anub'arash</b>:\n\nEach tank will want to agro a single boss and swap upon Anub'arash [438218]. This ability does a moderate amount of tank damage and applies a 35 seconds debuff which increases the damage of the next [438218] by 100% for each stack.\n\nOnce Anub'arash reaches 100% energy he will then burrow underground and begin his [440158]. Anub'arash appears in one of the edges of the room and charges forward inflicting high damage to any player in his path and upon colliding with the wall released a deadly shockwave which inflicts very high amounts of damage to all players. In order to stop the charge, two players must walk into Skeinspinner Takazj's [439992] which looks like a webbed cocoon, and become bound to one another with a set of [440001]. These players then need to stretch the webs out and \"catch\" Anub'arash with them when he charges. Successfully catching him will stop the charge and debuff Anub'arash for 10 seconds causing him to receive 100% more damage for its duration.\n\nApart from the charge, Anub'arash has two more abilities he will use:\n* [440504] which is a large frontal cone that inflicts a moderate amount of damage to any player caught in it. But more importantly it also [449857] the players caught, causing them to be stunned until the spike upon which they were impaled is destroyed by other players. While [449857] players also receive moderate amounts of ticking damage every second and must be spot healed.\n\n* [438801] spawns 3 {218884} that fixate random players and chase them, inflicting damage with [438773] which is a stacking damage taken debuff and [438706]which slowly causes them to become more tanky. These adds need to be kited under the boss and cleaved. If not done by the time they reach 100% energy they receive [455080] making them immune to all CC and increase their movement speed by 25%.\n\n<b>Skeinspinner Takazj</b>:\n\nLike Anub'arash, Skeinspinner Takazj has an ability that needs to be tanked, however not as deadly as Anub'arash. Takazj throughout the entire fight will cast a single spell at the current target. During phase 1 the spell is [438200] which does moderate initial hit damage and leaves a dot that does small amounts of damage every 3 seconds for the duration of 18. Healers can dispel it however it will be applied again and again with each cast. Due to this ability, the tank tanking Takazj might need to occasionally be spot-healed. \n\nEvery so often Takazj will target random players with [438656]. These players will have a green circle around them and take a moderate amount of damage when the cast is done, and apply a debuff that lasts 20 seconds inflicting small amounts of nature damage every 2 seconds.  Any player caught in the green circle when it expires will receive the same debuff even if they were not affected by [438656]. So you might want to spread out a little for that cast.\n\nTakazj will cast [439992] which will spawn webbed cocoons in the areas of impact, that will remain until either players run into them and trigger [440001] or cleared by immuneties.\n\nOnce Anub'arash begins his [] Takazj will recolate using [450045]."
                },
                {
                    "phase": "Intermission 1",
                    "description": "At about 65%-70% boss health the first intermission begins. Anub'arash burrows under the boss room and disappears for the duration of this intermission. In the meantime Takazj teleports to the middle of the room and begins his [450980] cast. [450980] shields Takazj for a huge amount of damage and begins to spin cones of webs throughout the chamber. These webs inflict a small amount of damage to players and reduce their movement speed by 20% while. Periodically these webs will explode, knocking all players caught inside them back and inflicting high amounts of damage to the players. In addition this explosion also applies a 12 seconds debuff, inflicting small amounts of damage to the player.\n\nIn the meantime Takazj himself will cast [460600] which deals constant damage for 30 seconds and applies [463461] to all players which increases the damage taken from [460600] by an additional 25%. This effect stacks.\n\nThis essentially is a break the shield before the boss kills you phase."
                },
                {
                    "phase": "Phase 2",
                    "description": "After Takazj's shield is broken, Anub'arash reappears and the fight continues. Anub'arash will no longer use [440158] and Takazj will no longer use [439992] and instead they both gain new abilities.\n\n<b>Anub'arash</b>:\n\nAnub'arash gains a new major and important ability [438677]. This debuff causes the player to suffer nature damage every second and increase their damage taken by 20%. This effect stacks. Upon removal the swarm releases a [449993] which does raid wide damage and Jumps to the closest player or Takazj if the player is close enough to him. Once 5 [438677] landed on a single target they suffer from [456235] and become disoriented for 15 seconds and all damage taken by the,m is increased by 100%.\n\n[438677] must be dispelled near Takazj when he teleports to the middle and starts casting [438355] in order to stop the cast.\n\nAnub'arash will continue using all his other abilities during this phase, which are: [438801], [440504] and [438218].\n\n<b>Skeinspinner Takazj</b>:\n\nTakazj's [438200] now transformed into [441772] which does the same as [438200] but instead of Nature damage, it is now Shadow damage. \n\nInstead of [439992] Takazj now uses [441634] which pulls all players to Takazjs location inflicting a small amount of damage, and an even smaller amount every 2 seconds while within the pull range. And binds each player top another player with [440001]. The players must run away from Takazjs [450129] and away from their partner in order to  break the webs.\n\nOn occasion Takazj will cast a frontal cone, just like in Intermission 1, [441782] which will cause a moderate amount of damage and knock back any player caught in it. \n\nThe final and biggest and most dangerous ability of this fight is [438355]. Takazj will teleport to the center of the room and begin casting [438355]. If the cast goes off the raid will receive a huge amount of shadow damage and a ticking dot for another large chunk of damage. In order to prevent the cast from going off, 3 players with [438677] must get close to Takazj and be dispelled. As stated before upon removal the swarm releases a [449993] which does raid wide damage and Jumps to the closest player or Takazj if the player is close enough to him. Therefore only the players with the swarm must be close to Takazj. The rest of the raid must get away in order for the swarm to land on Takazj. \n\nIf the dispels are successful, Takazj will become disoriented for 10 seconds and all damage received by him will increase by 100%."
                },
                {
                    "phase": "Intermission 2",
                    "description": "At around 45%-35% boss HP, Intermission 2 will begin. Takazj will disappear from the boss room and only Anub'arak will remain. He will then position himself in the middle of the room and begin casting [451277]. [451277] Will shield Anub'arash for a huge absorb shield and he will begin unleashing [460364] which much like Takazjs [460600] will causing raid-wide periodic damage every second for the next 8 seconds and apply [463464] which will increase the damage from [460364] by 35% for each stack.\n\nAdditionally Anub'arashs [451277] will cause [443071]s which creates large AOE circles that then explode upwards, causing high amounts of damage to players caught in them and impaling them. Played who are [449857] will be taking moderate tick damage and are stunned. In order to free them the spike upon which they are impaled must be destroyed. \n\nThe phase will end once Anub'arashs absorb shield is completely depleted and phase 3 begins."
                },
                {
                    "phase": "Phase 3",
                    "description": "This is the final phase of the boss fight and the most complicated mechanically. In this phase both bosses have all of their abilities from all phases except one: Takazj's [439992]. This means that Anub'arash will use his [440158] and this time it needs to be stopped using the [440001] from Takazjs [441634]. What this really means is that at least 1 pair of players needs to stay tethered to each other. Which will result in constant damage to them so they will need to be spot healed.\n\nAdditionally Takazjs [438355] will also be cast during this phase, which means players who have the [438677] debuff on them will have to be spot-healed until the boss begins the cast. The players then need to move to the center and get dispelled to stop the [438355] cast. \n\nFinally, Anub'arash receives another new ability called [443063] which will inflict a small amount of damage to all players every second BUT will increase in damage as the cast continues. This lasts for 8 seconds."
                }
            ],
            "heroic": [
                {
                    "phase": "Entire Fight",
                    "description": "As of recent patches there is no real difference between the Normal and Heroic modes of the fight. Previously players needed to have 2 tethers to stop Anub'arashs charge on heroics, however it was changed and now the only difference between normal and heroic are the debuff %.  Meaning when one ability increased damage received by 25% it will now be 50%. Etc."
                }
            ]
        },
    },
    // Queen Ansurek
    {
        "wowheadID": "219778",
        "name": "Queen Ansurek",
        "description": "After a revelation of traitors in her court, Queen Ansurek decides she must eradicate the palace's invaders herself. However, paranoia over whom she can trust gnaws at her psyche. With her allies dwindling, Queen Ansurek may delve into dark powers to attain victory, even if that means her most loyal soldiers become her next meal...",
        "location": "Nerub'ar Palace",
        "instanceType": "Raid",
        "imageURL": "https://bnetcmsus-a.akamaihd.net/cms/content_entry_media/N8P9FS1SP0YG1725495744206.png",
        "imageALT": "Queen Ansurek",
        "phases": 3,
        "skills": [
            "438846",
            "437417",
            "447076",
            "448458",
            "449940",
            "449986",
            "444829",
            "445422",
            "445152",
            "445877",
            "443915",
            "441556",
            "447965",
            "447456",
            "447411",
            "438976",
            "440607",
            "445268",
            "437093",
            "436799",
            "443325",
            "443336",
            "437592",
            "451278",
            "464628",
            "464638",
            "464643",
            "460133",
            "438481",
            "437078",
            "439814",
            "441958",
            "440899",
            "441084",
            "439299",
            "447170",
            "451607",
            "447240",
            "460366",
            "464056",
            "464055",
            "447983",
            "443403",
            "460218",
            "448660",
            "450191",
            "447950",
            "447999",
            "448176",
            "448046",
            "448300",
            "462693",
            "448488",
            "448147",
            "460315",
            "462692",
            "451600",
            "455374",
            "449235",
            "443888",
            "455387",
            "444507",
            "444502",
            "445623",
            "461408",
            "446012",
            "445013",
            "445021",
            "441865",
            "441872",
            "443667",
            "443720",
            "443396",
            "451832"
        ],
        "guide": {
            "normal": [
                {
                    "phase": "Phase 1",
                    "description": "Queen Ansurek's fight happens on a rather large first platform for a reason, some of her abilities leave pools of AOE on the floor that will disappear only at the beginning of the 2nd Phase. Additionally, the raid needs to split evenly for Phase 2.\n\nThe queen begins by [440899]ing the currently active tank.  [440899] Inflicts a large amount of damage and applies a 30 seconds debuff which not only damages the tank further but increase their Physical damage taken by 500%. As soon as [440899] is cast, tanks must swap. \n\nIn addition to the tank effect, [440899] creates an [441084] which shoots outwards, inflicting moderate damage to all players and creating large pools of [437078] that tick for high amounts of damage each second a player stands in them. Therefore the whole raid must move as a unit after every [440899]\n\nRight after casting [440899] Queen Ansurek then casts [437093] which deals a HUGE amount of tank damage and applies an even bigger healing absorb on the tank. Healers should be ready to clear the absorb from the tank as soon as possible. \n\nQueen Ansurek then proceeds to infect a random player with [437592] which appears as a green circle. Once the debuff runs out, the player will drop [438846] under their fit and be knocked away. Anyone standing in the debuff will also take damage and get knocked away when it expires.\n\n[438846] is a circle with a small drop of Froth in the middle in the shape of a slime bubble. Toughing the slime bubble will cause it to burst, launching all players withing its 8 yards range into the air and inflicting them with  [464638]. Each player standing within the circle when the bubble was burst, will reduce the damage of [464638]. The burst [438846] will also create [438481] which players need to dodge. \n\nThe player who touched the [438846] will become afflicted with [451278] and must move away from the raid before exploding.\n\nThis [438846] must be untouched by players until Queen Ansurek begins casting [437417]. [437417] will cause a huge amount of damage and debuff damage to all players that tough it. In order to avoid touching it, all players must position themselves inside the [438846] circle, and let a single assigned player burst it by stepping in its center. All players within its ranged will  be flung upwards, above the [437417] therefore dodging its deadly effects. However it must be timed correctly, depending on the Queen's cast and the distance between her and the [438846] blob.\n\nAdditionally, Queen Ansurek will use two more abilities during this phase which are [439299] and [439814].\nUpon cast, [439299] will target random players in the raid and pull bladed webbings towards each player's location. Failing to dodge the blades will cause in moderate amounts of damage to all caught in them and 95% movement speed reduction for 3 seconds.\n[439814] is a raid wide cast that apples webs to all players, rooting them in place. These webs must be destroyed in order to free the players. Since it is a raid wide mechanic, the whole raid wants to stack closely in order to help each other destroy the roots."
                },
                {
                    "phase": "Intermission 1",
                    "description": "Once Queen Ansurek cast [437592] three times, or has been brought to 35% health the first intermission phase will begin. \n\nQueen Ansurek retreats to the middle of the platform, shields herself for a large amount of health and begins to cast [447076] which tethers all players to her and begins assaulting the raid with [447532]. [447532] slows all players by 8% and increases the damage taken from [447411] by 20%. Each cast of [447532] also releases [451607] inflicting moderate amounts of damage to players in their path, knocking them away and applying an extra [447532] stack. \n\nEvery few seconds Queen Ansurek will use [447411], violently yanking all players towards her and inflicting a  moderate amount of Nature damage.\n\nThis Phase will end when her shield has been depleted and Phase 2 will begin."
                },
                {
                    "phase": "Phase 2",
                    "description": "At the beginning of phase 2, Ansurek will leave the platform, causing all the venom to disappear and spawns 2 adds called {223150}s. These adds must be tanked each in their own corner close enough to the platform behind them. \n\n{223150} cast [447950] which needs to be interrupted or else does a huge amount of damage to a random player. Additionally, while alive the {223150}s [447999] ability will periodically inflict damage to all players withing 45 yards.\n\nUpon death, the {223150} will cause a [448046] inflicting a small about of damage within 45 and knocking all players within the same range back. The platform then becomes covered in [448078], while the players should be safely knocked back to the next platform. \n\nThe next part of the phase consists of 3 platforms. Players must advance through these platforms and reach the Queen again on the highest middle platform. \n\n-- First Platform:\nOn the first platform players will face 2 adds: \n{223204} - Which casts [448147] dealing high amounts of damage to the current tank and knocking them away. And ejecting [460315] which deal a moderate amount of damage on impact and knock anyone who got hit, away.  \n{224368} - Teleports away and casts [451600] which damages anyone who and knocks them away. \n\nWhile fighting those adds, Queen Ansurek will continue to cast [450191] to try and pull players off the platforms so always be mindful of your positioning.\n\nAfter both adds are dead, players must click the web-crystals on the side of the platform in order to create a bridge to the next platform. On the bridge the tank must collect {223674} and let the dps cleave them on the 2nd platform.\n\n-- Second Platform:\nLike the first, on the 2nd platform players will once again fight 2 adds:\n{223318} - Will periodically infect players with [447965] inflicting small amounts of damage every 1.5 seconds for the next 12 seconds. It also casts [448458] and if not killed before the cast is complete the raid will wipe. Prioritize killing this add on the 2nd platform before killing {224368}.\n{224368} - Teleports away and casts [451600] which damages anyone who and knocks them away. \n[447965] - is a dot being cast on a random player that can be dispelled. While active it does small amounts over damage every 15 seconds for the next 12 seconds.\n\nOnce again the Queen continues to cast  [450191] and after the adds are dead, click the web-crystals on the side of the platform in order to create a bridge to the next platform. Let the tank collect the {223674} and continue to the 3rd and last platform in this phase.\n\n-- Third Platform.\nMuch line the initial platform where the boss fight was started, the 3rd platform spawns a {223150} which needs to be tanked, interrupted and positioned so that the [448046] upon {223150}'s death will safely knock back all players to the final platform to face Queen Ansurek again."
                },
                {
                    "phase": "Phase 3",
                    "description": "Once the raid arrives on the final platform of the room, phase 3 begins. \nQueen Ansurek jumps onto the platfrom after finishing her [449986] cast , dealing a moderate amount of damage to all players and granting her [445268] which causes her to constantly pulse for a small amount of damage and slowly increase whenever [451802] open. \n\nAnsurek will almost immediately cast [443325] on the current tank which deals a large amount of damage and puts a debuff on them. When the debuff expires [443718] will erupt from the tank spawning {221344}s which slowly move towards the Queen. Should they reach the queen, she will devour them for huge raid wide damage and receive a damage increase buff for the next 20 seconds. Each such hatchling will increase her damage by 20%. The effect stacks.\n\nIn the meantime right after the tanks swapped after [443325] Ansurek will cast [443336] which will do a huge amount of damage and leave 5-6 stacks of [443336] each increasing physical damage taken by 35%. The debuff lasts 45 seconds. Additionally [443336] will cause [443396] which deals raid wide damage with each hit.\n\nAnsurek will next cast [438976] on two random players which will explode for a moderate amount of damage. The further each player is from the explosion the less damage they will receive. \n\nAfter some time into the phase Ansurek will cast [443888] on two random players. Upon expiration an [443915] will spawn on each of these players and knock them forward. These [443915] need to be placed in a manner which the raid would be able to use in order to avoid being hit by [445422]. Namely one towards the inner edge of the platform and one towards the outer edge. Once Ansurek uses [445422], all players will be tethered, slowly and slowly pulled towards her while a wall of shadow is moving towards the center of the platform. Once that wall of shadows passes the outer [443915], the raid needs to walk into the inner [443915] and will be teleported to the outer [443915] after which the portals will explode for moderate raid damage. \n\nIn addition to that, Queen Ansurek will use [444829] which will summon 3 adds called {221863}. They have an absorb shield and will begin to cast [445021] as soon as they arrive. [445021] causes small amounts of raid damage that will continuously increase with each successful cast. A 100% damage increase per cast. They need to be killed, interrupted when possible, and once they die, they drop [445152]. These Essences need to bee picked up by a player and carried through an [443915]. If they are not picked up they will be confused by Queen Ansurek for high raid-wide damage and a 40% movement speed reduction to all players. Additionally she will receive a 100% damage increase buff for the next 20 seconds. Once the player with the essence moves through the portal, it will cause it to explode, so the raid needs to move as one and quickly. \n\nLike in Phase 1 [439299] will be present through this entire phase as well."
                }
            ],
            "heroic": [
                {
                    "phase": "Phase 1",
                    "description": "On heroic difficulty [437592] targets 2 players, not just one, and in order to trigger [438846] in each [437592] the raid must be split EVENLY between the 2 circles. If the groups are not split evenly when [438846] is triggered the application of [464638] will become deadly. \n\nAdditionally, the person who triggers [438846] will now receive a debuff called [441692] which increases the damage of the next trigger by 1000% should it be the same player. This will KILL the player. Therefor since [437592] is cast 3 times during the first phase, the group will need to assign 2 new people for each set of [437592]. Therefore 6 people from the raid need to be triggering the [437592] in your desired set order.\n\nAnd finally, [439814] leave behind a [441958] AOE that slows all players within by 25% and inflicts small amounts of damage ever 0.5 seconds. Meaning the raid has to move not only on [440899] but now also after [439814] have been dealt with."
                },
                {
                    "phase": "Intermission 1:",
                    "description": "On heroic difficulty, when Ansurek casts [447076] and applies [447170] the area around the player is now also a small AOE. Players want to keep a small amount of distance from each other as to not cause extra damage in an already quite difficult phase."
                },
                {
                    "phase": "Phase 2",
                    "description": "During the first adds Phase on the main platform {223150} will now also cast [448176] on a random player location. These are orbs that shoot outwards from the location they have spawned in, causing high amounts of damage to any player hit on their path and knocking them away. Dodge them. \n\n-- All Platforms:\nLike the first intermission, Queen Ansurker's [450191] continues to inflict a small area damage around players when she yanks them. Try to spread out a bit.\n\nAdditionally, the {223674} adds now apply a stacking debuff called [449236] which increases damage taken by 2% per stack. This might seem insignificant at first however these adds apply those stacks VERY FAST. CC and cleave them as soon as the tank pulls them to the platform adds. \n\n-- First Platform:\nNo significant changes here.\n\n-- Second Platform:\n[447965] - that is cast on a random target now also causes [447983] upon dispel. [447983] causes a moderate amount of damage raid-wide (100 yards). Make sure the raid is topped before dispelling. \n\n-- Third Platform:\nJust like with the main platform add, here the {223150} will now also cast [448176] on a random player location. Dodge them."
                },
                {
                    "phase": "Phase 3",
                    "description": "The main changes on this phase are additional effects to some of Ansureks already existing abilities in this phase.\n\nFirst - [443915], the portals now apply [455387] to players that pass through them, causing them to explode for moderate amounts of damage to themselves and 3 yards around them. Upon existing the portal the raid needs to spread out in order not to damage each other.  Additionally after the [443915]s were used, they explode outwards, flinging [444507] in all directions which cause high amounts of damage and knock players back. Dodge them!\n\nSecond - Any [445152] that were not picked up will cause an even higher amount of raid-wide damage.\n\nThird - [438976] now also causes [441865] tethering all raid players to the location of the [438976], splitting the raid evenly. Each such shackle will slowly pull the players towards it and if touched the player will then be stunned by [441872]. Each player wants to dps the shackle they are NOT bound to, as soon as possible. \n\nAnd finally, both now [443336] and {221344}s spawned as a result of [443325] will leave behind a [443403] puddle upon expiration or death."
                }
            ]
        },
    },
    // TWW Season 1 Dungeon Bosses //
    //•	Ara-Kara, City of Echoes
    //Avanoxx
    {
        "wowheadID": "213179",
        "name": "Avanoxx",
        "description": "Deserted when Ara-Kara fell to ruin, the creature known as Avanoxx started as nothing more than a humble spider. Years of isolation in an area ripe for feeding have left her free to grow, overseeing her children, her followers, and her territory with unmatched size and ferocity.",
        "location": "Ara-Kara, City of Echoes",
        "instanceType": "Dungeon",
        "imageURL": "https://bnetcmsus-a.akamaihd.net/cms/content_entry_media/j6/J62U5IJR2X071723561214954.png",
        "imageALT": "Avanoxx",
        "phases": 0,
        "skills": [
            "438471",
            "438476",
            "438490",
            "438473",
            "434830",
            "446788",
            "436614"
        ],
        "guide": {
            "normal": [
                {
                    "phase": "Normal and Heroic difficulty",
                    "description": "Avanoxx has a few abilities to deal with during the fight. One of the most important of them is [438476] which causes Avanoxx to release a loud screech, calling forth {218961}s from their eggs and inflicting Physical damage every 0.5 sec to all players for 3 sec. The {218961}s must be killed as soon as possible without reaching their fixated target. When they do reach their target they start biting their target with increasing damage each bite.\n\n[438471] - is a tank ability during which she leaps to her primary target and unleashes 3 consecutive bites. Each bite inflicts Physical damage and the final bite further increases damage taken by 50% for 10 sec. Use a solid defensive. \n\n[438473] - Avanoxx slings toxic webs in all directions, inflicting Nature damage every 1 sec to all players for 5 sec. Additionally, this leaves behind [434830] at the targets' locations, which inflict Nature damage to players within 2.5 yards of each impact. [434830] ensnares players standing within, reducing movement speed by 30% and inflicting Nature damage every 1 sec. This effect stacks. Upon reaching 5 applications, the webbing develops into a [436614]. [436614] fully encases the player, incapacitating them for 10 sec. Do not stand in the webs."
                },
                {
                    "phase": "Mythic difficulty",
                    "description": "On Mythic difficulty Avanoxx gets the ability [446788] which causes her to feast on any {218961}s that reach her, increasing her damage done by 50% for 12 sec. This effect stacks which adds even more urgency to killing the adds as soon as possible."
                }
            ],
            "heroic": []
        },
    },
    // Anub'zekt
    {
        "wowheadID": "215405",
        "name": "Anub'zekt",
        "description": "While Anub'zekt has not yet earned his own ascension, he has been granted the honor of overseeing the Ara-Kara harvesting operation. Fiercely tactical and immensely strong, Anub'zekt will not hesitate to step in should his forces prove insufficient in their defense of Ara-Kara.",
        "location": "Ara-Kara, City of Echoes",
        "instanceType": "Dungeon",
        "imageURL": "https://wow.zamimg.com/uploads/screenshots/normal/1185634-anubzekt.jpg",
        "imageALT": "Anub'zekt",
        "skills": [
            "433425",
            "433747",
            "433766",
            "433740",
            "433677",
            "442210",
            "433781",
            "433443"
        ]
    },
    // Ki'katal the Harvester
    {
        "wowheadID": "231649",
        "name": "Ki'katal the Harvester",
        "description": "As one of Ansurek's ascended, Ki'katal has been charged with overseeing the harvest of Black Blood from the very feet of the Queen's own citadel. Harsh and unrelenting, Ki'katal will stop at nothing to see the harvest continue, utilitzing every enhanced ability at her disposal.",
        "location": "Ara-Kara, City of Echoes",
        "instanceType": "Dungeon",
        "imageURL": "https://wow.zamimg.com/modelviewer/live/webthumbs/npc/225/117473.webp",
        "imageALT": "Ki'katal the Harvester",
        "skills": [
            "431985",
            "432117",
            "432031",
            "432119",
            "461487",
            "432227",
            "432130"
        ]
    },
    // Ara-Kara, City of Threads
    //Orator Krix'vizk 
    {
        "wowheadID": "216619",
        "name": "Orator Krix'vizk",
        "description": "Orator Krix'vizk of the Fifth Strand desires nothing more than ascension, and spends his days extolling the virtues of Queen Ansurek in hopes of gaining her favor. Despite his obsession, he is not without his defenses. Should any cross the Orator, they will find the sound of his bark is far, far worse than his bite.",
        "location": "City of Threads",
        "instanceType": "Dungeon",
        "imageURL": "https://bnetcmsus-a.akamaihd.net/cms/content_entry_media/pi/PI374LG2PUZU1723561400369.png",
        "imageALT": "Orator Krix'vizk",
        "phases": 0,
        "skills": [
            "434710",
            "434779",
            "434829",
            "434926",
            "434722",
            "448561"
        ],
        "guide": {
            "normal": [
                {
                    "phase": "Normal and Heroic difficulty",
                    "description": "The boss begins by casting [434710] which binds all players with dark magic. Whenever a player is more than 10 yards away from the boss for more than 1 sec, Krix'vizk inflicts a small amount of Shadow damage and forces them back into range. You must stay within the effective circle around the boss at all times. \n\n[434722] is a tank ability inflicting moderate amounts of Shadow damage and Physical damage and reducing their movement speed by 30% for 10 sec. Use a defensive to reduce the damage. \n\n[434779] causes the boss to unleash a terrifying screech toward a player, inflicting Shadow damage to players in a cone in front of him and forcing them to cower in fear for 4 sec. Dodge this frontal.\n\n[434829] causes Orator Krix'vizk to torment all players with a litany of dark propaganda, inflicting small amounts of Shadow damage every 1 sec for 4 sec.  At the end of this cast Orator Krix'vizk leaves behind an area of [434926] which causes moderates amounts of Shadow damage every 1 sec to players who remain within the area. Do not stand in it and the tank must move the boss away from it."
                },
                {
                    "phase": "Mythic difficulty",
                    "description": "On Mythic difficulty Orator Krix'vizk receives a new dispellable ability called [448561] which marks two players and inflicts moderate amounts of Shadow damage every 1 sec for 6 sec. Upon expiration or removal, 5 orbs explode outward from the target inflicting moderate amounts of Shadow damage to players hit and stunning them for 3 sec. Try to position yourself so that the orbs will not hit you. You may see the indication of the orbs flight path based on the debuffed player appearance."
                }
            ],
            "heroic": []
        },
    },
    // Nx Vx
    {
        "wowheadID": "216648",
        "name": "Nx",
        "description": "Twins Nx and Vx were born together, raised together, and trained in the ways of subterfuge and assassination together. A deadly pair, they earned their ascension together as well. Together they now serve as Fangs of the Queen, taking out any would-be threats to Ansurek's reign with relish.",
        "location": "City of Threads",
        "instanceType": "Dungeon",
        "imageURL": "https://wow.zamimg.com/uploads/screenshots/normal/1185684-nx.jpg",
        "imageALT": "Nx Vx",
        "skills": [
            "439621",
            "440218",
            "439522",
            "440468",
            "440419",
            "439637",
            "440470",
            "439692",
            "439518",
            "440107",
            "441298",
            "458741"
        ]
    },
    // The Coaglamation
    {
        "wowheadID": "216320",
        "name": "The Coaglamation",
        "description": "The Grand Splicer's evolutionary experiments often result in by-products of waste and sludge. This abhorrent glop may appear useless to some, but to Izo's clever ingenuity, it offers excellent material components for more experiementation--and a vicious monstrosity waiting to come to life.",
        "location": "City of Threads",
        "instanceType": "Dungeon",
        "imageURL": "https://wow.zamimg.com/uploads/screenshots/normal/1185696-the-coaglamation.jpg",
        "imageALT": "The Coaglamation",
        "skills": [
            "441216",
            "442285",
            "445435",
            "437533",
            "461842",
            "461880",
            "438620",
            "438658"
        ]
    },
    // Izo, the Grand Splicer
    {
        "wowheadID": "216658",
        "name": "Izo, the Grand Splicer",
        "description": "Evolution has long been a central part of nerubian life, and none possess greater passion or mastery of this process than Izo. Granted the methods of ascension by Ansurek, Izo pursues this path of perfection with determination, and little concern for who she serves, to what end, or at what cost.",
        "location": "City of Threads",
        "instanceType": "Dungeon",
        "imageURL": "https://wow.zamimg.com/uploads/screenshots/normal/1185703-izo-the-grand-splicer.jpg",
        "imageALT": "Izo, the Grand Splicer",
        "skills": [
            "439401",
            "438860",
            "437700",
            "439646",
            "439341",
            "450042",
            "450047",
            "450055"
        ]
    },
    // The Stonevault
    // E.D.N.A
    {
        "wowheadID": "210108",
        "name": "E.D.N.A",
        "description": "Defense protocols engaged! Earthen Defense and Neutralization Automaton is active. Informal nomenclature: E.D.N.A. This golem has contingencies for any potential intruder. Killing skardyn is its primary directive, but any unauthorized intuder is sufficient for a lethal response.",
        "location": "The Stonevault",
        "instanceType": "Dungeon",
        "imageURL": "https://wow.zamimg.com/uploads/screenshots/normal/1183812-e-d-n-a.jpg",
        "imageALT": "E.D.N.A",
        "phases": 0,
        "skills": [
            "424879",
            "464888",
            "424889",
            "424888",
            "424903"
        ],
        "guide": {
            "normal": [
                {
                    "phase": "Normal and Heroic difficulty",
                    "description": "E.D.N.A has a handful of skills. First the boss will begin by casting [424903] which creates volatile spikes that erupt from the earth. Any players who come into contact with a spike causes it to erupt, knocking the player back and inflicting high amounts of Fire damage to all players within 4 yards and inflicting 126137 Fire damage every 1 sec to all players.\n\nE.D.N.A will then cast [424805], targeting all players and unleashing a beam of fiery energy , inflicting a moderate amount of Fire damage to players caught in the effect. [424903] hit with this effect are destroyed. Since the boss spawns roughly 4 [424903], to mitigate the damage, during each [424805] cast players must destroy half the present spikes (usually the maximum each turn is 2-3 spikes depending on the situation). \n\nLater the boss will cast [424879] slamming the ground, inflicting moderate amounts of Nature damage to all players and sending out seismic pulses that destroy all remaining [424903]. \n\nAnd finally E.D.N.A will periodically cast [424888] on the tank, inflicting high amounts of Physical damage and afflicting them with [424889] which does a small amount of ticking damage every 3 seconds. Once dispelled the effect applied on the tank  is called [424893] reducing the target-player damage taken by 50% for 6 sec. Healers must time the dispel right before the next [424888] to reduce its damage."
                }
            ],
            "heroic": []
        },
    },
    // Skarmorak
    {
        "wowheadID": "210156",
        "name": "Skarmorak",
        "description": "The High Speaker spent countless years attempting to restore the Awakening Machine. One failed attempt resulted in a new horror: a golem infused with skardyn corruption. Crystals augment its elemental configuration. Though it barely communicates its alien mindset, its hatred for all creation is undeniable.",
        "location": "The Stonevault",
        "instanceType": "Dungeon",
        "imageURL": "https://wow.zamimg.com/uploads/screenshots/normal/1183833-skarmorak.jpg",
        "imageALT": "Skarmorak",
        "skills": [
            "422233",
            "422261",
            "423538",
            "423557",
            "423200",
            "423228",
            "423324",
            "426215",
            "443494",
            "443405",
            "435813"
        ]
    },
    // Master Machinists
    {
        "wowheadID": "213216",
        "name": "Master Machinists",
        "description": "Master Machinists focus on complex work at prestigious worksites. Brokk and Dorlita have worked as a team for as long as anyone can remember. Granted, Brokk's productivity is slipping, but both are authorized to defend their site with direct and efficient displays of violence.",
        "location": "The Stonevault",
        "instanceType": "Dungeon",
        "imageURL": "https://bnetcmsus-a.akamaihd.net/cms/content_entry_media/c0/C0HA6WG54NIV1723550315743.png",
        "imageALT": "Master Machinists",
        "skills": [
            "428161",
            "449169",
            "428819",
            "429999",
            "428202",
            "428547",
            "428508",
            "439577",
            "428120",
            "428535",
            "443954",
            "430000",
            "464392",
            "463057",
            "428711"
        ]
    },
    // Void Speaker Elrich
    {
        "wowheadID": "213119",
        "name": "Void Speaker Elrich",
        "description": "Eirich has been deposed, his authority seized! Overwhelmed, he fled to the innermost sanctum of the Stonevault. Yet in his machinations, he succumbed to transformation: Void energy from a malfunctioning artifact corrupts his living stone! Mystical revelations now shatter his sanity.",
        "location": "The Stonevault",
        "instanceType": "Dungeon",
        "imageURL": "https://wow.zamimg.com/uploads/screenshots/normal/1183837-void-speaker-eirich.jpg",
        "imageALT": "Void Speaker Elrich",
        "skills": [
            "427315",
            "427329",
            "427854",
            "457465",
            "457456",
            "427869"
        ]
    },
    // The Dawnbreaker
    // Speaker Shadowcrown
    {
        "wowheadID": "211087",
        "name": "Speaker Shadowcrown",
        "description": "The new leader of the Order of Night, Shadowcrown forged an alliance with Azj-Kahet and masterminded an audacious plan to steal the flagship Dawnbreaker. A former ardent from the Priory, she has become consumed by the darkness of Beledar's Shadow.",
        "location": "The Dawnbreaker",
        "instanceType": "Dungeon",
        "imageURL": "https://wow.zamimg.com/uploads/screenshots/normal/1185620-speaker-shadowcrown.jpg",
        "imageALT": "Speaker Shadowcrown",
        "phases": 0,
        "skills": [
            "451026",
            "426734",
            "426736",
            "449042",
            "453212",
            "425264",
            "445996",
            "449332",
            "452001",
            "426712",
            "453140",
            "428086"
        ],
        "guide": {
            "normal": [
                {
                    "phase": "Normal and Heroic difficulty",
                    "description": "Speaker Shadowcrown has few very powerful mechanics that make this fight among the hardest fights in this dungeon and in general.  The fight is extremely intense on the healing side.\n\nFirst of all her key ability that will happen upon reaching 50% hp and 1% hp is [451026] during which Shadowcrown unleashes a massive explosion of shadow magic in an attempt to destroy any players aboard the Dawnbreaker. While casting Shadowcrown is immune to damage. To avoid being killed by this ability, all players must take flight and stir clear of the range of the explosion. In order to survive the darkness around the ship players will need to pick up golden orbs called [452001].\n\n[425264] is a tank ability which Speaker Shadowcrown casts on the tank the same moment she begins casting [453212]. The tank and the healer both must be ready for this cast as it is usualy much stronger than it initially seems in case the tank has no mitigation of any sort active. [425264] inflicting high amounts of Shadow damage and an additional 182109 Shadow damage to all other players.\n\n[453212] will then continue to be cast for 7 seconds radiates shadow damage in targeted directions, inflicting 728434 Shadow damage and an additional 182108 Shadow damage every 1 sec for 9 sec upon contact. This effect stacks so do not get hit by it. \n\nAside from that Speaker Shadowcrown will cast [426734] which inflicts small amounts of shadow damage and reduces their movement speed by 50% for 15 seconds.  And [428086] which deals a moderate amount of shadow damage to the targeted player and needs to be interrupted."
                },
                {
                    "phase": "Mythic difficulty",
                    "description": "On Mythic difficulty Speaker Shadowcrown's [425264] is much much higher and healers need to be prepared for it. And alongside that, dispelling [426734] will cause a debuff called [426736] to appear on 4 players, absorbing a moderate amount of healing."
                }
            ],
            "heroic": []
        },
    },
    // Anub'ikkaj
    {
        "wowheadID": "211089",
        "name": "Anub'ikkaj",
        "description": "Anub'ikkaj is one of Queen Ansurek's most brilliant tacticians. A meticulous planner known for creative use of indigenous resources. His soldiers are fanatically loyal.",
        "location": "The Dawnbreaker",
        "instanceType": "Dungeon",
        "imageURL": "https://wow.zamimg.com/modelviewer/live/webthumbs/npc/139/114315.webp",
        "imageALT": "Anub'ikkaj",
        "skills": [
            "427192",
            "426860",
            "426787",
            "427001",
            "427378",
            "452127",
            "452099"
        ]
    },
    // Rashanan
    {
        "wowheadID": "224552",
        "name": "Rashanan",
        "description": "A winged horror from the depths of Azj-kahet. Rasha'nan is Queen Ansurek's secret weapon to destroy the Arathi should her armies fail to conquer Mereldar.",
        "location": "The Dawnbreaker",
        "instanceType": "Dungeon",
        "imageURL": "https://wow.zamimg.com/modelviewer/live/webthumbs/npc/132/118404.webp",
        "imageALT": "Rashanan",
        "skills": [
            "434655",
            "449734",
            "434089",
            "434407",
            "434096",
            "438957",
            "449042",
            "434668",
            "438946",
            "434579",
            "434576",
            "448213",
            "448888",
            "463428",
            "449332",
            "452001",
            "434119",
            "435793"
        ]
    },
    // Mists of Tirna Scithe
    // Ingra Maloch
    {
        "wowheadID": "164567",
        "name": "Ingra Maloch",
        "description": "Cursed to exist outside the cycle of Life and Death, the Drust now seek to circumvent their fate using Ardenweald's mechanisms of Rebirth. Their would-be conquest has found its way to Tirna Scithe, where Ingra Maloch and his followers use foul magic to subjugate the local inhabitants.",
        "location": "Mists of Tirna Scithe",
        "instanceType": "Dungeon",
        "imageURL": "https://wow.zamimg.com/uploads/screenshots/normal/1189918-ingra-maloch.jpg",
        "imageALT": "Ingra Maloch",
        "skills": [
            "321006",
            "323059",
            "323057",
            "323137",
            "323146",
            "321005",
            "323138",
            "328756",
            "323149",
            "323177",
            "323250",
            "331440"
        ]
    },
    // Mistcaller
    {
        "wowheadID": "170217",
        "name": "Mistcaller",
        "description": "Tirna Scithe is defended by force of arms, but also cunning. The playful Mistcaller has used the mists to confuse and disorient invaders. With the Drust attack the Mistcaller cannot easily tell friend from foe, and only after her puzzles and games are defeated can you safely reach the heart of Tirna Scithe.",
        "location": "Mists of Tirna Scithe",
        "instanceType": "Dungeon",
        "imageURL": "https://wow.zamimg.com/modelviewer/live/webthumbs/npc/195/96451.webp",
        "imageALT": "Mistcaller",
        "skills": [
            "321471",
            "321873",
            "321828",
            "321669",
            "321837",
            "321834",
            "321891",
            "321893"
        ]
    },
    // Tred'ova
    {
        "wowheadID": "164517",
        "name": "Tred'ova",
        "description": "The gorm have been chewing at the edges of Ardenweald, devouring desiccated husks of the dead. The beast called Tred'ova has gorged herself on something far more precious, the wildseed of Lakali, loa of knowledge. Now that Tred'ova has tasted the loa's power and wisdom, she hungers for more than survival.",
        "location": "Mists of Tirna Scithe",
        "instanceType": "Dungeon",
        "imageURL": "https://wow.zamimg.com/uploads/screenshots/normal/1189921-tredova.jpg",
        "imageALT": "Tred'ova",
        "phases": 0,
        "skills": [
            "322450",
            "322648",
            "322563",
            "322527",
            "463602",
            "322465",
            "326263",
            "322550",
            "326308",
            "326309",
            "322614",
            "322655"
        ],
        "guide": {
            "normal": [
                {
                    "phase": "Normal and Heroic difficulty",
                    "description": "Tred'ova starts the fight by casting [322655] which causes the boss to spit a glob of acid at all nearby players' location, inflicting high amounts of Nature damage to any player within 4 yards of impact. As Tred'ova gains intelligence she will attempt to predict where her enemies will move and also fire globs of acid at those locations which means every cast of [322655] will have more globs each time and they will move tin the same direction the player moves to avoid the previous globs. This mechanic will keep you on our toes! Players need to try and move as little as possible while the globs are being shot as to not cause them to move too far and accidentally hit a different player in the next cast.\n\nAdditionally Tred'ova will cast [322550] which will cause nearby eggs to hatch, summoning 4 {165560}. These Larva will focus a player and run to them for the next 20 seconds, biting them for small amounts of damage until killed. When killed {165560} will then explode into [326308] inflicting moderate amounts of Nature damage every 1.5 sec to anyone in the pool.\n\nIn the meantime The tank will be the main target for Tred'ova's [322614] which tethers them to multiple allies, inflicting small amounts of Shadow damage every 1 sec. All damage taken is duplicated to main targeted player as Shadow damage. Moving more than 40 yards from the player dispels the [322614] from that ally. In order to get rid of this quickly, the tank must run in the opposite direction of all other players while the players must all run roughly in the same direction as a group to make it easier to deal with. \n\nFinally Tred'ova will cast [322450] running to the depleted Cocoon in the center of the room and beginning its consumption. This causes anima to erupt from the boss, inflicting moderate amounts of Nature every 2 sec to all enemies for 10 min. While this occurs Tred'ova will launch missile of anima at random locations around them. In order to end the [322450] phase players must break through the boss's [322527] which equals to 3%-5% of Tred'ovas maximum health. Once broken the fight continues as before."
                },
                {
                    "phase": "Mythic difficulty",
                    "description": "On Mythic difficulty, Tred'ova gains an extra ability called [463602] which causes the boss to gathers poison on itself and pull players in. The concentrated poison explodes after 5 sec, inflicting 3603911 Nature damage to all players within 15 yards of impact. Many times this ability will overlap with [322614] which can complicate things. Players must always be ready to move in the correct direction and save movement buffs and abilities for that moment."
                }
            ],
            "heroic": []
        },
    },
    // The Necrotic Wake
    // Blightbone
    {
        "wowheadID": "162691",
        "name": "Blightbone",
        "description": "The corpulent mass of rotting flesh known as Blightbone was lovingly constructed by Surgeon Stitchflesh. Now the abomination is eager to be unleashed on the Temple of Courage.",
        "location": "The Necrotic Wake",
        "instanceType": "Dungeon",
        "imageURL": "https://wow.zamimg.com/uploads/screenshots/normal/1169245-blightbone.jpg",
        "imageALT": "Blightbone",
        "phases": 0,
        "skills": [
            "320596",
            "320631",
            "320637",
            "320655",
            "320614",
            "328146",
            "320646"
        ],
        "guide": {
            "normal": [
                {
                    "phase": "Normal and Heroic difficulty",
                    "description": "Blightbone boss room is part of the dungeon room full of adds. The group should want to clear enough of the trash around the room for the team to battle Blightbone comfortably seeing as some of his abilities will take up room space and make it accessible. \n\n[320655] is a tank buster Blightbone uses to inflict high amounts of Physical damage. \n\nOccasionally Blightbone will cast [320637] which unleashes gas that last for up to 2 minuntes.  Standing within the area inflicts moderates amount of Nature damage every 2 sec and prevents all actions and spell casting. The tank wants to move the boss out of [320637] and all players must avoid standing in it.\n\nBlightbones final and most important ability is [320596]. It is a frontal cone that targets a random player and inflicts a high amount of Nature damage and an additional 449522 Nature damage every 2 sec for 12 sec. Along with the damage, Blightbone also spews forth up to 3 {164702}s which fixate on players, chasing them and biting them. The bite is called [320614] and each application of it causes the worm to grow in size, permanently increasing its Physical damage done by 30%. Upon 5 applications of the bite the worm will then cause a [320631] exploding, spraying all players with noxious goo that inflicts moderate amounts of Nature damage every 2 sec for 30 sec. This explosion cannot be allowed to happen. And when it does it will most likely cause a wipe."
                },
                {
                    "phase": "Mythic difficulty",
                    "description": "On Mythic difficulty, any {164702} that dies also causes [320637], much like Blightbone, leaving behind a large area filled with gas, inflicting moderate amounts of damage every 2 seconds and preventing all actions and spell casting within it. Players must try to kite the worms and kill them in a position that will conserve as much of the boss room as possible."
                }
            ],
            "heroic": []
        },
    },
    // Amarth The Harvester
    {
        "wowheadID": "163157",
        "name": "Amarth The Harvester",
        "description": "Amarth oversees the harvesting of corpses from atop the undead monstrosity Bonefang, flying above the battle. The sadistic commander destroyed the Hand of Courage, and now comes for their Paragon.",
        "location": "The Necrotic Wake",
        "instanceType": "Dungeon",
        "imageURL": "https://wow.zamimg.com/uploads/screenshots/normal/1189498-amarth.jpg",
        "imageALT": "Amarth The Harvester",
        "skills": [
            "321247",
            "321226",
            "320171",
            "333488",
            "333492",
            "320012"
        ]
    },
    // Surgeon Stitchflesh
    {
        "wowheadID": "166882",
        "name": "Surgeon Stitchflesh",
        "description": "Surgeon Stitchflesh is the mastermind behind the grisly abominations that are deployed from the floating fortress of Zolramus. He bends to his task with maniacal fervor, crafting the flesh of fallen enemies into undead constructs to be used in Maldraxxus' wars.",
        "location": "The Necrotic Wake",
        "instanceType": "Dungeon",
        "imageURL": "https://wow.zamimg.com/uploads/screenshots/normal/1097624-surgeon-stitchflesh.jpg",
        "imageALT": "Surgeon Stitchflesh",
        "skills": [
            "320358",
            "320208",
            "320376",
            "320359",
            "327100",
            "326629",
            "322681",
            "334321",
            "327664",
            "320366",
            "320200",
            "334488",
            "343555"
        ]
    },
    // Nalthor the Rimebinder
    {
        "wowheadID": "166945",
        "name": "Nalthor the Rimebinder",
        "description": "From atop the flying ziggurat Zolramus, Nalthor the Rimebinder commands the forces attacking Bastion. The conniving lich plans to rain frozen magic and death on the pristine lands of Bastion.",
        "location": "The Necrotic Wake",
        "instanceType": "Dungeon",
        "imageURL": "https://wow.zamimg.com/uploads/screenshots/normal/1003598-nalthor-the-rimebinder.jpg",
        "imageALT": "Nalthor the Rimebinder",
        "skills": [
            "320784",
            "320788",
            "321894",
            "320772",
            "321368",
            "321754",
            "320771",
            "328181",
            "328212",
            "321956",
            "287294",
            "287295",
            "322274",
            "345323"
        ]
    },
    // Siege of Boralus
    // Chopper Redhook
    {
        "wowheadID": "144160",
        "name": "Chopper Redhook",
        "description": "Chopper Redhook's brutality is feared throughout Kul Tiras. Supported by Irontide forces, Chopper is free to rampage through Boralus, relishing the chaos rampant in the streets.",
        "location": "Siege of Boralus",
        "instanceType": "Dungeon",
        "imageURL": "https://wow.zamimg.com/uploads/screenshots/normal/918157-chopper-redhook.jpg",
        "imageALT": "Chopper Redhook",
        "skills": [
            "257649",
            "257585",
            "273716",
            "257459",
            "256867",
            "257292",
            "275107",
            "257326",
            "272662",
            "257288",
            "257641"
        ]
    },
    // Dread Captain Lockwood
    {
        "wowheadID": "129208",
        "name": "Dread Captain Lockwood",
        "description": "Dread Captain Lockwood commands a host of Azerite artillery. Currently her cannons are trained on the palace, threatening to reduce the seat of the Proudmoore's power to rubble unless they surrender.",
        "location": "Siege of Boralus",
        "instanceType": "Dungeon",
        "imageURL": "https://wow.zamimg.com/uploads/screenshots/normal/918155-dread-captain-lockwood.jpg",
        "imageALT": "Dread Captain Lockwood",
        "skills": [
            "272471",
            "273470",
            "268752",
            "268443",
            "268976",
            "463182",
            "268230",
            "269029",
            "463185",
            "272426",
            "272422",
            "280389",
            "268260"
        ]
    },
    // Hadal Darkfathom
    {
        "wowheadID": "130836",
        "name": "Hadal Darkfathom",
        "description": "Hadal Darkfathom is an ancient sea giant called from the depths to unleash his fury on Boralus. Using his powerful strength he crushes buildings, statues and civilians alike.",
        "location": "Siege of Boralus",
        "instanceType": "Dungeon",
        "imageURL": "https://wow.zamimg.com/uploads/screenshots/normal/918156-hadal-darkfathom.jpg",
        "imageALT": "Hadal Darkfathom",
        "phases": 0,
        "skills": [
            "257882",
            "276068",
            "261563"
        ],
        "guide": {
            "normal": [
                {
                    "phase": "Heroic and Mythic difficulty",
                    "description": "Hadal Darkfathom has only three abilities in his fight. However the arena of the boss is an important one. All players should try to stay away from the center which has a statue any period of the fight that isnt [276068], in order to keep that area around the statue clear of any bad AOE.\n\n[261563] - Which is cast upon the player currently tanking the boss, creating a wave of water that surges over enemies in a line in front of the boss, dealing high amounts of Frost damage and also leaving brine pools at the destinations that continue to inflict moderate amounts of Frost damage every 1 sec to enemies within them. The tank must try and aim that ability away form the team and the center of the room.\n\n[257882] is an ability the boss casts throughout the fight, targeting all players except the tank and spawning Roiling water under each player.Upon eruption these waters inflicting high amounts of Frost damage to enemies within 5 yards and knocks them into the air as well as inflicting 594646 Frost damage to everyone. This ability also leaves brine pools at the destinations that continue to inflict moderate amounts of Frost damage every 1 sec  to enemies within them.\n\nOnce the boss reaches 100% energy he casts [276068]  conjuring a wall of water that surges across the space, inflicting very high amounts of Frost damage to all enemies caught in the wave. In order to dodge this ability players must hide behind the statue in the center of the room. Also important to note this wave is cast twice, each time from a different direction. So once the first wave begins moving players must look for the location of the 2nd wave in order to quickly reposition after the first wave."
                }
            ],
            "heroic": []
        },
    },
    // Viq'Goth
    {
        "wowheadID": "128652",
        "name": "Viq'Goth",
        "description": "Summoned from the depths by Lady Ashvane, Viq'Goth has devastated the harbor. Capable of pulling entire galleons to the crushing depths, this leviathan must be defeated before the Kul Tiran fleet is destroyed.",
        "location": "Siege of Boralus",
        "instanceType": "Dungeon",
        "imageURL": "https://wow.zamimg.com/uploads/screenshots/normal/918158-viqgoth.jpg",
        "imageALT": "Viq'Goth",
        "skills": [
            "270185",
            "274991",
            "270590",
            "279897",
            "270624",
            "270187",
            "269266",
            "269416",
            "269484"
        ]
    },
    // Grim Batol
    // General Umbriss
    {
        "wowheadID": "39625",
        "name": "General Umbriss",
        "description": "As Azeroth's champions and their red dragon allies assault the gates of Grim Batol, the malefic General Umbriss leads the fortress's cultist and twilight dragonspawn defenders.",
        "location": "Grim Batol",
        "instanceType": "Dungeon",
        "imageURL": "https://wow.zamimg.com/uploads/screenshots/normal/1182267-general-umbriss.jpg",
        "imageALT": "General Umbriss",
        "phases": 0,
        "skills": [
            "448847",
            "448566",
            "447261",
            "448882",
            "448953",
            "288865",
            "454782",
            "448877",
            "447268"
        ],
        "guide": {
            "normal": [
                {
                    "phase": "Normal and Heroic difficulty",
                    "description": "General Umbriss has three abilities in his fight. \n\n[447261] which is a tank buster that  inflicting high Physical damage every 1 sec for 2 sec. The tank becomes severely wounded, bleeding for small amounts of Physical damage every 1 sec for 8 sec. This effect stacks.\n\n[448847] - General Umbriss lets out a terrifying roar, inflicting moderate amounts of Sonic damage to all players. This effect ignores armor. {223389}s heed the call of General Umbriss and descend on the platform and blast players with [448566] which inflicts very high amounts of Shadowlfame damage to all players within the impact area. The drakes will appear in trios and the platform will be split into 4 pieces. Players must move to the part of the platform that does not have a drake targeting it.\n\nThe General's final ability is [448882] which causes Earth to erupt underneath players, inflicting a small amount of Physical damage and knocking them forward."
                },
                {
                    "phase": "Mythic difficulty",
                    "description": "On Mythic difficulty, the General's [448882] also leave [448953] upon expiration which causes the terrain to become difficult to traverse, inflicting moderate amounts of Physical damage every 1 sec and reducing movement speed by 30% to players within. These AOE patches remain through the entire fight therefor players must position them in a manner that will not block their path when moving from the generals other abilities."
                }
            ],
            "heroic": []
        },
    },
    // Forgemaster Throngus
    {
        "wowheadID": "40177",
        "name": "Forgemaster Throngus",
        "description": "A smith for the Twilight's Hammer cult, this massive ettin is eager to use the weapons and armor he's forged to annihilate intruders.",
        "location": "Grim Batol",
        "instanceType": "Dungeon",
        "imageURL": "https://wow.zamimg.com/uploads/screenshots/normal/213045-forgemaster-throngus.jpg",
        "imageALT": "Forgemaster Throngus",
        "skills": [
            "452008",
            "449536",
            "449687",
            "447395",
            "449444",
            "449474",
            "457664"
        ]
    },
    // Drahga Shadowburner
    {
        "wowheadID": "40319",
        "name": "Drahga Shadowburner",
        "description": "This Twilight's Hammer warlock is on a mission from the Bastion of Twilight. Should heroes overcome his fiery minions, Drahga will reveal a portent of doom for Azeroth's defenders.",
        "location": "Grim Batol",
        "instanceType": "Dungeon",
        "imageURL": "https://wow.zamimg.com/uploads/screenshots/normal/214629-drahga-shadowburner-drahga-shadowburner-at-the-scarred-terrace.jpg",
        "imageALT": "Drahga Shadowburner",
        "skills": [
            "450095",
            "75238",
            "456751",
            "448105",
            "447966",
            "448013",
            "448028",
            "82850",
            "456773"
        ]
    },
    // Erudax the Duke of Below
    {
        "wowheadID": "40484",
        "name": "Erudax the Duke of Below",
        "description": "Deathwing has dispatched one of his greatest lieutenants to discover the secret that several mighty red dragons have died to protect. From the cavernous realm of Deepholm, this faceless general will bring to bear the next generation of draconic power to obliterate those foolish enough to challenge him.",
        "location": "Grim Batol",
        "instanceType": "Dungeon",
        "imageURL": "https://warcraftdb.com/images/game/models/119801.png",
        "imageALT": "Erudax the Duke of Below",
        "skills": [
            "450079",
            "449985",
            "450100",
            "450088",
            "449939",
            "450087",
            "448057",
            "448064",
            "450077",
            "456718",
            "456719"
        ]
    },
    // TWW Base Dungeons
    // The Rookery
    // Kyrioss
    {
        "wowheadID": "209230",
        "name": "Kyrioss",
        "description": "Stormguard Gorren's stormrook, though corrupted by void magic, still loyally fights by his side. And, if anything gets in his way, Kyrioss will dutifully tear them apart.",
        "location": "The Rookery",
        "instanceType": "Dungeon",
        "imageURL": "https://wow.zamimg.com/uploads/screenshots/normal/1171035-kyrioss.jpg",
        "imageALT": "Kyrioss",
        "phases": 0,
        "skills": [
            "420739",
            "444250",
            "444123",
            "424195",
            "419871",
            "424148",
            "444324"
        ],
        "guide": {
            "normal": [
                {
                    "phase": "Normal and Heroic difficulty",
                    "description": "During the normal and heroic versions of the fight, Kyrioss uses a few abilities\n[419871] - Kyiross leaps to a location and unleashes a charged blast, inflicting Nature damage to players within 12 yards, knocking them away. Simply dodge this mechanic.\n\n[424148] - Kyrioss launches lightning that arcs to up to 3 players, inflicting Nature damage. This is a healer mechanic. Use a defensive if you must.\n\n[444324] - Kyrioss creates a raging storm that periodically unleashes a crash of lightning that strikes a player’s location inflicting Nature damage to players within 6 yards of the impact. Again, simply dodge this. \n\nAnd the final ability is [444250] - Upon reaching 100 energy, Kyrioss flies to the center of the room and unleashes 4 torrents of lightning. Touching these torrents inflicts Nature damage and stuns the target for 6 sec. The stun is dispellable so in case you do get hit and survive, request a dispel from the healer."
                },
                {
                    "phase": "Mythic difficulty",
                    "description": "On Mythic Kyrioss receives another ability called [420739] - Kyrioss suffuses a random player with electricity. Upon removal, the target unleashes an eruption of electrical energy, inflicting Nature damage to all players. The eruption can be discharged safely in the central tempest."
                }
            ],
            "heroic": []
        },
    },
    // Stormguard Gorren
    {
        "wowheadID": "207205",
        "name": "Stormguard Gorren",
        "description": "Once Stormward Baelgrim's second, Stormguard Gorren has been corrupted by void magic, causing his hate for Baelgrim to fester. Using his newfound void powers, he seeks to overrun the Stormperch and command his own army of Voidriders created from corrupted Stormriders.",
        "location": "The Rookery",
        "instanceType": "Dungeon",
        "imageURL": "https://wow.zamimg.com/uploads/screenshots/normal/1171053-stormguard-gorren.jpg",
        "imageALT": "Stormguard Gorren",
        "skills": [
            "424737",
            "425048",
            "424739",
            "425052",
            "426171",
            "424797",
            "424958",
            "425113",
            "426136",
            "424966"
        ]
    },
    // Voidstone Monstrosity
    {
        "wowheadID": "207207",
        "name": "Voidstone Monstrosity",
        "description": "A grotesque amalgamation of corrupted stormriders, this towering mass of void power knows only pain and how to inflict it. Taking it down is the only way to cleanse the Stormperch and its rookery.",
        "location": "The Rookery",
        "instanceType": "Dungeon",
        "imageURL": "https://wow.zamimg.com/uploads/screenshots/normal/1171058-voidstone-monstrosity.jpg",
        "imageALT": "Voidstone Monstrosity",
        "skills": [
            "445262",
            "423305",
            "433067",
            "424371",
            "428269",
            "458082",
            "429487",
            "429029",
            "445457",
            "423393",
            "423356",
            "458088",
            "423839",
            "429028",
            "429521",
            "445537"
        ]
    },
    // Priory of the Sacred Flame
    // Captain Dailcry
    {
        "wowheadID": "207946",
        "name": "Captain Dailcry",
        "description": "Captain Dailcry commands the grounds of the Priory of the Sacred Flame. He drills the acolytes in the approved martial disciplines of the empire and ensures that their training and loyalty are of imperial quality.",
        "location": "Priory of the Sacred Flame",
        "instanceType": "Dungeon",
        "imageURL": "https://wow.zamimg.com/uploads/screenshots/normal/1184600-captain-dailcry.jpg",
        "imageALT": "Captain Dailcry",
        "skills": [
            "424626",
            "447439",
            "424419",
            "424628",
            "424414",
            "447272",
            "448385",
            "424431",
            "424432",
            "448515",
            "427583",
            "424621",
            "424423",
            "424426",
            "424462",
            "424460",
            "424420",
            "424421"
        ]
    },
    // Baron Braunpyke
    {
        "wowheadID": "207939",
        "name": "Baron Braunpyke",
        "description": "Distraught over the death of his brother, Baron Braunpyke has pledged his loyalty to Prioress Murrpray. The powerful knight now acts as her personal enforcer, protecting the secrets of the Priory from both outsiders and insufficiently loyal Arathi.",
        "location": "Priory of the Sacred Flame",
        "instanceType": "Dungeon",
        "imageURL": "https://wow.zamimg.com/uploads/screenshots/normal/1184609-baron-braunpyke.jpg",
        "imageALT": "Baron Braunpyke",
        "phases": 0,
        "skills": [
            "423015",
            "423076",
            "422969",
            "423019",
            "423051",
            "423062",
            "446368",
            "446403"
        ],
        "guide": {
            "normal": [
                {
                    "phase": "Normal and Heroic difficulty",
                    "description": "Baron Braunpyke starts with a handful of abilities in his arsenal. \nOne of his main abilities that affects all others is [422969] which causes the Baron to empower himself with the light, increasing his Physical damage by 25% and empowering each of his abilities.\n\n[423015] - The Baron hurls a holy shield at several players, inflicting moderate amounts of Holy damage and reducing movement speed by 50% for 5 sec upon impact. While empowered by [422969], [423015] hits 5 players. As a result of [423015] the Baron also casts [423019] causing an eruption from the impact locations of [423015], inflicting high amounts of Holy damage to players within 12 yards. Dodge this ability.\n\t\n[423051] is an interruptible spell causing the Baron to unleashes a burst of holy light, inflicting moderate amounts of Holy damage to all players and an additional 1801956 Holy damage every 2 sec for 12 sec. The burst of light also heals Braunpyke for 40% of his maximum health. While empowered by [422969], the cast time of [423051] is reduced.\n\n[423062] - Braunpyke calls searing light down on a player's location, inflicting high amounts of Holy damage to players within 3 yards. Hammers then spiral outwards from the impact location, inflicting 2702735 Holy damage to players in their path.  While empowered by [422969], [423062] hits 5 players."
                },
                {
                    "phase": "Mythic difficulty",
                    "description": "On Mythic difficulty the Baron gains another ability called [446368] which causes him to create a burning pyre containing 3 charges that last for 30 sec. Each time a player comes into contact with the pyre, a charge is consumed and the player is affected by [446403]. [446403] is a searing flame that inflicts 540547 Holy damage every 1 sec for 5 sec. This effect stacks. And while empowered by [422969], [446368] has 5 charges."
                }
            ],
            "heroic": []
        },
    },
    // Prioress Murrpray
    {
        "wowheadID": "207940",
        "name": "Prioress Murrpray",
        "description": "Prioress Haelsey Murrpray directed the building of the Priory of the Sacred Flame to contemplate the sacred star Beledar. Insight into the emperor's vision has proved elusive. Instead, she has discovered secrets of the Sacred Flame that will bring them victory over their enemies in Hallowfall, and at home in the empire.",
        "location": "Priory of the Sacred Flame",
        "instanceType": "Dungeon",
        "imageURL": "https://wow.zamimg.com/uploads/screenshots/normal/1184617-prioress-murrpray.jpg",
        "imageALT": "Prioress Murrpray",
        "skills": [
            "425544",
            "423588",
            "423539",
            "425022",
            "423665",
            "425556",
            "428169",
            "423543",
            "451606",
            "423536"
        ]
    },
    // Cinderbrew Meadery
    // Brew Master Aldryr
    {
        "wowheadID": "210271",
        "name": "Brew Master Aldryr",
        "description": "Barkeep and brew master for the meadery, Aldryr has more than mead on tap. Anyone who messes with the Cinderbrew Meadery's new management messes with Aldryr, and he has many friends in low places.",
        "location": "Cinderbrew Meadery",
        "instanceType": "Dungeon",
        "imageURL": "https://wow.zamimg.com/uploads/screenshots/normal/1185649-brew-master-aldryr.jpg",
        "imageALT": "Brew Master Aldryr",
        "phases": 0,
        "skills": [
            "432198",
            "432182",
            "442525",
            "431896",
            "432229",
            "432196",
            "442611",
            "445180"
        ],
        "guide": {
            "normal": [
                {
                    "phase": "Normal and Heroic difficulty",
                    "description": "The fight is spread across 2 phases. The first phase and intermisssion which begins when Brew Master Aldryr reaches 100% energy beginning the [442525].\n\nDuring the first phase Brew Master Aldryr casts [432229] on the tank, inflicting high Physical damage and knocking them back. The keg splinters, forming [432196] on the ground for 1 min, inflicting small amounts of Fire damage every 1.5 sec to players standing within and reducing their movement speed by 50%. Do not stand in the [432196].\n\nOccasionally Brew Master Aldryr will cast {432198] which is a frontal cone that deals high amounts of damage. Dodge it.\n\nAnd finally his last ability is [432182]. The boss tosses hot Cinderbrew at players, inflicting moderate amounts of Fire damage every 1.5 sec for 9 sec and forming [432196] underneath. Try to position yourself so you don't cause too many [432196] pools to form in areas you will need to use during [442525].\n\n[442525] begins once Brew Master Aldryr reaches 100%. The boss leaps behind the counter to pour Cinderbrew for {215819}s. While pouring, he Disregards players reducing hsi damage taken by 99%. In the meantime {215819}s will cast [431896] slamming their table, inflicting small amounts of Physical damage to all players every 2 sec and reducing their haste by 25%. Players must give the {215819}s a mug of Cinderbrew which can be picked up from the counter behind which Brew Master Aldryr is currently standing and preparing the drinks. Once the Cinderbew sis given to the {215819}s they stop their tantrum. And once all Patrons are satisfied [442525] stops and Brew Master Aldryr returns back to phase 1."
                },
                {
                    "phase": "Mythic difficulty",
                    "description": "On Mythic difficulty, at the end of the [442525] [445180]s will occur. [445180] causes a brawl to break out in a flurry of fists and thick heads for 2 min. Players coming into contact with the brawl are stunned and suffer 900978 Physical damage every 1 sec for 3 sec."
                }
            ],
            "heroic": []
        },
    },
    // I'pa
    {
        "wowheadID": "210267",
        "name": "I'pa",
        "description": "The product of an industrial accident, mead elemental I'pa is as angry about its existence as it is about its meadery being disturbed. It is the full-bodied embodiment of the fiery punch of cinderbrew mead, and will lay anyone who tangles with it out flat.",
        "location": "Cinderbrew Meadery",
        "instanceType": "Dungeon",
        "imageURL": "https://wow.zamimg.com/uploads/screenshots/normal/1185661-ipa.jpg",
        "imageALT": "I'pa",
        "skills": [
            "439365",
            "439202",
            "440104",
            "440087",
            "439031",
            "439645",
            "441171",
            "441179",
            "442122",
            "440082",
            "440147",
            "439325"
        ]
    },
    // Benk Buzzbe
    {
        "wowheadID": "218000",
        "name": "Benk Buzzbe",
        "description": "Benk's qualifications for beekeeping may be dubious, but he does seem to have a knack for controlling bees and streamlining honey-extracting operations. But, his tampering has limited the bees' freedom and sacrificed the mead's quality, and this cannot stand.",
        "location": "Cinderbrew Meadery",
        "instanceType": "Dungeon",
        "imageURL": "https://wow.zamimg.com/modelviewer/live/webthumbs/npc/58/117818.webp",
        "imageALT": "Benk Buzzbe",
        "skills": [
            "438025",
            "438763",
            "440134",
            "439524",
            "438971",
            "438975",
            "439006",
            "443983"
        ]
    },
    // Goldie Baronbottom
    {
        "wowheadID": "218523",
        "name": "Goldie Baronbottom",
        "description": "Savvy businesswoman Goldie Baronbottom knows a good opportunity when she sees it--like the Cinderbrew Meadery. After barging in and swindling Wenbrandt out of business, Goldie mostly lets her cronies do the work. Even so, she's not afraid to roll up her sleeves and wallop do-gooders herself.",
        "location": "Cinderbrew Meadery",
        "instanceType": "Dungeon",
        "imageURL": "https://wow.zamimg.com/modelviewer/live/webthumbs/npc/240/118000.webp",
        "imageALT": "Goldie Baronbottom",
        "skills": [
            "435567",
            "435622",
            "436592",
            "435789",
            "436640",
            "435788"
        ]
    },
    // Darkflame Cleft
    // Ol' Waxbeard
    {
        "wowheadID": "210149",
        "name": "Ol' Waxbeard",
        "description": "Howdy! Sit a spell. Hear about Ol' Waxbeard. Kobolds respect this old-timer for tamin' Wick, the rowdiest mole in creation! Waxbeard's seen folks come n' go. Now Candle King's in charge. That don't change nothin'! Ya still need to stay off his property! Why are here? Go on! Get!",
        "location": "Darkflame Cleft",
        "instanceType": "Dungeon",
        "imageURL": "https://wow.zamimg.com/modelviewer/live/webthumbs/npc/251/114171.webp",
        "imageALT": "Ol' Waxbeard",
        "skills": [
            "422162",
            "422150",
            "422682",
            "422246",
            "422270",
            "421875",
            "424821",
            "443694",
            "428268",
            "422125",
            "423693",
            "422245"
        ]
    },
    // Blazikon
    {
        "wowheadID": "208743",
        "name": "Blazikon",
        "description": "Living flame hungers for fuel. Blazikon burns eternal in Darkflame Cleft, simmering with malice and rage. Loyal kobold attendants worship here, for his incendiary realm is surrounded by dire darkness. Fanatic kobolds would gladly sate this monstrosity's hunger by sacrificing... you.",
        "location": "Darkflame Cleft",
        "instanceType": "Dungeon",
        "imageURL": "https://wow.zamimg.com/uploads/screenshots/normal/1185598-blazikon.jpg",
        "imageALT": "Blazikon",
        "phases": 0,
        "skills": [
            "421638",
            "423099",
            "443835",
            "443969",
            "421817",
            "422700",
            "424223",
            "425394"
        ],
        "guide": {
            "normal": [
                {
                    "phase": "Normal and Heroic difficulty",
                    "description": "Blazikon is a very straight forward fight. It begins with the boss spawning in the middle of the room where he also must be tanked as he is not moving. In case no players are in melee range of the boss he will begin casting [443835] inflicting high amounts of damage to all players until there is a player in the melee zone. \n\nBlazikon will vast [425394] which summons strong winds, inflicting high amounts of Nature damage to all players and extinguishing all candles in the room. Healers must be ready for this mechanic with some AOE heals. \n\nThe boss will then cast [421638] hurling a torrent of flames at players, inflicting moderate amounts of Fire damage to players within 6 yards of each impact. The flames of [421638] will also ignite candles. The ignited candles will then spawn a large aoe fire around them - don't stand in it. \n\nFinally Blazikon will cast [423099]  unleashing a fiery burst towards each extinguished candle, reigniting that candle and inflicting very high amounts of Fire damage to all players in its path. [423099] is the main reason as to why players need to ignite at least 1-2 candlers during [421638]. Failure to do so will cause all players to be hit by  [423099] and possibly cause a wipe."
                },
                {
                    "phase": "Mythic difficulty",
                    "description": "On Mythic difficulty Blazikon will also cast [422700] which forms gusting winds to chase players for 30 sec. Tornadoes that reach players inflict moderate amounts of Nature damage and stun them for 4 sec. Additionally these tornadoes extinguish candles they touch so players must kite them around the room without touching the lit candles."
                }
            ],
            "heroic": []
        },
    },
    // The Candle King
    {
        "wowheadID": "222096",
        "name": "The Candle King",
        "description": "Candle King was the tyrannical ruler of a kobold kingdom. His subjects toiled in his mines until an outlander from afar stole his crown and deposed him. Now he's fled deeper within Darkflame Cleft, seething with rage and threatening to return. Snuff his flame once and for all.",
        "location": "Darkflame Cleft",
        "instanceType": "Dungeon",
        "imageURL": "https://wow.zamimg.com/uploads/screenshots/normal/1184652-the-candle-king.jpg",
        "imageALT": "The Candle King",
        "skills": [
            "420696",
            "421277",
            "420659",
            "421648",
            "426145",
            "421067"
        ]
    },
    // The Darkness
    {
        "wowheadID": "210797",
        "name": "The Darkness",
        "description": "What terrors lurk in shadows? Why do kobolds keep candles lit? Tiny creatures huddle around campfires, telling tales of ancient evil. THE DARKNESS can be defeated but never destroyed. Instead, it inevitably returns in a new terrifying shape. Stay in the light. THE DARKNESS WAITS.",
        "location": "Darkflame Cleft",
        "instanceType": "Dungeon",
        "imageURL": "https://wow.zamimg.com/uploads/screenshots/normal/1185604-the-darkness.jpg",
        "imageALT": "The Darkness",
        "skills": [
            "426866",
            "422806",
            "427100",
            "427011",
            "427157",
            "427176",
            "426943",
            "426941",
            "428266"
        ]
    }
]