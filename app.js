const state = {
  ratio: "16:9",
  seriesKey: "",
  prompts: [],
  motionPrompts: [],
  images: [],
  videoClips: [],
  referenceDataUrl: "",
  musicFile: null,
  pendingMusicFile: null,
  pendingMusicUrl: "",
  selectedSimilarSeries: "",
  videoBlob: null,
  anglePreviewOpen: false,
  lastVeoClipLimit: 0,
};

const SERIES_PRESETS = {
  doowop: {
    name: "시니어채널 두왑 시리즈",
    displaySummary:
      "1960년대 캘리포니아 해변 도시 분위기입니다. 팜트리 거리, 빈티지 다이너, 클래식카, 주크박스, 보드워크, 젊은 커플과 친구들이 나오는 따뜻한 파스텔 복고 영상입니다.",
    basePrompt:
      "A nostalgic 1960s Southern California doo-wop visual series, dreamy vintage photo aesthetic, palm-lined beach town streets, retro diners, classic convertibles, neon signs, sunset boardwalks, jukebox culture, surfing atmosphere, young couples and friends, pastel pink, mint, cream, sunset orange and aqua blue palette, warm Kodak film texture, soft grain, faded highlights, elegant 1960s fashion, A-line dresses, polka dots, cardigans, saddle shoes, bowling shirts, loafers, cat-eye sunglasses, romantic youthful nostalgia, cinematic photographic composition, gentle smiles, subtle depth, soft lighting, designed for slow pan, gentle zoom, subtle parallax and soft crossfade video motion. Avoid modern cars, smartphones, contemporary signage, cyberpunk lighting, excessive HDR, exaggerated expressions, overly sharp digital texture.",
    guide:
      "Use 1960s Southern California doo-wop mood: beach boardwalks, diners, drive-ins, classic cars, jukeboxes, pastel Kodak film, gentle romance, slow pan and zoom compositions. Never include modern objects.",
    prompts: [
      "A 1960s California beach boardwalk at golden hour, young couple walking hand in hand, pastel sky, palm trees, vintage photo realism, Kodak film grain",
      "A retro diner exterior with neon sign glowing at dusk, pink convertible parked outside, cheerful 1960s couple, warm pastel tones",
      "A smiling girl in a polka dot dress holding a milkshake in a classic diner booth, soft sunlight, nostalgic 1960s California mood",
      "A young man in a bowling shirt leaning on a mint green classic car by the beach, palm trees, warm faded colors",
      "A doo-wop inspired group of friends around a jukebox, candy colors, retro diner interior, soft vintage film texture",
      "A beach parking lot with classic convertibles and surfboards, sunset glow, 1960s youth culture, soft cinematic framing",
      "A girl with cat-eye sunglasses and scarf in her hair standing beside a turquoise convertible, seaside boulevard, pastel light",
      "A couple slow dancing under string lights outside a beach diner, romantic 1960s California evening, nostalgic color palette",
      "A drive-in burger stand with roller-skating waitress, pastel uniforms, classic cars, sunset sky, mid-century Americana",
      "A surfer boy carrying a longboard across a California beach street, retro storefronts, warm faded sunshine",
      "A young woman in an A-line dress by a motel pool with palm trees, mint and pink palette, 1960s summer glamour",
      "A couple sharing fries and cola at an outdoor diner table, chrome details, dreamy sunset light, vintage film look",
      "A seaside amusement pier in the distance, retro couple in foreground, soft sea breeze feeling, warm nostalgic tones",
      "A jukebox close-up with a girl selecting a song, red lipstick, curled hair, diner reflections, cinematic vintage texture",
      "A classic red convertible driving along the coastal highway, two young lovers, pastel ocean horizon, romantic doo-wop atmosphere",
      "A teenage girl in saddle shoes and cardigan twirling on a boardwalk, cotton candy sky, nostalgic California charm",
      "A retro gas station with chrome pumps and vintage signage, handsome young man smiling beside his car, 1960s mood",
      "A beach picnic scene with checkered blanket, soda bottles, records, and a laughing young couple, warm Kodachrome feel",
      "A pastel motel sign glowing at twilight, stylish 1960s girl with suitcase, cinematic travel romance",
      "A moonlit beach bonfire with friends in vintage casualwear, acoustic romance, warm orange firelight and cool blue night",
      "A close portrait of a smiling 1960s California girl with beehive hair and pearl earrings, soft pastel background",
      "A couple kissing beside a jukebox in a chrome-trim diner, dreamy reflections, sweet youthful romance",
      "A vintage record shop window on a sunny boulevard, retro teens browsing vinyl, warm nostalgic street life",
      "A young woman leaning from a convertible window, scarf fluttering in the ocean breeze, sunset boulevard",
      "A soda fountain counter with stools, milkshake glasses, and a handsome boy in a varsity-style retro shirt, pastel diner lighting",
      "A pair of lovers at a beach overlook watching the sun set over the Pacific, classic car nearby, cinematic nostalgia",
      "A lively boardwalk snack stand with striped awning, cotton candy, popcorn, and pastel summer crowd, 1960s style",
      "A girl adjusting her cat-eye sunglasses in front of a neon motel sign, pink and aqua tones, mid-century romance",
      "A retro dance hall with doo-wop ambiance, polished floor, elegant young couples in 1960s attire, soft glowing lights",
      "A quiet morning beach street lined with palms and convertibles, dreamy empty-scene nostalgia, warm faded sunlight",
      "A close-up of hands holding a vinyl record and a milkshake, chrome diner table, romantic retro storytelling",
      "A convertible parked near a lifeguard tower, couple laughing in the front seat, pastel beach mood",
      "A vintage postcard-style California boulevard with diners, palm trees, and cheerful young pedestrians, 1960s palette",
      "A girl in a gingham dress sitting on the hood of a classic car under sunset palms, soft breeze, sweet smile",
      "A retro carnival by the beach with ferris wheel lights beginning to glow, young couple in foreground, dreamy nostalgia",
      "A charming drive-in movie theater scene with classic cars and cozy romance, 1960s California evening",
      "A handsome young man waiting under a neon diner sign with flowers in hand, romantic vintage dating mood",
      "A pastel beach cafe terrace with striped umbrellas and smiling friends, warm summer light, retro California lifestyle",
      "A jukebox and chrome barstools reflected in polished diner surfaces, rich candy colors, nostalgic interior atmosphere",
      "A convertible interior shot with steering wheel, radio, and seaside sunset ahead, lovers on a coastal drive",
      "A young couple roller skating on a smooth boardwalk, playful 1960s fashion, pastel sunset sky",
      "A retro phone booth outside a diner, elegant girl in pearl earrings making a call, cinematic vintage framing",
      "A line of palm trees along a quiet boulevard, old convertibles parked, soft morning haze, nostalgic photo look",
      "A seaside date with milkshakes and fries on the hood of a pink car, dreamy California teen romance",
      "A striped beach umbrella scene with records, soda, sandals, and a smiling polka-dot dress girl, soft retro styling",
      "A glamorous 1960s girl stepping out of a turquoise convertible near a neon motel, pink sunset reflections",
      "A boardwalk bench moment with a shy young couple sharing a quiet smile, ocean breeze, warm pastel horizon",
      "A retro diner kitchen pass-through with milkshakes, burgers, and chrome details, lively but nostalgic mood",
      "A beachside dance scene with portable radio and carefree young friends, vintage summer energy, soft film grain",
      "A couple embracing by a lifeguard tower at sunset, warm orange-pink sky, classic California love story",
      "A vintage motel courtyard with glowing pool lights, pastel architecture, quiet romantic evening mood",
      "A sunlit record player spinning a doo-wop vinyl, close-up nostalgic still life, 1960s Americana",
      "A girl sitting at a diner window watching palm trees outside, wistful smile, dreamy retro solitude",
      "A classic car caravan on a beach road at sunset, pastel chrome reflections, stylish 1960s youth",
      "A beach town main street with retro signage, striped awnings, and smiling couples, postcard-like composition",
      "A romantic diner booth with two milkshakes and a jukebox in the background, warm nostalgic storytelling",
      "A fashion portrait of a 1960s California beauty with scarf, pearls, and cat-eye liner, soft golden light",
      "A quiet twilight scene of a neon diner and parked convertible after sunset, serene doo-wop melancholy",
      "A couple dancing barefoot on the beach beside their classic car, dreamy horizon, pastel moonrise",
      "A final nostalgic California sunset tableau with palm silhouettes, classic convertible, smiling couple, and glowing vintage city lights",
    ],
  },
  masterpiece: {
    name: "시니어채널 명화 시리즈",
    displaySummary:
      "중세와 르네상스 명화 같은 분위기입니다. 성 내부, 돌창문, 촛불, 꽃, 벨벳 드레스를 입은 아름다운 여인이 나오는 고요하고 우아한 유화 스타일 영상입니다.",
    basePrompt:
      "A beautiful medieval fine-art portrait series inspired by Renaissance and pre-Raphaelite painting, elegant women in luxurious embroidered gowns, soft candlelight, antique castle interiors and flower gardens, delicate oil painting texture, poetic stillness, deep emerald and burgundy tones, ivory skin, golden highlights, noble femininity, graceful hands, dreamy museum-quality composition, subtle realism within painterly beauty, no modern elements, no synthetic digital look, designed for extremely gentle pan and zoom motion.",
    guide:
      "Create a Senior Channel masterpiece series with pre-Raphaelite, Renaissance portrait and medieval romantic painting style. Show beautiful medieval women, noble ladies and young women with calm gazes and refined hand gestures. Use castle interiors, gothic windows, flower gardens, stone columns, tapestries, candles and antique rooms. Use deep green, burgundy, ivory, gold, antique blue and amber candlelight. Clothing should include long-sleeved embroidered gowns, velvet, brocade, pearls, gold thread, hair nets and veils. Motion should feel like a still painting coming alive: extremely subtle animation, slow zoom, soft parallax, slight fabric drift and candle flicker. Avoid modern makeup, plastic skin, exaggerated anime style, excessive smiles, modern accessories, neon colors and overdone digital fantasy.",
    prompts: [
      "A beautiful medieval lady in an embroidered burgundy gown beside a stone window, soft candlelight, Renaissance painting texture",
      "A noblewoman with long braided hair holding white roses in a castle chamber, pre-Raphaelite elegance, antique gold tones",
      "A serene young lady in emerald velvet seated before a tapestry, delicate hands, oil painting realism, poetic stillness",
      "A medieval maiden walking through a cloister garden with lilies, flowing ivory sleeves, luminous painterly light",
      "A close portrait of a noble lady with pearl headpiece and calm gaze, soft skin, rich oil brush texture, museum-quality",
      "A beautiful woman reading a manuscript near candlelight, dark wood interior, Renaissance atmosphere, warm amber glow",
      "A lady in blue brocade dress standing beneath a gothic arch, long veil, solemn elegance, antique color palette",
      "A flower-crowned maiden in a rose garden at dawn, medieval romance, painterly softness, golden haze",
      "A noblewoman seated beside a carved chair, crimson velvet gown, hands folded gracefully, classic portrait composition",
      "A medieval beauty looking out from a tall stone window, ivy outside, soft diffused light, oil painting texture",
      "A graceful lady holding a goblet in a candlelit hall, gold embroidery, shadow-rich Renaissance mood",
      "A young aristocratic woman with auburn hair and delicate veil, posed like a museum portrait, deep green background",
      "A lady in ivory silk by a fireplace, soft orange glow on her face, antique realism, refined medieval fashion",
      "A noble girl among white doves in a castle courtyard, gentle expression, poetic pre-Raphaelite styling",
      "A beautiful medieval woman with a lute in her lap, sitting near a stained glass window, soft jewel tones",
      "A close-up portrait of a lady with braided crown hairstyle and pearl earrings, velvety shadows, painterly detail",
      "A medieval duchess in dark blue velvet walking through a torch-lit corridor, stately grace, antique atmosphere",
      "A young woman arranging flowers in a silver vase, embroidered sleeves, soft chapel light, classic oil painting look",
      "A romantic maiden on a stone balcony overlooking misty hills, flowing gown, dawn light, wistful mood",
      "A noblewoman with a red velvet cloak and ivory gown, standing against a tapestry, rich historical color",
      "A medieval woman in profile holding a prayer book, soft candle glow, quiet devotional beauty",
      "A castle garden portrait with roses climbing a stone wall, elegant lady in pale gold dress, dreamy painterly light",
      "A fine-art portrait of a lady with translucent veil and calm expression, warm umber shadows, museum elegance",
      "A noblewoman seated on a carved bench beneath gothic windows, emerald and gold palette, refined stillness",
      "A young medieval beauty touching rose petals on a stone sill, soft side light, oil painting realism",
      "A woman in burgundy brocade standing near a candelabra, long sleeves, solemn romantic mood",
      "A lady in ivory and blue silk surrounded by books in a castle study, thoughtful gaze, antique atmosphere",
      "A flower garden path scene with a graceful maiden carrying wildflowers, pale sunset light, painterly softness",
      "A regal woman with jeweled headband and dark velvet dress, frontal portrait, rich deep shadows",
      "A noble lady beside a harp in a candlelit chamber, elegant fingers, refined old-world beauty",
      "A medieval maiden with loose red hair and a white gown, standing near ivy-covered stone, poetic melancholy",
      "A high-born lady in embroidered green velvet, seated near stained glass, subtle jewel-toned illumination",
      "A serene portrait of a woman with folded hands and gold-thread sleeves, classic old master composition",
      "A romantic castle terrace scene with a young noblewoman and drifting veil, dusk sky, refined stillness",
      "A beautiful woman among roses in a walled garden, pre-Raphaelite richness, soft golden light",
      "A candlelit close-up of a noblewoman's face, delicate skin, calm eyes, museum-grade portrait atmosphere",
      "A lady in crimson gown standing by a heavy curtain, soft light on velvet folds, stately medieval elegance",
      "A maiden holding a small bouquet before a carved stone column, ivory and green palette, painterly grace",
      "A noblewoman seated at a wooden table with fruit and silverware, old master still-life influence",
      "A beautiful aristocratic lady walking through a long cloister, subtle fabric motion, antique architectural setting",
      "A portrait of a fair medieval lady with pearl veil and soft rose lips, gentle expression, oil painting realism",
      "A noblewoman at twilight beside a castle window, fading blue light, contemplative romantic mood",
      "A lady in gold-embroidered sleeves touching a tapestry, warm candlelight, deep antique shadows",
      "A medieval beauty standing beside a fountain in a palace garden, pale flowers, poetic historical atmosphere",
      "A close portrait of a lady with braided hair, ivory veil, and luminous skin, rich museum-style painting texture",
      "A young noblewoman with a manuscript and roses, soft indoor light, elegant contemplative composition",
      "A castle interior with a woman in deep sapphire gown near a candelabra, velvety darkness, high refinement",
      "A rose garden arch framing a graceful medieval lady in blush-toned silk, painterly romance",
      "A noblewoman standing in quiet prayer near a chapel alcove, candle flicker, spiritual serenity",
      "A lady with long sleeves leaning on a stone balcony, distant mountains, dawn mist, wistful elegance",
      "A regal portrait of a medieval woman in burgundy and gold, direct gaze, rich oil painted detail",
      "A beautiful court lady with lilies in hand, pale ivory dress, refined softness, antique palette",
      "A young woman near a stained glass window with jewel-toned reflections, delicate face, Renaissance mood",
      "A noblewoman seated in a floral garden pavilion, flowing fabric, warm evening light, pre-Raphaelite beauty",
      "A candlelit castle hallway scene with a lady in green velvet turning gently, dignified grace",
      "A portrait of a medieval beauty with roses woven into her hair, dreamy painterly atmosphere, soft gold haze",
      "A palace chamber scene with embroidered curtains, carved chair, and elegant noblewoman in profile",
      "A fair lady in pale blue silk standing beneath stone arches, subtle smile, museum-quality composition",
      "A serene final portrait of a medieval woman surrounded by roses and candlelight, timeless beauty",
      "A grand closing tableau of a noble medieval lady in a castle garden at sunset, rich oil painting texture, poetic and elegant",
    ],
  },
  italianLove: {
    name: "이탈리안 러브송 시리즈",
    displaySummary:
      "빈티지 이탈리아 러브송 분위기입니다. 골목, 발코니, 작은 카페, 베스파, 꽃 장식 창문, 노을 아래 연인이 나오는 따뜻하고 낭만적인 유럽 감성 영상입니다.",
    basePrompt:
      "A romantic vintage Italian love song visual series, old European streets, glowing sunset piazzas, flowered balconies, intimate cafes, Vespa romance, elegant couples, warm Mediterranean air, terracotta walls, cream stone architecture, soft golden light, poetic nostalgia, tasteful vintage fashion, emotional but refined, cinematic photo realism, cohesive romantic atmosphere, no modern signage, no contemporary streetwear, designed for slow drifting motion and gentle parallax.",
    guide:
      "Create an Italian love song series set in vintage Italian cities, small piazzas, coastal towns, cafe streets and sunset balconies. Show romantic couples, beautiful Italian women, classic men and elegant silhouettes. Use warm Mediterranean sunset palette: terracotta, cream, olive, wine red and golden hour glow. Clothing should include linen shirts, sundresses, floral dresses, silk scarves, classic European tailoring and modest vintage elegance. Motion should feel like a love song: gentle cinematic glide, slow zoom, soft crossfade, airy parallax and curtains moving lightly in balcony wind. Avoid modern billboards, contemporary streetwear, overly sexual styling, EDM lighting and cold blue neon.",
    prompts: [
      "A romantic Italian couple walking through a narrow stone alley at sunset, flowered balconies, warm terracotta tones",
      "A beautiful woman in a floral sundress standing on a balcony with ivy and glowing evening light, vintage Italian mood",
      "A Vespa parked near a cafe in a small Italian piazza, elegant couple beside it, soft golden hour atmosphere",
      "A candlelit cafe table for two on a cobblestone street, wine glasses, roses, nostalgic European romance",
      "A handsome man in a linen shirt waiting by a fountain in an old Italian square, warm sunset haze",
      "A graceful woman leaning out of a shuttered window with flowers, terracotta wall, dreamy vintage atmosphere",
      "A couple sharing gelato while walking past stone buildings, soft Mediterranean light, romantic nostalgia",
      "A quiet coastal Italian village at dusk, a woman in a flowing dress near the sea, poetic cinematic mood",
      "A sunset balcony dinner with wine and roses, old European architecture, intimate vintage love song feeling",
      "A charming alley with laundry lines and flower pots, stylish young couple holding hands, golden light",
      "A classic Vespa ride through an old Italian town, elegant scarf fluttering, warm romantic framing",
      "A beautiful woman by a window with lace curtains and roses, wistful expression, vintage Italy",
      "A couple dancing slowly in a lantern-lit piazza at twilight, old-world romance, soft amber tones",
      "A narrow staircase lined with potted flowers, graceful woman in cream dress descending, cinematic softness",
      "A seaside promenade in Italy at sunset, vintage lovers walking along the stone railing, pastel warmth",
      "A rustic cafe terrace with striped awning, espresso cups, floral tablecloth, soft Mediterranean nostalgia",
      "A young man offering roses to a woman beside an old fountain, terracotta and gold palette",
      "A balcony scene with billowing curtains and evening sky, elegant woman framed by old shutters",
      "A flower-covered doorway in an Italian village, romantic couple pausing for a tender moment",
      "A sunset harbor scene with fishing boats and a graceful woman in a silk scarf, nostalgic coastal romance",
      "A close portrait of an Italian beauty with soft curls and red lips, warm antique light",
      "A stone archway opening into a glowing piazza, couple walking toward sunset, dreamy cinematic realism",
      "A classic outdoor restaurant scene with candles, wine, and old European charm, intimate romantic atmosphere",
      "A man in vintage tailoring smoking thoughtfully near a Vespa, warm wall textures, Italian mood",
      "A beautiful woman seated by a cafe window with espresso and roses, elegant solitude, soft sunset",
      "A romantic evening under string lights in a small Italian square, couple seated close together",
      "A flower market lane in old Italy, beautiful woman in a sundress carrying fresh blooms",
      "A golden sunset over terracotta rooftops, woman on a balcony holding a letter, love song melancholy",
      "A coastal cliff village scene with stone walls and sea breeze, elegant couple framed by dusk light",
      "A rustic wooden door with flower boxes and a graceful woman in cream linen, warm nostalgic texture",
      "A couple riding a Vespa along a narrow village street, vintage joy, glowing Mediterranean light",
      "A lantern-lit alley and a shy romantic glance between lovers, soft shadow and gold highlights",
      "A beautiful Italian widow-style portrait in black lace and warm candlelight, dramatic but tasteful elegance",
      "A cafe musician corner with accordion and wine, old Italian romance atmosphere, deep amber tones",
      "A seaside cafe terrace with linen tablecloth and twilight ocean view, elegant woman waiting",
      "A man and woman meeting under a stone arch with roses, classical romance, terracotta walls",
      "A balcony breakfast scene with coffee, fruit, and warm morning sun over an Italian street",
      "A graceful woman walking through a lemon grove near a villa, soft summer light, romantic Italian charm",
      "A quiet chapel-side street in Italy with flowers and warm evening glow, contemplative feminine portrait",
      "A sunset silhouette of lovers on a rooftop terrace overlooking old Italian rooftops",
      "A vintage Italian streetcar or old car near a piazza, elegant couple beside it, nostalgic romance",
      "A moonlit balcony with candles and lace curtains, solitary woman in deep red dress, love song mood",
      "A rustic wine cellar doorway and a romantic couple framed by warm amber light",
      "A flower-draped seaside balcony with a woman looking to the horizon, Mediterranean wistfulness",
      "An evening piazza fountain reflecting golden lights, elegant couple seated nearby, timeless romance",
      "A close-up of hands sharing espresso and touching lightly across a cafe table, intimate cinematic detail",
      "A woman in olive-toned dress walking through a cobblestone lane under hanging lights, vintage Italy",
      "A glowing sunset through old shutters onto a lace-covered table, roses and handwritten letter",
      "A classic Italian hotel entrance with warm lamps and a stylish couple arriving at dusk",
      "A romantic rain-kissed stone street in Italy, couple under one umbrella, amber reflections",
      "A graceful portrait beside a vine-covered wall, terracotta textures, silk scarf, old-world beauty",
      "A seaside dinner table for two with candles and ocean behind, soft twilight romance",
      "A quiet little piazza at dawn with flower stalls and a wistful woman in cream linen",
      "A couple embracing beside a Vespa under warm street lamps, nostalgic Italian night",
      "A narrow alley framed by arches and bougainvillea, cinematic romantic composition",
      "A woman gazing from a flowered balcony while church bells ring in the distance, poetic vintage mood",
      "A classic Mediterranean courtyard with vines, fountain, and elegant lovers in soft evening light",
      "A candlelit restaurant window scene with reflections and warm wine-red tones, intimate nostalgia",
      "A final sunset walk through an old Italian street with rose petals and golden light, timeless love",
      "A grand closing tableau of vintage Italian romance, piazza, balcony flowers, Vespa, warm sunset, and elegant lovers",
    ],
  },
  summerVintage: {
    name: "여름 빈티지 시리즈",
    displaySummary:
      "1950~1970년대 여름 휴양지 분위기입니다. 해변, 파라솔, 수영장, 선글라스, 빈티지 수영복과 선드레스를 입은 인물이 나오는 청량한 복고 여름 영상입니다.",
    basePrompt:
      "A dreamy vintage summer series, sunlit beach resorts, retro swimsuits and sundresses, pastel coastal palette, poolside glamour, seaside motels, umbrellas, sparkling ocean light, warm nostalgic summer air, elegant feminine styling, faded film texture, cheerful but soft mood, no modern branding, no contemporary swimwear styling, designed for gentle pan and zoom with breezy photographic motion.",
    guide:
      "Create a vintage summer series set in sunny beaches, seaside motels, poolside decks, boardwalks and coastal summer towns. Show women, couples and friends in retro resort fashion. Use sun-faded aqua, coral, cream, yellow, sky blue and warm seaside highlights. Clothing should include one-piece retro swimsuits, sundresses, straw hats, scarves, cat-eye sunglasses, sandals and light linen. Motion should feel airy: slow pan, subtle zoom, gentle parallax, sunlit drifting motion, with imagined small movement in waves, curtains and hair. Avoid modern beachwear logos, sports brands, excessive retouching, dark mood and winter colors.",
    prompts: [
      "A vintage summer beach with striped umbrellas and elegant women in retro swimsuits, soft aqua and coral palette",
      "A glamorous woman in cat-eye sunglasses relaxing by a motel pool, sun-faded colors, nostalgic resort mood",
      "A seaside boardwalk at golden hour with a smiling couple in vintage summer clothes, warm breeze feeling",
      "A retro motel balcony overlooking the ocean, woman in a sundress holding a cold drink, dreamy light",
      "A striped deck chair scene with towels, sunglasses, and a one-piece swimsuit beauty, classic summer nostalgia",
      "A cheerful beach picnic with fruit, lemonade, and retro friends under a pastel umbrella",
      "A woman in a white sundress walking barefoot by the shoreline, soft sea foam, cinematic summer glow",
      "A poolside scene with mint tiles, sun hat, and elegant vintage bathing suit, mid-century resort atmosphere",
      "A coastal snack stand with pastel signs and summer drinks, bright but faded retro palette",
      "A woman in coral swimsuit sitting on a diving board, playful 1960s summer photography style",
      "A seaside motel sign and palm trees, stylish woman with scarf and sunglasses, postcard nostalgia",
      "A retro beach towel scene with magazine, lemonade, sandals, and soft sunlight, elegant summer still life",
      "A couple sharing watermelon on the sand near a striped umbrella, joyful vintage summer romance",
      "A pastel boardwalk ice cream stand with smiling women in sundresses, warm nostalgic tone",
      "A woman adjusting her straw hat beside a turquoise pool, soft sun haze, glamorous summer quiet",
      "A beach cabana with curtains fluttering, elegant retro vacation mood, cream and aqua tones",
      "A pool ladder reflection scene with shimmering water and coral swimsuit, dreamy old resort vibe",
      "A sunny coastal road with convertible and women in summer scarves, warm vintage travel mood",
      "A retro lifeguard tower and a stylish woman with beach tote, soft ocean horizon, faded film look",
      "A woman lying on a striped beach towel reading a magazine, cat-eye sunglasses, golden summer light",
      "A seaside cafe terrace with lemonade and flowers, graceful woman in a floral sundress",
      "A glamorous summer portrait with wet hair, vintage swimsuit, pearl earrings, and warm sunlight",
      "A beach umbrella casting patterned shadows on sand, elegant feminine retro styling",
      "A pastel surf shack and warm afternoon light, playful vintage beach energy without modern sport branding",
      "A woman walking from a motel room to the pool in a silk robe, old resort glamour",
      "A retro beach date with sandals in hand and waves touching the shore, romantic summer softness",
      "A sun-bleached boardwalk scene with striped awnings and cheerful vacation fashion",
      "A woman holding a coconut drink near the beach, coral lipstick, old postcard summer palette",
      "A quiet dawn beach with deck chairs and pale sky, wistful feminine summer nostalgia",
      "A classic pool party tableau with elegant retro swimsuits and pastel glass bottles",
      "A seaside changing cabana with striped fabric and a stylish vintage swimsuit portrait",
      "A beach bicycle with basket and flowers near the shore, woman in soft yellow sundress",
      "A woman applying lipstick in a compact mirror by the pool, glamorous vintage resort mood",
      "A bright beach scene with shells, sunglasses, and a folded towel, cinematic summer still life",
      "A sunset shoreline walk with couple silhouettes and warm coral sky, vintage romance",
      "A retro beach bar serving lemonade and fruit, elegant women seated nearby, sun-faded palette",
      "A woman in white swimsuit standing under a striped parasol, breeze in scarf, warm film grain",
      "A pastel motel courtyard with pool floats and quiet summer elegance, mid-century holiday feeling",
      "A sunlit stairway to the beach framed by flowers and vintage beachwear, dreamy nostalgic composition",
      "A close portrait of a summer beauty with large sunglasses and straw hat, sea reflected in lenses",
      "A retro beach blanket with fruit, records, sandals, and soft midday light, lifestyle still life",
      "A poolside chaise lounge with folded towel and sun hat, no people, elegant resort quiet",
      "A woman stepping into shallow surf wearing a modest retro swimsuit, soft foam and warm light",
      "A classic convertible parked by the coast with beach bags and summer scarves, vintage travel vibe",
      "A woman in floral sundress leaning on a motel balcony railing, looking toward the ocean sunset",
      "A striped umbrella row on a quiet beach, creamy haze, old postcard atmosphere",
      "A cheerful summer group photo aesthetic with vintage outfits and pastel resort background",
      "A pool water reflection on a woman's legs and sandals, dreamy cropped cinematic detail",
      "A seaside snack scene with popsicles, lemonade, and laughter, playful but elegant retro mood",
      "A glamorous sunset pool portrait with coral sky and shimmering reflections",
      "A beach bonfire with summer dresses and warm orange light, soft nostalgic vacation mood",
      "A woman in aqua swimsuit sitting on a pastel boat by the shore, coastal leisure atmosphere",
      "A tropical flower and towel still life on a beach chair, airy vintage holiday styling",
      "A woman by a motel ice machine or summer vending corner, playful retro Americana resort detail",
      "A slow summer walk under palms near the ocean, sunlit feminine silhouette, faded film tone",
      "A seaside breakfast tray on balcony with fruit and coffee, soft golden morning holiday mood",
      "A relaxed beach afternoon with shell jewelry, scarf, sun hat, and gentle ocean sparkle",
      "A warm coral sunset with women returning from the water, elegant silhouettes and nostalgic composition",
      "A dreamy last-light beach umbrella scene with empty chairs and a lingering holiday feeling",
      "A grand closing vintage summer tableau with beach, parasol, poolside glamour, and glowing sunset",
    ],
  },
  cafeJazz: {
    name: "카페 재즈 빈티지 스타일",
    displaySummary:
      "비 오는 밤의 빈티지 재즈 카페 분위기입니다. 따뜻한 조명, 커피잔, 책, 레코드판, 우드 테이블, 창밖 빗방울과 조용한 여인이 나오는 차분한 영상입니다.",
    basePrompt:
      "A vintage cafe jazz visual series, warm wood interiors, soft amber lighting, rainy windows, elegant women, coffee cups, books, flowers, vinyl records, quiet city-night atmosphere, intimate and refined mood, cinematic photo realism, nostalgic 1940s to 1960s cafe styling, no modern laptops or branding, designed for slow push-in, subtle pan, and gentle ambient motion.",
    guide:
      "Create a cafe jazz vintage series set in old jazz cafes, rainy city windows, warm wood interiors, vinyl corners and bookstore cafe ambience. Show quiet women, jazz-inspired guests, piano and saxophone mood figures, solitary seated characters and refined still-life details. Use warm brown, amber, burgundy, dark green, cream light and soft tungsten lighting. Clothing should include knitwear, classic dresses, wool coats, blouses, berets, loafers and modest vintage styling. Motion should be static and slow: slow push-in, subtle pan, delicate window-rain parallax, coffee steam and intimate still-life motion. Avoid modern cafe logos, laptop close-ups, modern plastic props, fluorescent lighting and excessive neon.",
    prompts: [
      "A warm vintage jazz cafe interior with amber lamps, wooden tables, coffee cups, and rainy windows",
      "An elegant woman in a dark green dress seated by the cafe window, reading quietly, warm jazz-night mood",
      "A close-up of coffee, vinyl record, and candlelight on a wooden cafe table, nostalgic jazz ambience",
      "A moody rainy city street seen through a cafe window, blurred lights, soft brown and amber palette",
      "A beautiful woman holding a coffee cup in a cozy old cafe booth, warm tungsten glow, refined solitude",
      "A jazz cafe corner with upright piano, flowers, and dim lamp light, cinematic vintage quiet",
      "A book and espresso on a marble cafe table beside rain-streaked glass, intimate nostalgic still life",
      "A woman in a wool coat entering a warm jazz cafe from a rainy night, old-world city romance",
      "A saxophone resting on a chair beside a small table and lamp, deep amber atmosphere",
      "A quiet cafe shelf with books, vinyl, flowers, and warm shadows, elegant interior styling",
      "A rainy evening window seat with tea, candle, and a woman looking outside thoughtfully",
      "A classic jazz bar counter with polished wood, soft reflections, and dim hanging lights",
      "A woman in a beret writing in a notebook beside a steaming coffee, vintage cafe intimacy",
      "A close portrait of a jazz cafe muse in soft amber light, calm eyes, subtle lipstick, classic elegance",
      "A vinyl player spinning softly in a cozy cafe corner, coffee steam rising, moody stillness",
      "A rain-soaked Parisian or old-city street outside a jazz cafe, warm interior glow spilling onto pavement",
      "A jazz singer mood portrait in velvet dress seated near a lamp, rich burgundy and brown tones",
      "A cafe table with croissant, coffee, and a single rose, soft cinematic nostalgia",
      "A woman reading poetry beneath a stained yellow lamp in a wood-paneled cafe",
      "A rainy window reflection of city lights behind an elegant seated woman, contemplative jazz-night atmosphere",
      "A small stage with microphone and piano in an intimate vintage jazz club cafe",
      "A record shelf and old speaker beside a glowing table lamp, warm nostalgic music corner",
      "A close-up of a hand holding a coffee cup beside an open book, amber bokeh in background",
      "A woman in cream blouse and dark skirt sitting alone at a corner table, soft shadows and jazz mood",
      "A fogged cafe window with handwritten condensation marks, coffee and candle nearby",
      "A refined cafe interior with dark wood, velvet seat, flowers, and soft evening light",
      "A city-night jazz cafe doorway with warm lamps and rain reflections on the street",
      "A woman listening quietly beside a vinyl player, candlelight reflecting on glass and wood",
      "A close still life of espresso, book pages, and an old fountain pen, cinematic cafe warmth",
      "A moody booth scene with low lamp light and deep green walls, timeless jazz ambience",
      "A quiet cafe piano under dim light with coffee cup on top, intimate performance-after-hours mood",
      "A woman with short vintage curls looking out a rainy cafe window, elegant emotional stillness",
      "A tabletop scene with jazz record sleeve, coffee spoon, and warm reflections, classic styling",
      "A cozy winter-evening cafe corner with knitwear, tea steam, and soft lamp glow",
      "A candlelit cafe with dark wood paneling and floral vase, refined nostalgic richness",
      "A black umbrella by the chair beside a window table, rain outside, coffee inside, poetic solitude",
      "A jazz-themed cafe wall with framed photos, warm shadows, and old speakers",
      "A woman in a burgundy dress holding a cup near her lips, close portrait, golden jazz light",
      "A velvet sofa corner in a jazz cafe with books and gramophone, intimate old-world charm",
      "A rainy tram or street seen beyond the cafe glass, soft blurred city motion, warm interior contrast",
      "A softly lit dessert plate and cappuccino in a refined vintage cafe, cozy evening atmosphere",
      "A beautiful woman beside a lamp and piano, half-profile portrait, elegant melancholy",
      "A warm close-up of coffee foam, candle, and jazz record texture, sensory nostalgic still life",
      "A quiet morning jazz cafe before opening, empty chairs, soft window light, serene atmosphere",
      "A saxophone and sheet music on a wooden table beside a cup of black coffee",
      "A woman turning a book page slowly by the window, rain trailing down the glass, deep calm mood",
      "A red rose in a small vase on a cafe table, warm bokeh, classic romance and jazz softness",
      "A record player beside shelves of books in a dim cafe, brown and amber harmony",
      "A city lights reflection on a wet cafe window beside a steaming mug, cinematic night mood",
      "A stylish woman in coat and beret seated under a hanging lamp, quiet jazz sophistication",
      "A still life of croissant, espresso, open novel, and candlelight, warm intimate composition",
      "A small jazz stage after hours with empty microphone stand and low amber lights",
      "A corner booth with deep green leather and polished wood, cozy upscale vintage atmosphere",
      "A woman smiling gently while holding a warm cup, soft jazz-night sentiment",
      "A close-up of rain drops and warm interior lights blurring through cafe glass",
      "A moody cafe bookshelf with ivy, records, and lamp glow, refined nostalgic styling",
      "A piano keys close-up with coffee cup and dim lights, elegant musician atmosphere",
      "A quiet late-night cafe interior with only one table occupied, intimate cinematic stillness",
      "A warm farewell scene by the cafe window with rain outside and amber lamps inside",
      "A grand closing tableau of a vintage jazz cafe, rain-lit window, coffee, books, and elegant quiet mood",
    ],
  },
  hollywoodWalk: {
    name: "할리우드 워킹 빈티지 시리즈",
    displaySummary:
      "올드 할리우드 거리 분위기입니다. 영화관 간판, 클래식 호텔, 야자수 거리, 네온 조명, 우아하게 걷는 글래머 여성이 나오는 세련된 도시 야경 영상입니다.",
    basePrompt:
      "A vintage Hollywood walking series, glamorous old boulevard nights, elegant women strolling past classic theaters and luxury hotels, palm-lined streets, warm marquee lights, champagne and gold color palette, cinematic old-Hollywood sophistication, refined fashion, quiet confidence, no modern branding, no contemporary streetwear, designed for graceful tracking-like motion, soft pan, and stylish urban drift.",
    guide:
      "Create a Hollywood walking vintage series set on old Hollywood boulevards, theater marquees, luxury hotels, palm-lined night streets and glamorous city sidewalks. Show elegant women, film-star silhouettes, refined city people and classic couples. Use gold, champagne, black, ivory, deep red and warm city-night glow. Clothing should include gloves, heels, fitted coats, evening dresses, pearls, sunglasses, waved hair and classic handbags. Motion should support walking scenes: elegant tracking feel, slow pan, gentle dolly follow and glamorous cinematic drift. Avoid modern brand signs, contemporary street fashion, excessive flash, strong club lighting and overly crowded modern city scenes.",
    prompts: [
      "An elegant woman walking down old Hollywood boulevard at night, theater lights glowing, classic glamour",
      "A vintage cinema marquee and a stylish woman in heels and gloves, warm gold city-night palette",
      "A classic hotel entrance with red carpet glow and an elegant woman arriving, old Hollywood mood",
      "A palm-lined boulevard at dusk with a glamorous actress-like figure strolling alone, cinematic nostalgia",
      "A beautiful woman in a fitted coat under theater lights, black and champagne tones, poised elegance",
      "A classic convertible parked outside a grand Hollywood hotel, stylish woman stepping out, vintage luxury",
      "A nighttime sidewalk scene with neon marquee reflections and a sophisticated woman walking past",
      "A close portrait of an old-Hollywood beauty with waves, pearls, and red lipstick, soft golden lighting",
      "A luxury storefront window reflecting city lights and a walking woman in ivory gloves",
      "A glamorous woman crossing a boulevard beneath palm trees and theater signs, cinematic vintage night",
      "A grand hotel staircase scene with elegant evening dress and old Hollywood confidence",
      "A classic streetlamp and velvet night sky over a stylish boulevard walk, warm urban nostalgia",
      "A poised woman in a cream coat walking past a cinema poster wall, refined 1950s Hollywood style",
      "A champagne-colored classic gown under glowing marquee lights, dramatic but elegant city composition",
      "A theater entrance with ticket booth and a glamorous solitary figure, timeless urban sophistication",
      "A warm night drive scene with convertible, palms, and luxury hotels, vintage Hollywood romance",
      "A woman with sunglasses and silk scarf walking confidently along a classic boulevard at twilight",
      "A polished hotel lobby doorway with golden reflections and a stylish vintage silhouette",
      "A close-up of heels on a glamorous sidewalk with reflections from theater signs",
      "A sophisticated woman pausing under a tall marquee, old-Hollywood star aura, gold and black palette",
      "A boulevard cafe terrace at night with well-dressed women and cinematic city glow",
      "A glamorous woman walking with a small handbag beneath palm shadows and neon highlights",
      "A vintage limousine curbside scene near a famous-looking theater, refined Hollywood elegance",
      "A woman in deep red dress near a hotel awning, warm lights and classic old-LA atmosphere",
      "A quiet side street behind the boulevard with film-noir undertone and elegant feminine presence",
      "A classic movie premiere mood scene with lights, elegant dress, and polished city glamour",
      "A stylish woman passing window displays filled with evening fashion, reflective city-night composition",
      "A boulevard crosswalk scene framed by tall palms and glowing theater lights, graceful movement feeling",
      "A close portrait of a vintage Hollywood beauty in soft focus amber light",
      "A classic car door opening as an elegant woman descends onto the boulevard, cinematic timing",
      "A hotel canopy entrance in rain-polished night reflections, glamorous walking scene",
      "A black dress and pearl gloves silhouette against a warm theater facade, timeless sophistication",
      "A city sidewalk under string lights and palms, graceful old-Hollywood urban stroll",
      "A stylish woman in cream heels moving past a ticket counter, golden marquee atmosphere",
      "A luxury boulevard storefront with mirrors and warm interior glow, poised feminine fashion portrait",
      "A dramatic but refined alley-to-boulevard transition with evening gown and cinematic light spill",
      "A champagne gown billowing slightly in the night breeze outside a classic hotel",
      "A grand staircase and elegant woman looking over the city lights, aspirational Hollywood mood",
      "A close-up of gloved hand holding a clutch bag under marquee bulbs",
      "A palm-shadowed boulevard scene with quiet traffic and glamorous walking silhouette",
      "A polished old-Hollywood bar entrance with red and gold glow, elegant nightlife atmosphere",
      "A woman in a silk scarf near a classic hotel sign, luxurious vintage urban composition",
      "A theater poster and velvet curtain glimpse behind a walking starlet figure",
      "A city-night portrait with warm backlight, red lips, pearls, and calm confidence",
      "A glamorous woman stepping across light reflections from a marquee onto the pavement",
      "A classic convertible waiting curbside outside a hotel, sophisticated cinematic anticipation",
      "A quiet luxury sidewalk with palms and art deco facade, elegant vintage walking mood",
      "A black-and-gold old-Hollywood fashion portrait by a theater column",
      "A high-end storefront arcaded walkway with soft reflections and elegant heel-click energy",
      "A poised woman pausing by a boulevard lamppost, marquee lights blooming behind her",
      "A rain-glossed Hollywood night sidewalk with a glamorous coat and gloves silhouette",
      "A classic theater entrance under glowing bulbs, refined feminine elegance and cinematic nostalgia",
      "A stylish woman in fitted ivory walking past a palm-lined hotel frontage",
      "A luxury rooftop terrace overlooking old Hollywood lights, glamorous city-night finale mood",
      "A handbag, gloves, lipstick, and ticket stub still life on a cafe table near the boulevard",
      "A quiet confident walk past a grand hotel facade, champagne and black palette",
      "A classic Hollywood boulevard corner with palms, theater sign, and elegant woman crossing",
      "A vintage starlet-like portrait under golden city night light, refined and timeless",
      "An old Hollywood night farewell scene beside a waiting classic car and glowing marquee",
      "A grand closing tableau of glamorous vintage Hollywood boulevard, palms, theater lights, and elegant walking figure",
    ],
  },
  lasVegas: {
    name: "라스베가스 빈티지 스타일",
    displaySummary:
      "올드 라스베가스 네온 스트립 분위기입니다. 카지노 외관, 호텔 입구, 칵테일 바, 클래식카, 시퀸 드레스의 글래머 여성이 나오는 화려한 밤 영상입니다.",
    basePrompt:
      "A vintage Las Vegas glamour series, old neon strip, mid-century casino lights, cocktail elegance, classic cars, desert-night atmosphere, glamorous women, sequin dresses, gold and neon reflections, cinematic old Vegas mood, refined showgirl-inspired styling, no modern LED billboards, no contemporary club fashion, designed for slow neon scanning pans, soft zoom, and dreamy lounge-style transitions.",
    guide:
      "Create a Las Vegas vintage series set on the old Las Vegas strip, neon casinos, lounge entrances, mid-century desert nightlife and vintage hotel exteriors. Show glamorous women, showgirl-inspired figures, stylish couples and lounge guests. Use neon pink, turquoise, gold, red, purple, black and glamorous night contrast. Clothing should include sequin dresses, gloves, fur stoles, cocktail dresses, heels and classic evening glamour. Motion should feel like old Vegas nightlife: slow neon pan, soft zoom, dreamy crossfade and cinematic lounge drift. Avoid modern LED billboard look, contemporary club fashion, excessive sexuality and cyberpunk tones.",
    prompts: [
      "A glamorous woman in a sequin dress standing beneath vintage Las Vegas neon signs, old strip atmosphere",
      "A classic casino entrance glowing in pink and turquoise neon, elegant couple arriving in a vintage car",
      "A cocktail lounge doorway with warm gold light and glamorous old Vegas styling",
      "A beautiful woman in black gloves and red lipstick leaning against a classic convertible on the Las Vegas strip",
      "A mid-century hotel sign and neon-lit night sky, elegant showgirl-inspired portrait with refined styling",
      "A vintage Vegas boulevard with glowing marquees and polished classic cars, cinematic old nightlife mood",
      "A cocktail glass and neon reflection on a lounge table, glamorous still life, gold and pink tones",
      "A poised woman walking past casino lights in an ivory cocktail dress, elegant old Vegas night",
      "A classic lounge singer mood scene with velvet, spotlight glow, and mid-century glamour",
      "A night portrait of a glamorous woman framed by turquoise and red neon, refined vintage style",
      "A casino exterior with warm gold bulbs and a stylish couple beneath the sign, cinematic retro drama",
      "A fur stole, gloves, and heels fashion portrait outside an old Vegas hotel, upscale vintage nightlife",
      "A neon motel sign on the edge of the strip, glamorous woman beside it, desert-night nostalgia",
      "A classic car arriving at a lavish casino entrance, golden reflections and elegant anticipation",
      "A beautiful woman seated at a lounge bar with a cocktail, dim amber light, old Vegas sophistication",
      "A night street corner with stacked neon signs and a poised woman in a shimmering dress",
      "A glamorous hallway or casino lobby with mirrored reflections, warm gold mood, vintage luxury",
      "A close portrait of an old Vegas beauty with sequins, pearls, and dramatic but tasteful makeup",
      "A neon pink casino frontage and a woman in black satin gloves, refined retro seduction",
      "A turquoise-lit sidewalk and classic hotel facade, cinematic walking glamour",
      "A rooftop or elevated terrace overlooking old Vegas lights, cocktail elegance, nostalgic city-night feel",
      "A lounge stage with microphone and velvet curtain, empty but glowing with old Vegas atmosphere",
      "A polished casino doorway with showgirl-inspired silhouette in tasteful mid-century styling",
      "A glamorous woman stepping from a classic car into neon reflections, cinematic arrival scene",
      "A gold-lit bar corner with crystal glasses and warm lounge ambiance, old Vegas richness",
      "A desert-night boulevard scene with vintage signs and glamorous fashion, dreamy mid-century contrast",
      "A black cocktail dress and fur wrap portrait under glowing marquee bulbs",
      "A couple walking toward a casino entrance beneath huge neon letters, romantic old Vegas mood",
      "A lounge booth with red velvet, cocktail, and low golden light, refined glamorous intimacy",
      "A classic Vegas sign composition with starburst neon and elegant feminine silhouette",
      "A stylish woman by a roulette-inspired decor setting, vintage casino palette, no visible modern gaming tech",
      "A mirrored powder-room portrait with glamorous old Vegas evening styling",
      "A gold, red, and neon pink night scene with elegant woman turning toward the lights",
      "A classic limousine curbside under casino awning, poised vintage nightlife arrival",
      "A woman in sequined champagne gown standing by a palm and neon-lit hotel entrance",
      "A warm lounge interior with brass, velvet, and cocktail glass sparkle, cinematic nostalgic luxury",
      "A glamorous city-night portrait with turquoise neon halo and soft gold skin tones",
      "A vintage casino corridor with patterned carpet and elegant woman in profile, mid-century opulence",
      "A classic sign-filled boulevard panorama with glowing cars and refined Las Vegas glamour",
      "A red lipstick, playing cards, cocktail, and satin glove still life, old Vegas elegance",
      "A showgirl-inspired but tasteful fashion portrait with feathers and sequins under warm bulbs",
      "A glamorous woman seated alone in a lounge booth, moody amber light and neon reflections",
      "A hotel marquee and starry desert sky above an elegant old Vegas boulevard",
      "A sparkling cocktail bar shelf and soft-focus evening glamour, rich vintage color contrast",
      "A woman walking through neon reflections in heels, cinematic old Vegas sidewalk mood",
      "A classic convertible parked under a giant vintage sign, glamorous mid-century nightlife",
      "A velvet-curtain lounge entrance with gold trim and an elegant woman framed in the doorway",
      "A poised portrait in emerald cocktail dress against pink and turquoise neon, retro luxury",
      "A casino exterior with glowing bulbs and a quiet, refined after-midnight atmosphere",
      "A glamorous staircase scene inside a vintage hotel-casino, gold rails, satin dress, cinematic drama",
      "A classy couple at a lounge bar under dim amber light, old Vegas romance and style",
      "A close-up of sequins catching neon light, glamorous fashion detail and mid-century mood",
      "A desert roadside sign leading into old Las Vegas, classic car and glamorous traveler",
      "A neon heart-shaped sign above a lounge entrance, elegant woman waiting beneath it",
      "A stylish woman in white gloves near a turquoise neon casino wall, cinematic retro portrait",
      "A midnight strip scene with vintage signage, warm pink glow, and sophisticated feminine silhouette",
      "A grand old Vegas hotel facade under a purple-blue night sky, cocktail glamour foreground",
      "A lounge table with martini, cigarette case, pearls, and warm lamp light, refined still life",
      "A final walk beneath towering vintage neon on the old strip, glamorous farewell mood",
      "A grand closing tableau of vintage Las Vegas glamour, neon casinos, classic car, elegant woman, and gold night reflections",
    ],
  },
  mapleFantasy: {
    name: "메이플 판타지 컨셉",
    displaySummary:
      "밝고 귀여운 2D 판타지 RPG 감성입니다. 동화 같은 숲, 작은 마을, 마법 아카데미, 별빛 하늘, 아기자기한 캐릭터, 파스텔 색감과 모험 분위기가 어울리는 뮤비 영상입니다.",
    basePrompt:
      "A bright whimsical 2D fantasy RPG music video concept inspired by colorful side-scrolling adventure game aesthetics, cute heroic characters, enchanted forests, cozy villages, floating islands, magical academies, mushroom houses, starry skies, soft pastel lighting, dreamy spell effects, charming fantasy costumes, cheerful adventure mood, clean painterly animation look, no logos, no copyrighted characters, no game UI, no text, designed for gentle cinematic motion, playful parallax, magical sparkles and soft crossfade transitions.",
    guide:
      "Create a Maple-like fantasy concept without copying any official characters, logos, monsters or UI. Use a bright 2D fantasy RPG feeling: enchanted forests, cozy towns, floating islands, mushroom houses, magical libraries, crystal caves, sky bridges, pastel sunsets, cute adventurers, wizards, archers and musicians. Colors should be candy pastel, warm green, sky blue, lavender, peach and golden light. Motion should be playful and magical: gentle side-scrolling parallax, soft zoom, floating sparkles, drifting leaves, glowing spell particles and smooth crossfades. Avoid dark horror, realistic violence, official game logos, exact copyrighted characters, text overlays and modern city objects.",
    prompts: Array.from({ length: 60 }, (_, index) => {
      const scenes = [
        "a cozy fantasy village with mushroom-roof houses, lanterns, and cute young adventurers preparing for a musical journey",
        "an enchanted forest path with glowing flowers, floating sparkles, and a cheerful wizard character holding a tiny staff",
        "a pastel sky island with cotton clouds, crystal bridges, and a small heroic archer looking toward the horizon",
        "a magical academy courtyard with round towers, banners, spell books, and students in charming fantasy outfits",
        "a moonlit treehouse town with warm windows, oversized leaves, and a bard playing music under fireflies",
        "a candy-colored meadow with tiny fantasy creatures, giant flowers, and a smiling adventurer in a red cape",
        "a crystal cave filled with blue gems, soft reflections, and a brave character carrying a glowing lantern",
        "a floating library with spiral stairs, enchanted books, and golden dust drifting through the air",
        "a sunny riverside town with wooden bridges, pastel rooftops, and friends waving before an adventure",
        "a starry night festival with balloons, magical fireworks, and cute fantasy performers on a small stage",
      ];
      const scene = scenes[index % scenes.length];
      const chapter = Math.floor(index / scenes.length) + 1;
      return `Whimsical 2D fantasy RPG music video scene ${index + 1}, chapter ${chapter}, ${scene}, bright Maple-like adventure mood without copying official characters, cute stylized proportions, painterly animation background, soft pastel color palette, magical particles, charming fantasy costumes, side-scrolling composition, highly polished illustration style`;
    }),
  },
};

const COMMON_IMAGE_SUFFIX =
  "highly detailed, cinematic photo realism, cohesive vintage styling, soft film grain, warm nostalgic texture, elegant composition, no modern objects, no contemporary fashion logos, no text, no watermark";

const COMMON_MOTION_RULE =
  "very slow pan, subtle zoom in, slight parallax depth, soft drifting motion, smooth crossfade transitions, elegant pacing, no sudden movement, no aggressive camera shake";

const VEO_CLIP_DURATION_SECONDS = 8;
const VEO_START_TRIM_SECONDS = 0.4;

const CAMERA_ANGLE_DIRECTIONS = [
  "wide establishing shot, full environment visible, cinematic composition",
  "medium front angle, subject centered with natural eye-level framing",
  "three-quarter side angle, subject turned slightly, deeper background layers",
  "close-up portrait angle, emotional face and hands, shallow depth of field",
  "over-the-shoulder angle, looking toward the scene, immersive music video feeling",
  "low-angle fashion shot, elegant posture, dramatic but natural perspective",
  "high-angle balcony or overhead-inspired shot, graceful scene geometry",
  "profile side view, subject moving through the frame, refined cinematic rhythm",
  "back view or walking-away angle, atmospheric distance and nostalgic mood",
  "detail insert shot, hands, objects, fabric, lights, or props telling the story",
];

const CAMERA_ANGLE_LABELS = [
  ["와이드 전체샷", "배경과 인물을 넓게 보여줍니다."],
  ["정면 미디엄샷", "인물을 자연스럽게 중심에 둡니다."],
  ["사선 3/4 각도", "옆 방향으로 깊이감을 만듭니다."],
  ["감정 클로즈업", "얼굴, 손, 표정을 크게 잡습니다."],
  ["어깨 너머 시점", "장면 안에 들어간 듯 보입니다."],
  ["낮은 앵글", "인물이 더 영화적으로 보입니다."],
  ["높은 앵글", "공간 구도가 우아하게 보입니다."],
  ["프로필 옆모습", "옆으로 흐르는 뮤비 느낌입니다."],
  ["뒷모습 워킹샷", "멀어지는 분위기와 여운을 줍니다."],
  ["디테일 컷", "소품, 손, 조명 같은 장면을 잡습니다."],
];

const SUNO_DEFAULT_ENDPOINT = "https://api.sunoapi.org/api/v1/generate";
const SUNO_RECORD_ENDPOINT = "https://api.sunoapi.org/api/v1/generate/record-info";

const SERIES_VIDEO_PREVIEWS = {
  doowop: {
    title: "캘리포니아 두왑 참고 영상",
    description: "1960년대 캘리포니아 해변, 다이너, 클래식카, 청춘 커플 분위기를 먼저 확인합니다.",
    embedUrl: "https://www.youtube.com/embed/H0QgEYMPH60",
    watchUrl: "https://youtu.be/H0QgEYMPH60",
  },
};

const $ = (id) => document.getElementById(id);

const elements = {
  apiKey: $("apiKey"),
  saveKey: $("saveKey"),
  openKeyModalButton: $("openKeyModalButton"),
  keyModal: $("keyModal"),
  modalApiKey: $("modalApiKey"),
  completeKeySetupButton: $("completeKeySetupButton"),
  imageModal: $("imageModal"),
  imageModalTitle: $("imageModalTitle"),
  imageModalPreview: $("imageModalPreview"),
  closeImageModalButton: $("closeImageModalButton"),
  textModel: $("textModel"),
  imageModel: $("imageModel"),
  videoModel: $("videoModel"),
  referenceImage: $("referenceImage"),
  openCharacterModalButton: $("openCharacterModalButton"),
  characterModal: $("characterModal"),
  closeCharacterModalButton: $("closeCharacterModalButton"),
  characterImage: $("characterImage"),
  pickCharacterButton: $("pickCharacterButton"),
  characterStatus: $("characterStatus"),
  similarModal: $("similarModal"),
  closeSimilarModalButton: $("closeSimilarModalButton"),
  createSimilarButton: $("createSimilarButton"),
  similarTitle: $("similarTitle"),
  similarPrompt: $("similarPrompt"),
  similarPreviewImage: $("similarPreviewImage"),
  similarCharacter: $("similarCharacter"),
  similarMusic: $("similarMusic"),
  seriesVideoPreview: $("seriesVideoPreview"),
  seriesVideoKicker: $("seriesVideoKicker"),
  seriesVideoTitle: $("seriesVideoTitle"),
  seriesVideoDescription: $("seriesVideoDescription"),
  seriesVideoFrame: $("seriesVideoFrame"),
  seriesVideoLink: $("seriesVideoLink"),
  musicFile: $("musicFile"),
  openMusicModalButton: $("openMusicModalButton"),
  skipMusicStepButton: $("skipMusicStepButton"),
  skipSourceStepButton: $("skipSourceStepButton"),
  musicModal: $("musicModal"),
  closeMusicModalButton: $("closeMusicModalButton"),
  closeMusicModalFooterButton: $("closeMusicModalFooterButton"),
  pickMusicFileButton: $("pickMusicFileButton"),
  musicStatus: $("musicStatus"),
  musicUrl: $("musicUrl"),
  applyMusicUrlButton: $("applyMusicUrlButton"),
  musicPreviewPanel: $("musicPreviewPanel"),
  musicPreviewAudio: $("musicPreviewAudio"),
  musicPreviewTitle: $("musicPreviewTitle"),
  musicPreviewStart: $("musicPreviewStart"),
  musicPreviewDuration: $("musicPreviewDuration"),
  playMusicPreviewButton: $("playMusicPreviewButton"),
  stopMusicPreviewButton: $("stopMusicPreviewButton"),
  musicLeadIn: $("musicLeadIn"),
  cancelPendingMusicButton: $("cancelPendingMusicButton"),
  confirmMusicButton: $("confirmMusicButton"),
  sunoEndpoint: $("sunoEndpoint"),
  sunoApiKey: $("sunoApiKey"),
  applySunoKeyButton: $("applySunoKeyButton"),
  sunoKeyStatus: $("sunoKeyStatus"),
  sunoPrompt: $("sunoPrompt"),
  sunoLyrics: $("sunoLyrics"),
  sunoStyle: $("sunoStyle"),
  sunoTitle: $("sunoTitle"),
  sunoInstrumental: $("sunoInstrumental"),
  sunoWorkStatus: $("sunoWorkStatus"),
  downloadSunoMusicButton: $("downloadSunoMusicButton"),
  generateSunoButton: $("generateSunoButton"),
  seriesTemplate: $("seriesTemplate"),
  basePrompt: $("basePrompt"),
  sceneCount: $("sceneCount"),
  duration: $("duration"),
  imageSize: $("imageSize"),
  imageQuality: $("imageQuality"),
  showCaptions: $("showCaptions"),
  varyAngles: $("varyAngles"),
  veoClipLimit: $("veoClipLimit"),
  applyKeyButton: $("applyKeyButton"),
  keyStatus: $("keyStatus"),
  autoButton: $("autoButton"),
  promptButton: $("promptButton"),
  tenImageButton: $("tenImageButton"),
  imageButton: $("imageButton"),
  videoButton: $("videoButton"),
  angleButton: $("angleButton"),
  longFormButton: $("longFormButton"),
  shortsButton: $("shortsButton"),
  downloadImagesButton: $("downloadImagesButton"),
  downloadVideoButton: $("downloadVideoButton"),
  fullMvButton: $("fullMvButton"),
  anglePreview: $("anglePreview"),
  anglePreviewList: $("anglePreviewList"),
  sampleButton: $("sampleButton"),
  autoStyleButton: $("autoStyleButton"),
  quickTestButton: $("quickTestButton"),
  clearKeyButton: $("clearKeyButton"),
  clearImagesButton: $("clearImagesButton"),
  resetAllButton: $("resetAllButton"),
  downloadPromptsButton: $("downloadPromptsButton"),
  progressText: $("progressText"),
  progressBar: $("progressBar"),
  musicReadyActions: $("musicReadyActions"),
  applyReadyMusicButton: $("applyReadyMusicButton"),
  downloadReadyMusicButton: $("downloadReadyMusicButton"),
  openReadyMusicButton: $("openReadyMusicButton"),
  log: $("log"),
  sceneList: $("sceneList"),
  canvas: $("previewCanvas"),
  resultVideo: $("resultVideo"),
  myVideoTitle: $("myVideoTitle"),
  myVideoMeta: $("myVideoMeta"),
  boardGoScenesButton: $("boardGoScenesButton"),
  boardDownloadImagesButton: $("boardDownloadImagesButton"),
  boardDownloadVideoButton: $("boardDownloadVideoButton"),
};

const taskButtons = [
  elements.autoButton,
  elements.promptButton,
  elements.tenImageButton,
  elements.imageButton,
  elements.videoButton,
  elements.angleButton,
  elements.longFormButton,
  elements.shortsButton,
  elements.downloadImagesButton,
  elements.downloadVideoButton,
  elements.fullMvButton,
  elements.downloadPromptsButton,
  elements.resetAllButton,
  elements.generateSunoButton,
].filter(Boolean);

function log(message, type = "info") {
  const displayMessage = type === "error" ? friendlyApiError(message) : message;
  const line = `[${new Date().toLocaleTimeString()}] ${displayMessage}`;
  elements.log.textContent += `${line}\n`;
  elements.log.scrollTop = elements.log.scrollHeight;
  if (type === "error") console.error(displayMessage);
}

function setProgress(percent, text) {
  elements.progressBar.style.width = `${Math.max(0, Math.min(100, percent))}%`;
  elements.progressText.textContent = text;
}

function updateMusicStatus(text) {
  if (elements.musicStatus) elements.musicStatus.textContent = text;
}

function openMusicModal() {
  if (elements.sunoPrompt && !elements.sunoPrompt.value.trim()) {
    const selectedSeries =
      elements.seriesTemplate.selectedOptions?.[0]?.textContent?.trim() || "AI 뮤비";
    elements.sunoPrompt.value = `${selectedSeries}에 어울리는 5분 뮤직비디오용 배경음악. 영상 분위기에 맞는 감성적인 멜로디, 자연스러운 전개, 과하지 않은 편곡.`;
  }
  elements.musicModal.showModal();
}

function closeMusicModal() {
  elements.musicModal.close();
}

function closeMusicModalAndShowStatus() {
  if (elements.musicModal?.open) closeMusicModal();
  document.getElementById("help-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function openCharacterModal() {
  elements.characterModal.showModal();
}

function closeCharacterModal() {
  elements.characterModal.close();
}

function setBusy(isBusy) {
  taskButtons.forEach((button) => {
    button.disabled = isBusy;
  });
}

let highestWorkflowStep = 1;
let highestStep2Substep = 1;

function hasAppliedGoogleKey() {
  return Boolean(elements.keyStatus?.classList.contains("applied"));
}

function showStep2Substep(substep, scroll = false) {
  highestStep2Substep = Math.max(highestStep2Substep, substep);
  document.querySelectorAll(".substep-2-2").forEach((panel) => {
    panel.classList.toggle("workflow-hidden", highestStep2Substep < 2);
  });
  document.querySelectorAll(".substep-2-3").forEach((panel) => {
    panel.classList.toggle("workflow-hidden", highestStep2Substep < 3);
  });
  if (scroll) {
    const target = document.querySelector(substep >= 3 ? ".substep-2-3" : ".substep-2-2");
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function resetStep2Substeps() {
  highestStep2Substep = 1;
  document.querySelectorAll(".substep-2-2, .substep-2-3").forEach((panel) => {
    panel.classList.add("workflow-hidden");
  });
}

function showWorkflowStep(step, scroll = false) {
  highestWorkflowStep = Math.max(highestWorkflowStep, step);
  document.querySelectorAll(".step-2-panel").forEach((panel) => {
    panel.classList.toggle("workflow-hidden", highestWorkflowStep < 2);
  });
  document.querySelectorAll(".step-3-panel").forEach((panel) => {
    panel.classList.toggle("workflow-hidden", highestWorkflowStep < 3);
  });
  if (scroll) {
    const target = document.querySelector(step >= 3 ? ".step-3-panel" : ".step-2-panel");
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function resetWorkflowVisibility() {
  highestWorkflowStep = hasAppliedGoogleKey() ? 2 : 1;
  resetStep2Substeps();
  document.querySelectorAll(".step-2-panel").forEach((panel) => {
    panel.classList.toggle("workflow-hidden", highestWorkflowStep < 2);
  });
  document.querySelectorAll(".step-3-panel").forEach((panel) => {
    panel.classList.add("workflow-hidden");
  });
}

function getApiKey() {
  const key = elements.apiKey.value.trim();
  if (!key) throw new Error("Google AI Studio API 키를 입력해 주세요.");
  return key;
}

function friendlyApiError(error) {
  const message = String(error?.message || error || "");
  const lower = message.toLowerCase();
  if (message.includes("monthly spending cap") || message.includes("spend cap") || message.includes("ai.studio/spend")) {
    return "Google 프로젝트의 월 지출 한도에 걸렸습니다. 명화 스타일 문제가 아니라 결제/한도 문제입니다. AI Studio 지출 한도 페이지(https://ai.studio/spend)에서 한도를 올리거나 다른 Google API 키를 사용해 주세요.";
  }
  if (message.includes("Failed to fetch")) {
    return "요청이 브라우저에서 차단되었습니다. Suno API는 브라우저에서 직접 호출할 때 CORS/네트워크 정책 때문에 막힐 수 있습니다. 이 경우 앱 안에서 AI 음악 제작은 사용할 수 없고, Suno 사이트에서 만든 MP3를 다운로드한 뒤 `음악 업로드`로 넣어 주세요.";
  }
  if (message.includes("not found for API version") || message.includes("not supported for generateContent")) {
    return "이미지 모델 이름이 현재 Google API에서 지원되지 않습니다. 이미지 모델을 `gemini-2.5-flash-image`로 바꿔 다시 시도해 주세요.";
  }
  if (message.includes("API_KEY_INVALID") || message.includes("API key not valid")) {
    return "Google API 키가 올바르지 않습니다. AI Studio에서 새 키를 복사해서 다시 넣어 주세요.";
  }
  if (message.includes("PERMISSION_DENIED") || message.includes("403")) {
    return "Google API 사용 권한이 막혀 있습니다. AI Studio 프로젝트에서 Gemini API 사용 설정과 결제/할당량을 확인해 주세요.";
  }
  if (
    message.includes("429") ||
    lower.includes("quota") ||
    lower.includes("resource_exhausted") ||
    lower.includes("rate limit") ||
    lower.includes("billing") ||
    lower.includes("exceeded")
  ) {
    return [
      "Google/Veo API 사용량 한도에 걸렸습니다.",
      "후불결제를 켰어도 Veo 생성 한도, 분당 요청 한도, 프로젝트 월 지출 한도는 별도로 적용됩니다.",
      "이건 앱 오류가 아니라 현재 Google 계정 또는 프로젝트의 Veo 할당량이 부족하거나 일시적으로 막힌 상태입니다.",
      "해결 방법: 잠시 뒤 다시 시도하거나, AI Studio Spend에서 프로젝트 월 한도를 올리고, Google Cloud Quotas에서 Veo/Gemini API 할당량 증가를 요청해 주세요.",
      "앱에서는 기본값을 `3개 먼저 테스트`로 바꿨습니다. 10개/전체 Veo 생성은 한도가 충분할 때 `Veo 생성 장면 수`를 바꿔 진행하세요.",
      "이미 만든 이미지는 유지됩니다. Veo가 막히면 임시로 `이미지로 영상만 만들기` 방식은 사용할 수 있습니다.",
    ].join("\n");
  }
  return message;
}

function getKeyFailureStatus(error) {
  const message = String(error?.message || error || "");
  if (message.includes("입력해 주세요")) return "키 입력 필요";
  if (message.includes("올바르지 않습니다") || message.includes("인증")) return "키 확인 필요";
  return "적용 실패";
}

function maskKey(key) {
  if (key.length <= 12) return "적용됨";
  return `${key.slice(0, 7)}...${key.slice(-4)}`;
}

function updateKeyStatus(text, applied = false) {
  elements.keyStatus.textContent = text;
  elements.keyStatus.classList.toggle("applied", applied);
}

function updateSunoKeyStatus(text, applied = false) {
  elements.sunoKeyStatus.textContent = text;
  elements.sunoKeyStatus.classList.toggle("applied", applied);
}

function updateSunoWorkStatus(title, detail = "", tone = "idle") {
  if (!elements.sunoWorkStatus) return;
  elements.sunoWorkStatus.dataset.tone = tone;
  const titleNode = elements.sunoWorkStatus.querySelector("strong");
  const detailNode = elements.sunoWorkStatus.querySelector("span");
  if (titleNode) titleNode.textContent = title;
  if (detailNode) detailNode.textContent = detail;
}

function syncMusicDownloadButton() {
  if (!elements.downloadSunoMusicButton) return;
  elements.downloadSunoMusicButton.disabled = !(state.pendingMusicFile || state.musicFile);
}

function syncReadyMusicActions() {
  if (!elements.musicReadyActions) return;
  const hasMusic = Boolean(state.pendingMusicFile || state.musicFile);
  elements.musicReadyActions.hidden = !hasMusic;
  if (elements.applyReadyMusicButton) elements.applyReadyMusicButton.disabled = !state.pendingMusicFile;
  if (elements.downloadReadyMusicButton) elements.downloadReadyMusicButton.disabled = !hasMusic;
  if (elements.openReadyMusicButton) elements.openReadyMusicButton.disabled = !state.pendingMusicFile;
}

function normalizeSunoEndpoint(endpoint) {
  const raw = (endpoint || "").trim();
  if (!raw) return SUNO_DEFAULT_ENDPOINT;
  try {
    const url = new URL(raw);
    if (url.hostname === "sunoapi.org" || url.hostname === "www.sunoapi.org") {
      return SUNO_DEFAULT_ENDPOINT;
    }
    if (url.hostname === "api.sunoapi.org") {
      return SUNO_DEFAULT_ENDPOINT;
    }
    return raw.replace(/\/$/, "");
  } catch {
    return SUNO_DEFAULT_ENDPOINT;
  }
}

function getSunoRecordInfoUrl(endpoint, taskId) {
  const id = encodeURIComponent(taskId);
  try {
    const url = new URL(endpoint);
    if (url.hostname === "api.sunoapi.org") {
      return `${SUNO_RECORD_ENDPOINT}?taskId=${id}`;
    }
  } catch {}
  if (/\/generate\/?$/i.test(endpoint)) {
    return `${endpoint.replace(/\/generate\/?$/i, "/generate/record-info")}?taskId=${id}`;
  }
  return `${endpoint.replace(/\/$/, "")}/record-info?taskId=${id}`;
}

function applySunoKey() {
  const endpoint = normalizeSunoEndpoint(elements.sunoEndpoint.value);
  const key = elements.sunoApiKey.value.trim();
  elements.sunoEndpoint.value = endpoint;
  if (!key) {
    updateSunoKeyStatus("API 키 필요", false);
    log("Suno API 키를 입력해 주세요.", "error");
    return false;
  }
  localStorage.setItem("suno_api_endpoint_v2", endpoint);
  localStorage.setItem("suno_api_key_v2", key);
  updateSunoKeyStatus(`적용됨: ${maskKey(key)}`, true);
  log("Suno API 키가 적용되었습니다. 키는 현재 브라우저에만 저장합니다.");
  return true;
}

function loadSavedSunoKey() {
  const endpoint = normalizeSunoEndpoint(localStorage.getItem("suno_api_endpoint_v2"));
  const key = localStorage.getItem("suno_api_key_v2");
  if (elements.sunoEndpoint) elements.sunoEndpoint.value = endpoint;
  if (key) {
    elements.sunoApiKey.value = key;
    updateSunoKeyStatus(`저장된 키 불러옴: ${maskKey(key)}`, true);
  }
}

function applyApiKey() {
  try {
    const key = getApiKey();
    if (elements.saveKey.checked) {
      localStorage.setItem("google_ai_api_key", key);
    } else {
      localStorage.removeItem("google_ai_api_key");
    }
    updateKeyStatus(`적용됨: ${maskKey(key)}`, true);
    log("Google API 키가 적용되었습니다. 키는 서버로 저장하지 않고 현재 브라우저에서만 사용합니다.");
    showWorkflowStep(2, true);
    return true;
  } catch (error) {
    updateKeyStatus(getKeyFailureStatus(error), false);
    log(friendlyApiError(error), "error");
    return false;
  }
}

function openKeyModal() {
  elements.modalApiKey.value = elements.apiKey.value.trim();
  if (typeof elements.keyModal.showModal === "function") {
    elements.keyModal.showModal();
  } else {
    elements.keyModal.setAttribute("open", "");
  }
  setTimeout(() => elements.modalApiKey.focus(), 50);
}

function closeKeyModal() {
  if (typeof elements.keyModal.close === "function") {
    elements.keyModal.close();
  } else {
    elements.keyModal.removeAttribute("open");
  }
}

function openImageModal(index) {
  const url = state.images[index];
  if (!url) return;
  const scene = state.prompts[index];
  elements.imageModalTitle.textContent = scene?.title || `장면 ${index + 1}`;
  elements.imageModalPreview.src = url;
  elements.imageModalPreview.alt = `${index + 1}번 장면 크게 보기`;
  if (typeof elements.imageModal.showModal === "function") {
    elements.imageModal.showModal();
  } else {
    elements.imageModal.setAttribute("open", "");
  }
}

function closeImageModal() {
  if (typeof elements.imageModal.close === "function") {
    elements.imageModal.close();
  } else {
    elements.imageModal.removeAttribute("open");
  }
}

function completeKeySetup() {
  const modalKey = elements.modalApiKey.value.trim();
  if (!modalKey) {
    updateKeyStatus("키 입력 필요", false);
    log("API 키를 붙여넣은 뒤 키 설정 완료를 눌러 주세요.", "error");
    elements.modalApiKey.focus();
    return;
  }
  elements.apiKey.value = modalKey;
  applyApiKey();
  closeKeyModal();
}

function loadSavedKey() {
  const key = localStorage.getItem("google_ai_api_key");
  if (key) {
    elements.apiKey.value = key;
    elements.saveKey.checked = true;
    updateKeyStatus(`저장된 키 불러옴: ${maskKey(key)}`, true);
    showWorkflowStep(2, false);
  }
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

function fileExtensionFromMime(mimeType = "") {
  if (mimeType.includes("mpeg")) return "mp3";
  if (mimeType.includes("wav")) return "wav";
  if (mimeType.includes("mp4") || mimeType.includes("m4a")) return "m4a";
  if (mimeType.includes("aac")) return "aac";
  if (mimeType.includes("ogg")) return "ogg";
  return "mp3";
}

function setMusicFile(file, sourceLabel = "배경음악") {
  state.musicFile = file;
  const name = file.name || "음악 적용됨";
  const shortName = name.length > 24 ? `${name.slice(0, 12)}...${name.slice(-9)}` : name;
  updateMusicStatus(`${sourceLabel}: ${shortName}`);
  updateSunoWorkStatus("음악 적용 완료", `${shortName} 파일을 영상 배경음악으로 사용할 수 있습니다.`, "success");
  syncMusicDownloadButton();
  syncReadyMusicActions();
  showStep2Substep(2, true);
  log(`${sourceLabel}을 배경음악으로 적용했습니다.`);
}

function formatClock(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return "00:00";
  const total = Math.round(seconds);
  const minutes = Math.floor(total / 60);
  const rest = total % 60;
  return `${String(minutes).padStart(2, "0")}:${String(rest).padStart(2, "0")}`;
}

function showMusicPreview(file, sourceLabel = "선택한 음악") {
  state.pendingMusicFile = file;
  if (state.pendingMusicUrl) URL.revokeObjectURL(state.pendingMusicUrl);
  state.pendingMusicUrl = URL.createObjectURL(file);
  elements.musicPreviewTitle.textContent = file.name || sourceLabel;
  elements.musicPreviewStart.textContent = "00:00";
  elements.musicPreviewDuration.textContent = "--:--";
  elements.musicPreviewAudio.src = state.pendingMusicUrl;
  elements.musicPreviewPanel.hidden = false;
  updateSunoWorkStatus("음악 미리보기 준비됨", "확인 버튼을 누르면 배경음악으로 적용됩니다. 필요하면 노래 다운로드도 가능합니다.", "success");
  syncMusicDownloadButton();
  syncReadyMusicActions();
  document.getElementById("help-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
  elements.musicPreviewAudio.onloadedmetadata = () => {
    elements.musicPreviewDuration.textContent = formatClock(elements.musicPreviewAudio.duration);
  };
  elements.musicPreviewAudio.ontimeupdate = () => {
    elements.musicPreviewStart.textContent = formatClock(elements.musicPreviewAudio.currentTime);
  };
  log(`${sourceLabel}을 미리보기로 불러왔습니다. 확인 버튼을 누르면 배경음악으로 적용됩니다.`);
}

function clearPendingMusic() {
  elements.musicPreviewAudio.pause();
  elements.musicPreviewAudio.removeAttribute("src");
  elements.musicPreviewAudio.load();
  elements.musicPreviewPanel.hidden = true;
  state.pendingMusicFile = null;
  if (state.pendingMusicUrl) URL.revokeObjectURL(state.pendingMusicUrl);
  state.pendingMusicUrl = "";
  elements.musicPreviewStart.textContent = "00:00";
  elements.musicPreviewDuration.textContent = "00:00";
  syncMusicDownloadButton();
  syncReadyMusicActions();
}

function confirmPendingMusic() {
  if (!state.pendingMusicFile) {
    log("먼저 음악 파일을 선택해 주세요.", "error");
    return;
  }
  setMusicFile(state.pendingMusicFile, "선택한 음악");
  clearPendingMusic();
  if (elements.musicModal?.open) closeMusicModal();
}

function downloadSelectedMusic() {
  const file = state.pendingMusicFile || state.musicFile;
  if (!file) {
    updateSunoWorkStatus("다운로드할 음악 없음", "먼저 AI 음악을 만들거나 음악 파일을 업로드해 주세요.", "error");
    log("다운로드할 음악이 없습니다. 먼저 AI 음악을 만들거나 음악 파일을 업로드해 주세요.", "error");
    return;
  }
  const safeName = (file.name || `ai-music-${Date.now()}.mp3`).replace(/[\\/:*?"<>|]/g, "-");
  downloadBlob(file, safeName);
  updateSunoWorkStatus("노래 다운로드 완료", `${safeName} 파일을 다운로드했습니다.`, "success");
  log(`노래 파일을 다운로드했습니다: ${safeName}`);
}

async function musicUrlToFile(url, filename = "ai-music") {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`음악 URL을 불러오지 못했습니다. (${response.status})`);
  const blob = await response.blob();
  const extension = fileExtensionFromMime(blob.type);
  return new File([blob], `${filename}.${extension}`, { type: blob.type || "audio/mpeg" });
}

function findAudioUrl(value) {
  if (!value) return "";
  if (typeof value === "string") {
    if (/^https?:\/\/.+\.(mp3|wav|m4a|aac|ogg|webm)(\?|#|$)/i.test(value)) return value;
    return "";
  }
  if (Array.isArray(value)) {
    for (const item of value) {
      const found = findAudioUrl(item);
      if (found) return found;
    }
    return "";
  }
  if (typeof value === "object") {
    const preferredKeys = [
      "source_audio_url",
      "sourceAudioUrl",
      "stream_audio_url",
      "streamAudioUrl",
      "audio_url",
      "audioUrl",
      "audio",
      "url",
    ];
    for (const key of preferredKeys) {
      if (typeof value[key] === "string" && /^https?:\/\//i.test(value[key])) return value[key];
      const found = findAudioUrl(value[key]);
      if (found) return found;
    }
    for (const nestedValue of Object.values(value)) {
      const found = findAudioUrl(nestedValue);
      if (found) return found;
    }
  }
  return "";
}

function findStatusUrl(value) {
  if (!value || typeof value !== "object") return "";
  const keys = ["status_url", "statusUrl", "polling_url", "pollingUrl", "get_url", "getUrl"];
  for (const key of keys) {
    if (typeof value[key] === "string" && /^https?:\/\//i.test(value[key])) return value[key];
  }
  for (const nestedValue of Object.values(value)) {
    const found = findStatusUrl(nestedValue);
    if (found) return found;
  }
  return "";
}

function findJobId(value) {
  if (!value || typeof value !== "object") return "";
  const keys = ["taskId", "task_id", "jobId", "job_id", "clipId", "clip_id", "id"];
  for (const key of keys) {
    if (typeof value[key] === "string" || typeof value[key] === "number") return String(value[key]);
  }
  for (const nestedValue of Object.values(value)) {
    const found = findJobId(nestedValue);
    if (found) return found;
  }
  return "";
}

async function fetchSunoJson(url, apiKey, options = {}) {
  const headers = {
    Accept: "application/json",
    ...(options.body ? { "Content-Type": "application/json" } : {}),
    ...(apiKey ? { Authorization: `Bearer ${apiKey}`, "x-api-key": apiKey } : {}),
    ...(options.headers || {}),
  };
  const response = await fetch(url, { ...options, headers });
  const text = await response.text();
  let data = {};
  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    data = { raw: text };
  }
  if (!response.ok) throw new Error(data?.message || data?.error || text || `Suno API 오류 (${response.status})`);
  if (data && typeof data === "object" && data.code && Number(data.code) !== 200) {
    throw new Error(data.msg || data.message || data.errorMessage || `Suno API 오류 (${data.code})`);
  }
  return data;
}

async function generateSunoMusic() {
  const endpoint = normalizeSunoEndpoint(elements.sunoEndpoint.value);
  elements.sunoEndpoint.value = endpoint;
  const apiKey = elements.sunoApiKey.value.trim();
  const prompt = elements.sunoPrompt.value.trim();
  const lyrics = elements.sunoLyrics.value.trim();
  const style = elements.sunoStyle.value.trim();
  const title = elements.sunoTitle.value.trim() || "제이린쌤 AI 뮤비 BGM";
  if (!apiKey) throw new Error("Suno API 키를 입력하고 `Suno 키 적용`을 눌러 주세요.");
  if (!prompt && !lyrics) throw new Error("노래 설명이나 가사를 입력해 주세요.");

  setProgress(8, "AI 음악 요청 중");
  updateSunoWorkStatus("음악 제작 요청 중", "Suno API에 노래 제작 요청을 보내고 있습니다.", "working");
  log("SunoAPI 공식 생성 주소로 AI 음악 제작을 요청합니다.");
  const instrumental = elements.sunoInstrumental.checked && !lyrics;
  const basePrompt = prompt || `${style || "vintage"} style music`;
  const body = lyrics
    ? {
        customMode: true,
        instrumental: false,
        model: "V4_5ALL",
        callBackUrl: "https://example.com/suno-callback",
        prompt: lyrics,
        style: style || basePrompt.slice(0, 180),
        title,
      }
    : instrumental
      ? {
          customMode: true,
          instrumental: true,
          model: "V4_5ALL",
          callBackUrl: "https://example.com/suno-callback",
          prompt: basePrompt,
          style: style || basePrompt.slice(0, 180),
          title,
        }
      : {
          customMode: false,
          instrumental: false,
          model: "V4_5ALL",
          callBackUrl: "https://example.com/suno-callback",
          prompt: basePrompt.slice(0, 500),
        };
  let data = await fetchSunoJson(endpoint, apiKey, {
    method: "POST",
    body: JSON.stringify(body),
  });

  let audioUrl = findAudioUrl(data);
  const statusUrl = findStatusUrl(data);
  const jobId = findJobId(data);
  const fallbackStatusUrl = jobId ? getSunoRecordInfoUrl(endpoint, jobId) : "";
  if (jobId) {
    updateSunoWorkStatus("음악 제작 중", `작업 ID를 받았습니다. 생성 결과를 확인하는 중입니다: ${jobId}`, "working");
    log(`Suno 작업 ID를 받았습니다: ${jobId}`);
  }

  for (let attempt = 0; !audioUrl && attempt < 48; attempt += 1) {
    const pollUrl = statusUrl || fallbackStatusUrl;
    if (!pollUrl) break;
    setProgress(Math.min(84, 10 + attempt * 2), `AI 음악 생성 확인 중 ${attempt + 1}/48`);
    updateSunoWorkStatus("음악 제작 중", `완성 파일을 기다리는 중입니다. 확인 ${attempt + 1}/48`, "working");
    await new Promise((resolve) => setTimeout(resolve, 5000));
    data = await fetchSunoJson(pollUrl, apiKey);
    audioUrl = findAudioUrl(data);
  }

  if (!audioUrl) {
    throw new Error("Suno API 응답에서 음악 다운로드 주소를 찾지 못했습니다. 사용하는 API의 응답 형식을 확인해 주세요.");
  }

  setProgress(86, "음악 다운로드 중");
  updateSunoWorkStatus("음악 다운로드 중", "생성된 음악 파일을 브라우저로 가져오는 중입니다.", "working");
  const safeTitle = title.replace(/[\\/:*?"<>|]/g, "-");
  const file = await musicUrlToFile(audioUrl, safeTitle);
  showMusicPreview(file, "AI 음악");
  if (elements.musicUrl) elements.musicUrl.value = audioUrl;
  setProgress(100, "음악 적용 완료");
  updateSunoWorkStatus("AI 음악 완성", "미리듣기에서 확인한 뒤 배경음악으로 적용하거나 노래를 다운로드할 수 있습니다.", "success");
}

async function imageUrlToImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("이미지를 불러오지 못했습니다."));
    img.src = url;
  });
}

function stripJsonFence(text) {
  return text.replace(/^```(?:json)?/i, "").replace(/```$/i, "").trim();
}

function parseJsonObject(text) {
  const clean = stripJsonFence(text);
  try {
    return JSON.parse(clean);
  } catch {
    const start = clean.indexOf("{");
    const end = clean.lastIndexOf("}");
    if (start === -1 || end === -1 || end <= start) throw new Error("AI 응답에서 JSON을 찾지 못했습니다.");
    return JSON.parse(clean.slice(start, end + 1));
  }
}

function getOutputText(data) {
  if (data.output_text) return data.output_text;
  const chunks = [];
  for (const item of data.output || []) {
    for (const content of item.content || []) {
      if (content.type === "output_text" && content.text) chunks.push(content.text);
      if (content.text) chunks.push(content.text);
    }
  }
  return chunks.join("\n");
}

function dataUrlToInlineData(dataUrl) {
  const [header, data] = dataUrl.split(",");
  const mimeType = header.match(/^data:(.*?);base64$/)?.[1] || "image/png";
  return { mimeType, data };
}

async function callGemini(apiKey, model, body) {
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error?.message || data.error?.status || "Google Gemini API 요청에 실패했습니다.");
  }
  return data;
}

async function listGoogleModels(apiKey) {
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent(apiKey)}`;
  const response = await fetch(endpoint);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error?.message || data.error?.status || "Google 모델 목록을 불러오지 못했습니다.");
  }
  return Array.isArray(data.models) ? data.models : [];
}

async function callImagenPredict(apiKey, model, prompt) {
  const body = {
    instances: [{ prompt }],
    parameters: {
      sampleCount: 1,
      aspectRatio: state.ratio,
    },
  };
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:predict?key=${encodeURIComponent(apiKey)}`;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  if (response.ok) {
    const prediction = data.predictions?.[0] || {};
    const base64 = prediction.bytesBase64Encoded || prediction.image?.bytesBase64Encoded;
    if (!base64) throw new Error("Imagen 응답에서 이미지 파일을 찾지 못했습니다.");
    return `data:image/png;base64,${base64}`;
  }

  const generateEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateImages?key=${encodeURIComponent(apiKey)}`;
  const generateResponse = await fetch(generateEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt,
      numberOfImages: 1,
      aspectRatio: state.ratio,
    }),
  });
  const generateData = await generateResponse.json();
  if (!generateResponse.ok) {
    throw new Error(generateData.error?.message || data.error?.message || generateData.error?.status || data.error?.status || "Google Imagen API 요청에 실패했습니다.");
  }
  const image = generateData.generatedImages?.[0]?.image || generateData.images?.[0] || {};
  const base64 = image.imageBytes || image.bytesBase64Encoded || image.data;
  if (!base64) throw new Error("Imagen 응답에서 이미지 파일을 찾지 못했습니다.");
  return `data:image/png;base64,${base64}`;
}

function getGeminiText(data) {
  const parts = data.candidates?.[0]?.content?.parts || [];
  return parts.map((part) => part.text || "").join("\n").trim();
}

function getGeminiImageUrl(data) {
  const parts = data.candidates?.[0]?.content?.parts || [];
  for (const part of parts) {
    const inline = part.inlineData || part.inline_data;
    if (inline?.data) {
      const mimeType = inline.mimeType || inline.mime_type || "image/png";
      return `data:${mimeType};base64,${inline.data}`;
    }
  }
  return "";
}

function normalizeGoogleModelName(name) {
  return String(name || "").replace(/^models\//, "");
}

function isModelUnavailable(error) {
  const message = String(error?.message || error || "");
  return (
    message.includes("not found for API version") ||
    message.includes("not supported for generateContent") ||
    message.includes("not supported for predict") ||
    message.includes("is not supported") ||
    message.includes("404")
  );
}

function promptSchema(count) {
  return {
    count,
    scenes: [
      {
        title: "짧은 장면 제목",
        prompt: "English image generation prompt with visual details",
      },
    ],
  };
}

function getCameraAngleDirection(index) {
  return CAMERA_ANGLE_DIRECTIONS[index % CAMERA_ANGLE_DIRECTIONS.length];
}

function getCameraAngleLabel(index) {
  return CAMERA_ANGLE_LABELS[index % CAMERA_ANGLE_LABELS.length];
}

function renderAnglePreview() {
  if (!elements.anglePreview || !elements.anglePreviewList) return;
  if (!state.anglePreviewOpen) {
    elements.anglePreview.hidden = true;
    return;
  }
  const count = Math.max(1, Math.min(state.prompts.length || Number(elements.sceneCount?.value) || 10, 10));
  elements.anglePreviewList.innerHTML = Array.from({ length: count }, (_, index) => {
    const [title, description] = getCameraAngleLabel(index);
    return `<div class="angle-chip"><strong>${index + 1}. ${title}</strong><span>${description}</span></div>`;
  }).join("");
  elements.anglePreview.hidden = false;
}

function stripCameraAngleDirection(prompt = "") {
  return prompt.replace(/\n\nCamera angle direction: .*?(?=\n\n|$)/gs, "").trim();
}

function withCameraAngleDirection(prompt, index) {
  const cleanPrompt = stripCameraAngleDirection(prompt);
  if (!elements.varyAngles?.checked) return cleanPrompt;
  return `${cleanPrompt}\n\nCamera angle direction: ${getCameraAngleDirection(index)}. Make this angle clearly different from the previous and next scenes while keeping the same series style.`;
}

function assembleImagePrompt(scenePrompt, preset = getSelectedPreset(), index = 0) {
  const parts = [];
  if (preset?.basePrompt) parts.push(preset.basePrompt);
  parts.push(scenePrompt);
  if (elements.varyAngles?.checked) {
    parts.push(`Camera angle direction: ${getCameraAngleDirection(index)}. Make this scene feel like a different music video camera setup, not a repeated still image.`);
  }
  parts.push(COMMON_IMAGE_SUFFIX);
  return parts.join("\n\n");
}

function buildMotionPrompt(scene, index) {
  const moves = [
    "very slow zoom in with a gentle left-to-right pan, soft parallax depth, cinematic crossfade",
    "slow drifting dolly forward, slight right-to-left pan, warm filmic movement, no sudden motion",
    "subtle zoom out, calm vertical drift, elegant photo-to-video motion, smooth transition",
    "slow push-in toward the subject, tiny parallax separation, dreamy vintage camera glide",
    "gentle sideways slide with soft zoom, stable cinematic pacing, no shake",
  ];
  const angle = elements.varyAngles?.checked ? `Camera angle: ${getCameraAngleDirection(index)}. ` : "";
  return `${angle}${moves[index % moves.length]}. Keep the original image style intact. Scene mood: ${scene?.title || `scene ${index + 1}`}.`;
}

function syncMotionPrompts() {
  state.motionPrompts = state.prompts.map((scene, index) => buildMotionPrompt(scene, index));
}

function getSelectedPreset() {
  return SERIES_PRESETS[state.seriesKey] || null;
}

function getApiImageSize() {
  const sizeByRatio = {
    "16:9": "1792x1024",
    "9:16": "1024x1792",
  };
  return sizeByRatio[elements.imageSize.value] || "1792x1024";
}

function normalizeRatio() {
  if (state.ratio !== "16:9" && state.ratio !== "9:16") state.ratio = "16:9";
  if (elements.imageSize.value !== "16:9" && elements.imageSize.value !== "9:16") {
    elements.imageSize.value = state.ratio;
  }
}

async function getImageModelCandidates(apiKey) {
  const selected = elements.imageModel.value.trim();
  const staticCandidates = [
    "gemini-2.5-flash-image",
    "gemini-2.5-flash-image-preview",
    "gemini-3-pro-image-preview",
    "gemini-3-pro-image",
    "imagen-4.0-generate-001",
    "imagen-4.0-fast-generate-001",
    "imagen-4.0-ultra-generate-001",
    "imagen-3.0-generate-002",
  ];
  const manualCandidates = selected && selected.toLowerCase() !== "auto" ? [selected] : [];
  let discovered = [];

  try {
    const models = await listGoogleModels(apiKey);
    discovered = models
      .map((model) => ({
        name: normalizeGoogleModelName(model.name),
        methods: model.supportedGenerationMethods || [],
      }))
      .filter((model) => /(image|imagen|banana)/i.test(model.name))
      .filter((model) => model.methods.includes("generateContent") || model.methods.includes("predict"))
      .sort((a, b) => {
        const aGemini = a.methods.includes("generateContent") ? 0 : 1;
        const bGemini = b.methods.includes("generateContent") ? 0 : 1;
        return aGemini - bGemini;
      })
      .map((model) => model.name);
    if (discovered.length) {
      log(`Google 계정에서 보이는 이미지 모델 후보: ${discovered.join(", ")}`);
    } else {
      log("Google 모델 목록에서 이미지 생성 모델을 찾지 못해 기본 후보로 시도합니다.");
    }
  } catch (error) {
    log("Google 모델 목록을 불러오지 못해 기본 후보로 시도합니다.");
  }

  return [...manualCandidates, ...discovered, ...staticCandidates].filter(
    (model, index, models) => model && models.indexOf(model) === index,
  );
}

function syncExampleCards() {
  document.querySelectorAll(".example-card").forEach((card) => {
    card.classList.toggle("active", card.dataset.series === state.seriesKey);
  });
  document.querySelector(".example-card.active")?.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "center",
  });
}

function syncSeriesVideoPreview() {
  if (!elements.seriesVideoPreview) return;
  const preview = SERIES_VIDEO_PREVIEWS[state.seriesKey];
  if (!preview) {
    elements.seriesVideoPreview.hidden = true;
    if (elements.seriesVideoFrame) elements.seriesVideoFrame.removeAttribute("src");
    return;
  }
  elements.seriesVideoTitle.textContent = preview.title;
  elements.seriesVideoDescription.textContent = preview.description;
  elements.seriesVideoFrame.src = preview.embedUrl;
  elements.seriesVideoLink.href = preview.watchUrl;
  elements.seriesVideoPreview.hidden = false;
}

function normalizeImageModelInput() {
  const oldModels = new Set([
    "gemini-2.0-flash-preview-image-generation",
    "gpt-image-2",
    "gpt-image-1-mini",
  ]);
  const current = elements.imageModel.value.trim();
  if (!current || oldModels.has(current)) {
    elements.imageModel.value = "auto";
    return true;
  }
  return false;
}

function setQuickTestMode() {
  showWorkflowStep(3, false);
  normalizeImageModelInput();
  normalizeRatio();
  elements.sceneCount.value = "3";
  elements.duration.value = "20";
  elements.imageQuality.value = "low";
  elements.imageSize.value = state.ratio;
  if (!elements.seriesTemplate.value && !elements.basePrompt.value.trim()) {
    elements.seriesTemplate.value = "doowop";
  }
  if (elements.seriesTemplate.value) {
    applySeriesPreset(elements.seriesTemplate.value, true);
  } else {
    renderScenes();
    drawPreviewFrame(0);
  }
  setProgress(100, "3개 테스트 준비 완료");
  log("3개 테스트 설정이 준비되었습니다. 장면 3개, 20초, 낮은 이미지 품질로 먼저 확인합니다.");
}

function setTenImageSampleMode() {
  showWorkflowStep(3, false);
  normalizeImageModelInput();
  normalizeRatio();
  elements.sceneCount.value = "10";
  elements.duration.value = "50";
  elements.imageQuality.value = "low";
  elements.imageSize.value = state.ratio;
  if (!elements.seriesTemplate.value && !elements.basePrompt.value.trim()) {
    elements.seriesTemplate.value = "doowop";
  }
  if (elements.seriesTemplate.value) {
    applySeriesPreset(elements.seriesTemplate.value, true);
  } else {
    renderScenes();
    drawPreviewFrame(0);
  }
  setProgress(100, "10개 샘플 준비 완료");
  log("10개 이미지 샘플 설정이 준비되었습니다. 장면 10개, 50초, 낮은 이미지 품질로 뮤비 흐름을 먼저 확인합니다.");
}

function setFullProductionMode() {
  showWorkflowStep(3, false);
  normalizeImageModelInput();
  normalizeRatio();
  elements.sceneCount.value = "60";
  elements.duration.value = "300";
  if (!elements.seriesTemplate.value && !elements.basePrompt.value.trim()) {
    elements.seriesTemplate.value = "doowop";
  }
  if (elements.seriesTemplate.value) {
    applySeriesPreset(elements.seriesTemplate.value, true);
  }
  setProgress(100, "60개 장면 제작 준비 완료");
  log("60개 장면 풀버전 제작 설정이 준비되었습니다.");
}

function applySeriesPreset(key, fillFixedPrompts = true) {
  state.seriesKey = key;
  syncExampleCards();
  syncSeriesVideoPreview();
  const preset = getSelectedPreset();
  if (!preset) {
    syncSeriesVideoPreview();
    log("직접 입력 모드로 전환했습니다.");
    return;
  }

  elements.basePrompt.value = preset.displaySummary || preset.basePrompt;
  showStep2Substep(3, false);
  showWorkflowStep(3, true);
  log(`${preset.name} 템플릿을 불러왔습니다.`);

  if (fillFixedPrompts && Array.isArray(preset.prompts)) {
    const sceneCount = Math.min(Number(elements.sceneCount.value), preset.prompts.length);
    state.prompts = preset.prompts.slice(0, sceneCount).map((prompt, index) => ({
      title: `${preset.name} ${index + 1}`,
      prompt: assembleImagePrompt(prompt, preset, index),
    }));
    syncMotionPrompts();
    state.images = [];
    renderScenes();
    drawPreviewFrame(0);
    setProgress(100, `${preset.name} ${state.prompts.length}개 프롬프트 준비`);
    log(`${preset.name} 고정 프롬프트 ${state.prompts.length}개를 장면 리스트에 넣었습니다. 공통 후처리 문장까지 자동 조립했습니다.`);
  }
}

async function generatePrompts() {
  try {
    const sceneCount = Number(elements.sceneCount.value);
    const preset = getSelectedPreset();
    const basePrompt = preset?.basePrompt || elements.basePrompt.value.trim();
    if (!basePrompt) throw new Error("간단한 한국어 설명을 입력해 주세요.");

    if (preset?.prompts?.length) {
      const count = Math.min(sceneCount, preset.prompts.length);
      state.prompts = preset.prompts.slice(0, count).map((prompt, index) => ({
        title: `${preset.name} ${index + 1}`,
        prompt: assembleImagePrompt(prompt, preset, index),
      }));
      syncMotionPrompts();
      state.images = state.images.slice(0, state.prompts.length);
      renderScenes();
      drawPreviewFrame(0);
      setProgress(100, `${state.prompts.length}개 프리셋 프롬프트 완성`);
      log(`${preset.name} 프리셋 프롬프트 ${state.prompts.length}개를 불러왔습니다.`);
      return true;
    }

    const apiKey = getApiKey();

    setProgress(3, state.referenceDataUrl ? "참고 이미지 분석 중" : "스타일 설명 분석 중");
    log(state.referenceDataUrl
      ? "참고 이미지와 기본 프롬프트를 바탕으로 장면 프롬프트를 생성합니다."
      : "선택한 스타일 설명을 바탕으로 장면 프롬프트를 생성합니다.");

    const instructions = [
      "You create production-ready image prompts for long educational videos.",
      "Analyze the reference image style, color, lighting, composition, texture, and mood.",
      "Create distinct scene prompts that preserve the reference style while varying content across a coherent 5 minute video.",
      "Return JSON only. No markdown.",
    ].join(" ");

    const requestParts = [
      {
        text: [
          instructions,
          `Base prompt: ${basePrompt}`,
          preset ? `Selected series: ${preset.name}` : "Selected series: custom",
          preset ? `Series style guide: ${preset.guide}` : "",
          `Common image suffix: ${COMMON_IMAGE_SUFFIX}`,
          `Common video motion rule: ${COMMON_MOTION_RULE}`,
          elements.varyAngles?.checked
            ? `Vary camera angles across scenes using these directions in order: ${CAMERA_ANGLE_DIRECTIONS.join(" | ")}`
            : "Camera angle variation is optional.",
          `Scene count: ${sceneCount}`,
          `Aspect ratio: ${state.ratio}`,
          "Return this JSON shape:",
          JSON.stringify(promptSchema(sceneCount)),
          state.referenceDataUrl
            ? "Each image prompt must be in English and include style continuity from the reference image."
            : "Each image prompt must be in English and strongly follow the selected Korean style description.",
          "Each image prompt must naturally include the common image suffix.",
          "Compose each image for the common video motion rule, but avoid sudden motion language.",
          "Each title may be Korean.",
          "Return JSON only. No markdown.",
        ].join("\n"),
      },
    ];
    if (state.referenceDataUrl) {
      requestParts.push({ inlineData: dataUrlToInlineData(state.referenceDataUrl) });
    }

    const data = await callGemini(apiKey, elements.textModel.value.trim(), {
      contents: [
        {
          role: "user",
          parts: requestParts,
        },
      ],
    });

    const parsed = parseJsonObject(getGeminiText(data));
    const scenes = Array.isArray(parsed.scenes) ? parsed.scenes : [];
    state.prompts = scenes.slice(0, sceneCount).map((scene, index) => ({
      title: scene.title || `장면 ${index + 1}`,
      prompt: assembleImagePrompt(scene.prompt || "", preset, index),
    }));
    syncMotionPrompts();
    state.images = state.images.slice(0, state.prompts.length);
    renderScenes();
    drawPreviewFrame(0);
    setProgress(100, `${state.prompts.length}개 프롬프트 완성`);
    log(`${state.prompts.length}개 장면 프롬프트를 만들었습니다.`);
    return true;
  } catch (error) {
    setProgress(0, "오류");
    log(friendlyApiError(error), "error");
    return false;
  }
}

async function generateImages() {
  try {
    normalizeImageModelInput();
    normalizeRatio();
    const apiKey = getApiKey();
    if (!state.prompts.length) throw new Error("먼저 프롬프트를 만들어 주세요.");
    state.images = state.images.slice(0, state.prompts.length);
    let model = elements.imageModel.value.trim();
    const quality = elements.imageQuality.value;
    const imageModelCandidates = await getImageModelCandidates(apiKey);
    if (!imageModelCandidates.length) throw new Error("사용 가능한 Google 이미지 모델을 찾지 못했습니다.");

    for (let index = 0; index < state.prompts.length; index += 1) {
      if (state.images[index]) continue;
      const scene = state.prompts[index];
      setProgress((index / state.prompts.length) * 100, `이미지 생성 ${index + 1}/${state.prompts.length}`);
      log(`이미지 생성 중: ${index + 1}. ${scene.title}`);

      let data;
      let url = "";
      let lastModelError;
      const triedModels = [];
      for (const candidate of imageModelCandidates) {
        triedModels.push(candidate);
        try {
          const prompt = [
            scene.prompt,
            state.ratio === "9:16"
              ? "Create exactly one vertical 9:16 portrait image, tall frame, not square."
              : "Create exactly one wide 16:9 landscape image, cinematic horizontal frame, not square.",
            `Quality preference: ${quality}.`,
            "No text, no watermark, no logo, no extra explanation.",
          ].join("\n");
          if (candidate.startsWith("imagen-")) {
            url = await callImagenPredict(apiKey, candidate, prompt);
          } else {
            data = await callGemini(apiKey, candidate, {
              contents: [
                {
                  role: "user",
                  parts: [{ text: prompt }],
                },
              ],
              generationConfig: {
                responseModalities: ["TEXT", "IMAGE"],
              },
            });
            url = getGeminiImageUrl(data);
            if (!url) throw new Error(`${candidate} 모델이 이미지 파일 없이 응답했습니다.`);
          }
          model = candidate;
          elements.imageModel.value = candidate;
          if (index === 0) log(`이미지 모델 자동 선택: ${candidate}`);
          break;
        } catch (error) {
          if (!isModelUnavailable(error) && !String(error.message || error).includes("이미지 파일 없이 응답")) {
            throw error;
          }
          lastModelError = error;
          log(`${candidate} 모델을 사용할 수 없어 다음 이미지 모델로 다시 시도합니다.`);
        }
      }
      if (!url && lastModelError) {
        throw new Error(
          [
            "현재 Google 계정/프로젝트에서 사용 가능한 이미지 생성 모델을 찾지 못했습니다.",
            `시도한 모델: ${triedModels.join(", ")}`,
            "AI Studio에서 이미지 생성 모델 접근 권한이 열려 있는지 확인해 주세요.",
          ].join("\n"),
        );
      }
      if (!url) throw new Error("사용 가능한 Google 이미지 모델을 찾지 못했습니다. AI Studio에서 이미지 생성 모델 접근 권한을 확인해 주세요.");

      state.images[index] = await forceImageAspectRatio(url);
      renderScenes();
      if (index === 0) await drawPreviewFrame(0);
    }

    setProgress(100, "이미지 생성 완료");
    log("모든 이미지가 준비되었습니다.");
    return true;
  } catch (error) {
    setProgress(0, "오류");
    log(friendlyApiError(error), "error");
    return false;
  }
}

function getCanvasSize() {
  if (state.ratio === "9:16") return { width: 1080, height: 1920 };
  return { width: 1280, height: 720 };
}

function fitCover(img, canvasWidth, canvasHeight, zoom = 1) {
  const scale = Math.max(canvasWidth / img.width, canvasHeight / img.height) * zoom;
  const width = img.width * scale;
  const height = img.height * scale;
  return {
    width,
    height,
    x: (canvasWidth - width) / 2,
    y: (canvasHeight - height) / 2,
  };
}

function loadImageElement(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("이미지 비율 보정을 위해 이미지를 불러오지 못했습니다."));
    img.src = src;
  });
}

async function forceImageAspectRatio(dataUrl) {
  const img = await loadImageElement(dataUrl);
  const target = state.ratio === "9:16"
    ? { width: 1024, height: 1792 }
    : { width: 1792, height: 1024 };
  const currentRatio = img.width / img.height;
  const targetRatio = target.width / target.height;
  const isClose = Math.abs(currentRatio - targetRatio) < 0.01;
  if (isClose) return dataUrl;

  const canvas = document.createElement("canvas");
  canvas.width = target.width;
  canvas.height = target.height;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#050607";
  ctx.fillRect(0, 0, target.width, target.height);
  const fit = fitCover(img, target.width, target.height, 1);
  ctx.drawImage(img, fit.x, fit.y, fit.width, fit.height);
  log(`이미지 비율 자동 보정: ${img.width}x${img.height} → ${target.width}x${target.height}`);
  return canvas.toDataURL("image/png");
}

function getMotionTransform(sceneIndex, progress) {
  const eased = 0.5 - Math.cos(progress * Math.PI) / 2;
  const direction = sceneIndex % 5;
  const zoom = direction === 2 ? 1.12 - eased * 0.05 : 1.04 + eased * 0.1;
  const panStrength = 42;
  const driftStrength = 30;
  const transforms = [
    { zoom, x: -panStrength + eased * panStrength * 2, y: -driftStrength * 0.25 + eased * driftStrength * 0.5 },
    { zoom, x: panStrength - eased * panStrength * 2, y: 0 },
    { zoom, x: 0, y: -driftStrength + eased * driftStrength * 2 },
    { zoom, x: -panStrength * 0.45 + eased * panStrength * 0.9, y: driftStrength * 0.35 - eased * driftStrength * 0.7 },
    { zoom, x: panStrength * 0.35 - eased * panStrength * 0.7, y: -driftStrength * 0.45 + eased * driftStrength * 0.9 },
  ];
  return transforms[direction];
}

async function drawPreviewFrame(sceneIndex = 0, progress = 0) {
  const canvas = elements.canvas;
  const { width, height } = getCanvasSize();
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
  }
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#0e1412";
  ctx.fillRect(0, 0, width, height);

  const imageUrl = state.images[sceneIndex] || state.referenceDataUrl;
  if (imageUrl) {
    const img = await imageUrlToImage(imageUrl);
    const motion = getMotionTransform(sceneIndex, progress);
    const fit = fitCover(img, width, height, motion.zoom);
    ctx.drawImage(img, fit.x + motion.x, fit.y + motion.y, fit.width, fit.height);
  }

  const gradient = ctx.createLinearGradient(0, height * 0.55, 0, height);
  gradient.addColorStop(0, "rgba(0,0,0,0)");
  gradient.addColorStop(1, "rgba(0,0,0,0.62)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  if (elements.showCaptions.checked && state.prompts[sceneIndex]) {
    const title = state.prompts[sceneIndex].title;
    ctx.fillStyle = "rgba(255,255,255,0.94)";
    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";
    ctx.font = `700 ${Math.round(width * 0.038)}px Arial, sans-serif`;
    wrapCanvasText(ctx, title, width / 2, height - height * 0.08, width * 0.82, Math.round(width * 0.05));
  }
}

function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = String(text).split(/\s+/);
  const lines = [];
  let line = "";
  for (const word of words) {
    const testLine = line ? `${line} ${word}` : word;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = testLine;
    }
  }
  if (line) lines.push(line);
  const startY = y - (lines.length - 1) * lineHeight;
  for (let index = 0; index < lines.length; index += 1) {
    ctx.fillText(lines[index], x, startY + index * lineHeight);
  }
}

function pickRecorderMimeType() {
  const candidates = [
    "video/mp4;codecs=avc1.42E01E",
    "video/webm;codecs=vp9",
    "video/webm;codecs=vp8",
    "video/webm",
  ];
  return candidates.find((type) => MediaRecorder.isTypeSupported(type)) || "";
}

async function createVideo() {
  try {
    normalizeRatio();
    syncMotionPrompts();
    if (!state.images.length) throw new Error("먼저 이미지를 생성해 주세요.");
    if (!elements.canvas.captureStream || !window.MediaRecorder) {
      throw new Error("현재 브라우저가 영상 녹화를 지원하지 않습니다. 최신 Chrome 또는 Edge에서 다시 시도해 주세요.");
    }
    const duration = Number(elements.duration.value);
    const sceneDuration = duration / state.images.length;
    const fps = 30;
    const canvas = elements.canvas;
    const stream = canvas.captureStream(fps);
    let audioContext = null;
    let audioElement = null;

    if (state.musicFile) {
      audioContext = new AudioContext();
      audioElement = new Audio(URL.createObjectURL(state.musicFile));
      audioElement.loop = true;
      audioElement.crossOrigin = "anonymous";
      const source = audioContext.createMediaElementSource(audioElement);
      const destination = audioContext.createMediaStreamDestination();
      const gain = audioContext.createGain();
      gain.gain.value = 0.45;
      source.connect(gain).connect(destination);
      source.connect(audioContext.destination);
      destination.stream.getAudioTracks().forEach((track) => stream.addTrack(track));
    }

    const mimeType = pickRecorderMimeType();
    const recorder = new MediaRecorder(stream, mimeType ? { mimeType } : undefined);
    const chunks = [];
    recorder.ondataavailable = (event) => {
      if (event.data.size) chunks.push(event.data);
    };

    setProgress(0, "영상 녹화 시작");
    log(`브라우저에서 영상을 렌더링합니다. 모션 규칙: ${COMMON_MOTION_RULE}`);
    log("5분 영상은 실제로 약 5분이 걸립니다.");

    const stopped = new Promise((resolve) => {
      recorder.onstop = resolve;
    });
    recorder.start(1000);
    if (audioElement) {
      await audioContext.resume();
      await audioElement.play();
    }

    const startedAt = performance.now();
    while (performance.now() - startedAt < duration * 1000) {
      const elapsed = (performance.now() - startedAt) / 1000;
      const sceneIndex = Math.min(state.images.length - 1, Math.floor(elapsed / sceneDuration));
      const localProgress = (elapsed % sceneDuration) / sceneDuration;
      await drawPreviewFrame(sceneIndex, localProgress);
      setProgress((elapsed / duration) * 100, `영상 생성 중 ${Math.floor(elapsed)}/${duration}초`);
      await new Promise((resolve) => setTimeout(resolve, 1000 / fps));
    }

    recorder.stop();
    if (audioElement) {
      audioElement.pause();
      await audioContext.close();
    }
    await stopped;

    const type = mimeType.includes("mp4") ? "video/mp4" : "video/webm";
    const extension = type === "video/mp4" ? "mp4" : "webm";
    state.videoBlob = new Blob(chunks, { type });
    const url = URL.createObjectURL(state.videoBlob);
    elements.resultVideo.src = url;
    elements.resultVideo.style.display = "block";
    updateMyVideosBoard();
    downloadBlob(state.videoBlob, `ai-video-${Date.now()}.${extension}`);
    setProgress(100, "영상 생성 완료");
    log(`영상 파일을 다운로드했습니다. 형식: ${extension.toUpperCase()}`);
    return true;
  } catch (error) {
    setProgress(0, "오류");
    log(error.message, "error");
    return false;
  }
}

function pickVeoClipDuration(totalDuration, availableScenes) {
  return VEO_CLIP_DURATION_SECONDS;
}

function getRequestedVeoClipCount(availableScenes) {
  const value = elements.veoClipLimit?.value || "3";
  if (value === "all") return availableScenes;
  const requested = Number(value);
  if (!Number.isFinite(requested) || requested <= 0) return Math.min(3, availableScenes);
  return Math.max(1, Math.min(requested, availableScenes));
}

function bytesToBase64(bytes) {
  let binary = "";
  const chunkSize = 0x8000;
  for (let index = 0; index < bytes.length; index += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(index, index + chunkSize));
  }
  return btoa(binary);
}

async function imageToVeoPayloads(imageUrl) {
  const response = await fetch(imageUrl);
  const blob = await response.blob();
  const bytes = new Uint8Array(await blob.arrayBuffer());
  const mimeType = blob.type || "image/png";
  const base64 = bytesToBase64(bytes);
  return [
    {
      label: "imageBytes",
      image: {
        imageBytes: base64,
        mimeType,
      },
    },
    {
      label: "bytesBase64Encoded",
      image: {
        bytesBase64Encoded: base64,
        mimeType,
      },
    },
    {
      label: "inlineData",
      image: {
        inlineData: {
          mimeType,
          data: base64,
        },
      },
    },
  ];
}

function buildVeoPrompt(scene, index, clipDuration) {
  const preset = getSelectedPreset();
  const seriesGuide = preset?.guide ? `${preset.guide}. ` : "";
  const motion = state.motionPrompts[index] || buildMotionPrompt(scene, index);
  return [
    `Create a ${clipDuration}-second cinematic Veo video from the provided starting image.`,
    "Use the image as the first frame and preserve the same character identity, wardrobe, era, colors, lens feel, and composition.",
    seriesGuide,
    `Scene: ${scene.prompt}`,
    `Motion direction: ${motion}`,
    "Make it feel like a real movie shot: natural subject movement, believable clothing and hair motion, environmental motion, depth, atmospheric light, and smooth camera movement.",
    "Begin the motion immediately from the first moment. Avoid a frozen still-photo hold at the beginning. Keep the movement continuous and gentle for the full clip.",
    "Silent video only. Do not generate music, singing, voice, narration, dialogue, sound effects, ambience, or any audio track. The final background music will be added later during editing.",
    state.ratio === "9:16" ? "Format: vertical 9:16 portrait video." : "Format: wide 16:9 landscape video.",
    "Do not add text, subtitles, logos, watermarks, modern objects, glitchy morphing, warped faces, extra fingers, sudden camera shake, or jump cuts.",
  ].join(" ");
}

async function startVeoOperation(apiKey, model, prompt, imageUrl, clipDuration) {
  const payloads = await imageToVeoPayloads(imageUrl);
  const errors = [];
  for (const payload of payloads) {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:predictLongRunning`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": apiKey,
      },
      body: JSON.stringify({
        instances: [{
          prompt,
          image: payload.image,
        }],
        parameters: {
          aspectRatio: state.ratio,
          durationSeconds: clipDuration,
          resolution: "720p",
          personGeneration: "allow_adult",
        },
      }),
    });
    const data = await response.json();
    if (response.ok && !data.error && data.name) {
      log(`Veo 이미지 입력 형식 자동 선택: ${payload.label}`);
      return data.name;
    }
    errors.push(`${payload.label}: ${data.error?.message || `Veo 요청 실패 ${response.status}`}`);
  }
  throw new Error(errors.join("\n"));
}

async function pollVeoOperation(apiKey, operationName, label) {
  const operationUrl = `https://generativelanguage.googleapis.com/v1beta/${operationName}`;
  const startedAt = Date.now();
  while (true) {
    const response = await fetch(operationUrl, {
      headers: { "x-goog-api-key": apiKey },
    });
    const data = await response.json();
    if (!response.ok || data.error) {
      throw new Error(data.error?.message || `Veo 상태 확인 실패: ${response.status}`);
    }
    if (data.done) {
      const sample = data.response?.generateVideoResponse?.generatedSamples?.[0];
      const uri = sample?.video?.uri;
      if (!uri) throw new Error("Veo 영상 다운로드 주소를 받지 못했습니다.");
      return uri;
    }
    const elapsed = Math.round((Date.now() - startedAt) / 1000);
    elements.progressText.textContent = `${label} Veo 생성 중 ${elapsed}초`;
    await new Promise((resolve) => setTimeout(resolve, 10000));
  }
}

async function downloadVeoClip(apiKey, uri) {
  const response = await fetch(uri, {
    headers: { "x-goog-api-key": apiKey },
  });
  if (!response.ok) throw new Error(`Veo 영상 다운로드 실패: ${response.status}`);
  return response.blob();
}

function drawVideoCover(ctx, video, width, height) {
  if (!video.videoWidth || !video.videoHeight) return false;
  const scale = Math.max(width / video.videoWidth, height / video.videoHeight);
  const fit = {
    width: video.videoWidth * scale,
    height: video.videoHeight * scale,
    x: (width - video.videoWidth * scale) / 2,
    y: (height - video.videoHeight * scale) / 2,
  };
  ctx.drawImage(video, fit.x, fit.y, fit.width, fit.height);
  return true;
}

async function prepareVeoVideoElement(clip) {
  const video = document.createElement("video");
  const url = URL.createObjectURL(clip.blob);
  video.src = url;
  video.muted = true;
  video.playsInline = true;
  video.preload = "auto";
  video.crossOrigin = "anonymous";
  await new Promise((resolve, reject) => {
    video.onloadeddata = resolve;
    video.onerror = () => reject(new Error("Veo 클립을 불러오지 못했습니다."));
    video.load();
  });
  try {
    video.currentTime = Math.min(VEO_START_TRIM_SECONDS, Math.max(0, (video.duration || VEO_CLIP_DURATION_SECONDS) - 0.2));
  } catch {}
  return { video, url };
}

async function generateVeoClips() {
  normalizeRatio();
  syncMotionPrompts();
  const apiKey = getApiKey();
  const model = elements.videoModel?.value || "veo-3.1-fast-generate-preview";
  const images = state.images.filter(Boolean);
  if (!images.length) throw new Error("먼저 이미지를 생성해 주세요.");

  const totalDuration = Number(elements.duration.value);
  const clipDuration = pickVeoClipDuration(totalDuration, images.length);
  const clipCount = getRequestedVeoClipCount(images.length);
  state.lastVeoClipLimit = clipCount;
  state.videoClips = [];

  log(`Veo로 진짜 영상 클립을 생성합니다. 모델: ${model}, 장면: ${clipCount}개, 클립 길이: ${clipDuration}초`);
  if (clipCount < images.length) {
    log(`Veo 한도 절약 모드입니다. 현재 이미지 ${images.length}개 중 앞 ${clipCount}개만 먼저 영상으로 테스트합니다. 한도가 충분하면 'Veo 생성 장면 수'를 10개 또는 전체로 바꿔 주세요.`);
  }
  log("각 장면을 8초로 넉넉하게 만든 뒤, 최종 편집에서 앞부분 멈칫함을 살짝 잘라 자연스럽게 이어붙입니다.");
  log("이미지 확대가 아니라, 각 이미지를 시작 프레임으로 넣어 Veo가 실제 움직임을 생성합니다.");

  for (let index = 0; index < clipCount; index += 1) {
    const scene = state.prompts[index] || { title: `장면 ${index + 1}`, prompt: "" };
    const prompt = buildVeoPrompt(scene, index, clipDuration);
    const label = `${index + 1}/${clipCount}`;
    setProgress((index / clipCount) * 70, `Veo 요청 ${label}`);
    log(`Veo 클립 생성 중: ${label} ${scene.title || ""}`);
    const operationName = await startVeoOperation(apiKey, model, prompt, state.images[index], clipDuration);
    const uri = await pollVeoOperation(apiKey, operationName, label);
    const blob = await downloadVeoClip(apiKey, uri);
    state.videoClips.push({ blob, prompt, index, duration: clipDuration });
    log(`Veo 클립 완료: ${label}`);
  }
  return state.videoClips;
}

async function composeVeoClips() {
  if (!state.videoClips.length) throw new Error("이어붙일 Veo 클립이 없습니다.");
  if (!elements.canvas.captureStream || !window.MediaRecorder) {
    throw new Error("현재 브라우저가 영상 녹화를 지원하지 않습니다. 최신 Chrome 또는 Edge에서 다시 시도해 주세요.");
  }

  const { width, height } = getCanvasSize();
  const canvas = elements.canvas;
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  const fps = 30;
  const preparedClips = await Promise.all(state.videoClips.map((clip) => prepareVeoVideoElement(clip)));
  ctx.fillStyle = "#050607";
  ctx.fillRect(0, 0, width, height);
  drawVideoCover(ctx, preparedClips[0].video, width, height);
  const stream = canvas.captureStream(fps);
  let audioContext = null;
  let audioDestination = null;
  let musicElement = null;
  let musicUrl = "";
  let musicSource = null;
  try {
    if (state.musicFile) {
      audioContext = new AudioContext();
      audioDestination = audioContext.createMediaStreamDestination();
      musicUrl = URL.createObjectURL(state.musicFile);
      musicElement = new Audio(musicUrl);
      musicElement.crossOrigin = "anonymous";
      musicElement.loop = true;
      musicElement.currentTime = 0;
      musicSource = audioContext.createMediaElementSource(musicElement);
      const gain = audioContext.createGain();
      gain.gain.value = 0.72;
      musicSource.connect(gain).connect(audioDestination);
      audioDestination.stream.getAudioTracks().forEach((track) => stream.addTrack(track));
      await audioContext.resume();
      log("Veo 클립 소리는 사용하지 않고, 선택한 배경음악 1개만 최종 영상 전체에 넣습니다.");
    } else {
      log("선택한 배경음악이 없어 최종 Veo 영상은 무음으로 합칩니다.");
    }
  } catch {
    log("브라우저 오디오 연결이 제한되어 선택한 음악을 최종 영상에 넣지 못할 수 있습니다. 영상은 무음으로 합칩니다.");
    if (musicUrl) URL.revokeObjectURL(musicUrl);
    musicElement = null;
    musicUrl = "";
    audioContext = null;
    audioDestination = null;
  }
  const mimeType = pickRecorderMimeType();
  const recorder = new MediaRecorder(stream, mimeType ? { mimeType } : undefined);
  const chunks = [];
  recorder.ondataavailable = (event) => {
    if (event.data.size) chunks.push(event.data);
  };
  const stopped = new Promise((resolve) => {
    recorder.onstop = resolve;
  });

  const allImageCount = state.images.filter(Boolean).length;
  const isLimitedVeoRun = preparedClips.length < allImageCount;
  const totalDuration = isLimitedVeoRun
    ? preparedClips.reduce((sum, clip) => sum + (clip.video.duration || VEO_CLIP_DURATION_SECONDS), 0)
    : Number(elements.duration.value);
  const sceneDuration = totalDuration / Math.max(1, preparedClips.length);
  const recordingStartedAt = performance.now();

  setProgress(75, isLimitedVeoRun ? "Veo 테스트 영상 편집 중" : "Veo 클립 자동 편집 중");
  if (isLimitedVeoRun) {
    log(`Veo 테스트 영상은 ${preparedClips.length}개 클립 기준 약 ${Math.round(totalDuration)}초로 만듭니다. 전체 5분 제작은 한도가 충분할 때 '현재 이미지 전부'를 선택해 주세요.`);
  }
  recorder.start(1000);
  if (musicElement && audioContext) {
    await audioContext.resume();
    await musicElement.play();
  }

  for (let index = 0; index < preparedClips.length; index += 1) {
    const { video } = preparedClips[index];
    video.muted = true;
    try {
      video.currentTime = Math.min(VEO_START_TRIM_SECONDS, Math.max(0, (video.duration || VEO_CLIP_DURATION_SECONDS) - sceneDuration - 0.1));
    } catch {}
    drawVideoCover(ctx, video, width, height);
    try {
      await video.play();
    } catch {
      video.muted = true;
      await video.play();
    }
    const sceneStartedAt = performance.now();
    while (performance.now() - sceneStartedAt < sceneDuration * 1000) {
      const totalElapsed = (performance.now() - recordingStartedAt) / 1000;
      if (totalElapsed >= totalDuration) break;
      drawVideoCover(ctx, video, width, height);
      const sceneProgress = Math.min(1, (performance.now() - sceneStartedAt) / Math.max(1, sceneDuration * 1000));
      setProgress(75 + ((index + sceneProgress) / preparedClips.length) * 24, `자동 편집 ${index + 1}/${preparedClips.length}`);
      await new Promise((resolve) => setTimeout(resolve, 1000 / fps));
    }
    video.pause();
    drawVideoCover(ctx, video, width, height);
    if ((performance.now() - recordingStartedAt) / 1000 >= totalDuration) break;
  }

  preparedClips.forEach(({ url }) => URL.revokeObjectURL(url));

  recorder.stop();
  await stopped;
  if (musicElement) {
    musicElement.pause();
    musicElement.removeAttribute("src");
    musicElement.load();
  }
  if (musicSource) musicSource.disconnect();
  if (musicUrl) URL.revokeObjectURL(musicUrl);
  if (audioContext) await audioContext.close();

  const type = mimeType.includes("mp4") ? "video/mp4" : "video/webm";
  const extension = type === "video/mp4" ? "mp4" : "webm";
  state.videoBlob = new Blob(chunks, { type });
  const url = URL.createObjectURL(state.videoBlob);
  elements.resultVideo.src = url;
  elements.resultVideo.style.display = "block";
  updateMyVideosBoard();
  downloadBlob(state.videoBlob, `veo-final-mv-${Date.now()}.${extension}`);
  setProgress(100, "Veo 최종 영상 완료");
  log(`Veo 클립을 무음으로 이어붙이고 선택한 배경음악을 한 번에 입힌 최종 영상을 다운로드했습니다. 형식: ${extension.toUpperCase()}`);
  return true;
}

async function createVeoVideo() {
  try {
    await generateVeoClips();
    await composeVeoClips();
    return true;
  } catch (error) {
    setProgress(0, "오류");
    const message = friendlyApiError(error);
    log(message, "error");
    if (message.includes("Google/Veo API 사용량 한도")) {
      log("Veo 한도 문제라서 이미지와 프롬프트는 그대로 둡니다. 한도 회복 후 `Veo로 진짜 영상 만들기`를 다시 누르거나, 급하면 `이미지로 영상만 만들기`를 사용해 주세요.");
    }
    return false;
  }
}

async function runAutoProduction() {
  setBusy(true);
  try {
    log("전체 자동 제작을 시작합니다.");
    const promptsOk = await generatePrompts();
    if (!promptsOk) return;
    const imagesOk = await generateImages();
    if (!imagesOk) return;
    await createVeoVideo();
  } finally {
    setBusy(false);
  }
}

async function runQuickImageSample() {
  setBusy(true);
  try {
    setQuickTestMode();
    const promptsOk = await generatePrompts();
    if (!promptsOk) return;
    await generateImages();
  } finally {
    setBusy(false);
  }
}

async function runTenImageSample() {
  setBusy(true);
  try {
    setTenImageSampleMode();
    const promptsOk = await generatePrompts();
    if (!promptsOk) return;
    await generateImages();
  } finally {
    setBusy(false);
  }
}

async function runImageProduction() {
  setBusy(true);
  try {
    setFullProductionMode();
    const promptsOk = await generatePrompts();
    if (!promptsOk) return;
    await generateImages();
  } finally {
    setBusy(false);
  }
}

async function runFullVideoProduction() {
  setFullProductionMode();
  await runAutoProduction();
}

async function runFullMvFromSample() {
  const savedSampleImages = state.images.slice(0, 3);
  const readySampleCount = savedSampleImages.filter(Boolean).length;
  if (readySampleCount < 3) {
    setProgress(0, "샘플 필요");
    log("먼저 1번 `샘플로 3개 이미지만 만들어보기`로 이미지 3장을 만든 뒤 풀버전을 진행해 주세요.", "error");
    return;
  }

  setBusy(true);
  try {
    log("샘플 3개 이미지를 유지하고 풀버전 뮤비 제작을 시작합니다.");
    setFullProductionMode();
    const promptsOk = await generatePrompts();
    if (!promptsOk) return;
    state.images = state.images.slice(0, state.prompts.length);
    for (let index = 0; index < savedSampleImages.length; index += 1) {
      if (savedSampleImages[index]) {
        state.images[index] = await forceImageAspectRatio(savedSampleImages[index]);
      }
    }
    renderScenes();
    await drawPreviewFrame(0);
    log("샘플 이미지 3개를 풀버전 앞 장면에 그대로 포함했습니다.");
    const imagesOk = await generateImages();
    if (!imagesOk) return;
    await createVeoVideo();
  } finally {
    setBusy(false);
  }
}

async function applyVariedCameraAngles() {
  if (!state.prompts.length) {
    const selected = elements.seriesTemplate.value || "doowop";
    elements.seriesTemplate.value = selected;
    applySeriesPreset(selected, true);
  }
  if (!state.prompts.length) {
    log("먼저 시리즈를 고르거나 프롬프트를 만들어 주세요.", "error");
    return;
  }
  elements.varyAngles.checked = true;
  state.anglePreviewOpen = true;
  state.prompts = state.prompts.map((scene, index) => ({
    ...scene,
    prompt: withCameraAngleDirection(scene.prompt, index),
  }));
  syncMotionPrompts();
  state.images = [];
  state.videoClips = [];
  state.videoBlob = null;
  elements.resultVideo.removeAttribute("src");
  elements.resultVideo.style.display = "none";
  renderScenes();
  renderAnglePreview();
  drawPreviewFrame(0);
  setProgress(25, "카메라 각도 적용");
  log("장면마다 다른 카메라 각도를 넣었습니다. 기존 이미지는 비우고 새 각도로 다시 생성합니다.");
  await generateImages();
}

function downloadBlob(blob, filename) {
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
}

function resetAllWork() {
  state.seriesKey = "";
  state.prompts = [];
  state.motionPrompts = [];
  state.images = [];
  state.videoClips = [];
  state.referenceDataUrl = "";
  state.musicFile = null;
  state.pendingMusicFile = null;
  if (state.pendingMusicUrl) URL.revokeObjectURL(state.pendingMusicUrl);
  state.pendingMusicUrl = "";
  state.videoBlob = null;
  state.anglePreviewOpen = false;
  elements.referenceImage.value = "";
  if (elements.characterImage) elements.characterImage.value = "";
  if (elements.characterStatus) elements.characterStatus.textContent = "아직 캐릭터 없음";
  elements.musicFile.value = "";
  if (elements.musicUrl) elements.musicUrl.value = "";
  updateMusicStatus("아직 음악 없음");
  elements.seriesTemplate.value = "";
  elements.basePrompt.value = "";
  elements.sceneCount.value = "60";
  elements.duration.value = "300";
  elements.imageQuality.value = "low";
  elements.varyAngles.checked = true;
  setRatio("16:9");
  elements.resultVideo.pause();
  if (elements.resultVideo.src) URL.revokeObjectURL(elements.resultVideo.src);
  elements.resultVideo.removeAttribute("src");
  elements.resultVideo.style.display = "none";
  elements.log.textContent = "";
  setProgress(0, "대기 중");
  syncReadyMusicActions();
  resetWorkflowVisibility();
  syncSeriesVideoPreview();
  renderAnglePreview();
  renderScenes();
  drawPreviewFrame(0);
  log("전체 작업을 리셋했습니다. API 키는 유지됩니다.");
}

function setLongFormMode() {
  setRatio("16:9");
  elements.duration.value = "300";
}

function setShortsMode() {
  setRatio("9:16");
  elements.duration.value = "60";
}

async function runLongFormVideo() {
  setLongFormMode();
  setBusy(true);
  try {
    await createVeoVideo();
  } finally {
    setBusy(false);
  }
}

async function runShortsVideo() {
  setShortsMode();
  setBusy(true);
  try {
    await createVeoVideo();
  } finally {
    setBusy(false);
  }
}

function makeCrcTable() {
  const table = [];
  for (let n = 0; n < 256; n += 1) {
    let c = n;
    for (let k = 0; k < 8; k += 1) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c >>> 0;
  }
  return table;
}

const crcTable = makeCrcTable();

function crc32(bytes) {
  let crc = 0xffffffff;
  bytes.forEach((byte) => {
    crc = crcTable[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  });
  return (crc ^ 0xffffffff) >>> 0;
}

function writeUint16(output, value) {
  output.push(value & 0xff, (value >>> 8) & 0xff);
}

function writeUint32(output, value) {
  output.push(value & 0xff, (value >>> 8) & 0xff, (value >>> 16) & 0xff, (value >>> 24) & 0xff);
}

function createZip(files) {
  const encoder = new TextEncoder();
  const output = [];
  const central = [];
  let offset = 0;
  files.forEach((file) => {
    const nameBytes = encoder.encode(file.name);
    const bytes = file.bytes;
    const crc = crc32(bytes);
    const local = [];
    writeUint32(local, 0x04034b50);
    writeUint16(local, 20);
    writeUint16(local, 0);
    writeUint16(local, 0);
    writeUint16(local, 0);
    writeUint16(local, 0);
    writeUint32(local, crc);
    writeUint32(local, bytes.length);
    writeUint32(local, bytes.length);
    writeUint16(local, nameBytes.length);
    writeUint16(local, 0);
    output.push(...local, ...nameBytes, ...bytes);

    const header = [];
    writeUint32(header, 0x02014b50);
    writeUint16(header, 20);
    writeUint16(header, 20);
    writeUint16(header, 0);
    writeUint16(header, 0);
    writeUint16(header, 0);
    writeUint16(header, 0);
    writeUint32(header, crc);
    writeUint32(header, bytes.length);
    writeUint32(header, bytes.length);
    writeUint16(header, nameBytes.length);
    writeUint16(header, 0);
    writeUint16(header, 0);
    writeUint16(header, 0);
    writeUint16(header, 0);
    writeUint32(header, 0);
    writeUint32(header, offset);
    central.push(...header, ...nameBytes);
    offset = output.length;
  });
  const centralOffset = output.length;
  output.push(...central);
  const end = [];
  writeUint32(end, 0x06054b50);
  writeUint16(end, 0);
  writeUint16(end, 0);
  writeUint16(end, files.length);
  writeUint16(end, files.length);
  writeUint32(end, central.length);
  writeUint32(end, centralOffset);
  writeUint16(end, 0);
  output.push(...end);
  return new Blob([new Uint8Array(output)], { type: "application/zip" });
}

async function dataUrlToBytes(dataUrl) {
  const response = await fetch(dataUrl);
  return new Uint8Array(await response.arrayBuffer());
}

async function downloadAllImages() {
  const images = state.images.filter(Boolean);
  if (!images.length) {
    log("다운로드할 이미지가 없습니다. 먼저 이미지를 생성해 주세요.", "error");
    return;
  }
  const files = [];
  for (let index = 0; index < state.images.length; index += 1) {
    if (!state.images[index]) continue;
    const bytes = await dataUrlToBytes(state.images[index]);
    files.push({ name: `scene-${String(index + 1).padStart(2, "0")}.png`, bytes });
  }
  downloadBlob(createZip(files), `ai-images-${Date.now()}.zip`);
  log(`이미지 ${files.length}장을 ZIP으로 다운로드했습니다.`);
}

async function blobToBytes(blob) {
  return new Uint8Array(await blob.arrayBuffer());
}

async function downloadCurrentVideo() {
  if (!state.videoBlob) {
    if (state.videoClips.length) {
      const files = [];
      for (let index = 0; index < state.videoClips.length; index += 1) {
        files.push({
          name: `veo-clip-${String(index + 1).padStart(2, "0")}.mp4`,
          bytes: await blobToBytes(state.videoClips[index].blob),
        });
      }
      downloadBlob(createZip(files), `veo-clips-${Date.now()}.zip`);
      log(`Veo 클립 ${files.length}개를 ZIP으로 다운로드했습니다.`);
      return;
    }
    log("다운로드할 영상이 없습니다. 먼저 Veo 영상을 생성해 주세요.", "error");
    return;
  }
  const extension = state.videoBlob.type.includes("mp4") ? "mp4" : "webm";
  downloadBlob(state.videoBlob, `ai-video-${Date.now()}.${extension}`);
  log("완성된 영상을 다시 다운로드했습니다.");
}

function downloadPrompts() {
  syncMotionPrompts();
  const veoClipDuration = pickVeoClipDuration(Number(elements.duration.value), Math.max(1, state.prompts.length));
  const blob = new Blob([JSON.stringify({
    ratio: state.ratio,
    durationSeconds: Number(elements.duration.value),
    veoModel: elements.videoModel?.value || "veo-3.1-fast-generate-preview",
    veoClipDurationSeconds: veoClipDuration,
    prompts: state.prompts.map((scene, index) => ({
      ...scene,
      motionPrompt: state.motionPrompts[index] || buildMotionPrompt(scene, index),
      veoPrompt: buildVeoPrompt(scene, index, veoClipDuration),
    })),
  }, null, 2)], {
    type: "application/json",
  });
  downloadBlob(blob, `scene-prompts-${Date.now()}.json`);
}

function renderScenes() {
  elements.sceneList.innerHTML = "";
  state.prompts.forEach((scene, index) => {
    const row = document.createElement("article");
    row.className = "scene";
    const img = document.createElement("img");
    img.className = "thumb";
    img.alt = `${index + 1}번 장면`;
    img.src = state.images[index] || state.referenceDataUrl || "";
    if (state.images[index]) {
      img.tabIndex = 0;
      img.role = "button";
      img.title = "크게 보기";
      img.addEventListener("click", () => openImageModal(index));
      img.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openImageModal(index);
        }
      });
    }

    const body = document.createElement("div");
    const title = document.createElement("strong");
    title.textContent = `${index + 1}. ${scene.title}`;
    const angleCard = document.createElement("div");
    angleCard.className = "scene-angle-card";
    const [angleTitle, angleDescription] = getCameraAngleLabel(index);
    angleCard.innerHTML = `
      <span>카메라 각도 ${index + 1}</span>
      <strong>${angleTitle}</strong>
      <em>${angleDescription}</em>
    `;
    const textarea = document.createElement("textarea");
    textarea.value = scene.prompt;
    textarea.addEventListener("input", () => {
      state.prompts[index].prompt = textarea.value;
    });
    const motion = document.createElement("details");
    motion.className = "motion-prompt";
    const motionSummary = document.createElement("summary");
    motionSummary.textContent = "영상 움직임 프롬프트 보기";
    const motionText = document.createElement("p");
    motionText.textContent = state.motionPrompts[index] || buildMotionPrompt(scene, index);
    motion.append(motionSummary, motionText);
    const meta = document.createElement("div");
    meta.className = "scene-meta";
    meta.innerHTML = `<span>${state.images[index] ? "이미지 완료" : "대기"}</span><span>${Math.round(Number(elements.duration.value) / Math.max(1, state.prompts.length))}초</span>`;
    body.append(title, angleCard, textarea, motion, meta);
    row.append(img, body);
    elements.sceneList.append(row);
  });
  updateMyVideosBoard();
}

function setRatio(ratio) {
  if (ratio !== "16:9" && ratio !== "9:16") ratio = "16:9";
  state.ratio = ratio;
  if (elements.imageSize.value !== ratio) {
    elements.imageSize.value = ratio;
  }
  const aspectRatio = ratio === "9:16" ? "9 / 16" : "16 / 9";
  elements.canvas.style.aspectRatio = aspectRatio;
  elements.resultVideo.style.aspectRatio = aspectRatio;
  document.querySelectorAll(".segment").forEach((button) => {
    button.classList.toggle("active", button.dataset.ratio === ratio);
  });
  drawPreviewFrame(0);
}

function syncVideoModelCards() {
  document.querySelectorAll(".model-card").forEach((card) => {
    card.classList.toggle("active", card.dataset.videoModel === elements.videoModel.value);
  });
}

function setVideoModel(model) {
  elements.videoModel.value = model;
  syncVideoModelCards();
  log(`영상 모델 선택: ${elements.videoModel.selectedOptions[0]?.textContent || model}`);
}

function syncStyleCards(activeCard = null) {
  document.querySelectorAll(".style-card").forEach((card) => {
    card.classList.toggle("active", card === activeCard);
  });
}

function applyStyleCard(card) {
  const prompt = card.dataset.stylePrompt || "";
  elements.seriesTemplate.value = "";
  state.seriesKey = "";
  elements.basePrompt.value = prompt;
  state.prompts = [];
  state.motionPrompts = [];
  state.images = [];
  syncExampleCards();
  syncSeriesVideoPreview();
  syncStyleCards(card);
  showWorkflowStep(3, true);
  renderScenes();
  drawPreviewFrame(0);
  log(`${card.querySelector("strong")?.textContent || "선택한 스타일"} 스타일을 설명란에 적용했습니다.`);
}

function focusStudioPanel() {
  document.getElementById("studio")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function setActiveSidebarLink(targetId) {
  document.querySelectorAll(".sidebar-link").forEach((link) => {
    link.classList.toggle("active", link.dataset.sidebarTarget === targetId);
  });
}

function navigateSidebar(targetId) {
  const target = document.getElementById(targetId);
  if (!target) return;
  setActiveSidebarLink(targetId);
  target.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  if (targetId === "ai-image-section") {
    elements.basePrompt?.focus({ preventScroll: true });
  }
  if (targetId === "studio") {
    elements.apiKey?.focus({ preventScroll: true });
  }
}

function updateMyVideosBoard() {
  if (!elements.myVideoTitle || !elements.myVideoMeta) return;
  const sceneCount = state.prompts.length;
  const imageCount = state.images.filter(Boolean).length;
  const clipCount = state.videoClips.length;
  const hasFinalVideo = Boolean(state.videoBlob);
  if (!sceneCount && !imageCount && !clipCount && !hasFinalVideo) {
    elements.myVideoTitle.textContent = "아직 만든 영상이 없습니다";
    elements.myVideoMeta.textContent = "이미지나 영상을 만들면 여기에 표시됩니다.";
    return;
  }
  elements.myVideoTitle.textContent = hasFinalVideo ? "완성 영상 준비됨" : `${sceneCount || imageCount}개 장면 작업 중`;
  elements.myVideoMeta.textContent = `장면 ${sceneCount}개 · 이미지 ${imageCount}개 · Veo 클립 ${clipCount}개${hasFinalVideo ? " · 최종 영상 있음" : ""}`;
}

function switchBoardTab(tabName) {
  document.querySelectorAll("[data-board-tab]").forEach((button) => {
    button.classList.toggle("active", button.dataset.boardTab === tabName);
  });
  document.querySelectorAll("[data-board-panel]").forEach((panel) => {
    panel.hidden = panel.dataset.boardPanel !== tabName;
  });
  if (tabName === "mine") updateMyVideosBoard();
}

function openSimilarModal(card) {
  const seriesKey = card.dataset.series || "";
  const preset = SERIES_PRESETS[seriesKey];
  if (!preset) {
    elements.basePrompt.focus();
    focusStudioPanel();
    return;
  }
  state.selectedSimilarSeries = seriesKey;
  elements.similarTitle.textContent = card.querySelector("strong")?.textContent?.trim() || preset.name;
  elements.similarPrompt.value = `${preset.name}\n\n${preset.guide}\n\n이 예시와 비슷한 분위기로 60장 이미지와 5분 뮤비를 만듭니다.`;
  elements.similarCharacter.textContent = state.referenceDataUrl ? "선택한 캐릭터 이미지 사용" : "캐릭터를 선택하면 더 비슷하게 만들 수 있음";
  elements.similarMusic.textContent = state.musicFile ? state.musicFile.name : "업로드한 음악 또는 AI 음악 사용 가능";
  elements.similarPreviewImage.className = `similar-preview-image ${seriesKey}`;
  elements.similarModal.showModal();
}

function closeSimilarModal() {
  elements.similarModal.close();
}

function createSimilarFromModal() {
  const seriesKey = state.selectedSimilarSeries;
  if (!seriesKey || !SERIES_PRESETS[seriesKey]) {
    log("비슷하게 만들 예시를 먼저 선택해 주세요.", "error");
    return;
  }
  elements.seriesTemplate.value = seriesKey;
  applySeriesPreset(seriesKey, true);
  syncStyleCards();
  setFullProductionMode();
  closeSimilarModal();
  focusStudioPanel();
  log(`${SERIES_PRESETS[seriesKey].name} 예시와 비슷하게 만들도록 설정했습니다. 이제 제작 단계 버튼을 누르면 됩니다.`);
}

function bindEvents() {
  document.querySelectorAll(".sidebar-link[data-sidebar-target]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      navigateSidebar(link.dataset.sidebarTarget);
    });
  });

  document.querySelectorAll("[data-board-tab]").forEach((button) => {
    button.addEventListener("click", () => switchBoardTab(button.dataset.boardTab));
  });

  elements.boardGoScenesButton.addEventListener("click", () => navigateSidebar("my-videos-section"));
  elements.boardDownloadImagesButton.addEventListener("click", async () => {
    setBusy(true);
    try {
      await downloadAllImages();
    } finally {
      setBusy(false);
    }
  });
  elements.boardDownloadVideoButton.addEventListener("click", async () => {
    setBusy(true);
    try {
      await downloadCurrentVideo();
    } finally {
      setBusy(false);
    }
  });

  elements.referenceImage.addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    state.referenceDataUrl = await fileToDataUrl(file);
    await drawPreviewFrame(0);
    showStep2Substep(3, true);
    log("참고 이미지를 불러왔습니다.");
  });

  elements.openCharacterModalButton.addEventListener("click", openCharacterModal);
  elements.closeCharacterModalButton.addEventListener("click", closeCharacterModal);
  elements.pickCharacterButton.addEventListener("click", () => elements.characterImage.click());
  elements.characterImage.addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    state.referenceDataUrl = await fileToDataUrl(file);
    const shortName = file.name.length > 22 ? `${file.name.slice(0, 11)}...${file.name.slice(-8)}` : file.name;
    elements.characterStatus.textContent = `선택됨: ${shortName}`;
    await drawPreviewFrame(0);
    showStep2Substep(3, true);
    closeCharacterModal();
    log("캐릭터 이미지를 불러왔습니다. 이 캐릭터를 참고해서 장면을 만들 수 있습니다.");
  });

  elements.musicFile.addEventListener("change", (event) => {
    const file = event.target.files?.[0] || null;
    if (file) {
      showMusicPreview(file, "업로드 음악");
    }
  });

  elements.openMusicModalButton.addEventListener("click", openMusicModal);
  elements.skipMusicStepButton.addEventListener("click", () => {
    showStep2Substep(2, true);
    log("음악 없이 다음 단계로 이동했습니다. 나중에 음악을 넣어도 됩니다.");
  });
  elements.skipSourceStepButton.addEventListener("click", () => {
    showStep2Substep(3, true);
    log("프로젝트 소스 없이 시리즈 템플릿 단계로 이동했습니다.");
  });
  elements.closeMusicModalButton.addEventListener("click", closeMusicModal);
  elements.closeMusicModalFooterButton.addEventListener("click", closeMusicModal);
  elements.pickMusicFileButton.addEventListener("click", () => elements.musicFile.click());
  elements.applySunoKeyButton.addEventListener("click", applySunoKey);
  elements.sunoLyrics.addEventListener("input", () => {
    if (elements.sunoLyrics.value.trim()) elements.sunoInstrumental.checked = false;
  });
  elements.sunoInstrumental.addEventListener("change", () => {
    if (elements.sunoInstrumental.checked && elements.sunoLyrics.value.trim()) {
      elements.sunoLyrics.value = "";
      log("연주곡으로 만들기 위해 가사 입력란을 비웠습니다.");
    }
  });
  elements.playMusicPreviewButton.addEventListener("click", async () => {
    if (!state.pendingMusicFile) {
      log("먼저 음악 파일을 선택해 주세요.", "error");
      return;
    }
    await elements.musicPreviewAudio.play();
  });
  elements.stopMusicPreviewButton.addEventListener("click", () => {
    elements.musicPreviewAudio.pause();
    elements.musicPreviewAudio.currentTime = 0;
  });
  elements.cancelPendingMusicButton.addEventListener("click", clearPendingMusic);
  elements.confirmMusicButton.addEventListener("click", confirmPendingMusic);
  elements.downloadSunoMusicButton?.addEventListener("click", downloadSelectedMusic);
  elements.applyReadyMusicButton?.addEventListener("click", confirmPendingMusic);
  elements.downloadReadyMusicButton?.addEventListener("click", downloadSelectedMusic);
  elements.openReadyMusicButton?.addEventListener("click", () => {
    openMusicModal();
    elements.musicPreviewPanel?.scrollIntoView({ behavior: "smooth", block: "center" });
  });
  if (elements.applyMusicUrlButton && elements.musicUrl) {
    elements.applyMusicUrlButton.addEventListener("click", async () => {
      const url = elements.musicUrl.value.trim();
      if (!url) {
        log("음악 URL을 입력해 주세요.", "error");
        return;
      }
      setBusy(true);
      try {
        setProgress(40, "음악 URL 불러오는 중");
        const file = await musicUrlToFile(url, "url-music");
        showMusicPreview(file, "URL 음악");
        setProgress(100, "음악 적용 완료");
      } catch (error) {
        setProgress(0, "오류");
        log(friendlyApiError(error), "error");
      } finally {
        setBusy(false);
      }
    });
  }
  elements.generateSunoButton.addEventListener("click", async () => {
    setBusy(true);
    try {
      if (!applySunoKey()) return;
      updateSunoWorkStatus("음악 제작 시작", "팝업을 닫고 진행 상태에서 제작 상황을 보여드립니다.", "working");
      closeMusicModalAndShowStatus();
      await generateSunoMusic();
    } catch (error) {
      setProgress(0, "오류");
      const message = friendlyApiError(error);
      updateSunoWorkStatus("음악 제작 오류", message, "error");
      log(message, "error");
    } finally {
      setBusy(false);
      syncMusicDownloadButton();
    }
  });

  elements.seriesTemplate.addEventListener("change", (event) => {
    applySeriesPreset(event.target.value, true);
  });

  elements.basePrompt.addEventListener("input", () => {
    if (elements.basePrompt.value.trim()) showStep2Substep(3, false);
    if (elements.basePrompt.value.trim()) showWorkflowStep(3, false);
  });

  elements.quickTestButton.addEventListener("click", setQuickTestMode);

  document.querySelectorAll(".example-card").forEach((card) => {
    card.addEventListener("click", () => {
      elements.seriesTemplate.value = card.dataset.series;
      applySeriesPreset(card.dataset.series, true);
      syncStyleCards();
      focusStudioPanel();
    });
  });

  document.querySelectorAll("[data-series-scroll]").forEach((button) => {
    button.addEventListener("click", () => {
      const strip = document.querySelector(".series-examples");
      if (!strip) return;
      const direction = Number(button.dataset.seriesScroll || 1);
      strip.scrollBy({ left: direction * Math.max(180, strip.clientWidth * 0.75), behavior: "smooth" });
    });
  });

  document.querySelectorAll(".style-card").forEach((card) => {
    card.addEventListener("click", () => {
      applyStyleCard(card);
      focusStudioPanel();
    });
  });

  document.querySelectorAll(".inspo-card[data-series]").forEach((card) => {
    card.addEventListener("click", () => {
      openSimilarModal(card);
    });
  });

  elements.closeSimilarModalButton.addEventListener("click", closeSimilarModal);
  elements.createSimilarButton.addEventListener("click", createSimilarFromModal);

  document.querySelector(".inspo-card.custom")?.addEventListener("click", () => {
    showWorkflowStep(3, true);
    elements.basePrompt.focus();
    focusStudioPanel();
  });

  elements.autoStyleButton.addEventListener("click", async () => {
    if (!elements.basePrompt.value.trim() && !state.referenceDataUrl) {
      log("먼저 스타일 카드를 고르거나, 참고 이미지를 올리거나, 간단한 한국어 설명을 입력해 주세요.", "error");
      return;
    }
    if (!elements.basePrompt.value.trim() && state.referenceDataUrl) {
      elements.basePrompt.value = "업로드한 참고 이미지의 색감, 구도, 인물 분위기, 조명, 질감을 분석해서 같은 스타일의 AI 뮤비 장면을 만들어 주세요.";
    }
    elements.seriesTemplate.value = "";
    state.seriesKey = "";
    syncExampleCards();
    setQuickTestMode();
    await runQuickImageSample();
  });

  elements.duration.addEventListener("change", () => {
    if (state.prompts.length) renderScenes();
  });

  elements.imageSize.addEventListener("change", (event) => {
    setRatio(event.target.value);
  });

  elements.videoModel.addEventListener("change", syncVideoModelCards);

  document.querySelectorAll(".model-card").forEach((card) => {
    card.addEventListener("click", () => setVideoModel(card.dataset.videoModel));
  });

  elements.applyKeyButton.addEventListener("click", applyApiKey);
  elements.openKeyModalButton.addEventListener("click", openKeyModal);
  elements.completeKeySetupButton.addEventListener("click", completeKeySetup);
  elements.closeImageModalButton.addEventListener("click", closeImageModal);
  elements.imageModal.addEventListener("click", (event) => {
    if (event.target === elements.imageModal) closeImageModal();
  });
  elements.apiKey.addEventListener("input", () => {
    updateKeyStatus("변경됨 - 적용 필요", false);
  });

  document.querySelectorAll(".segment").forEach((button) => {
    button.addEventListener("click", () => setRatio(button.dataset.ratio));
  });

  elements.promptButton.addEventListener("click", runQuickImageSample);
  elements.tenImageButton.addEventListener("click", runTenImageSample);
  elements.imageButton.addEventListener("click", runImageProduction);
  elements.autoButton.addEventListener("click", runFullVideoProduction);
  elements.fullMvButton.addEventListener("click", runFullMvFromSample);
  elements.longFormButton.addEventListener("click", runLongFormVideo);
  elements.shortsButton.addEventListener("click", runShortsVideo);
  elements.downloadImagesButton.addEventListener("click", async () => {
    setBusy(true);
    try {
      await downloadAllImages();
    } finally {
      setBusy(false);
    }
  });
  elements.downloadVideoButton.addEventListener("click", async () => {
    setBusy(true);
    try {
      await downloadCurrentVideo();
    } finally {
      setBusy(false);
    }
  });
  elements.videoButton.addEventListener("click", async () => {
    setBusy(true);
    try {
      await createVeoVideo();
    } finally {
      setBusy(false);
    }
  });
  elements.angleButton.addEventListener("click", async () => {
    setBusy(true);
    try {
      await applyVariedCameraAngles();
    } finally {
      setBusy(false);
    }
  });
  elements.varyAngles.addEventListener("change", () => {
    state.anglePreviewOpen = elements.varyAngles.checked && state.anglePreviewOpen;
    syncMotionPrompts();
    if (state.prompts.length) renderScenes();
    renderAnglePreview();
    log(elements.varyAngles.checked ? "카메라 각도 다양화 옵션을 켰습니다." : "카메라 각도 다양화 옵션을 껐습니다.");
  });
  elements.downloadPromptsButton.addEventListener("click", downloadPrompts);

  elements.clearKeyButton.addEventListener("click", () => {
    localStorage.removeItem("google_ai_api_key");
    elements.apiKey.value = "";
    elements.saveKey.checked = false;
    updateKeyStatus("아직 적용되지 않음", false);
    resetWorkflowVisibility();
    log("저장된 API 키를 삭제했습니다.");
  });

  elements.clearImagesButton.addEventListener("click", () => {
    state.images = [];
    state.videoClips = [];
    state.videoBlob = null;
    elements.resultVideo.removeAttribute("src");
    elements.resultVideo.style.display = "none";
    renderScenes();
    drawPreviewFrame(0);
    log("생성된 이미지를 비웠습니다.");
  });

  elements.resetAllButton.addEventListener("click", resetAllWork);

  elements.sampleButton.addEventListener("click", () => {
    if (elements.seriesTemplate.value) {
      applySeriesPreset(elements.seriesTemplate.value, true);
      return;
    }
    elements.basePrompt.value = "한국의 사계절을 배경으로 자연과 사람의 일상을 따뜻하고 시네마틱하게 보여주는 5분 교육 영상입니다.";
    showWorkflowStep(3, true);
    state.prompts = Array.from({ length: Number(elements.sceneCount.value) }, (_, index) => ({
      title: `샘플 장면 ${index + 1}`,
      prompt: `A cinematic educational scene about Korean seasons, scene ${index + 1}, warm natural light, cohesive visual style, detailed environment, high quality`,
    }));
    syncMotionPrompts();
    renderScenes();
    log("샘플 프롬프트를 채웠습니다.");
  });
}

loadSavedKey();
loadSavedSunoKey();
const imageModelWasReset = normalizeImageModelInput();
bindEvents();
normalizeRatio();
setRatio(state.ratio);
syncVideoModelCards();
drawPreviewFrame(0);
log("준비되었습니다. 모든 파일 처리는 현재 브라우저에서만 진행됩니다.");
if (imageModelWasReset) log("이전 이미지 모델명이 감지되어 이미지 모델을 auto로 바꿨습니다.");
