Component(async ({ load }) => {
  return {
    attrs: {
      type: "text",
      placeholder: "",
      value: "",
      row: "",
    },
    proto: {
      getClassStr() {
        let str = "form-control";

        if (this.type === "color") {
          str += " form-control-color";
        }

        return str;
      },
    },
  };
});
