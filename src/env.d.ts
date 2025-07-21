import type { CMS } from "decap-cms-core";

declare global {
  interface Window {
    CMS_MANUAL_INIT?: boolean;
    CMS?: CMS;
  }
}
