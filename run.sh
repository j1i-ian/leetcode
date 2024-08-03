#!/bin/bash

INDEX=$1

DETECTED_FILE=$(find dist -name "$1*.js")

if [ -x $DETECTED_FILE ]; then
    echo "No file deteced. Please check again problem number."
else
    echo "File $DETECTED_FILE is detected."
    node $DETECTED_FILE
fi
