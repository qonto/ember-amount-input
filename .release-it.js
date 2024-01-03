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
    commitMessage: "chore: release v${version}",
    tagName: "v${version}",
  },
  github: {
    release: true,
  },
  npm: false,
  hooks: {
    "after:bump": "pnpm i --frozen-lockfile=false",
  },
};
