set -e

SERVICE=translink-pwa
TASK_DEF=translink-pwa-task-def.json
TASK_DEF_NAME=translink-pwa-task
TASK_COUNT=1
DOCKER_IMAGE=frankblizzard/translink-pwa

# Build
yarn install
yarn build
docker build . -t $DOCKER_IMAGE 
docker push $DOCKER_IMAGE 

# Deploy to ECS
aws ecs register-task-definition --cli-input-json file://$TASK_DEF
aws ecs update-service --service $SERVICE --task-definition $TASK_DEF_NAME --desired-count $TASK_COUNT --force-new-deployment
aws ecs wait services-stable --services $SERVICE --region us-east-1