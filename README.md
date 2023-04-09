# udacity-image-processing-api

A simple Nodejs image processing api project which uses typescript & express

## Scripts

1. Install dependencies

```
npm i
```

2. To build

```
npm run build
```

3. To run development

```
npm run start
```

4. To run production

```
npm run prod
```

5. To test

```
npm run test
```

6. To code format

```
npm run prettier
```

7. To check format

```
npm run prettier-check
```

8. For linting

```
npm run eslint
```

## Endpoint

http://localhost:3000/api/images

Expected query params:

1. filename: any of the following filenames can be used
   1. encenadaport
   2. fjord
   3. icelandwaterfall
   4. palmtunnel
   5. santamonica
2. width: positive Number
3. height: positive Number

### Example full image

http://localhost:3000/api/images?fileName=palmtunnel

### Example thumb image

http://localhost:3000/api/images?fileName=palmtunnel&height=200&width=200
