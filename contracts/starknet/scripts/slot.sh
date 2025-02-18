#!/bin/bash

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

if [ $# -lt 1 ]; then
    echo "Error: Please provide a command and a profile name"
    echo "Usage: $0 [create|delete] <service>"
    exit 1
fi

COMMAND=$1
SERVICE=$2
SLOT_PROJECT="nums-starknet"


case $COMMAND in
    "create")
        if [ "$SERVICE" == "katana" ]; then
            slot d create $SLOT_PROJECT katana --dev --version v1.2.0
        fi
        if [ "$SERVICE" == "torii" ]; then
            JSON_FILE="$SCRIPT_DIR/../dojo/manifest_sepolia.json"
            if [ ! -f "$JSON_FILE" ]; then
                echo "Error: JSON file not found at $JSON_FILE"
                exit 1
            fi

            WORLD_ADDR=$(jq -r '.world.address' "$JSON_FILE")
            if [ -z "$WORLD_ADDR" ]; then
                echo "Error: Could not find WorldContract address"
                exit 1
            fi


            slot d create --tier epic $SLOT_PROJECT torii --rpc https://api.cartridge.gg/x/starknet/sepolia --world $WORLD_ADDR --version v1.2.0
        fi
        ;;
    "delete")
        slot d delete $SLOT_PROJECT torii -f
        slot d delete $SLOT_PROJECT katana -f
        ;;
    *)
        echo "Invalid command. Use: $0 [create|delete] <service>"
        exit 1
        ;;
esac