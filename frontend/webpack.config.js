const path = require('path');
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js", // string | object | array
  // ./src 를 기본으로 함
  // 애플리케이션이 여기에서 실행되며
  // webpack이 번들링을 시작
  output: {
    // webpack이 결과를 내보내는 방법과 관련된 옵션
    path:path.resolve(__dirname, "./static/frontend"), // string (기본값)
    // 모든 출력 파일의 대상 디렉터리는
    // 반드시 절대 경로 여야함 (Node.js의 path 모듈을 사용)
    filename: "[name].js", // string (기본값)
    // the filename template for entry chunks
    },
  module: {
    // 모듈 관련 설정
    rules: [
      // 모듈에 대한 규칙 (로더 설정, 파서 옵션 등)
      {
        // 조건:
        test: /\.js?$/,
        exclude: /node_modules/,
        // 로더에 대한 옵션
        use: {
          loader: "babel-loader",
        }
      },
    ],
    /* 고급 모듈 설정 (클릭하여 보기) */
  },
  optimization: {
    minimize: true,
    // 출력 파일 최소화
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
      }
    }),
   ],
}