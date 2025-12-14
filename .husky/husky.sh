#!/bin/sh
# Husky Git hook helper
# See https://typicode.github.io/husky for details

if [ -z "$husky_skip_init" ]; then
  debug () {
    [ "$HUSKY_DEBUG" = "true" ] && echo "husky (debug) - $1"
  }

  readonly hook_name="$(basename "$0")"
  debug "starting $hook_name..."
  readonly git_params="$*"

  # if in GUI clients or IDEs, PATH can be different; ensure node is available
  export PATH="/usr/local/bin:/opt/homebrew/bin:$PATH"

  debug "running $hook_name with params: $git_params"
fi
