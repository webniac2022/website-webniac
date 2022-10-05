export const pageView = (url) => {
  if (window !== undefined) {
    window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
      page_path: url,
    });
  }
};

export const event = ({ action, params }) => {
  if (window !== undefined) {
    window.gtag("event", action, params);
  }
};

export const changePermissions = () => {
  if (window !== undefined) {
    window.gtag("consent", "update", {
      analytics_storage: "denied",
    });
  }
};
