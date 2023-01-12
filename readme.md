## TypeScript official website

https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

## tsconfig file reference

https://www.typescriptlang.org/tsconfig

## TypeScript official github

https://github.com/microsoft/TypeScript

## Matt tutorial

https://github.com/total-typescript/beginners-typescript-tutorial/tree/main/src

https://www.totaltypescript.com/tutorials/beginners-typescript/passing-type-arguments/solution

https://www.youtube.com/watch?v=a_m7jxrTlaw&list=PLIvujZeVDLMx040-j1W4WFs1BxuTGdI_b&index=3

## Other tutorials from Matt Pocock

### type transformations-workshop

https://github.com/total-typescript/type-transformations-workshop/tree/main/src

## for type-regex: reference

https://stackoverflow.com/questions/51445767/how-to-define-a-regex-matched-string-type-in-typescript

https://github.com/microsoft/TypeScript/issues/41160

// npm commands
npm install -g typescript
npm install -g ts-node
npm install -g ts-node-dev
npm audit fix
npm install -g npm-check-updates
npm install -g npm-check
npm ls -g --depth=0
npm install -g npm-check-updates
npm install -g npm-check
npm audit | grep -i "high"
npm audit | awk '/high/ {print $3}'
npm audit | awk '/high/ {print $3}' | xargs npm audit fix
npm audit | awk '/high/ {print $3}' | xargs npm audit fix --force
npm audit | awk '/high/ {print $3}' | xargs npm audit fix --force --legacy-peer-deps
npm audit | awk '/high/ {print $3}' | xargs npm audit fix --force --legacy-peer-deps --only=prod
npm audit | awk '/high/ {print $3}' | xargs npm audit fix --force --legacy-peer-deps --only=prod --no-save
npm audit | awk '/high/ {print $3}' | xargs npm audit fix --force --legacy-peer-deps --only=prod --no-save --force
npm cache clean --force
npm cache verify
npm whoami
npm login
npm logout
npm publish
npm unpublish --force
npm adduser
npm init
npm init -y
npm install
npm install --save-dev
npm install --save-dev --save-exact
npm install --save-dev --save-exact --legacy-peer-deps
npm install --save-dev --save-exact --legacy-peer-deps --force
npm install --save-dev --save-exact --legacy-peer-deps --force --no-save
npm install --save-dev --save-exact --legacy-peer-deps --force --no-save --force
npm install --save-dev --save-exact --legacy-peer-deps --force --no-save --force --only=prod
npm install --save-dev --save-exact --legacy-peer-deps --force --no-save --force --only=prod --no-save
npm install --save-dev --save-exact --legacy-peer-deps --force --no-save --force --only=prod --no-save --force
npm install --save-dev --save-exact --legacy-peer-deps --force --no-save --force --only=prod --no-save --force --legacy-peer-deps
npm install --save-dev --save-exact --legacy-peer-deps --force --no-save --force --only=prod --no-save --force --legacy-peer-deps --force
npm install --save-dev --save-exact --legacy-peer-deps --force --no-save --force --only=prod --no-save --force --legacy-peer-deps --force --no-save
npm install --save-dev --save-exact --legacy-peer-deps --force --no-save --force --only=prod --no-save --force --legacy-peer-deps --force --no-save --force
npm list
npm list --depth=0
npm list --depth=0 --global
npm list --depth=0 --global --parseable --long
npm query
npm query --engine=node@10
npm query --author=total-typescript
npm query --engine=node@10 --author=total-typescript
npm query --keywords=typescript
npm publish --dry-run
npm publish --dry-run --access=public
npm publish --dry-run --access=public --force
npm publis --beta
npm link
npm link --force
npm link --force --no-save
// scope package commands
npm init --scope=@scope
npm publish --dry-run --access=public --scope=@scope // publish all packages in scope publically
npm publish --dry-run --access=public --scope=@scope --force
npm audit --json
npm bugs
