import WebpackCfg from 'webpack';

declare const withLess = (props: {
  lessLoaderOptions?: Record<any, any>,
  prependRules?: any[] | { module: any[], global: any[] },
} & Record<any, any>) => ({
  webpack?: (config: WebpackCfg, opts: any) => WebpackCfg,
});

export = withLess;
