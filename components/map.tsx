import { ComponentConfig } from "@puckeditor/core";

export const MapBlock: ComponentConfig = {
  fields: {
    address: {
      type: "text",
    },
    height: {
      type: "select",
      options: [
        { label: "Small (300px)", value: "300" },
        { label: "Medium (400px)", value: "400" },
        { label: "Large (500px)", value: "500" },
      ],
    },
  },
  defaultProps: {
    address: "1600 Amphitheatre Parkway, Mountain View, CA",
    height: "400",
  },
  render: ({ address, height }) => {
    const encodedAddress = encodeURIComponent(address);
    const mapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodedAddress}`;

    return (
      <div className="bg-p1-bg-default py-p1-lg px-p1-md">
        <div className="mx-auto max-w-6xl">
          <div className="space-y-p1-sm">
            <div className="flex items-center gap-p1-xs text-p1-text-muted">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-sm">{address}</span>
            </div>
            <div className="rounded-p1-md overflow-hidden border border-p1-border shadow-sm">
              <iframe
                width="100%"
                height={height}
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src={mapUrl}
                title={`Map showing ${address}`}
              />
            </div>
            <p className="text-xs text-p1-text-muted italic">
              Note: Google Maps API key required for production use
            </p>
          </div>
        </div>
      </div>
    );
  },
};
