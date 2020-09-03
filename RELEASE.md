# RELEASE

Here are the steps:
1. Run these commands
```bash
- echo "$(lerna-changelog --from=v2.0.0)\n$(cat CHANGELOG.md)" > CHANGELOG.md
- git commit -m "Update CHANGELOG for the release"
- yarn version
- git push origin master the-new-tag
- npm publish
```
2. Draft a release: https://github.com/qonto/ember-amount-input/releases/new
