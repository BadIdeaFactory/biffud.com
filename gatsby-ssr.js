const React = require("react");

// Mindshine Webring bar. The script appends the bar to the end of <body>,
// outside Gatsby's React root, so it survives client-side navigation.
exports.onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script key="webring" src="https://webring.mindshine.io/widget.js" async />,
  ]);
};
