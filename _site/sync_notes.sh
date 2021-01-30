#!/bin/bash

# credits: https://medium.com/analytics-vidhya/how-i-put-my-mind-under-version-control-24caea37b8a5

OBSIDIAN_PATH="$HOME/Websites/sudomaze.dev/_notes"

# push current
cd "$OBSIDIAN_PATH"

CHANGES_EXIST="$(git status --porcelain | wc -l)"

if [ "$CHANGES_EXIST" -eq 0 ]; then
    exit 0
fi

git add $OBSIDIAN_PATH
git commit -q -m "Last Sync: $(date +"%Y-%m-%d %H:%M:%S")"
git push -q