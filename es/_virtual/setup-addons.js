const { createBrowserChannel: O } = __STORYBOOK_MODULE_CHANNELS__, { addons: n } = __STORYBOOK_MODULE_PREVIEW_API__, _ = O({ page: "preview" });
n.setChannel(_);
window.__STORYBOOK_ADDONS_CHANNEL__ = _;
window.CONFIG_TYPE === "DEVELOPMENT" && (window.__STORYBOOK_SERVER_CHANNEL__ = _);
