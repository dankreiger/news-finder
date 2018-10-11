import _ from 'lodash';

// api only returns the first 20 articles even when it has more - there are 20 articles below
export const mockData = {
  status: 'ok',
  totalResults: 158,
  articles: [
    {
      source: { id: 'mashable', name: 'Mashable' },
      author: 'Amanda Luz Henning Santiago',
      title:
        'Fox News reveals it has no idea how movies work in a very misguided tweet about Jamie Lee Curtis',
      description:
        "On Wednesday, Fox News shared one of the dumbest takes of our time about Jamie Lee Curtis, star of the Halloween re-boot. The conservative news outlet tweeted, \"Jamie Lee Curtis wields firearms in new 'Halloween' movie despite advocating for gun control.\" It'…",
      url:
        'https://mashable.com/article/fox-news-jamie-lee-curtis-gun-control-tweet-halloween/',
      urlToImage:
        'https://i.amz.mshcdn.com/CrqgZdv3yZ8ITPg9VA0qNEHVFfA=/1200x630/2018%2F10%2F10%2F6e%2F0d481eaee8564432b78be96cb96f1954.4fe76.jpg',
      publishedAt: '2018-10-10T15:56:59Z',
      content:
        "On Wednesday, Fox News shared one of the dumbest takes of our time about Jamie Lee Curtis, star of the Halloween re-boot. The conservative news outlet tweeted, \"Jamie Lee Curtis wields firearms in new 'Halloween' movie despite advocating for gun control.\" It'… [+1996 chars]"
    },
    {
      source: { id: 'the-guardian-au', name: 'The Guardian (AU)' },
      author: 'Tim Dowling',
      title:
        'Why did that lion woof? When zoos play fast and loose with the truth',
      description:
        'From plastic penguins to dogs impersonating lions, zoos across the world are using fake animals to fill shortages Telford Exotic Zoo has a brand new visitor attraction: a £60,000 penguin enclosure. Unfortunately there is a bit of a penguin shortage, thanks to…',
      url:
        'https://www.theguardian.com/global/shortcuts/2018/oct/03/why-did-that-lion-go-woof-when-zoos-play-fast-and-loose-with-the-truth',
      urlToImage:
        'https://i.guim.co.uk/img/media/adc2f3459824bd42cce760f96efa00a35c5ffbc5/0_179_5200_3122/master/5200.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&crop=faces%2Centropy&bm=normal&ba=bottom%2Cleft&blend64=aHR0cHM6Ly9hc3NldHMuZ3VpbS5jby51ay9pbWFnZXMvb3ZlcmxheXMvZDM1ODZhNWVmNTc4MTc1NmQyMWEzYjYzNWU1MTcxNDEvdGctZGVmYXVsdC5wbmc&s=7bd98c49eff0441a414af650b9a29dd3',
      publishedAt: '2018-10-03T14:20:42Z',
      content:
        'T elford Exotic Zoo has a brand new visitor attraction: a £60,000 penguin enclosure. Unfortunately there is a bit of a penguin shortage, thanks to a national outbreak of avian malaria, so the penguins currently on show at the zoo are, um, plastic models. Dece… [+1846 chars]'
    },
    {
      source: { id: 'the-guardian-au', name: 'The Guardian (AU)' },
      author: 'Lucy Mangan',
      title:
        'The Big Audition review – at last … reality TV without the sneering',
      description:
        'ITV1 Showbiz hopefuls battle it out for jobs as TV presenters and tour guides in a strangely charming Friday-night treat Ah, the roar of the greasepaint, the smell of the crowd! The allure of the theatre tempts us all, does it not? Alas, in these benighted ti…',
      url:
        'https://www.theguardian.com/tv-and-radio/2018/oct/05/the-big-audition-review-itv',
      urlToImage:
        'https://i.guim.co.uk/img/media/7054c56e6c6c014613d037272c326644f169222a/1111_744_4420_2653/master/4420.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&crop=faces%2Centropy&bm=normal&ba=bottom%2Cleft&blend64=aHR0cHM6Ly9hc3NldHMuZ3VpbS5jby51ay9pbWFnZXMvb3ZlcmxheXMvYTlkMjMzODNlNzhjZjM4ZDQ2ZDYyYjFjYTg4ZmJhZGEvdGctcmV2aWV3LTMucG5n&s=902fdbd28eccea0df842246a76c9ecb9',
      publishedAt: '2018-10-05T21:00:04Z',
      content:
        'Ah, the roar of the greasepaint, the smell of the crowd! The allure of the theatre tempts us all, does it not? Alas, in these benighted times we must live our dreams of dramaturgical glory vicariously. In an anonymous compound somewhere in London a set of sou… [+2975 chars]'
    },
    {
      source: { id: null, name: 'Brainpickings.org' },
      author: 'Maria Popova',
      title:
        'The Only Story in the World: John Steinbeck on Kindness, Good and Evil, the Wellspring of Good Writing',
      description:
        '"Try to understand men, if you understand each other you will be kind to each other. Knowing a man well never leads to hate and nearly always leads to love."',
      url:
        'https://www.brainpickings.org/2018/09/17/john-steinbeck-good-evil-east-of-eden/',
      urlToImage:
        'https://i2.wp.com/www.brainpickings.org/wp-content/uploads/2015/10/johnsteinbeck4.jpg?fit=600%2C315&ssl=1',
      publishedAt: '2018-09-17T06:00:38Z',
      content:
        '“All the goodness and the heroisms will rise up again, then be cut down again and rise up,” John Steinbeck (February 27, 1902–December 20, 1968) wrote as he contemplated good, evil, and the necessary contradiction of human nature at the peak of WWII. “It isn’… [+3398 chars]'
    },
    {
      source: { id: 'the-hindu', name: 'The Hindu' },
      author: 'The Hindu',
      title:
        'The woof brigade: How a police dog and its handler turn into a crack team',
      description:
        'How a police dog and its handler turn into a crack team — it’s the long, gruelling hours of training',
      url:
        'https://www.thehindu.com/news/national/the-woof-brigade-how-a-police-dog-and-its-handler-turn-into-a-crack-team/article25083094.ece',
      urlToImage:
        'https://www.thehindu.com/news/national/lfw5ut/article25083091.ece/ALTERNATES/LANDSCAPE_615/THDogTraining006LEAD',
      publishedAt: '2018-09-29T14:30:12Z',
      content:
        'When a dog sniffs out evidence of a crime, it barks out the discovery. Between the exploratory sniff and the exultant bark lies a story of rigorous training, stretching the limits of the canine and its handler. A day with a police dog squad, comprising 26 Dob… [+1373 chars]'
    },
    {
      source: { id: null, name: 'Forbes.com' },
      author:
        'Shep Hyken, Contributor, Shep Hyken, Contributor https://www.forbes.com/sites/shephyken/',
      title:
        'Woof! Woof! Bark & Zoom Disrupts The Competition With Convenience',
      description:
        'Bark &amp; Zoom serves a double purpose, as the name implies. Board your dog or cat and get airport parking at the same time. They are open 24/7 for you to drop off your furry family member, and then they take you to the airport to catch your flight. Why didn…',
      url:
        'https://www.forbes.com/sites/shephyken/2018/09/30/woof-woof-bark-zoom-disrupts-the-competition-with-convenience/',
      urlToImage:
        'https://thumbor.forbes.com/thumbor/600x315/https%3A%2F%2Fblogs-images.forbes.com%2Fthumbnails%2Fblog_3509%2Fpt_3509_2629_o.jpg%3Ft%3D1538305214',
      publishedAt: '2018-09-30T11:00:00Z',
      content:
        'In my quest to find the most convenient companies in the world to do business with, Im amazed by the clever, creative ways people and companies have found to deliver a more convenient customer experience. My newest book, The Convenience Revolution (available … [+8663 chars]'
    },
    {
      source: { id: null, name: 'Eurogamer.net' },
      author: 'Tom Phillips',
      title: 'Animal Crossing headed to Nintendo Switch',
      description:
        "Nintendo has at last announced an Animal Crossing game for Switch. It's coming in 2019. During tonight's Nintendo Direct, the company also confirmed series mascot Isabelle - your doggy secretary - will be playable in Super Smash Bros. Ultimate. Woof! Up until…",
      url:
        'https://www.eurogamer.net/articles/2018-09-13-animal-crossing-headed-to-nintendo-switch',
      urlToImage:
        'https://cdn.gamer-network.net/2018/articles/2018-09-13-14-19/-1536844793189.jpg/EG11/thumbnail/1200x630/format/jpg/1996174.jpg',
      publishedAt: '2018-09-13T22:38:00Z',
      content:
        "Nintendo has at last announced an Animal Crossing game for Switch. It's coming in 2019. During tonight's Nintendo Direct, the company also confirmed series mascot Isabelle - your doggy secretary - will be playable in Super Smash Bros. Ultimate. Woof! Up until… [+693 chars]"
    },
    {
      source: { id: null, name: 'Cosmopolitan.com' },
      author: 'Alanna Greco',
      title:
        "Kanye West Kicks a Reporter Out of a NYFW Event for Asking a Question He Didn't Like",
      description: 'Woof.',
      url:
        'https://www.cosmopolitan.com/entertainment/a23051421/kanye-west-reporter-removed-nyfw-event/',
      urlToImage:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kanye-west-attends-the-ralph-lauren-fashion-show-during-new-news-photo-1028929606-1536517651.jpg?crop=1xw:0.33325xh;center,top&resize=1200:*',
      publishedAt: '2018-09-09T18:48:00Z',
      content:
        'Kanye West, bringer of drama, tiny sandal enthusiast, and newly appointed director for the Pornhub award s caused a stir on Friday night during a fashion week event. And really, are you at all surprised? On the red carpet for Ralph Lauren’s NYFW runway show a… [+1004 chars]'
    },
    {
      source: { id: null, name: 'Forbes.com' },
      author:
        'Bruce Y. Lee, Contributor, Bruce Y. Lee, Contributor https://www.forbes.com/sites/brucelee/',
      title:
        'Pets, If You Are On These Flea And Tick Medications, Beware Of Seizures',
      description:
        'The FDA has issued a warning about medications in the isoxazoline class such as Bravecto, Credelio, Nexgard and Simparica.',
      url:
        'https://www.forbes.com/sites/brucelee/2018/09/22/pets-if-you-are-on-these-flea-and-tick-medications-beware-of-seizures/',
      urlToImage:
        'https://thumbor.forbes.com/thumbor/600x315/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1010832610%2F960x0.jpg%3Ffit%3Dscale',
      publishedAt: '2018-09-22T12:37:00Z',
      content:
        "Share to facebook Share to twitter Share to linkedin The medication that you're giving me can do what? (Photo: Getty Images) Fleas and ticks can get on your pet's nerves. But&amp;nbsp;apparently so can some&amp;nbsp;medications to get rid of these pests. The … [+6855 chars]"
    },
    {
      source: { id: null, name: 'Cracked.com' },
      author: null,
      title: 'The New Spider-Man Game Has The Most Depressing Easter Egg',
      description:
        'Gamers have been making in-game proposals for years -- with very mixed results.',
      url:
        'http://www.cracked.com/article_25898_the-new-spider-man-game-has-most-depressing-easter-egg.html',
      urlToImage:
        'http://s3.crackedcdn.com/phpimages/article/5/6/9/671569_v3.jpg',
      publishedAt: '2018-09-10T07:00:00Z',
      content:
        'A marriage proposal is something you (ideally) only get one shot at. Everything has to be on point: the location, the speech, the EMTs in case your loved one chokes on the ring hidden in the tiramisu, and so on. Recently, when one gamer decided he wanted to p… [+3261 chars]'
    },
    {
      source: { id: null, name: 'Crooksandliars.com' },
      author: 'Infidel753',
      title: "Mike's Blog Round Up",
      description:
        "The stunning impact of Christine Ford's accusation upon the Kavanaugh confirmation process is an indirect tribute to the power of the vote. Given their track record on women's rights in other areas, it's hard to believe that many Senate Republicans are so con…",
      url: 'https://crooksandliars.com/2018/09/mikes-blog-round-17',
      urlToImage:
        'https://crooksandliars.com/files/primary_image/18/09/suffrage_schoolhouserock_snippet.jpg',
      publishedAt: '2018-09-20T12:00:01Z',
      content:
        "The stunning impact of Christine Ford's accusation upon the Kavanaugh confirmation process is an indirect tribute to the power of the vote. Given their track record on women's rights in other areas, it's hard to believe that many Senate Republicans are so con… [+1189 chars]"
    },
    {
      source: { id: null, name: 'Justjared.com' },
      author: 'Just Jared',
      title:
        'Kaley Cuoco & Husband Karl Cook Help Raise Awareness for Foster Dogs in Need!',
      description:
        'Kaley Cuoco hits the red carpet at the Spoken Woof event presented by Much Love Animal Rescue and The Microsoft Lounge on Saturday (September 22) in Culver City, Calif. The 32-year-old Big Bang Theory star was joined by her husband Karl Cook, as well as Jerry…',
      url:
        'http://www.justjared.com/2018/09/23/kaley-cuoco-husband-karl-cook-help-raise-awareness-for-foster-dogs-in-need/',
      urlToImage:
        'http://cdn01.cdn.justjared.com/wp-content/uploads/headlines/2018/09/cuoco-woof.jpg',
      publishedAt: '2018-09-23T15:36:23Z',
      content: null
    },
    {
      source: { id: null, name: 'Forbes.com' },
      author:
        'Gary Stoller, Contributor, Gary Stoller, Contributor https://www.forbes.com/sites/garystoller/',
      title: "Enchanting Sculpture Park May Be New Jersey's Best-Kept Secret",
      description:
        'Art spectacularly meets nature at this hidden East Coast attraction.',
      url:
        'https://www.forbes.com/sites/garystoller/2018/10/09/enchanting-sculpture-park-may-be-new-jerseys-best-kept-secret/',
      urlToImage:
        'https://thumbor.forbes.com/thumbor/600x315/https%3A%2F%2Fblogs-images.forbes.com%2Fgarystoller%2Ffiles%2F2018%2F10%2F8i2QUIimRQWapzyEqmDoZw-1200x900.jpg',
      publishedAt: '2018-10-09T15:01:00Z',
      content:
        "A Google search of &amp;quot;sculpture parks&amp;quot; reveals various top 10 and best-of lists throughout the country and the world. There's nary a mention of the Grounds For Sculpture, a wondrous place that marries art and nature and may be New Jersey's bes… [+5184 chars]"
    },
    {
      source: { id: null, name: 'Earmilk.com' },
      author: 'George Chammas',
      title: 'ARTHUR\'s "Ivy League" is a grade-A weirdo-pop gem',
      description:
        "ARTHUR makes weirdo-pop at it’s finest. The Pennsylvania artist's alternative view on indie music is showcased through swirly lo-fi bedroom pop mixed with circus-freak vocals and a little banjo sprinkled in for good measure. “Ivy League” is the first single f…",
      url:
        'https://earmilk.com/2018/09/10/arthurs-ivy-league-is-a-grade-a-weirdo-pop-gem/',
      urlToImage:
        'https://earmilk.com/wp-content/uploads/2018/09/arthurjpg.jpg',
      publishedAt: '2018-09-10T20:59:49Z',
      content:
        "ARTHUR makes weirdo-pop at it’s finest. The Pennsylvania artist's alternative view on indie music is showcased through swirly lo-fi bedroom pop mixed with circus-freak vocals and a little banjo sprinkled in for good measure. “Ivy League” is the first single f… [+927 chars]"
    },
    {
      source: { id: null, name: 'Nodata.tv' },
      author: '/n',
      title: 'Monotronique / Heat Absorber [2018]',
      description:
        '[Label: Opal Tapes | Cat#: OPAL128] Predator (3:46) Big Puncher (4:08) Woof (4:05) Self Attack (4:01) Pitch That Heat (5:49) EqEqEqEqEq (4:08) Recall Drums (3:22) X-Lite (3:59) You Don’t Know How I Feelin’ Myself (5:52) Overdrome (3:07) TB',
      url: 'http://nodata.tv/164691',
      urlToImage: null,
      publishedAt: '2018-09-28T19:00:13Z',
      content:
        '[Label: Opal Tapes | Cat#: OPAL128] Predator (3:46) Big Puncher (4:08) Woof (4:05) Self Attack (4:01) Pitch That Heat (5:49) EqEqEqEqEq (4:08) Recall Drums (3:22) X-Lite (3:59) You Don’t Know How I Feelin’ Myself (5:52) Overdrome (3:07) Top'
    },
    {
      source: { id: null, name: 'Apartmenttherapy.com' },
      author: 'Diana Liang',
      title:
        "A Floral Designer's Once-Sterile Spec House Is Now Cheery — House Tour",
      description:
        "Name: Rhiannon Bosse, her husband Andrew, son Lachlan Rue, and rescue pup, Zoe Location: Rockford, Michigan Size: 2,900 square feet (including the 800-square-foot finished basement which is completely dedicated to Rhiannon's work studio) Years lived in: Almos…",
      url:
        'https://www.apartmenttherapy.com/rhiannon-bosse-floral-designer-michigan-home-tour-262275',
      urlToImage:
        'https://atmedia.imgix.net/3b39b27f59d97a8a742efb306295161b2a80ef4b?w=1500&fit=max',
      publishedAt: '2018-09-19T16:00:00Z',
      content:
        "Name: Rhiannon Bosse, her husband Andrew, son Lachlan Rue, and rescue pup, Zoe Location: Rockford, Michigan Size: 2,900 square feet (including the 800-square-foot finished basement which is completely dedicated to Rhiannon's work studio) Years lived in: Almos… [+12438 chars]"
    },
    {
      source: { id: 'bbc-news', name: 'BBC News' },
      author: 'https://www.facebook.com/bbcnews',
      title: 'Woof!',
      description:
        'Archie Macpherson was the most famous voice and comb over in Scottish football for decades.',
      url: 'https://www.bbc.co.uk/news/uk-scotland-45730661',
      urlToImage:
        'https://ichef.bbci.co.uk/news/1024/branded_news/1714B/production/_103693549_gettyimages-1016716584.jpg',
      publishedAt: '2018-10-03T23:20:09Z',
      content:
        'Image copyright Roberto Ricciuti Image caption Archie Macpherson has long been the most famous voice in Scottish football Archie Macpherson was the most famous voice and comb over in Scottish football for decades but if it had not been for an Indian brush sal… [+6029 chars]'
    },
    {
      source: { id: null, name: 'Deliciouseveryday.com' },
      author: 'Delicious Everyday',
      title: 'Pumpkin Dog Treats',
      description:
        'Don’t leave your pups out of your next celebration! Your dog will love these easy, homemade pumpkin dog treats. They’re packed full of pumpkin flavor with juicy chunks of fresh apple. Woof! (That’s dog for “yum”!) Who’s man’s (or woman’s) best friend? Obvious…',
      url: 'https://www.deliciouseveryday.com/pumpkin-dog-treats/',
      urlToImage:
        'https://www.deliciouseveryday.com/wp-content/uploads/2018/09/pumpkin-dog-treats-vegan-6.jpg',
      publishedAt: '2018-09-27T08:56:32Z',
      content:
        'Don’t leave your pups out of your next celebration! Your dog will love these easy, homemade pumpkin dog treats. They’re packed full of pumpkin flavor with juicy chunks of fresh apple. Woof! (That’s dog for “yum”!) Who’s man’s (or woman’s) best friend? Obvious… [+3801 chars]'
    },
    {
      source: { id: 'rt', name: 'RT' },
      author: 'RT',
      title:
        'Ruff play: Top tier football match interrupted by dog hunting for belly rubs (VIDEO)',
      description:
        'A weekend match in Georgia’s top-flight professional football league was brought to an abrupt halt after an audacious pitch invasion interrupted a goal kick. This was not some political protest but merely a plea for a belly rub. Read Full Article at RT.com',
      url:
        'https://www.rt.com/sport/440686-georgia-football-match-pitch-invasion/?utm_source=rss&utm_medium=rss&utm_campaign=RSS',
      urlToImage:
        'https://cdni.rt.com/files/2018.10/article/5bbb6037fc7e9370738b45be.png',
      publishedAt: '2018-10-08T16:08:35Z',
      content:
        'Current champions Torpedo Kutaisi were facing off against third-place Dila when a bold, pitch-invading dog forced a halt to proceedings by taking a shine to Torpedo goalkeeper Roin Kvaskhvadze. The playful pup ran circles around the defence, before jostling w… [+989 chars]'
    },
    {
      source: { id: null, name: 'Espn.com' },
      author: null,
      title: 'Power 5 conference power rankings after Week 2',
      description:
        'Find out how every Power 5 team stacks up against conference foes after two weeks of competition.',
      url:
        'http://www.espn.com/college-football/story/_/id/24628917/power-5-conference-power-rankings-week-2',
      urlToImage:
        'http://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F0910%2Fr428833_1296x729_16%2D9.jpg',
      publishedAt: '2018-09-10T16:10:51Z',
      content:
        'These rankings are all about rating teams against their conference competition. Check out the TL;DR chart below and use the navigation bar to get full details on why we ranked teams how we did. ACC | Big 12 | Big Ten | Pac-12 | SEC ACC Clemson won a big one a… [+15091 chars]'
    }
  ]
};

export const mock4VisibleArticles = _.take(mockData.articles, 4);
