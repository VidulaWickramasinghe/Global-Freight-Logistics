export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.globalfreight.lk").replace(/\/$/, "");

export const inquiryConfig = {
  to: process.env.INQUIRY_TO_EMAIL ?? "info@globalfreight.lk",
  from: process.env.INQUIRY_FROM_EMAIL ?? "Global Freight Website <onboarding@resend.dev>",
};
