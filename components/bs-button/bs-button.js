Component(async ({ load }) => {
  return {
    attrs: {
      type: "primary",
      outline: null,
      disabled: null,
      active: null,
      size: null,
    },
    proto: {
      getClassStr() {
        // 基础class
        let class_str = `btn btn${this.outline !== null ? "-outline" : ""}-${
          this.type
        }`;

        // 尺寸
        switch (this.size) {
          case "large":
          case "lg":
            class_str += " btn-lg";
            break;
          case "small":
          case "sm":
            class_str += " btn-sm";
            break;
        }

        // 激活态
        class_str += this.active !== null ? " active" : "";

        return class_str;
      },
    },
  };
});
