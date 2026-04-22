import { ComponentConfig } from "@puckeditor/core";

export const HeroBlock: ComponentConfig = {
  fields: {
    title: {
      type: "text",
    },
    subtitle: {
      type: "textarea",
    },
    imageUrl: {
      type: "text",
    },
    ctaText: {
      type: "text",
    },
    ctaLink: {
      type: "text",
    },
  },
  defaultProps: {
    title: "Transform Your Business",
    subtitle: "Innovative solutions for modern challenges. We help companies scale with cutting-edge technology.",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=600&fit=crop",
    ctaText: "Get Started",
    ctaLink: "#",
  },
  render: ({ title, subtitle, imageUrl, ctaText, ctaLink }) => {
    return (
      <div className="relative overflow-hidden bg-p1-bg-default">
        <div className="mx-auto max-w-7xl px-p1-lg py-p1-xl">
          <div className="grid gap-p1-lg md:grid-cols-2 items-center">
            <div className="space-y-p1-md">
              <h1 className="text-4xl md:text-5xl font-light text-p1-text tracking-tight">
                {title}
              </h1>
              <p className="text-lg text-p1-text-muted leading-relaxed">
                {subtitle}
              </p>
              <div className="pt-p1-sm">
                <a
                  href={ctaLink}
                  className="inline-block px-p1-lg py-p1-sm bg-p1-primary text-white rounded-p1-sm hover:opacity-90 transition-opacity"
                >
                  {ctaText}
                </a>
              </div>
            </div>
            <div className="rounded-p1-md overflow-hidden shadow-lg">
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    );
  },
};
