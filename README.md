An example to reproduce [#1526](https://github.com/vuejs/vue-test-utils/issues/1526)

## Run

``` bash
# install dependencies
$ npm install

# run the test
$ npm run test
```

## Actual
The test fails due to TypeScript errors:
```
node_modules/@vue/server-test-utils/types/index.d.ts:52:117 - error TS2304: Cannot find name 'Cheerio'.

52 export declare function render<V extends Vue> (component: VueClass<V>, options?: ThisTypedMountOptions<V>): Promise<Cheerio>
                                                                                                                       ~~~~~~~

node_modules/@vue/server-test-utils/types/index.d.ts:53:125 - error TS2304: Cannot find name 'Cheerio'.

53 export declare function render<V extends Vue> (component: ComponentOptions<V>, options?: ThisTypedMountOptions<V>): Promise<Cheerio>
                                                                                                                               ~~~~~~~

node_modules/@vue/server-test-utils/types/index.d.ts:54:183 - error TS2304: Cannot find name 'Cheerio'.

54 export declare function render<Props = DefaultProps, PropDefs = PropsDefinition<Props>>(component: FunctionalComponentOptions<Props, PropDefs>, options?: MountOptions<Vue>): Promise<Cheerio>
```

## Expected
The test completes successfully