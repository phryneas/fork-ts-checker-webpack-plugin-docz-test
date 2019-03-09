import ForkTsCheckerPlugin from "fork-ts-checker-webpack-plugin";

export default {
  typescript: true,
  modifyBundlerConfig: config => {
    config.plugins.push(
      new ForkTsCheckerPlugin({
        compilerOptions: {
          noImplicitAny: false
        },
        externalProgramHandler: "@phryneas/fork-ts-checker-plugin-mdx"
      })
    );

    return config;
  }
};
