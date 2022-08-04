## Initiating the project with Typescript

> - npm init -y
> - npm install express
> - npm install -D @types/express @types/node ts-node-dev typescript
> - npx tsc --init


## Add Prisma js
[Prisma](https://www.prisma.io/)
```bash
npm install --save-dev prisma
npm install @prisma/client
```

`tsconfig.json`
```bash
{
  "compilerOptions": {
    "sourceMap": true,
    "outDir": "dist",
    "strict": true,
    "lib": ["esnext"],
    "esModuleInterop": true
  }
}
```

 Now we can initialize prisma with sqlite:
```bash
npx prisma init --datasource-provider sqlite
```

Edit schema.prisma then:
```bash
 npx prisma db push
```

`.gitignore`
```bash
node_modules

/.cache
/build
/public/build

/prisma/dev.db
.env
```

