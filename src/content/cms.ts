import CMS from "decap-cms-app";

window.CMS_MANUAL_INIT = true;

CMS.init({
  config: {
    load_config_file: false,
    backend: {
      name: "git-gateway",
      branch: "main",
    },
    publish_mode: "editorial_workflow",
    media_folder: "src/assets",
    public_folder: "/src/assets",
    local_backend: true,
    locale: "nl",
    collections: [
      {
        label: "Blog",
        name: "blog",
        folder: "src/content/blog",
        create: true,
        slug: "{{slug}}",
        preview_path: "/blog/{{slug}}",
        fields: [
          { label: "Title", name: "title", widget: "string" },
          { label: "Description", name: "description", widget: "string" },
          { label: "Publish Date", name: "pubDate", widget: "datetime" },
          { label: "Update Date", name: "updateDate", widget: "datetime" },
          { label: "Hero Image", name: "heroImage", widget: "image" },
          { label: "Body", name: "body", widget: "markdown" },
        ],
      },
    ],
  },
});

CMS.registerPreviewStyle("/src/styles/global.css")