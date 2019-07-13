module.exports = {
  husky: {
    hooks: {
      "prepare-commit-msg": "exec < /dev/tty && git cz --hook"
    }
  }
};
