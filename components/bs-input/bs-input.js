Component(async ({ load }) => {
  return {
    attrs: {
      type: "text",
      placeholder: "",
      value: "",
      row: "",
      disabled: null,
      readonly: null,
      size: null,
    },
    data: {
      datalistid: null,
    },
    proto: {
      getClassStr() {
        let class_str = "form-control";

        if (this.type === "color") {
          class_str += " form-control-color";
        }

        // 尺寸
        switch (this.size) {
          case "large":
          case "lg":
            class_str += " form-control-lg";
            break;
          case "small":
          case "sm":
            class_str += " form-control-sm";
            break;
        }

        return class_str;
      },
    },
    attached() {
      const callback = () => {
        // 将 datalist 加入到 input
        const datalist = this.$("datalist");
        const inputEle = this.shadow.$("input");
        if (datalist && inputEle) {
          this.datalistid = "target";
          this.shadow.$("datalist").html = datalist.html;
        } else {
          this.datalistid = null;
          this.shadow.$("datalist").html = "";
        }
      };

      // 初始化一次
      callback();

      const observer = (this._child_observer = new MutationObserver(callback));

      observer.observe(this.ele, {
        childList: true,
        subtree: true,
      });
    },
    detached() {
      this._child_observer.disconnect();
    },
  };
});
