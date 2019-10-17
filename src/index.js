const React = {
  createElement: (el, props, inner) => {
    inner = inner || "";

    let t = document.createElement(el);

    if (!Array.isArray(inner)) t.innerHTML = inner;
    else {
      for (let i in inner) {
        if (typeof inner[i] !== "object") {
          t.appendChild(document.createTextNode(inner[i]));
        } else t.appendChild(inner[i]);
      }
    }

    if (props) {
      for (let i in props) {
        if (typeof props[i] === "object") {
          for (let j in props[i]) {
            t[i][j] = props[i][j];
          }
        } else {
          t[i] = props[i];
        }
      }
    }

    return t;
  },
  render: (el, container) => {
    container.appendChild(el);
  }
};

const app = React.createElement("div", { style: { backgroundColor: "red" } }, [
  React.createElement("span", undefined, "Hello world"),
  React.createElement("br"),
  "This is just a text node",
  React.createElement("div", { textContent: "Text content" })
]);

React.render(app, document.getElementById("root"));
