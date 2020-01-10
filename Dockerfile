FROM node:10-alpine

# config
ENV APP_PORT 8001
ENV APP_ROOT /app
EXPOSE $APP_PORT
WORKDIR $APP_ROOT
CMD [ "sh" ]

# install
#   git, openssh, curl, jq, yarn
RUN apk update && \
    apk add git openssh curl jq && \
    curl -o- -L https://yarnpkg.com/install.sh | sh