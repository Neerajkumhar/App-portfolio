export type Industry = 'Agriculture' | 'Food' | 'Crafts' | 'Utility' | 'Gaming'
export type AppShape = 'arch' | 'capsule' | 'squircle' | 'slab' | 'ticket'

export interface ProjectScreenshot {
  src: string
  alt: string
  caption: string
  sourceName: string
  sourceUrl: string
}

export interface ProjectIcon {
  src: string
  alt: string
  sourceName: string
  sourceUrl: string
  sourceImageUrl: string
}

export interface Project {
  slug: string
  name: string
  shape: AppShape
  industry: Industry
  industryDetail: string
  tagline: string
  year: string
  productUrl: string
  productLabel: string
  creditOwner: string
  icon: ProjectIcon
  overview: string
  problem: string
  studied: { title: string; detail: string }[]
  decisions: { title: string; detail: string }[]
  learnings: string
  nextSlug: string
  screenshots: ProjectScreenshot[]
}

const apple = 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource'
const rowtineSource = 'https://f-droid.org/repo/com.rowtine.app/en-US/phoneScreenshots'
const catimaSource = 'https://f-droid.org/repo/me.hackerchick.catima/en-US/phoneScreenshots'
const play = 'https://play-lh.googleusercontent.com/'

const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const projects: Project[] = [
  {
    slug: 'bharatagri',
    name: 'BharatAgri',
    shape: 'arch',
    industry: 'Agriculture',
    industryDetail: 'Agriculture / agritech commerce',
    tagline: 'A private farm-input store with expert advice attached to every recommendation.',
    year: '2026 study',
    productUrl: 'https://play.google.com/store/apps/details?id=com.leanagri.leannutri',
    productLabel: 'View the real app on Google Play',
    creditOwner: 'BharatAgri',
    icon: {
      src: asset('icons/bharatagri.png'),
      alt: 'BharatAgri app icon',
      sourceName: 'Google Play listing for com.leanagri.leannutri',
      sourceUrl: 'https://play.google.com/store/apps/details?id=com.leanagri.leannutri',
      sourceImageUrl: 'https://play-lh.googleusercontent.com/UpOaLeCPUucvPZc7t_ViroXZcq-CyQHE6feYvZ5a31UUWr5b54hAXM-X82n5AFqW0LAnxtjz7C-_wo2drUMPZg=s240',
    },
    overview:
      'BharatAgri is a private Indian agritech company whose Krushidukan app sells seeds, fertilisers, pesticides, fungicides and tools, and pairs the store with chat and call support from agricultural experts. Its Play listing describes more than 25,000 products from 150+ brands, GST-billed orders, free delivery in 3-4 days, and payment by UPI, cards or cash on delivery. It was chosen because the commerce is specific to farming without being a government information service.',
    problem:
      'A farmer buying inputs needs to trust both the product and the advice behind it. Public Play reviews show the friction when that trust breaks: prepaid orders not delivered, refunds taking too long, and support replies that ask for an order ID instead of resolving the issue. The study asks how the interface can make order status, product authenticity and expert help visible before checkout.',
    studied: [
      {
        title: 'Store home and catalogue',
        detail: 'How a large agricultural input catalogue stays browsable when the buyer knows the crop but not the exact product.',
      },
      {
        title: 'Product detail',
        detail: 'How brand, authenticity claims and GST billing are presented next to the buy action.',
      },
      {
        title: 'Expert support',
        detail: 'How chat and call entry points sit beside a recommendation instead of hiding in a separate tab.',
      },
      {
        title: 'Order and refund status',
        detail: 'How delivery and refund states are communicated after a prepaid order is placed.',
      },
    ],
    decisions: [
      {
        title: 'Put authenticity and billing beside the product',
        detail: 'GST billing and original-product claims stay visible at the point of purchase, where trust matters most.',
      },
      {
        title: 'Make support reachable from the product',
        detail: 'The expert contact path starts from the item in question so the buyer does not have to restate the problem.',
      },
      {
        title: 'Show order state before promotion',
        detail: 'Delivery and refund states take priority over offers once an order exists.',
      },
    ],
    learnings:
      'A commerce interface for a high-stakes purchase has to earn trust in the same screen that asks for money. The rebuild puts proof and status next to the buy action.',
    nextSlug: 'coop',
    screenshots: [
      {
        src: asset('screenshots/bharatagri/01.jpg'),
        alt: 'BharatAgri store home screen from the official Google Play listing',
        caption: 'Store home — source image 1',
        sourceName: 'Google Play listing for com.leanagri.leannutri',
        sourceUrl: play + 'pT7ODuFwiK9tekPX_gJxPmGUVvKhu48gQYErXVrimRwLKZj47qK8qsBEF9saMN8D1CGrKuZqKOkWU8696W079u0=w720',
      },
      {
        src: asset('screenshots/bharatagri/02.jpg'),
        alt: 'BharatAgri product catalogue screen from the official Google Play listing',
        caption: 'Catalogue — source image 2',
        sourceName: 'Google Play listing for com.leanagri.leannutri',
        sourceUrl: play + 'WFVgB3JFr7ZYvKWeJgUMFE7QufuvNc1DlDSIhdcXe8Dybz-nhE7t4uY707kaftyFZKYpVKycgMqJhekg4lbZ=w720',
      },
      {
        src: asset('screenshots/bharatagri/03.jpg'),
        alt: 'BharatAgri product detail screen from the official Google Play listing',
        caption: 'Product detail — source image 3',
        sourceName: 'Google Play listing for com.leanagri.leannutri',
        sourceUrl: play + 'scVgNd4XacMi_cq3CBvt2lkMuUhRkJPkWnwCXFnl0p7y8tDIoy8oerTVpCvz56faLHwHFlhRgA79ZYWIBvyhwVo=w720',
      },
      {
        src: asset('screenshots/bharatagri/04.jpg'),
        alt: 'BharatAgri expert support screen from the official Google Play listing',
        caption: 'Expert support — source image 4',
        sourceName: 'Google Play listing for com.leanagri.leannutri',
        sourceUrl: play + 'ovDsD1fXCmrc9mMPWWNQ6zkDLktz7r0OgGtCcNIWySbw1a2AGNJDTHbojTRhYDKDZ7Jt4jwQE0naJIK40YIO5g=w720',
      },
      {
        src: asset('screenshots/bharatagri/05.jpg'),
        alt: 'BharatAgri delivery information screen from the official Google Play listing',
        caption: 'Delivery information — source image 5',
        sourceName: 'Google Play listing for com.leanagri.leannutri',
        sourceUrl: play + '8k4cyQF6DfeqgNLJCdyNb-o4UDPXymsTLo3fd7XZ_kB4myfcEtHdreUQAb3UHvnBcQ6P5PEAq1lrUIhn0LPmLQ=w720',
      },
    ],
  },
  {
    slug: 'coop',
    name: 'Coop',
    shape: 'capsule',
    industry: 'Food',
    industryDetail: 'Local food / marketplace',
    tagline: 'A neighbourhood market where every listing carries distance and checkout keeps money local.',
    year: '2026 study',
    productUrl: 'https://apps.apple.com/us/app/coop-co-op/id6742427992',
    productLabel: 'View the real app on the App Store',
    creditOwner: 'Coop',
    icon: {
      src: asset('icons/coop.jpg'),
      alt: 'Coop app icon',
      sourceName: 'App Store listing for Coop',
      sourceUrl: 'https://apps.apple.com/us/app/coop-co-op/id6742427992',
      sourceImageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/38/3c/38/383c380b-3b15-a3fa-26f5-9486f7b7aad7/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/512x512bb.jpg',
    },
    overview:
      'Coop is a neighbourhood marketplace for homegrown and handmade goods. Its App Store listing describes a feed and map with distance on every listing, Stripe checkout that can hold a card for made-to-order items, a running total of money kept local, and a seller dashboard. It was chosen because the commerce is ordinary but the constraints are specific: proximity, made-to-order timing and a visible local impact.',
    problem:
      'A buyer needs to know if a listing is nearby and whether it is ready now or made to order. A seller needs to take orders without a storefront. The friction sits in the handoff between those two: distance, timing and a payment that may be held before the item exists.',
    studied: [
      {
        title: 'Home feed',
        detail: 'How listings, distance and local provenance appear together without turning the feed into a map.',
      },
      {
        title: 'Seller map',
        detail: 'How proximity becomes a browsing tool rather than a novelty, with distance attached to each result.',
      },
      {
        title: 'Order tracking',
        detail: 'How a made-to-order item and a held card are shown as a normal order state, not an error.',
      },
      {
        title: 'Seller dashboard',
        detail: 'How a small seller sees incoming orders and the running local-impact total in one place.',
      },
    ],
    decisions: [
      {
        title: 'Put distance in the listing row',
        detail: 'Distance is a first-class part of each listing, so a buyer can judge proximity without opening a map.',
      },
      {
        title: 'Show held payments as a state',
        detail: 'A card held for a made-to-order item is explained in plain words beside the order status.',
      },
      {
        title: 'Keep the local total visible but quiet',
        detail: 'The money-kept-local figure is present as context, not used as a banner or a badge.',
      },
    ],
    learnings:
      'Marketplaces are mostly state machines wearing a visual skin. The interesting work was making the timing of an order and the status of a payment understandable at a glance.',
    nextSlug: 'rowtine',
    screenshots: [
      {
        src: asset('screenshots/coop/01.webp'),
        alt: 'Coop main marketplace screen from the official App Store listing',
        caption: 'Main marketplace — source image 1',
        sourceName: 'Coop App Store listing',
        sourceUrl: apple + '221/v4/0b/e0/00/0be00002-be46-d562-9680-2931a27ec7f8/ios-01-main.png/600x1300bb.webp',
      },
      {
        src: asset('screenshots/coop/02.webp'),
        alt: 'Coop shop browsing screen from the official App Store listing',
        caption: 'Shop — source image 2',
        sourceName: 'Coop App Store listing',
        sourceUrl: apple + '211/v4/db/22/d0/db22d0af-ad54-bed0-6e65-1f2486ded40f/ios-02-shop.png/600x1300bb.webp',
      },
      {
        src: asset('screenshots/coop/03.webp'),
        alt: 'Coop buying screen from the official App Store listing',
        caption: 'Buy — source image 3',
        sourceName: 'Coop App Store listing',
        sourceUrl: apple + '211/v4/84/5d/0a/845d0aa0-71bc-6633-1ec2-3af24ba497d0/ios-03-buy.png/600x1300bb.webp',
      },
      {
        src: asset('screenshots/coop/04.webp'),
        alt: 'Coop product breadth screen from the official App Store listing',
        caption: 'Breadth — source image 4',
        sourceName: 'Coop App Store listing',
        sourceUrl: apple + '211/v4/a5/88/45/a5884522-689d-3dea-beba-4896137c07a4/ios-04-breadth.png/600x1300bb.webp',
      },
      {
        src: asset('screenshots/coop/05.webp'),
        alt: 'Coop weekly market screen from the official App Store listing',
        caption: 'Weekly market hub — source image 5',
        sourceName: 'Coop App Store listing',
        sourceUrl: apple + '221/v4/04/30/ff/0430ffe9-5316-f8c5-6391-dbdffdff9aff/ios-06-hub.png/600x1300bb.webp',
      },
    ],
  },
  {
    slug: 'rowtine',
    name: 'Rowtine',
    shape: 'squircle',
    industry: 'Crafts',
    industryDetail: 'Crafts / hobbies',
    tagline: 'An offline knitting and crochet companion that reads patterns and tracks yarn.',
    year: '2026 study',
    productUrl: 'https://f-droid.org/en/packages/com.rowtine.app/',
    productLabel: 'View the real app on F-Droid',
    creditOwner: 'Rowtine contributors',
    icon: {
      src: asset('icons/rowtine.png'),
      alt: 'Rowtine app icon',
      sourceName: 'Google Play listing for com.rowtine.app',
      sourceUrl: 'https://play.google.com/store/apps/details?id=com.rowtine.app',
      sourceImageUrl:
        'https://play-lh.googleusercontent.com/oMmlkbGByWwTiohJVUUmzEncfndIDZkHsB04hCUSy06djPcEWJXBXCxcRTN19WtAUTGtz9VsHel0B9cPgMZXxA=s512',
    },
    overview:
      'Rowtine is a fully offline knitting and crochet companion. Its F-Droid listing describes on-device PDF pattern import, a size selector that filters every number in the pattern, a row-by-row chart with a movable marker, a yarn stash with insufficient-yarn warnings, and project cost tracking. It was chosen because it is a dense tool that has to stay usable without a network.',
    problem:
      'Pattern PDFs are written for print. The friction is keeping your place, filtering a multi-size pattern down to your size, and knowing whether you have enough yarn before you start a project.',
    studied: [
      {
        title: 'Project list',
        detail: 'How active projects, progress and the current row are summarised without burying the primary action.',
      },
      {
        title: 'Pattern reader with size filter',
        detail: 'How one chosen size changes the numbers shown across the whole pattern, not just the header.',
      },
      {
        title: 'Row chart and marker',
        detail: 'How a movable marker keeps a long chart readable during repetitive work.',
      },
      {
        title: 'Yarn stash',
        detail: 'How stock quantities and an insufficient-yarn warning inform a decision before a project begins.',
      },
    ],
    decisions: [
      {
        title: 'Keep parsing on-device',
        detail: 'Pattern import stays local in the study, matching the real app offline premise and avoiding a server round trip.',
      },
      {
        title: 'Make the size selector a global filter',
        detail: 'Choosing a size rewrites the relevant numbers throughout the pattern view instead of leaving the reader to do the math.',
      },
      {
        title: 'Treat the marker as the primary control',
        detail: 'Moving the current row is the most frequent action, so it gets the largest target and the clearest feedback.',
      },
    ],
    learnings:
      'Offline-first is a design constraint, not a settings toggle. The rebuild had to assume every piece of context a reader needs is already on the device.',
    nextSlug: 'catima',
    screenshots: [
      {
        src: asset('screenshots/rowtine/01.png'),
        alt: 'Rowtine screenshot 1 from the official F-Droid listing',
        caption: 'Project list — source image 1',
        sourceName: 'Rowtine F-Droid listing',
        sourceUrl: rowtineSource + '/01.png',
      },
      {
        src: asset('screenshots/rowtine/02.png'),
        alt: 'Rowtine screenshot 2 from the official F-Droid listing',
        caption: 'Pattern and chart view — source image 2',
        sourceName: 'Rowtine F-Droid listing',
        sourceUrl: rowtineSource + '/02.png',
      },
      {
        src: asset('screenshots/rowtine/03.png'),
        alt: 'Rowtine screenshot 3 from the official F-Droid listing',
        caption: 'Pattern reading — source image 3',
        sourceName: 'Rowtine F-Droid listing',
        sourceUrl: rowtineSource + '/03.png',
      },
      {
        src: asset('screenshots/rowtine/04.png'),
        alt: 'Rowtine screenshot 4 from the official F-Droid listing',
        caption: 'Chart and marker — source image 4',
        sourceName: 'Rowtine F-Droid listing',
        sourceUrl: rowtineSource + '/04.png',
      },
      {
        src: asset('screenshots/rowtine/05.png'),
        alt: 'Rowtine screenshot 5 from the official F-Droid listing',
        caption: 'Yarn or project view — source image 5',
        sourceName: 'Rowtine F-Droid listing',
        sourceUrl: rowtineSource + '/05.png',
      },
    ],
  },
  {
    slug: 'catima',
    name: 'Catima',
    shape: 'slab',
    industry: 'Utility',
    industryDetail: 'Consumer utility / privacy',
    tagline: 'An offline wallet for loyalty cards and tickets, with no account and no telemetry.',
    year: '2026 study',
    productUrl: 'https://catima.app/',
    productLabel: 'Visit the real app site',
    creditOwner: 'Catima contributors',
    icon: {
      src: asset('icons/catima.png'),
      alt: 'Catima app icon',
      sourceName: 'F-Droid listing for me.hackerchick.catima',
      sourceUrl: 'https://f-droid.org/packages/me.hackerchick.catima/',
      sourceImageUrl: 'https://f-droid.org/repo/me.hackerchick.catima/en-US/icon_VCZNh2txtHoqGn3oaxFP6g8LJ0-CdYJdYhrrtS5X9B8=.png',
    },
    overview:
      'Catima is an offline loyalty-card and ticket wallet. Its public listings describe camera barcode scanning across thirteen formats, no internet permission, no data collected, optional Wear OS sync and more than forty community translations. It was chosen because the product promise is unusually strict: the useful thing has to work with no account, no cloud and no network.',
    problem:
      'Cards end up in a drawer or in apps that require an account and a sync service. The job is to get the right barcode on screen quickly, offline, while keeping the card data on the device.',
    studied: [
      {
        title: 'Card list',
        detail: 'How many cards can be scanned visually before a reader starts opening the wrong one.',
      },
      {
        title: 'Card detail and barcode',
        detail: 'How the barcode becomes the centre of the screen while the card name stays readable at the till.',
      },
      {
        title: 'Add-card scanning',
        detail: 'How camera capture and barcode-format choice are presented as one clear step with a confirmation.',
      },
      {
        title: 'Export and settings',
        detail: 'How backup and sync options are explained when the default is to keep everything local.',
      },
    ],
    decisions: [
      {
        title: 'Barcode first, metadata second',
        detail: 'The scannable area gets priority; card names and notes support it rather than competing with it.',
      },
      {
        title: 'No cloud state in the interface',
        detail: 'The study shows local states only. Optional sync is described, never implied as the default.',
      },
      {
        title: 'Scanning is explicit',
        detail: 'Capture, confirm and save are separate visible steps so a failed scan is obvious and recoverable.',
      },
    ],
    learnings:
      'A privacy promise has to be visible in the interface. If there is no account and no server, the layout should not behave as though there is.',
    nextSlug: 'hinge-arcade',
    screenshots: [
      {
        src: asset('screenshots/catima/01.png'),
        alt: 'Catima card list screenshot from the official F-Droid listing',
        caption: 'Card list — source image 1',
        sourceName: 'Catima F-Droid listing',
        sourceUrl: catimaSource + '/screenshot-01.png',
      },
      {
        src: asset('screenshots/catima/02.png'),
        alt: 'Catima card detail screenshot from the official F-Droid listing',
        caption: 'Card detail — source image 2',
        sourceName: 'Catima F-Droid listing',
        sourceUrl: catimaSource + '/screenshot-02.png',
      },
      {
        src: asset('screenshots/catima/03.png'),
        alt: 'Catima screenshot 3 from the official F-Droid listing',
        caption: 'Card views — source image 3',
        sourceName: 'Catima F-Droid listing',
        sourceUrl: catimaSource + '/screenshot-03.png',
      },
      {
        src: asset('screenshots/catima/04.png'),
        alt: 'Catima screenshot 4 from the official F-Droid listing',
        caption: 'Card management — source image 4',
        sourceName: 'Catima F-Droid listing',
        sourceUrl: catimaSource + '/screenshot-04.png',
      },
      {
        src: asset('screenshots/catima/05.png'),
        alt: 'Catima settings or export screenshot from the official F-Droid listing',
        caption: 'Settings and export — source image 5',
        sourceName: 'Catima F-Droid listing',
        sourceUrl: catimaSource + '/screenshot-05.png',
      },
    ],
  },
  {
    slug: 'hinge-arcade',
    name: 'Hinge Arcade',
    shape: 'ticket',
    industry: 'Gaming',
    industryDetail: 'Mobile gaming',
    tagline: 'Fourteen hinge-controlled mini-games built for foldable phones, with a touch fallback.',
    year: '2026 study',
    productUrl: 'https://apps.apple.com/app/id6825335877',
    productLabel: 'View the real app on the App Store',
    creditOwner: 'Moaaz Belal',
    icon: {
      src: asset('icons/hinge-arcade.jpg'),
      alt: 'Hinge Arcade app icon',
      sourceName: 'App Store listing for Hinge Arcade',
      sourceUrl: 'https://apps.apple.com/app/id6825335877',
      sourceImageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/72/47/b5/7247b555-8056-4d44-7a1f-5831be25e18b/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/512x512bb.jpg',
    },
    overview:
      'Hinge Arcade is a paid set of fourteen small games, each with its own world, controlled by the fold angle of a foldable phone. Its App Store listing describes 260 handmade levels plus a six-sea sea-battle mode, an ad-free experience without accounts or in-app purchases, and a slider fallback on non-foldable phones. It was chosen because the primary input is physical and unusual.',
    problem:
      'A fold angle is continuous, physical and absent on most phones. The friction is teaching the control without a manual and keeping the game usable when the hardware is flat.',
    studied: [
      {
        title: 'Game menu',
        detail: 'How fourteen games are browsed without the menu feeling like a settings screen.',
      },
      {
        title: 'Hinge-angle game',
        detail: 'How the current fold angle is shown as feedback while the player is still learning the control.',
      },
      {
        title: 'Folded posture view',
        detail: 'How the layout adapts between open, partly folded and closed states.',
      },
      {
        title: 'Level result',
        detail: 'How a result screen reports progress and offers the next attempt without extra noise.',
      },
    ],
    decisions: [
      {
        title: 'Show the input before the score',
        detail: 'The control state is visible during play so a player can connect fold angle to movement.',
      },
      {
        title: 'Keep the fallback first-class',
        detail: 'The slider is designed as a real control, not a degraded mode hidden behind a warning.',
      },
      {
        title: 'Make the result state calm',
        detail: 'Progress and retry are the only prominent actions after a level ends.',
      },
    ],
    learnings:
      'New input models need visible feedback more than they need explanation. The rebuild leans on immediate response instead of instructions.',
    nextSlug: 'bharatagri',
    screenshots: [
      {
        src: asset('screenshots/hinge-arcade/01.webp'),
        alt: 'Hinge Arcade game gallery screenshot from the official App Store listing',
        caption: 'Game gallery — source image 1',
        sourceName: 'Hinge Arcade App Store listing',
        sourceUrl: apple + '221/v4/d9/d5/99/d9d599f2-378a-fafe-c61e-750cc2a49166/01-gallery.png/600x1334bb.webp',
      },
      {
        src: asset('screenshots/hinge-arcade/02.webp'),
        alt: 'Hinge Arcade game screenshot from the official App Store listing',
        caption: 'Game screen — source image 2',
        sourceName: 'Hinge Arcade App Store listing',
        sourceUrl: apple + '221/v4/15/b4/9f/15b49f5d-5889-e938-5844-6240c22526e2/02-panini.png/600x1334bb.webp',
      },
      {
        src: asset('screenshots/hinge-arcade/03.webp'),
        alt: 'Hinge Arcade drawbridge game screenshot from the official App Store listing',
        caption: 'Drawbridge — source image 3',
        sourceName: 'Hinge Arcade App Store listing',
        sourceUrl: apple + '211/v4/2a/9a/70/2a9a706e-43e6-1127-a5b8-d1ffdbda5ad6/03-drawbridge.png/600x1334bb.webp',
      },
      {
        src: asset('screenshots/hinge-arcade/04.webp'),
        alt: 'Hinge Arcade popup game screenshot from the official App Store listing',
        caption: 'Popup — source image 4',
        sourceName: 'Hinge Arcade App Store listing',
        sourceUrl: apple + '211/v4/7d/01/36/7d013639-3b59-df35-a0dc-6902d6e2e1a6/04-popup.png/600x1334bb.webp',
      },
      {
        src: asset('screenshots/hinge-arcade/05.webp'),
        alt: 'Hinge Arcade safe game screenshot from the official App Store listing',
        caption: 'Safe — source image 5',
        sourceName: 'Hinge Arcade App Store listing',
        sourceUrl: apple + '221/v4/76/5d/3d/765d3d0b-46c2-9ded-6e19-b96a321f97c4/06-safe.png/600x1334bb.webp',
      },
    ],
  },
]

export function getProject(slug: string | undefined) {
  return projects.find((project) => project.slug === slug)
}
