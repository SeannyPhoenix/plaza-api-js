#!/bin/bash
docker build -t plaza-api .
docker run -it --rm -P plaza-api