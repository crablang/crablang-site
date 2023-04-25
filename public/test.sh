#!/bin/sh
replace_world() {
    while IFS= read -r line
    do
        echo ${line//world/planet}
    done
}

text=$(cat <<EOF
hello world
hello world again
EOF
)

echo "$text" 2>&1 | replace_world
