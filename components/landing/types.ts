export interface LandingContent {
  hero: {
    subtitle: string;
    heading: string;
    body: string;
  };
  problem: {
    paragraph: string;
  };
  howItWorks: {
    subheading: string;
    step2Body: string;
  };
  features: {
    heading: string;
    items: {
      id: string;
      title: string;
      desc: string;
      visualType: "phone-video" | "video" | "image" | "grid";
      video?: string;
      poster?: string;
      image?: string;
    }[];
    callouts: {
      label: string;
      desc: string;
    }[];
  };
  safety: {
    subheading: string;
  };
  setup: {
    steps: {
      title: string;
      desc: string;
    }[];
  };
  faq: {
    heading: string;
    items: {
      q: string;
      a: string;
    }[];
  };
  finalCta: {
    emphasis: string;
  };
}
