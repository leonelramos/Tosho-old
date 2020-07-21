const globalOptions = {
  variant: "ghost" as "ghost",
  onClick: () => {
    console.log("onClick is not implemented!");
  },
};

export const toolbarItemsOptions = {
  ...globalOptions,
  className: "toolbar-button",
};

export const windowControlsOptions = {
  ...globalOptions,
  className: "window-button",
};
