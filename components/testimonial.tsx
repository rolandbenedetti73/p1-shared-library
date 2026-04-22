import { ComponentConfig } from "@puckeditor/core";

export const TestimonialBlock: ComponentConfig = {
  fields: {
    quote: {
      type: "textarea",
    },
    authorName: {
      type: "text",
    },
    authorTitle: {
      type: "text",
    },
    authorImageUrl: {
      type: "text",
    },
  },
  defaultProps: {
    quote: "Working with this team has transformed how we approach digital solutions. Their expertise and dedication are unmatched.",
    authorName: "Sarah Chen",
    authorTitle: "CEO, TechCorp",
    authorImageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
  },
  render: ({ quote, authorName, authorTitle, authorImageUrl }) => {
    return (
      <div className="bg-p1-bg-light py-p1-xl px-p1-lg">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-p1-md">
            <svg
              className="h-8 w-8 text-p1-primary opacity-50"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-xl text-p1-text leading-relaxed italic">
              "{quote}"
            </blockquote>
            <div className="flex items-center gap-p1-sm pt-p1-md border-t border-p1-border">
              <img
                src={authorImageUrl}
                alt={authorName}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="font-medium text-p1-text">{authorName}</div>
                <div className="text-sm text-p1-text-muted">{authorTitle}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
