import { LandingContent } from "../types";

export const creatorsContent: LandingContent = {
  hero: {
    subtitle: "For Creators & Communities",
    heading: "Your audience is struggling with lust in silence.",
    body: "Anchor is a free app that gives the people in your community a safe, private space to reach out anonymously in moments of temptation and struggle — with zero shame, zero judgment, and zero effort to set up.",
  },
  problem: {
    paragraph:
      "Porn is one of the most pervasive struggles among Christians — and one of the least talked about. The shame around it is so heavy that most people will never bring it up — not in a comments section, not in a DM, not even to the people they trust most. So they carry it alone.",
  },
  howItWorks: {
    subheading:
      "An anonymous community inside your community where people can reach out the moment they're struggling.",
    step2Body:
      "Others in your community respond with scripture, prayer, and encouragement. The original user is pulled out of isolation by their peers, everyone stays anonymous.",
  },
  features: {
    heading: "What you get",
    items: [
      {
        id: "private-instance",
        title: "Your own private community",
        desc: "Anchor isn't a shared platform — your members only interact with each other. Joining requires a pin you control, so it stays exactly who you intend it to be. Your people get the trust of a closed community with the safety of real anonymity.",
        visualType: "phone-video",
        video: "/assets/videos/anchor-sos.mp4",
        poster: "/assets/videos/anchor-sos.jpg",
      },
      {
        id: "dashboard",
        title: "See how your community is engaging",
        desc: "Your admin dashboard gives you anonymized analytics — reach-outs sent, response rates, how many members are forming accountability partnerships. You see the impact without ever seeing individual data.",
        visualType: "video",
        video: "/assets/videos/Analytics.mp4",
        poster: "/assets/videos/Analytics.mp4",
      },
      {
        id: "qr",
        title: "One link. One QR code. You're live.",
        desc: "You get a custom join link and QR code for your community. Share it in your bio, drop it in a livestream, or pin it in your Discord. Scanning it downloads the app and drops someone directly into your community — bypassing the pin for seamless onboarding on iOS and Android.",
        visualType: "image",
        image: "/assets/videos/QRCode.JPG",
      },
      {
        id: "launch",
        title: "A launch playbook, ready to go",
        desc: "You get templated visuals for sharing — graphics, story assets, and your QR code — plus a step-by-step guide for introducing it to your audience and making sure it actually lands.",
        visualType: "grid",
      },
    ],
    callouts: [
      {
        label: "Free for creators",
        desc: "Anchor is currently being offered 100% free for creators — no credit card, no limits, no strings attached.",
      },
      {
        label: "No ongoing management",
        desc: "Set it up once. Anchor handles moderation, crisis detection, and keeps things safe automatically.",
      },
    ],
  },
  safety: {
    subheading:
      "Real, vulnerable conversations — in an environment that's safe for everyone in your community.",
  },
  setup: {
    steps: [
      {
        title: "Reach out and say hi",
        desc: "Tell me a bit about your community — what you're building, who your audience is, and any questions you have. I'll get back to you personally, usually within a day or two.",
      },
      {
        title: "Your community goes live",
        desc: "Once you're ready, I'll add your community to the app. Your private community is created instantly — joinable only to your members during account creation, and pin-protected so it stays exactly who you intend it to be.",
      },
      {
        title: "You get everything you need to launch",
        desc: "Your admin login comes with your QR code for seamless pinless onboarding, your pin code, ready-to-use graphics for sharing, and a short step-by-step playbook to help you introduce it to your audience.",
      },
    ],
  },
  faq: {
    heading: "Questions creators ask",
    items: [
      {
        q: "Can I or anyone else see who's struggling?",
        a: "No. The anonymity is absolute. Users are identified only by a randomly assigned ID — no names, no emails, no way to tie behavior to a real person except through willing vulnerability among users.",
      },
      {
        q: "What if someone posts something inappropriate or harmful?",
        a: "It won't make it through to others. AI moderation reviews every message before anyone sees it. If something slips through, users can easily block that user with one click, along with report the content.",
      },
      {
        q: "What if someone seems to be in genuine crisis?",
        a: "Anchor detects crisis language and automatically shows the person a banner with the national suicide prevention hotline. The message can still be sent if it's a genuine plea for help — the moderation is designed to recognize the difference.",
      },
      {
        q: "Is it really free?",
        a: "Yes. No credit card, no subscription, no limits on how many people join. Anchor is 100% free for creators.",
      },
      {
        q: "How long does it take to get set up?",
        a: "Once you're ready to launch, your private community on Anchor can be live in minutes! All that's left to do is share the word!",
      },
      {
        q: "Where is it available?",
        a: "Anchor is available on both iOS and Android. Your custom join link & QR code handles both platforms automatically.",
      },
    ],
  },
  finalCta: {
    emphasis: "Anchor is currently 100% FREE for creators",
  },
};
