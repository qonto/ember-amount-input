module.exports = {
  plugins: {
    "@release-it/conventional-changelog": {
      preset: {
        name: "angular",
      },
    },
    "@release-it-plugins/workspaces": true,
  },
  git: {
    tagName: "v${version}",
  },
  github: {
    release: true,
    tokenRef: "GITHUB_AUTH",
  },
  npm: false,
};
