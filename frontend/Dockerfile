# 1) Build stage
FROM node:20 AS build
WORKDIR /app

# Copy manifests + yarn lock
COPY package.json yarn.lock .npmrc ./

# Install Yarn deps, skipping optional (from .npmrc optional=false)
RUN npm install -g yarn \
 && yarn install --frozen-lockfile --ignore-optional

# Copy source & build
COPY . .
RUN yarn build

# 2) Serve stage (static)
FROM node:20-alpine
WORKDIR /app

RUN npm install -g serve
COPY --from=build /app/dist ./dist

EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
