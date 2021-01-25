#!/bin/bash
aws ecr get-login-password --region us-west-2 | docker login --username AWS --password-stdin 879735756347.dkr.ecr.us-west-2.amazonaws.com
docker build -t plaza-api .
docker tag plaza-api:latest 879735756347.dkr.ecr.us-west-2.amazonaws.com/plaza-api:latest
docker push 879735756347.dkr.ecr.us-west-2.amazonaws.com/plaza-api:latest
